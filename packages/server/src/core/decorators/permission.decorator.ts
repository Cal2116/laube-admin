import { SetMetadata } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

const enum PermissionActions {
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
}

/**
 * 权限装饰器
 *
 * @description 用于标记接口权限
 */
const accumulateMetadata = (key: string, permissions: string[]) => {
  return (target: any, propertyKey?: string | symbol, descriptor?: PropertyDescriptor) => {
    const reflector = new Reflector()

    if (propertyKey && descriptor && descriptor.value) {
      const existingPermissions = reflector.get(key, descriptor.value) || []

      const newPermissions = [...existingPermissions, ...permissions]

      const decorator = SetMetadata(key, newPermissions)
      decorator(target, propertyKey, descriptor)
    } else {
      const existingPermissions = reflector.get(key, target) || []

      const newPermissions = [...existingPermissions, ...permissions]

      const decorator = SetMetadata(key, newPermissions)
      decorator(target)
    }
  }
}

export const PERMISSION_KEY = 'permission'

export const Permission = (...permissions: string[]) => accumulateMetadata(PERMISSION_KEY, permissions)

export const Create = () => Permission(PermissionActions.CREATE.toLocaleLowerCase())
export const Read = () => Permission(PermissionActions.READ.toLocaleLowerCase())
export const Update = () => Permission(PermissionActions.UPDATE.toLocaleLowerCase())
export const Delete = () => Permission(PermissionActions.DELETE.toLocaleLowerCase())
