import { PRISMA_CONNECTION_NAME } from '@core/prisma/prisma.constant'
import { PrismaQueryBuilder } from '@core/utils/query-builder.util'
import Snowflake from '@core/utils/snow-flake.util'
import { Inject, Injectable } from '@nestjs/common'
import { Prisma, PrismaClient } from 'prisma-mysql'

import { CreateRoleDto } from './dto/create-role.dto'
import { RolePageQueryDto } from './dto/page-query.dto'
import { UpdateRoleDto } from './dto/update-role.dto'

@Injectable()
export class RoleService {
  constructor(
    @Inject(PRISMA_CONNECTION_NAME)
    private readonly prisma: PrismaClient
  ) {}

  async getRolePage(dto: RolePageQueryDto) {
    const { page, pageSize, ...rest } = dto

    const where = new PrismaQueryBuilder<Prisma.RoleWhereInput>()
      .addContains('name', rest.name)
      .addEquals('status', rest.status)
      .addTimeCondition('createdAt', rest.createStartTime, rest.createEndTime)
      .build()

    const roles = await this.prisma.role.findMany({
      where,
      skip: (page - 1) * pageSize,
      take: pageSize,
    })

    const total = await this.prisma.role.count({
      where,
    })

    return {
      items: roles,
      total,
    }
  }

  async getRoleList() {
    const roles = await this.prisma.role.findMany({
      select: {
        id: true,
        name: true,
      },
      where: {
        status: 1,
      },
    })

    return roles
  }

  async getRoleInfo(id: string) {
    const role = await this.prisma.role.findUnique({
      where: { id },
      include: {
        menus: true,
      },
    })

    return role
  }

  async createRole(dto: CreateRoleDto) {
    const { menus, ...rest } = dto
    return await this.prisma.$transaction(async (tx: PrismaClient) => {
      const roleId = Snowflake.generate()

      return await tx.role.create({
        data: {
          ...rest,
          id: roleId,
          menus: {
            create: menus?.map(menu => ({
              menuId: menu,
            })),
          },
        },
      })
    })
  }

  async updateRole(id: string, dto: UpdateRoleDto) {
    const { menus, ...rest } = dto

    return await this.prisma.$transaction(async (tx: PrismaClient) => {
      return await tx.role.update({
        where: { id },
        data: {
          ...rest,
          menus: {
            deleteMany: {},
            create: menus?.map(menu => ({
              menuId: menu,
            })),
          },
        },
      })
    })
  }

  async deleteRole(id: string) {
    await this.prisma.role.delete({
      where: { id },
    })
  }
}
