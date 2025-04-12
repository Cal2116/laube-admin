import { Create, Permission, Result, Update } from '@core/decorators'
import { PageResponseDto } from '@core/dto/page-response.dto'
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Req,
  UnauthorizedException,
} from '@nestjs/common'

import { CreateUserDto } from './dto/create-user.dto'
import { UserPageQueryDto } from './dto/page-query.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserInfoDto } from './dto/user-info.dto'
import { UserService } from './user.service'

@Controller('/system/user')
@Permission('system:user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  @Result()
  @Create()
  async createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto)
  }

  @Post('/update/:id')
  @Result()
  @Update()
  async updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateUser(id, dto)
  }

  @Get('/info')
  @Result(UserInfoDto)
  async getUserInfo(@Req() req: any) {
    if (!req.user) {
      throw new UnauthorizedException()
    }

    const { userId } = req.user

    const user = await this.userService.getUserById(userId.id)
    return user
  }

  @Get('/page')
  @Result(PageResponseDto)
  @Permission('page')
  async getUserPage(@Query() query: UserPageQueryDto) {
    return await this.userService.getUserPage(query)
  }

  @Delete('/delete/:id')
  @Result()
  @Delete()
  async deleteUser(@Param('id') id: string) {
    return await this.userService.deleteUser(id)
  }
}
