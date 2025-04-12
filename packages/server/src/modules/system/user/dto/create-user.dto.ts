import {
  IsArray,
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsPhone,
  IsString,
  Length,
} from '@core/decorators'
import { IsOptional } from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty('用户名')
  @IsString('用户名')
  @Length(1, 50, '用户名')
  username: string

  @IsNotEmpty('密码')
  @IsString('密码')
  @Length(6, 20, '密码')
  password: string

  @IsNotEmpty('真实姓名')
  @IsString('真实姓名')
  @Length(1, 50, '真实姓名')
  realName: string

  @IsOptional()
  @IsPhone('手机号')
  @Length(11, 11, '手机号')
  phone?: string

  @IsOptional()
  @IsEmail()
  @Length(1, 100, '邮箱')
  email?: string

  @IsOptional()
  @IsNumber('用户状态')
  @IsIn([0, 1], '用户状态')
  status?: number

  @IsOptional()
  @IsString('备注')
  @Length(0, 255, '备注')
  remark?: string

  @IsNotEmpty('角色')
  @IsArray('角色')
  @IsString('角色', { each: true })
  roleIds: string[]
}
