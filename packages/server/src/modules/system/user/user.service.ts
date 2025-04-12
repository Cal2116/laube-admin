import { PRISMA_CONNECTION_NAME } from '@core/prisma/prisma.constant'
import { convertToInstance } from '@core/utils/convert.util'
import { PrismaQueryBuilder } from '@core/utils/query-builder.util'
import Snowflake from '@core/utils/snow-flake.util'
import { Inject, Injectable } from '@nestjs/common'
import * as argon2 from 'argon2'
import { Prisma, PrismaClient } from 'prisma-mysql'

import { CreateUserDto } from './dto/create-user.dto'
import { UserPageQueryDto } from './dto/page-query.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserInfoDto } from './dto/user-info.dto'

@Injectable()
export class UserService {
  constructor(
    @Inject(PRISMA_CONNECTION_NAME)
    private readonly prisma: PrismaClient
  ) {}

  async getUserRoles(userId: string) {
    const userRoles = await this.prisma.userRole.findMany({
      where: {
        userId,
      },
      include: {
        role: true,
      },
    })

    const roles = userRoles.map(userRole => userRole.role)

    return roles
  }

  async getUserPermissionCodes(userId: string) {
    const user = await this.prisma.user.findMany({
      where: {
        id: userId,
      },
      include: {
        roles: {
          include: {
            role: {
              include: {
                menus: {
                  include: {
                    menu: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    const permissionCodes = [...new Set(user.flatMap(user => user.roles.flatMap(role => role.role.menus.map(menu => menu.menu.authCode))))]

    return permissionCodes
  }

  async getUserByUsername(username: string) {
    const user = await this.prisma.user.findUnique({
      where: { username },
    })

    return user
  }

  async getUserById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: {
        roles: true,
      },
    })

    return user
  }

  async createUser(dto: CreateUserDto) {
    const { roleIds, ...rest } = dto

    return await this.prisma.$transaction(async (tx: PrismaClient) => {
      return await tx.user.create({
        data: {
          ...rest,
          id: Snowflake.generate(),
          password: await argon2.hash(dto.password),
          roles: {
            create: roleIds.map(role => ({
              roleId: role,
            })),
          },
        },
      })
    })
  }

  async updateUser(id: string, dto: UpdateUserDto) {
    const { roleIds, ...rest } = dto

    if (rest.password) {
      rest.password = await argon2.hash(rest.password)
    }

    return await this.prisma.$transaction(async (tx: PrismaClient) => {
      return await tx.user.update({
        where: { id },
        data: {
          ...rest,
          roles: {
            deleteMany: {},
            create: roleIds?.map(role => ({
              roleId: role,
            })),
          },
        },
      })
    })
  }

  async getUserPage(query: UserPageQueryDto) {
    const { page, pageSize, ...rest } = query

    const where = new PrismaQueryBuilder<Prisma.UserWhereInput>()
      .addContains('username', rest.username)
      .addEquals('status', rest.status)
      .addTimeCondition('createdAt', rest.createStartTime, rest.createEndTime)
      .build()

    const users = await this.prisma.user.findMany({
      where,
      include: {
        roles: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    })

    const total = await this.prisma.user.count({
      where,
    })

    const items = await convertToInstance(UserInfoDto, users)

    return {
      items,
      total,
    }
  }

  async deleteUser(id: string) {
    await this.prisma.user.delete({
      where: { id },
    })
  }
}
