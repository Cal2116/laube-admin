import { Create, Permission, Result, Update } from '@core/decorators'
import { Body, Controller, Get, Param, Post } from '@nestjs/common'

import { CreateMenuDto } from './dto/create-menu.dto'
import { UpdateMenuDto } from './dto/update-menu.dto'
import { MenuService } from './menu.service'

@Controller('system/menu')
@Permission('system:menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('tree')
  @Result()
  @Permission('page')
  async getMenuTree() {
    return this.menuService.getMenuTree()
  }

  @Post('create')
  @Result()
  @Create()
  async createMenu(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.createMenu(createMenuDto)
  }

  @Post('update/:id')
  @Result()
  @Update()
  async updateMenu(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.updateMenu(id, updateMenuDto)
  }
}
