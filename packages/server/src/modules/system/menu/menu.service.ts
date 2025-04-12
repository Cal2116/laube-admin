import { PRISMA_CONNECTION_NAME } from '@core/prisma/prisma.constant'
import { PrismaQueryBuilder } from '@core/utils/query-builder.util'
import Snowflake from '@core/utils/snow-flake.util'
import { BadRequestException, Inject, Injectable } from '@nestjs/common'
import { Prisma, PrismaClient } from 'prisma-mysql'

import { CreateMenuDto } from './dto/create-menu.dto'
import { UpdateMenuDto } from './dto/update-menu.dto'

@Injectable()
export class MenuService {
  constructor(
    @Inject(PRISMA_CONNECTION_NAME)
    private readonly prisma: PrismaClient
  ) {}

  async getMenuTree() {
    const allMenus = await this.prisma.menu.findMany({
      where: {
        status: 1,
      },
      orderBy: {
        order: 'asc',
      },
    })

    const menuMap = new Map()
    const rootMenus: any[] = []

    allMenus.forEach(menu => {
      menuMap.set(menu.id, {
        ...menu,
        meta: JSON.parse(menu.meta as string),
        children: menu.type === 'button' ? undefined : [],
      })
    })

    allMenus.forEach(menu => {
      const menuNode = menuMap.get(menu.id)

      if (!menu.parentId) {
        rootMenus.push(menuNode)
      } else {
        const parentNode = menuMap.get(menu.parentId)
        if (parentNode) {
          parentNode.children.push(menuNode)
        }
      }
    })

    const sortedRootMenus = this.sortMenuChildren(rootMenus)
    return sortedRootMenus
  }

  private sortMenuChildren(menus: any[]) {
    menus.forEach(menu => {
      if (menu.children && menu.children.length > 0) {
        menu.children.sort((a, b) => a.order - b.order)
        this.sortMenuChildren(menu.children)
      }
    })
    return menus
  }

  async createMenu(createMenuDto: CreateMenuDto) {
    if (createMenuDto.name) {
      const isNameExists = await this.getMenuByNameAndParentId(
        createMenuDto.name,
        createMenuDto.parentId
      )

      if (isNameExists) {
        throw new BadRequestException('菜单名称已存在')
      }
    }

    if (createMenuDto.path && createMenuDto.type !== 'button') {
      const isPathExists = await this.getMenuByPath(createMenuDto.path)

      if (isPathExists) {
        throw new BadRequestException('菜单路径已存在')
      }
    }

    const menu = await this.prisma.menu.create({
      data: {
        ...createMenuDto,
        meta: JSON.stringify(createMenuDto.meta),
        id: Snowflake.generate(),
      },
    })
    return menu
  }

  async updateMenu(id: string, updateMenuDto: UpdateMenuDto) {
    if (updateMenuDto.name) {
      const isNameExists = await this.getMenuByNameAndParentId(
        updateMenuDto.name,
        updateMenuDto.parentId
      )

      if (isNameExists.id !== id) {
        throw new BadRequestException('菜单名称已存在')
      }
    }

    if (updateMenuDto.path && updateMenuDto.type !== 'button') {
      const isPathExists = await this.getMenuByPath(updateMenuDto.path)

      if (isPathExists.id !== id) {
        throw new BadRequestException('菜单路径已存在')
      }
    }

    const menu = await this.prisma.menu.update({
      where: { id },
      data: {
        ...updateMenuDto,
        meta: JSON.stringify(updateMenuDto.meta),
      },
    })

    return menu
  }

  private async getMenuByNameAndParentId(name: string, parentId?: string) {
    const queryBuilder = new PrismaQueryBuilder<Prisma.MenuWhereInput>()
      .addEquals('name', name)
      .addEquals('status', 1)

    if (parentId) {
      queryBuilder.addEquals('parentId', parentId)
    } else {
      queryBuilder.addEquals('parentId', null)
    }

    const menu = await this.prisma.menu.findMany({
      where: queryBuilder.build(),
    })

    return menu[0]
  }

  private async getMenuByPath(path: string) {
    const menu = await this.prisma.menu.findMany({
      where: {
        path,
      },
    })

    return menu[0]
  }
}
