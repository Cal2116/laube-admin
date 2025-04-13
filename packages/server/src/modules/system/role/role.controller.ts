import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common'

import { CreateRoleDto } from './dto/create-role.dto'
import { RolePageQueryDto } from './dto/page-query.dto'
import { UpdateRoleDto } from './dto/update-role.dto'
import { RoleService } from './role.service'

@Controller('system/role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get('page')
  getRolePage(@Query() dto: RolePageQueryDto) {
    return this.roleService.getRolePage(dto)
  }

  @Get('list')
  getRoleList() {
    return this.roleService.getRoleList()
  }

  @Get('info/:id')
  getRoleInfo(@Param('id') id: string) {
    return this.roleService.getRoleInfo(id)
  }

  @Post('create')
  createRole(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto)
  }

  @Post('update/:id')
  updateRole(@Param('id') id: string, @Body() dto: UpdateRoleDto) {
    return this.roleService.updateRole(id, dto)
  }

  @Delete('delete/:id')
  deleteRole(@Param('id') id: string) {
    return this.roleService.deleteRole(id)
  }
}
