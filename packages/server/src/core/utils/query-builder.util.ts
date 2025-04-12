export class PrismaQueryBuilder<T> {
  private conditions: Record<string, any> = {}
  private andConditions: Array<Record<string, any>> = []
  private orConditions: Array<Record<string, any>> = []

  addCondition(field: string, condition: any, predicate: boolean = true): this {
    if (predicate) {
      this.conditions[field] = condition
    }
    return this
  }

  build(): Partial<T> {
    const result: Record<string, any> = { ...this.conditions }

    if (this.andConditions.length > 0) {
      result.AND = this.andConditions
    }

    if (this.orConditions.length > 0) {
      result.OR = this.orConditions
    }

    return result as Partial<T>
  }

  addContains(field: string, value: any): this {
    return this.addCondition(field, { contains: value }, value !== undefined && value !== null)
  }

  addEquals(field: string, value: any): this {
    return this.addCondition(field, { equals: value }, value !== undefined && value !== null)
  }

  addTimeCondition(field: string, startTime?: Date, endTime?: Date): this {
    return this.addCondition(
      field,
      {
        gte: startTime,
        lte: endTime,
      },
      !!startTime && !!endTime
    )
  }

  addIsNull(field: string): this {
    return this.addCondition(field, null)
  }

  addIsNotNull(field: string): this {
    return this.addCondition(field, { not: null })
  }

  addIn(field: string, values: any[]): this {
    return this.addCondition(
      field,
      { in: values },
      values !== undefined && values !== null && values.length > 0
    )
  }

  addNotIn(field: string, values: any[]): this {
    return this.addCondition(
      field,
      { notIn: values },
      values !== undefined && values !== null && values.length > 0
    )
  }

  addGt(field: string, value: any): this {
    return this.addCondition(field, { gt: value }, value !== undefined && value !== null)
  }

  addGte(field: string, value: any): this {
    return this.addCondition(field, { gte: value }, value !== undefined && value !== null)
  }

  addLt(field: string, value: any): this {
    return this.addCondition(field, { lt: value }, value !== undefined && value !== null)
  }

  addLte(field: string, value: any): this {
    return this.addCondition(field, { lte: value }, value !== undefined && value !== null)
  }

  addAnd(callback: (builder: PrismaQueryBuilder<T>) => void): this {
    const builder = new PrismaQueryBuilder<T>()
    callback(builder)
    const conditions = builder.build()

    if (Object.keys(conditions).length > 0) {
      this.andConditions.push(conditions)
    }

    return this
  }

  addOr(callback: (builder: PrismaQueryBuilder<T>) => void): this {
    const builder = new PrismaQueryBuilder<T>()
    callback(builder)
    const conditions = builder.build()

    if (Object.keys(conditions).length > 0) {
      this.orConditions.push(conditions)
    }

    return this
  }

  addNot(callback: (builder: PrismaQueryBuilder<T>) => void): this {
    const builder = new PrismaQueryBuilder<T>()
    callback(builder)
    const conditions = builder.build()

    if (Object.keys(conditions).length > 0) {
      this.addCondition('NOT', [conditions])
    }

    return this
  }
}
