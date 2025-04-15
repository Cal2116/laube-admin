import { PRISMA_CONNECTION_NAME } from '@core/prisma/prisma.constant'
import { EnableStatus, LoginUserInfo } from '@laube-admin/common'
import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common'
import { PrismaClient } from 'prisma-mysql'
import { generateMenuTree } from 'src/utils/menu'

@Injectable()
export class UserService {
  constructor(
    @Inject(PRISMA_CONNECTION_NAME)
    private readonly prisma: PrismaClient
  ) {}

  async getUserByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username, status: EnableStatus.ENABLE },
    })
  }

  async getLoginUserInfo(id: string): Promise<LoginUserInfo> {
    const user = await this.prisma.user.findUnique({
      where: { id, status: EnableStatus.ENABLE },
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

    if (!user) {
      throw new InternalServerErrorException('用户不存在')
    }

    if (user?.roles) {
      const { roles, ...rest } = user
      const allMenus = roles?.flatMap(role =>
        role.role.menus.map(menu => menu.menu)
      )

      const menuTree = generateMenuTree(allMenus)

      return {
        ...rest,
        menuTree,
      }
    }

    return {
      ...user,
      menuTree: [],
    }
  }
}
