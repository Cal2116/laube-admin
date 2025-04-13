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
import { UserService } from './user.service'

@Controller('/system/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async createUser(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto)
  }

  @Post('/update/:id')
  async updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.userService.updateUser(id, dto)
  }

  @Get('/info')
  async getUserInfo(@Req() req: any) {
    if (!req.user) {
      throw new UnauthorizedException()
    }

    const { userId } = req.user

    const user = await this.userService.getUserById(userId.id)
    return user
  }

  @Get('/page')
  async getUserPage(@Query() query: UserPageQueryDto) {
    return await this.userService.getUserPage(query)
  }

  @Delete('/delete/:id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.deleteUser(id)
  }
}
