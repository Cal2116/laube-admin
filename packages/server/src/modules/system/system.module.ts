import { Module } from '@nestjs/common'

import { MenuModule } from './menu/menu.module'
import { RoleModule } from './role/role.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [UserModule, RoleModule, MenuModule],
})
export class SystemModule {}
