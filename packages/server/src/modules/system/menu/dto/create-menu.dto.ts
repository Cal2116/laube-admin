import { IsIn, IsInt, IsNotEmpty, IsString, MaxLength } from '@core/decorators'
import { Type } from 'class-transformer'
import { IsOptional } from 'class-validator'

import { MenuMetaDto } from './menu-meta.dto'

export class CreateMenuDto {
  @IsNotEmpty('菜单类型')
  @IsIn(['catalog', 'menu', 'button'], '菜单类型')
  type: 'catalog' | 'menu' | 'button'

  @IsOptional()
  @IsString('菜单名称')
  @MaxLength(50, '菜单名称')
  name?: string

  @IsOptional()
  @IsNotEmpty('父级菜单')
  @IsString('父级菜单')
  parentId?: string

  @IsOptional()
  @IsString('路由地址')
  @MaxLength(255, '路由地址')
  path?: string

  @IsOptional()
  @IsNotEmpty('组件路径')
  @IsString('组件路径')
  @MaxLength(255, '组件路径')
  component?: string

  @IsOptional()
  @IsString('权限代码')
  @MaxLength(50, '权限代码')
  authCode?: string

  @IsOptional()
  @IsInt('排序')
  order?: number

  @IsNotEmpty('状态')
  @IsInt('状态')
  @IsIn([1, 0], '状态')
  status: 1 | 0

  @IsNotEmpty('菜单元数据')
  @Type(() => MenuMetaDto)
  meta: MenuMetaDto
}
