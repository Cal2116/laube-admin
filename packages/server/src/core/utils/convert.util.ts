import { InternalServerErrorException } from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { validate } from 'class-validator'

export const convertToInstance = async <T>(cls: any, obj: any): Promise<T | T[]> => {
  const instance = plainToInstance<T, any>(cls, obj)

  const errors = await validate(instance as object)

  if (errors.length > 0) {
    errors.map(error => {
      const errorConstraints = error.constraints

      if (errorConstraints) {
        const errorMessage = Object.values(errorConstraints)[0]

        throw new InternalServerErrorException(errorMessage)
      }
    })
  }

  return instance
}
