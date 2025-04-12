import {
  IsArray as _IsArray,
  IsBoolean as _IsBoolean,
  IsDate as _IsDate,
  IsEmail as _IsEmail,
  IsIn as _IsIn,
  IsInt as _IsInt,
  IsNotEmpty as _IsNotEmpty,
  IsNumber as _IsNumber,
  IsNumberOptions,
  IsString as _IsString,
  Length as _Length,
  Max as _Max,
  MaxLength as _MaxLength,
  Min as _Min,
  ValidationOptions,
} from 'class-validator'
import { registerDecorator } from 'class-validator'

export function IsPhone(message: string = '手机号', validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isPhone',
      target: object.constructor,
      propertyName: propertyName,
      options: {
        message: `${message}格式不正确`,
        ...validationOptions,
      },
      validator: {
        validate(value: any) {
          if (typeof value !== 'string') return false
          return /^1[3-9]\d{9}$/.test(value)
        },
      },
    })
  }
}

export function IsString(message: string, validationOptions?: ValidationOptions) {
  return _IsString({
    message: `${message} 必须是字符串`,
    ...validationOptions,
  })
}

export function IsNotEmpty(message: string, validationOptions?: ValidationOptions) {
  return _IsNotEmpty({
    message: `${message} 不能为空`,
    ...validationOptions,
  })
}

export function IsNumber(message: string, options?: IsNumberOptions, validationOptions?: ValidationOptions) {
  return _IsNumber(options, {
    message: `${message} 必须是数字`,
    ...validationOptions,
  })
}

export function IsInt(message: string, validationOptions?: ValidationOptions) {
  return _IsInt({
    message: `${message} 必须是整数`,
    ...validationOptions,
  })
}

export function IsBoolean(message: string, validationOptions?: ValidationOptions) {
  return _IsBoolean({
    message: `${message} 必须是布尔值`,
    ...validationOptions,
  })
}

export function IsArray(message: string, validationOptions?: ValidationOptions) {
  return _IsArray({
    message: `${message} 必须是数组`,
    ...validationOptions,
  })
}

export function Min(min: number, message: string, validationOptions?: ValidationOptions) {
  return _Min(min, {
    message: `${message} 不能小于 ${min}`,
    ...validationOptions,
  })
}

export function Max(max: number, message: string, validationOptions?: ValidationOptions) {
  return _Max(max, {
    message: `${message} 不能大于 ${max}`,
    ...validationOptions,
  })
}

export function Length(min: number, max: number, message: string, validationOptions?: ValidationOptions) {
  return _Length(min, max, {
    message: `${message} 长度必须在 ${min} 到 ${max} 之间`,
    ...validationOptions,
  })
}

export function IsEmail(options?: any, validationOptions?: ValidationOptions) {
  return _IsEmail(
    {
      ...options,
    },
    {
      message: `邮箱格式不正确`,
      ...validationOptions,
    }
  )
}

export function IsIn(values: any[], message: string, validationOptions?: ValidationOptions) {
  return _IsIn(values, {
    message: `${message} 必须在 ${values.join('-')} 之间`,
    ...validationOptions,
  })
}

export function IsDate(message: string, validationOptions?: ValidationOptions) {
  return _IsDate({
    message: `${message} 格式不正确`,
    ...validationOptions,
  })
}

export function MaxLength(maxLength: number, message: string, validationOptions?: ValidationOptions) {
  return _MaxLength(maxLength, {
    message: `${message} 长度不能超过 ${maxLength}`,
    ...validationOptions,
  })
}
