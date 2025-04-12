/**
 * Client
 **/

import * as runtime from './runtime/library.js'
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 *
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model UserRole
 *
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model Menu
 *
 */
export type Menu = $Result.DefaultSelection<Prisma.$MenuPayload>
/**
 * Model RoleMenu
 *
 */
export type RoleMenu = $Result.DefaultSelection<Prisma.$RoleMenuPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>)
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs
      }
    >
  >

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more UserRoles
   * const userRoles = await prisma.userRole.findMany()
   * ```
   */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Menus
   * const menus = await prisma.menu.findMany()
   * ```
   */
  get menu(): Prisma.MenuDelegate<ExtArgs, ClientOptions>

  /**
   * `prisma.roleMenu`: Exposes CRUD operations for the **RoleMenu** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more RoleMenus
   * const roleMenus = await prisma.roleMenu.findMany()
   * ```
   */
  get roleMenu(): Prisma.RoleMenuDelegate<ExtArgs, ClientOptions>
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P]
  }

  export type Enumerable<T> = T | Array<T>

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  }

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } & K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K]
  } & {}

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>
      }
    >
  >

  type Key = string | number | symbol
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never
  type AtStrict<O extends object, K extends Key> = O[K & keyof O]
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>
    0: AtLoose<O, K>
  }[strict]

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K]
      } & {}

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K]
  } & {}

  type _Record<K extends keyof any, T> = {
    [P in K]: T
  }

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B

  export const type: unique symbol

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never
      }
    : never

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  export const ModelName: {
    User: 'User'
    Role: 'Role'
    UserRole: 'UserRole'
    Menu: 'Menu'
    RoleMenu: 'RoleMenu'
  }

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]

  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: 'user' | 'role' | 'userRole' | 'menu' | 'roleMenu'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      Menu: {
        payload: Prisma.$MenuPayload<ExtArgs>
        fields: Prisma.MenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findFirst: {
            args: Prisma.MenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findMany: {
            args: Prisma.MenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          create: {
            args: Prisma.MenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          createMany: {
            args: Prisma.MenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          update: {
            args: Prisma.MenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          deleteMany: {
            args: Prisma.MenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.MenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      RoleMenu: {
        payload: Prisma.$RoleMenuPayload<ExtArgs>
        fields: Prisma.RoleMenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleMenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleMenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          findFirst: {
            args: Prisma.RoleMenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleMenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          findMany: {
            args: Prisma.RoleMenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>[]
          }
          create: {
            args: Prisma.RoleMenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          createMany: {
            args: Prisma.RoleMenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleMenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          update: {
            args: Prisma.RoleMenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          deleteMany: {
            args: Prisma.RoleMenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleMenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleMenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoleMenuPayload>
          }
          aggregate: {
            args: Prisma.RoleMenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoleMenu>
          }
          groupBy: {
            args: Prisma.RoleMenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleMenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleMenuCountArgs<ExtArgs>
            result: $Utils.Optional<RoleMenuCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]]
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]]
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    userRole?: UserRoleOmit
    menu?: MenuOmit
    roleMenu?: RoleMenuOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]> : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
    menus: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
    menus?: boolean | RoleCountOutputTypeCountMenusArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleMenuWhereInput
  }

  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    roles: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | MenuCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleMenuWhereInput
  }

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    status: number | null
  }

  export type UserSumAggregateOutputType = {
    status: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    realName: string | null
    phone: string | null
    email: string | null
    status: number | null
    remark: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    realName: string | null
    phone: string | null
    email: string | null
    status: number | null
    remark: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    realName: number
    phone: number
    email: number
    status: number
    remark: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type UserAvgAggregateInputType = {
    status?: true
  }

  export type UserSumAggregateInputType = {
    status?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    realName?: true
    phone?: true
    email?: true
    status?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    realName?: true
    phone?: true
    email?: true
    status?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    realName?: true
    phone?: true
    email?: true
    status?: true
    remark?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }

  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    realName: string
    phone: string | null
    email: string | null
    status: number
    remark: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>
      }
    >
  >

  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean
      username?: boolean
      password?: boolean
      realName?: boolean
      phone?: boolean
      email?: boolean
      status?: boolean
      remark?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      roles?: boolean | User$rolesArgs<ExtArgs>
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['user']
  >

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    realName?: boolean
    phone?: boolean
    email?: boolean
    status?: boolean
    remark?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
    'id' | 'username' | 'password' | 'realName' | 'phone' | 'email' | 'status' | 'remark' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['user']
  >
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'User'
    objects: {
      roles: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        username: string
        password: string
        realName: string
        phone: string | null
        email: string | null
        status: number
        remark: string | null
        createdAt: Date
        updatedAt: Date
      },
      ExtArgs['result']['user']
    >
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    UserFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: UserCountAggregateInputType | true
  }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User']; meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake ? { orderBy: UserGroupByArgs['orderBy'] } : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    roles<T extends User$rolesArgs<ExtArgs> = {}>(
      args?: Subset<T, User$rolesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>
    readonly username: FieldRef<'User', 'String'>
    readonly password: FieldRef<'User', 'String'>
    readonly realName: FieldRef<'User', 'String'>
    readonly phone: FieldRef<'User', 'String'>
    readonly email: FieldRef<'User', 'String'>
    readonly status: FieldRef<'User', 'Int'>
    readonly remark: FieldRef<'User', 'String'>
    readonly createdAt: FieldRef<'User', 'DateTime'>
    readonly updatedAt: FieldRef<'User', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    status: number | null
  }

  export type RoleSumAggregateOutputType = {
    status: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type RoleAvgAggregateInputType = {
    status?: true
  }

  export type RoleSumAggregateInputType = {
    status?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Roles
     **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
    [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }

  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    status: number
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RoleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
          : GetScalarType<T[P], RoleGroupByOutputType[P]>
      }
    >
  >

  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean
      name?: boolean
      description?: boolean
      status?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      users?: boolean | Role$usersArgs<ExtArgs>
      menus?: boolean | Role$menusArgs<ExtArgs>
      _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['role']
  >

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
    'id' | 'name' | 'description' | 'status' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['role']
  >
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    menus?: boolean | Role$menusArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Role'
    objects: {
      users: Prisma.$UserRolePayload<ExtArgs>[]
      menus: Prisma.$RoleMenuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        name: string
        description: string | null
        status: number
        createdAt: Date
        updatedAt: Date
      },
      ExtArgs['result']['role']
    >
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    RoleFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: RoleCountAggregateInputType | true
  }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role']; meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(
      args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>
    ): Prisma__RoleClient<
      $Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<
      $Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(
      args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>
    ): Prisma__RoleClient<
      $Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<
      $Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     *
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RoleFindManyArgs>(
      args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     *
     */
    create<T extends RoleCreateArgs>(
      args: SelectSubset<T, RoleCreateArgs<ExtArgs>>
    ): Prisma__RoleClient<
      $Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     *
     */
    delete<T extends RoleDeleteArgs>(
      args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>
    ): Prisma__RoleClient<
      $Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RoleUpdateArgs>(
      args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>
    ): Prisma__RoleClient<
      $Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(
      args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>
    ): Prisma__RoleClient<
      $Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
     **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake ? { orderBy: RoleGroupByArgs['orderBy'] } : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Role model
     */
    readonly fields: RoleFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    users<T extends Role$usersArgs<ExtArgs> = {}>(
      args?: Subset<T, Role$usersArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null>
    menus<T extends Role$menusArgs<ExtArgs> = {}>(
      args?: Subset<T, Role$menusArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<'Role', 'String'>
    readonly name: FieldRef<'Role', 'String'>
    readonly description: FieldRef<'Role', 'String'>
    readonly status: FieldRef<'Role', 'Int'>
    readonly createdAt: FieldRef<'Role', 'DateTime'>
    readonly updatedAt: FieldRef<'Role', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * Role.menus
   */
  export type Role$menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleMenu
     */
    omit?: RoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    where?: RoleMenuWhereInput
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    cursor?: RoleMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleMenuScalarFieldEnum | RoleMenuScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }

  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleMinAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type UserRoleMaxAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type UserRoleCountAggregateOutputType = {
    userId: number
    roleId: number
    _all: number
  }

  export type UserRoleMinAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleMaxAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type UserRoleCountAggregateInputType = {
    userId?: true
    roleId?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned UserRoles
     **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
    [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }

  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    userId: string
    roleId: string
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserRoleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
          : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
      }
    >
  >

  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      userId?: boolean
      roleId?: boolean
      user?: boolean | UserDefaultArgs<ExtArgs>
      role?: boolean | RoleDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['userRole']
  >

  export type UserRoleSelectScalar = {
    userId?: boolean
    roleId?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
    'userId' | 'roleId',
    ExtArgs['result']['userRole']
  >
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'UserRole'
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        userId: string
        roleId: string
      },
      ExtArgs['result']['userRole']
    >
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    UserRoleFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: UserRoleCountAggregateInputType | true
  }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole']; meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(
      args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>
    ): Prisma__UserRoleClient<
      $Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserRoleClient<
      $Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(
      args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>
    ): Prisma__UserRoleClient<
      $Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserRoleClient<
      $Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     *
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.findMany({ select: { userId: true } })
     *
     */
    findMany<T extends UserRoleFindManyArgs>(
      args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     *
     */
    create<T extends UserRoleCreateArgs>(
      args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>
    ): Prisma__UserRoleClient<
      $Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserRoleCreateManyArgs>(
      args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     *
     */
    delete<T extends UserRoleDeleteArgs>(
      args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>
    ): Prisma__UserRoleClient<
      $Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserRoleUpdateArgs>(
      args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>
    ): Prisma__UserRoleClient<
      $Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(
      args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(
      args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>
    ): Prisma__UserRoleClient<
      $Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
     **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the UserRole model
     */
    readonly fields: UserRoleFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RoleDefaultArgs<ExtArgs>>
    ): Prisma__RoleClient<
      $Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly userId: FieldRef<'UserRole', 'String'>
    readonly roleId: FieldRef<'UserRole', 'String'>
  }

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }

  /**
   * Model Menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    order: number | null
    status: number | null
  }

  export type MenuSumAggregateOutputType = {
    order: number | null
    status: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: string | null
    type: string | null
    name: string | null
    parentId: string | null
    path: string | null
    component: string | null
    authCode: string | null
    order: number | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuMaxAggregateOutputType = {
    id: string | null
    type: string | null
    name: string | null
    parentId: string | null
    path: string | null
    component: string | null
    authCode: string | null
    order: number | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    type: number
    name: number
    parentId: number
    path: number
    component: number
    authCode: number
    order: number
    status: number
    meta: number
    createdAt: number
    updatedAt: number
    _all: number
  }

  export type MenuAvgAggregateInputType = {
    order?: true
    status?: true
  }

  export type MenuSumAggregateInputType = {
    order?: true
    status?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    parentId?: true
    path?: true
    component?: true
    authCode?: true
    order?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    parentId?: true
    path?: true
    component?: true
    authCode?: true
    order?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    parentId?: true
    path?: true
    component?: true
    authCode?: true
    order?: true
    status?: true
    meta?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menu to aggregate.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Menus
     **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
    [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }

  export type MenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithAggregationInput | MenuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    id: string
    type: string
    name: string | null
    parentId: string | null
    path: string | null
    component: string | null
    authCode: string | null
    order: number
    status: number
    meta: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> & {
        [P in keyof T & keyof MenuGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
          : GetScalarType<T[P], MenuGroupByOutputType[P]>
      }
    >
  >

  export type MenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean
      type?: boolean
      name?: boolean
      parentId?: boolean
      path?: boolean
      component?: boolean
      authCode?: boolean
      order?: boolean
      status?: boolean
      meta?: boolean
      createdAt?: boolean
      updatedAt?: boolean
      roles?: boolean | Menu$rolesArgs<ExtArgs>
      _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['menu']
  >

  export type MenuSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    parentId?: boolean
    path?: boolean
    component?: boolean
    authCode?: boolean
    order?: boolean
    status?: boolean
    meta?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
    'id' | 'type' | 'name' | 'parentId' | 'path' | 'component' | 'authCode' | 'order' | 'status' | 'meta' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['menu']
  >
  export type MenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Menu$rolesArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Menu'
    objects: {
      roles: Prisma.$RoleMenuPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<
      {
        id: string
        type: string
        name: string | null
        parentId: string | null
        path: string | null
        component: string | null
        authCode: string | null
        order: number
        status: number
        meta: Prisma.JsonValue | null
        createdAt: Date
        updatedAt: Date
      },
      ExtArgs['result']['menu']
    >
    composites: {}
  }

  type MenuGetPayload<S extends boolean | null | undefined | MenuDefaultArgs> = $Result.GetResult<Prisma.$MenuPayload, S>

  type MenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    MenuFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: MenuCountAggregateInputType | true
  }

  export interface MenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Menu']; meta: { name: 'Menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuFindUniqueArgs>(
      args: SelectSubset<T, MenuFindUniqueArgs<ExtArgs>>
    ): Prisma__MenuClient<
      $Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MenuFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MenuClient<
      $Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuFindFirstArgs>(
      args?: SelectSubset<T, MenuFindFirstArgs<ExtArgs>>
    ): Prisma__MenuClient<
      $Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MenuFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MenuClient<
      $Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     *
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MenuFindManyArgs>(
      args?: SelectSubset<T, MenuFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     *
     */
    create<T extends MenuCreateArgs>(
      args: SelectSubset<T, MenuCreateArgs<ExtArgs>>
    ): Prisma__MenuClient<
      $Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many Menus.
     * @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MenuCreateManyArgs>(args?: SelectSubset<T, MenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     *
     */
    delete<T extends MenuDeleteArgs>(
      args: SelectSubset<T, MenuDeleteArgs<ExtArgs>>
    ): Prisma__MenuClient<
      $Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MenuUpdateArgs>(
      args: SelectSubset<T, MenuUpdateArgs<ExtArgs>>
    ): Prisma__MenuClient<
      $Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MenuDeleteManyArgs>(args?: SelectSubset<T, MenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MenuUpdateManyArgs>(args: SelectSubset<T, MenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends MenuUpsertArgs>(
      args: SelectSubset<T, MenuUpsertArgs<ExtArgs>>
    ): Prisma__MenuClient<
      $Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
     **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake ? { orderBy: MenuGroupByArgs['orderBy'] } : { orderBy?: MenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the Menu model
     */
    readonly fields: MenuFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    roles<T extends Menu$rolesArgs<ExtArgs> = {}>(
      args?: Subset<T, Menu$rolesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the Menu model
   */
  interface MenuFieldRefs {
    readonly id: FieldRef<'Menu', 'String'>
    readonly type: FieldRef<'Menu', 'String'>
    readonly name: FieldRef<'Menu', 'String'>
    readonly parentId: FieldRef<'Menu', 'String'>
    readonly path: FieldRef<'Menu', 'String'>
    readonly component: FieldRef<'Menu', 'String'>
    readonly authCode: FieldRef<'Menu', 'String'>
    readonly order: FieldRef<'Menu', 'Int'>
    readonly status: FieldRef<'Menu', 'Int'>
    readonly meta: FieldRef<'Menu', 'Json'>
    readonly createdAt: FieldRef<'Menu', 'DateTime'>
    readonly updatedAt: FieldRef<'Menu', 'DateTime'>
  }

  // Custom InputTypes
  /**
   * Menu findUnique
   */
  export type MenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findFirst
   */
  export type MenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findMany
   */
  export type MenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menus to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu create
   */
  export type MenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to create a Menu.
     */
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }

  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Menu update
   */
  export type MenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to update a Menu.
     */
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to update.
     */
    limit?: number
  }

  /**
   * Menu upsert
   */
  export type MenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The filter to search for the Menu to update in case it exists.
     */
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     */
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }

  /**
   * Menu delete
   */
  export type MenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter which Menu to delete.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menus to delete
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to delete.
     */
    limit?: number
  }

  /**
   * Menu.roles
   */
  export type Menu$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleMenu
     */
    omit?: RoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    where?: RoleMenuWhereInput
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    cursor?: RoleMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleMenuScalarFieldEnum | RoleMenuScalarFieldEnum[]
  }

  /**
   * Menu without action
   */
  export type MenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
  }

  /**
   * Model RoleMenu
   */

  export type AggregateRoleMenu = {
    _count: RoleMenuCountAggregateOutputType | null
    _min: RoleMenuMinAggregateOutputType | null
    _max: RoleMenuMaxAggregateOutputType | null
  }

  export type RoleMenuMinAggregateOutputType = {
    roleId: string | null
    menuId: string | null
  }

  export type RoleMenuMaxAggregateOutputType = {
    roleId: string | null
    menuId: string | null
  }

  export type RoleMenuCountAggregateOutputType = {
    roleId: number
    menuId: number
    _all: number
  }

  export type RoleMenuMinAggregateInputType = {
    roleId?: true
    menuId?: true
  }

  export type RoleMenuMaxAggregateInputType = {
    roleId?: true
    menuId?: true
  }

  export type RoleMenuCountAggregateInputType = {
    roleId?: true
    menuId?: true
    _all?: true
  }

  export type RoleMenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleMenu to aggregate.
     */
    where?: RoleMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoleMenus to fetch.
     */
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RoleMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoleMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoleMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RoleMenus
     **/
    _count?: true | RoleMenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RoleMenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RoleMenuMaxAggregateInputType
  }

  export type GetRoleMenuAggregateType<T extends RoleMenuAggregateArgs> = {
    [P in keyof T & keyof AggregateRoleMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoleMenu[P]>
      : GetScalarType<T[P], AggregateRoleMenu[P]>
  }

  export type RoleMenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleMenuWhereInput
    orderBy?: RoleMenuOrderByWithAggregationInput | RoleMenuOrderByWithAggregationInput[]
    by: RoleMenuScalarFieldEnum[] | RoleMenuScalarFieldEnum
    having?: RoleMenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleMenuCountAggregateInputType | true
    _min?: RoleMenuMinAggregateInputType
    _max?: RoleMenuMaxAggregateInputType
  }

  export type RoleMenuGroupByOutputType = {
    roleId: string
    menuId: string
    _count: RoleMenuCountAggregateOutputType | null
    _min: RoleMenuMinAggregateOutputType | null
    _max: RoleMenuMaxAggregateOutputType | null
  }

  type GetRoleMenuGroupByPayload<T extends RoleMenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleMenuGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RoleMenuGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RoleMenuGroupByOutputType[P]>
          : GetScalarType<T[P], RoleMenuGroupByOutputType[P]>
      }
    >
  >

  export type RoleMenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      roleId?: boolean
      menuId?: boolean
      role?: boolean | RoleDefaultArgs<ExtArgs>
      menu?: boolean | MenuDefaultArgs<ExtArgs>
    },
    ExtArgs['result']['roleMenu']
  >

  export type RoleMenuSelectScalar = {
    roleId?: boolean
    menuId?: boolean
  }

  export type RoleMenuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<
    'roleId' | 'menuId',
    ExtArgs['result']['roleMenu']
  >
  export type RoleMenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }

  export type $RoleMenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'RoleMenu'
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      menu: Prisma.$MenuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<
      {
        roleId: string
        menuId: string
      },
      ExtArgs['result']['roleMenu']
    >
    composites: {}
  }

  type RoleMenuGetPayload<S extends boolean | null | undefined | RoleMenuDefaultArgs> = $Result.GetResult<Prisma.$RoleMenuPayload, S>

  type RoleMenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    RoleMenuFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: RoleMenuCountAggregateInputType | true
  }

  export interface RoleMenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoleMenu']; meta: { name: 'RoleMenu' } }
    /**
     * Find zero or one RoleMenu that matches the filter.
     * @param {RoleMenuFindUniqueArgs} args - Arguments to find a RoleMenu
     * @example
     * // Get one RoleMenu
     * const roleMenu = await prisma.roleMenu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleMenuFindUniqueArgs>(
      args: SelectSubset<T, RoleMenuFindUniqueArgs<ExtArgs>>
    ): Prisma__RoleMenuClient<
      $Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'findUnique', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find one RoleMenu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleMenuFindUniqueOrThrowArgs} args - Arguments to find a RoleMenu
     * @example
     * // Get one RoleMenu
     * const roleMenu = await prisma.roleMenu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleMenuFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RoleMenuFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleMenuClient<
      $Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first RoleMenu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuFindFirstArgs} args - Arguments to find a RoleMenu
     * @example
     * // Get one RoleMenu
     * const roleMenu = await prisma.roleMenu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleMenuFindFirstArgs>(
      args?: SelectSubset<T, RoleMenuFindFirstArgs<ExtArgs>>
    ): Prisma__RoleMenuClient<
      $Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'findFirst', GlobalOmitOptions> | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find the first RoleMenu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuFindFirstOrThrowArgs} args - Arguments to find a RoleMenu
     * @example
     * // Get one RoleMenu
     * const roleMenu = await prisma.roleMenu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleMenuFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoleMenuFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleMenuClient<
      $Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'findFirstOrThrow', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Find zero or more RoleMenus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoleMenus
     * const roleMenus = await prisma.roleMenu.findMany()
     *
     * // Get first 10 RoleMenus
     * const roleMenus = await prisma.roleMenu.findMany({ take: 10 })
     *
     * // Only select the `roleId`
     * const roleMenuWithRoleIdOnly = await prisma.roleMenu.findMany({ select: { roleId: true } })
     *
     */
    findMany<T extends RoleMenuFindManyArgs>(
      args?: SelectSubset<T, RoleMenuFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'findMany', GlobalOmitOptions>>

    /**
     * Create a RoleMenu.
     * @param {RoleMenuCreateArgs} args - Arguments to create a RoleMenu.
     * @example
     * // Create one RoleMenu
     * const RoleMenu = await prisma.roleMenu.create({
     *   data: {
     *     // ... data to create a RoleMenu
     *   }
     * })
     *
     */
    create<T extends RoleMenuCreateArgs>(
      args: SelectSubset<T, RoleMenuCreateArgs<ExtArgs>>
    ): Prisma__RoleMenuClient<
      $Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'create', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Create many RoleMenus.
     * @param {RoleMenuCreateManyArgs} args - Arguments to create many RoleMenus.
     * @example
     * // Create many RoleMenus
     * const roleMenu = await prisma.roleMenu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RoleMenuCreateManyArgs>(
      args?: SelectSubset<T, RoleMenuCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoleMenu.
     * @param {RoleMenuDeleteArgs} args - Arguments to delete one RoleMenu.
     * @example
     * // Delete one RoleMenu
     * const RoleMenu = await prisma.roleMenu.delete({
     *   where: {
     *     // ... filter to delete one RoleMenu
     *   }
     * })
     *
     */
    delete<T extends RoleMenuDeleteArgs>(
      args: SelectSubset<T, RoleMenuDeleteArgs<ExtArgs>>
    ): Prisma__RoleMenuClient<
      $Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'delete', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Update one RoleMenu.
     * @param {RoleMenuUpdateArgs} args - Arguments to update one RoleMenu.
     * @example
     * // Update one RoleMenu
     * const roleMenu = await prisma.roleMenu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RoleMenuUpdateArgs>(
      args: SelectSubset<T, RoleMenuUpdateArgs<ExtArgs>>
    ): Prisma__RoleMenuClient<
      $Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'update', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Delete zero or more RoleMenus.
     * @param {RoleMenuDeleteManyArgs} args - Arguments to filter RoleMenus to delete.
     * @example
     * // Delete a few RoleMenus
     * const { count } = await prisma.roleMenu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RoleMenuDeleteManyArgs>(
      args?: SelectSubset<T, RoleMenuDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoleMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoleMenus
     * const roleMenu = await prisma.roleMenu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RoleMenuUpdateManyArgs>(args: SelectSubset<T, RoleMenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoleMenu.
     * @param {RoleMenuUpsertArgs} args - Arguments to update or create a RoleMenu.
     * @example
     * // Update or create a RoleMenu
     * const roleMenu = await prisma.roleMenu.upsert({
     *   create: {
     *     // ... data to create a RoleMenu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoleMenu we want to update
     *   }
     * })
     */
    upsert<T extends RoleMenuUpsertArgs>(
      args: SelectSubset<T, RoleMenuUpsertArgs<ExtArgs>>
    ): Prisma__RoleMenuClient<
      $Result.GetResult<Prisma.$RoleMenuPayload<ExtArgs>, T, 'upsert', GlobalOmitOptions>,
      never,
      ExtArgs,
      GlobalOmitOptions
    >

    /**
     * Count the number of RoleMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuCountArgs} args - Arguments to filter RoleMenus to count.
     * @example
     * // Count the number of RoleMenus
     * const count = await prisma.roleMenu.count({
     *   where: {
     *     // ... the filter for the RoleMenus we want to count
     *   }
     * })
     **/
    count<T extends RoleMenuCountArgs>(
      args?: Subset<T, RoleMenuCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleMenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoleMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RoleMenuAggregateArgs>(args: Subset<T, RoleMenuAggregateArgs>): Prisma.PrismaPromise<GetRoleMenuAggregateType<T>>

    /**
     * Group by RoleMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RoleMenuGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleMenuGroupByArgs['orderBy'] }
        : { orderBy?: RoleMenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`]
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RoleMenuGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetRoleMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
    /**
     * Fields of the RoleMenu model
     */
    readonly fields: RoleMenuFieldRefs
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoleMenu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleMenuClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise'
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RoleDefaultArgs<ExtArgs>>
    ): Prisma__RoleClient<
      $Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    menu<T extends MenuDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, MenuDefaultArgs<ExtArgs>>
    ): Prisma__MenuClient<
      $Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, 'findUniqueOrThrow', GlobalOmitOptions> | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
    ): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }

  /**
   * Fields of the RoleMenu model
   */
  interface RoleMenuFieldRefs {
    readonly roleId: FieldRef<'RoleMenu', 'String'>
    readonly menuId: FieldRef<'RoleMenu', 'String'>
  }

  // Custom InputTypes
  /**
   * RoleMenu findUnique
   */
  export type RoleMenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleMenu
     */
    omit?: RoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenu to fetch.
     */
    where: RoleMenuWhereUniqueInput
  }

  /**
   * RoleMenu findUniqueOrThrow
   */
  export type RoleMenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleMenu
     */
    omit?: RoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenu to fetch.
     */
    where: RoleMenuWhereUniqueInput
  }

  /**
   * RoleMenu findFirst
   */
  export type RoleMenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleMenu
     */
    omit?: RoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenu to fetch.
     */
    where?: RoleMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoleMenus to fetch.
     */
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RoleMenus.
     */
    cursor?: RoleMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoleMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoleMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RoleMenus.
     */
    distinct?: RoleMenuScalarFieldEnum | RoleMenuScalarFieldEnum[]
  }

  /**
   * RoleMenu findFirstOrThrow
   */
  export type RoleMenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleMenu
     */
    omit?: RoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenu to fetch.
     */
    where?: RoleMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoleMenus to fetch.
     */
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RoleMenus.
     */
    cursor?: RoleMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoleMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoleMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RoleMenus.
     */
    distinct?: RoleMenuScalarFieldEnum | RoleMenuScalarFieldEnum[]
  }

  /**
   * RoleMenu findMany
   */
  export type RoleMenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleMenu
     */
    omit?: RoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenus to fetch.
     */
    where?: RoleMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RoleMenus to fetch.
     */
    orderBy?: RoleMenuOrderByWithRelationInput | RoleMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RoleMenus.
     */
    cursor?: RoleMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RoleMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RoleMenus.
     */
    skip?: number
    distinct?: RoleMenuScalarFieldEnum | RoleMenuScalarFieldEnum[]
  }

  /**
   * RoleMenu create
   */
  export type RoleMenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleMenu
     */
    omit?: RoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * The data needed to create a RoleMenu.
     */
    data: XOR<RoleMenuCreateInput, RoleMenuUncheckedCreateInput>
  }

  /**
   * RoleMenu createMany
   */
  export type RoleMenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoleMenus.
     */
    data: RoleMenuCreateManyInput | RoleMenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoleMenu update
   */
  export type RoleMenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleMenu
     */
    omit?: RoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * The data needed to update a RoleMenu.
     */
    data: XOR<RoleMenuUpdateInput, RoleMenuUncheckedUpdateInput>
    /**
     * Choose, which RoleMenu to update.
     */
    where: RoleMenuWhereUniqueInput
  }

  /**
   * RoleMenu updateMany
   */
  export type RoleMenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoleMenus.
     */
    data: XOR<RoleMenuUpdateManyMutationInput, RoleMenuUncheckedUpdateManyInput>
    /**
     * Filter which RoleMenus to update
     */
    where?: RoleMenuWhereInput
    /**
     * Limit how many RoleMenus to update.
     */
    limit?: number
  }

  /**
   * RoleMenu upsert
   */
  export type RoleMenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleMenu
     */
    omit?: RoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * The filter to search for the RoleMenu to update in case it exists.
     */
    where: RoleMenuWhereUniqueInput
    /**
     * In case the RoleMenu found by the `where` argument doesn't exist, create a new RoleMenu with this data.
     */
    create: XOR<RoleMenuCreateInput, RoleMenuUncheckedCreateInput>
    /**
     * In case the RoleMenu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleMenuUpdateInput, RoleMenuUncheckedUpdateInput>
  }

  /**
   * RoleMenu delete
   */
  export type RoleMenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleMenu
     */
    omit?: RoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
    /**
     * Filter which RoleMenu to delete.
     */
    where: RoleMenuWhereUniqueInput
  }

  /**
   * RoleMenu deleteMany
   */
  export type RoleMenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleMenus to delete
     */
    where?: RoleMenuWhereInput
    /**
     * Limit how many RoleMenus to delete.
     */
    limit?: number
  }

  /**
   * RoleMenu without action
   */
  export type RoleMenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenu
     */
    select?: RoleMenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoleMenu
     */
    omit?: RoleMenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuInclude<ExtArgs> | null
  }

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted'
    ReadCommitted: 'ReadCommitted'
    RepeatableRead: 'RepeatableRead'
    Serializable: 'Serializable'
  }

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]

  export const UserScalarFieldEnum: {
    id: 'id'
    username: 'username'
    password: 'password'
    realName: 'realName'
    phone: 'phone'
    email: 'email'
    status: 'status'
    remark: 'remark'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]

  export const RoleScalarFieldEnum: {
    id: 'id'
    name: 'name'
    description: 'description'
    status: 'status'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]

  export const UserRoleScalarFieldEnum: {
    userId: 'userId'
    roleId: 'roleId'
  }

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]

  export const MenuScalarFieldEnum: {
    id: 'id'
    type: 'type'
    name: 'name'
    parentId: 'parentId'
    path: 'path'
    component: 'component'
    authCode: 'authCode'
    order: 'order'
    status: 'status'
    meta: 'meta'
    createdAt: 'createdAt'
    updatedAt: 'updatedAt'
  }

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]

  export const RoleMenuScalarFieldEnum: {
    roleId: 'roleId'
    menuId: 'menuId'
  }

  export type RoleMenuScalarFieldEnum = (typeof RoleMenuScalarFieldEnum)[keyof typeof RoleMenuScalarFieldEnum]

  export const SortOrder: {
    asc: 'asc'
    desc: 'desc'
  }

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]

  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull
    JsonNull: typeof JsonNull
  }

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]

  export const NullsOrder: {
    first: 'first'
    last: 'last'
  }

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]

  export const UserOrderByRelevanceFieldEnum: {
    id: 'id'
    username: 'username'
    password: 'password'
    realName: 'realName'
    phone: 'phone'
    email: 'email'
    remark: 'remark'
  }

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]

  export const RoleOrderByRelevanceFieldEnum: {
    id: 'id'
    name: 'name'
    description: 'description'
  }

  export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum]

  export const UserRoleOrderByRelevanceFieldEnum: {
    userId: 'userId'
    roleId: 'roleId'
  }

  export type UserRoleOrderByRelevanceFieldEnum = (typeof UserRoleOrderByRelevanceFieldEnum)[keyof typeof UserRoleOrderByRelevanceFieldEnum]

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull
    JsonNull: typeof JsonNull
    AnyNull: typeof AnyNull
  }

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]

  export const QueryMode: {
    default: 'default'
    insensitive: 'insensitive'
  }

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]

  export const MenuOrderByRelevanceFieldEnum: {
    id: 'id'
    type: 'type'
    name: 'name'
    parentId: 'parentId'
    path: 'path'
    component: 'component'
    authCode: 'authCode'
  }

  export type MenuOrderByRelevanceFieldEnum = (typeof MenuOrderByRelevanceFieldEnum)[keyof typeof MenuOrderByRelevanceFieldEnum]

  export const RoleMenuOrderByRelevanceFieldEnum: {
    roleId: 'roleId'
    menuId: 'menuId'
  }

  export type RoleMenuOrderByRelevanceFieldEnum = (typeof RoleMenuOrderByRelevanceFieldEnum)[keyof typeof RoleMenuOrderByRelevanceFieldEnum]

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>

  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<'User'> | string
    username?: StringFilter<'User'> | string
    password?: StringFilter<'User'> | string
    realName?: StringFilter<'User'> | string
    phone?: StringNullableFilter<'User'> | string | null
    email?: StringNullableFilter<'User'> | string | null
    status?: IntFilter<'User'> | number
    remark?: StringNullableFilter<'User'> | string | null
    createdAt?: DateTimeFilter<'User'> | Date | string
    updatedAt?: DateTimeFilter<'User'> | Date | string
    roles?: UserRoleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    realName?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    status?: SortOrder
    remark?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: UserRoleOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      username?: string
      AND?: UserWhereInput | UserWhereInput[]
      OR?: UserWhereInput[]
      NOT?: UserWhereInput | UserWhereInput[]
      password?: StringFilter<'User'> | string
      realName?: StringFilter<'User'> | string
      phone?: StringNullableFilter<'User'> | string | null
      email?: StringNullableFilter<'User'> | string | null
      status?: IntFilter<'User'> | number
      remark?: StringNullableFilter<'User'> | string | null
      createdAt?: DateTimeFilter<'User'> | Date | string
      updatedAt?: DateTimeFilter<'User'> | Date | string
      roles?: UserRoleListRelationFilter
    },
    'id' | 'username'
  >

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    realName?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    status?: SortOrder
    remark?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'User'> | string
    username?: StringWithAggregatesFilter<'User'> | string
    password?: StringWithAggregatesFilter<'User'> | string
    realName?: StringWithAggregatesFilter<'User'> | string
    phone?: StringNullableWithAggregatesFilter<'User'> | string | null
    email?: StringNullableWithAggregatesFilter<'User'> | string | null
    status?: IntWithAggregatesFilter<'User'> | number
    remark?: StringNullableWithAggregatesFilter<'User'> | string | null
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<'Role'> | string
    name?: StringFilter<'Role'> | string
    description?: StringNullableFilter<'Role'> | string | null
    status?: IntFilter<'Role'> | number
    createdAt?: DateTimeFilter<'Role'> | Date | string
    updatedAt?: DateTimeFilter<'Role'> | Date | string
    users?: UserRoleListRelationFilter
    menus?: RoleMenuListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserRoleOrderByRelationAggregateInput
    menus?: RoleMenuOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      name?: string
      AND?: RoleWhereInput | RoleWhereInput[]
      OR?: RoleWhereInput[]
      NOT?: RoleWhereInput | RoleWhereInput[]
      description?: StringNullableFilter<'Role'> | string | null
      status?: IntFilter<'Role'> | number
      createdAt?: DateTimeFilter<'Role'> | Date | string
      updatedAt?: DateTimeFilter<'Role'> | Date | string
      users?: UserRoleListRelationFilter
      menus?: RoleMenuListRelationFilter
    },
    'id' | 'name'
  >

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Role'> | string
    name?: StringWithAggregatesFilter<'Role'> | string
    description?: StringNullableWithAggregatesFilter<'Role'> | string | null
    status?: IntWithAggregatesFilter<'Role'> | number
    createdAt?: DateTimeWithAggregatesFilter<'Role'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'Role'> | Date | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<'UserRole'> | string
    roleId?: StringFilter<'UserRole'> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
    _relevance?: UserRoleOrderByRelevanceInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<
    {
      userId_roleId?: UserRoleUserIdRoleIdCompoundUniqueInput
      AND?: UserRoleWhereInput | UserRoleWhereInput[]
      OR?: UserRoleWhereInput[]
      NOT?: UserRoleWhereInput | UserRoleWhereInput[]
      userId?: StringFilter<'UserRole'> | string
      roleId?: StringFilter<'UserRole'> | string
      user?: XOR<UserScalarRelationFilter, UserWhereInput>
      role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    },
    'userId_roleId'
  >

  export type UserRoleOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<'UserRole'> | string
    roleId?: StringWithAggregatesFilter<'UserRole'> | string
  }

  export type MenuWhereInput = {
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    id?: StringFilter<'Menu'> | string
    type?: StringFilter<'Menu'> | string
    name?: StringNullableFilter<'Menu'> | string | null
    parentId?: StringNullableFilter<'Menu'> | string | null
    path?: StringNullableFilter<'Menu'> | string | null
    component?: StringNullableFilter<'Menu'> | string | null
    authCode?: StringNullableFilter<'Menu'> | string | null
    order?: IntFilter<'Menu'> | number
    status?: IntFilter<'Menu'> | number
    meta?: JsonNullableFilter<'Menu'>
    createdAt?: DateTimeFilter<'Menu'> | Date | string
    updatedAt?: DateTimeFilter<'Menu'> | Date | string
    roles?: RoleMenuListRelationFilter
  }

  export type MenuOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    component?: SortOrderInput | SortOrder
    authCode?: SortOrderInput | SortOrder
    order?: SortOrder
    status?: SortOrder
    meta?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: RoleMenuOrderByRelationAggregateInput
    _relevance?: MenuOrderByRelevanceInput
  }

  export type MenuWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string
      AND?: MenuWhereInput | MenuWhereInput[]
      OR?: MenuWhereInput[]
      NOT?: MenuWhereInput | MenuWhereInput[]
      type?: StringFilter<'Menu'> | string
      name?: StringNullableFilter<'Menu'> | string | null
      parentId?: StringNullableFilter<'Menu'> | string | null
      path?: StringNullableFilter<'Menu'> | string | null
      component?: StringNullableFilter<'Menu'> | string | null
      authCode?: StringNullableFilter<'Menu'> | string | null
      order?: IntFilter<'Menu'> | number
      status?: IntFilter<'Menu'> | number
      meta?: JsonNullableFilter<'Menu'>
      createdAt?: DateTimeFilter<'Menu'> | Date | string
      updatedAt?: DateTimeFilter<'Menu'> | Date | string
      roles?: RoleMenuListRelationFilter
    },
    'id'
  >

  export type MenuOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    component?: SortOrderInput | SortOrder
    authCode?: SortOrderInput | SortOrder
    order?: SortOrder
    status?: SortOrder
    meta?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    OR?: MenuScalarWhereWithAggregatesInput[]
    NOT?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<'Menu'> | string
    type?: StringWithAggregatesFilter<'Menu'> | string
    name?: StringNullableWithAggregatesFilter<'Menu'> | string | null
    parentId?: StringNullableWithAggregatesFilter<'Menu'> | string | null
    path?: StringNullableWithAggregatesFilter<'Menu'> | string | null
    component?: StringNullableWithAggregatesFilter<'Menu'> | string | null
    authCode?: StringNullableWithAggregatesFilter<'Menu'> | string | null
    order?: IntWithAggregatesFilter<'Menu'> | number
    status?: IntWithAggregatesFilter<'Menu'> | number
    meta?: JsonNullableWithAggregatesFilter<'Menu'>
    createdAt?: DateTimeWithAggregatesFilter<'Menu'> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<'Menu'> | Date | string
  }

  export type RoleMenuWhereInput = {
    AND?: RoleMenuWhereInput | RoleMenuWhereInput[]
    OR?: RoleMenuWhereInput[]
    NOT?: RoleMenuWhereInput | RoleMenuWhereInput[]
    roleId?: StringFilter<'RoleMenu'> | string
    menuId?: StringFilter<'RoleMenu'> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    menu?: XOR<MenuScalarRelationFilter, MenuWhereInput>
  }

  export type RoleMenuOrderByWithRelationInput = {
    roleId?: SortOrder
    menuId?: SortOrder
    role?: RoleOrderByWithRelationInput
    menu?: MenuOrderByWithRelationInput
    _relevance?: RoleMenuOrderByRelevanceInput
  }

  export type RoleMenuWhereUniqueInput = Prisma.AtLeast<
    {
      roleId_menuId?: RoleMenuRoleIdMenuIdCompoundUniqueInput
      AND?: RoleMenuWhereInput | RoleMenuWhereInput[]
      OR?: RoleMenuWhereInput[]
      NOT?: RoleMenuWhereInput | RoleMenuWhereInput[]
      roleId?: StringFilter<'RoleMenu'> | string
      menuId?: StringFilter<'RoleMenu'> | string
      role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
      menu?: XOR<MenuScalarRelationFilter, MenuWhereInput>
    },
    'roleId_menuId'
  >

  export type RoleMenuOrderByWithAggregationInput = {
    roleId?: SortOrder
    menuId?: SortOrder
    _count?: RoleMenuCountOrderByAggregateInput
    _max?: RoleMenuMaxOrderByAggregateInput
    _min?: RoleMenuMinOrderByAggregateInput
  }

  export type RoleMenuScalarWhereWithAggregatesInput = {
    AND?: RoleMenuScalarWhereWithAggregatesInput | RoleMenuScalarWhereWithAggregatesInput[]
    OR?: RoleMenuScalarWhereWithAggregatesInput[]
    NOT?: RoleMenuScalarWhereWithAggregatesInput | RoleMenuScalarWhereWithAggregatesInput[]
    roleId?: StringWithAggregatesFilter<'RoleMenu'> | string
    menuId?: StringWithAggregatesFilter<'RoleMenu'> | string
  }

  export type UserCreateInput = {
    id: string
    username: string
    password: string
    realName: string
    phone?: string | null
    email?: string | null
    status?: number
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    username: string
    password: string
    realName: string
    phone?: string | null
    email?: string | null
    status?: number
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    username: string
    password: string
    realName: string
    phone?: string | null
    email?: string | null
    status?: number
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserRoleCreateNestedManyWithoutRoleInput
    menus?: RoleMenuCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
    menus?: RoleMenuUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserRoleUpdateManyWithoutRoleNestedInput
    menus?: RoleMenuUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    menus?: RoleMenuUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateInput = {
    user: UserCreateNestedOneWithoutRolesInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateInput = {
    userId: string
    roleId: string
  }

  export type UserRoleUpdateInput = {
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleCreateManyInput = {
    userId: string
    roleId: string
  }

  export type UserRoleUpdateManyMutationInput = {}

  export type UserRoleUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type MenuCreateInput = {
    id: string
    type: string
    name?: string | null
    parentId?: string | null
    path?: string | null
    component?: string | null
    authCode?: string | null
    order?: number
    status?: number
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleMenuCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateInput = {
    id: string
    type: string
    name?: string | null
    parentId?: string | null
    path?: string | null
    component?: string | null
    authCode?: string | null
    order?: number
    status?: number
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleMenuUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    component?: NullableStringFieldUpdateOperationsInput | string | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleMenuUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    component?: NullableStringFieldUpdateOperationsInput | string | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleMenuUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuCreateManyInput = {
    id: string
    type: string
    name?: string | null
    parentId?: string | null
    path?: string | null
    component?: string | null
    authCode?: string | null
    order?: number
    status?: number
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    component?: NullableStringFieldUpdateOperationsInput | string | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    component?: NullableStringFieldUpdateOperationsInput | string | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleMenuCreateInput = {
    role: RoleCreateNestedOneWithoutMenusInput
    menu: MenuCreateNestedOneWithoutRolesInput
  }

  export type RoleMenuUncheckedCreateInput = {
    roleId: string
    menuId: string
  }

  export type RoleMenuUpdateInput = {
    role?: RoleUpdateOneRequiredWithoutMenusNestedInput
    menu?: MenuUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RoleMenuUncheckedUpdateInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
  }

  export type RoleMenuCreateManyInput = {
    roleId: string
    menuId: string
  }

  export type RoleMenuUpdateManyMutationInput = {}

  export type RoleMenuUncheckedUpdateManyInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    menuId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    realName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    status?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    realName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    realName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    status?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RoleMenuListRelationFilter = {
    every?: RoleMenuWhereInput
    some?: RoleMenuWhereInput
    none?: RoleMenuWhereInput
  }

  export type RoleMenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelevanceInput = {
    fields: RoleOrderByRelevanceFieldEnum | RoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    status?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    status?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRoleOrderByRelevanceInput = {
    fields: UserRoleOrderByRelevanceFieldEnum | UserRoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: string
    roleId: string
  }

  export type UserRoleCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MenuOrderByRelevanceInput = {
    fields: MenuOrderByRelevanceFieldEnum | MenuOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MenuCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    path?: SortOrder
    component?: SortOrder
    authCode?: SortOrder
    order?: SortOrder
    status?: SortOrder
    meta?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    order?: SortOrder
    status?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    path?: SortOrder
    component?: SortOrder
    authCode?: SortOrder
    order?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    parentId?: SortOrder
    path?: SortOrder
    component?: SortOrder
    authCode?: SortOrder
    order?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    order?: SortOrder
    status?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type MenuScalarRelationFilter = {
    is?: MenuWhereInput
    isNot?: MenuWhereInput
  }

  export type RoleMenuOrderByRelevanceInput = {
    fields: RoleMenuOrderByRelevanceFieldEnum | RoleMenuOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleMenuRoleIdMenuIdCompoundUniqueInput = {
    roleId: string
    menuId: string
  }

  export type RoleMenuCountOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
  }

  export type RoleMenuMaxOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
  }

  export type RoleMenuMinOrderByAggregateInput = {
    roleId?: SortOrder
    menuId?: SortOrder
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
      | UserRoleCreateWithoutUserInput[]
      | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
      | UserRoleCreateWithoutUserInput[]
      | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
      | UserRoleCreateWithoutUserInput[]
      | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
      | UserRoleCreateWithoutUserInput[]
      | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
      | UserRoleCreateWithoutRoleInput[]
      | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type RoleMenuCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput>
      | RoleMenuCreateWithoutRoleInput[]
      | RoleMenuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutRoleInput | RoleMenuCreateOrConnectWithoutRoleInput[]
    createMany?: RoleMenuCreateManyRoleInputEnvelope
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
      | UserRoleCreateWithoutRoleInput[]
      | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type RoleMenuUncheckedCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput>
      | RoleMenuCreateWithoutRoleInput[]
      | RoleMenuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutRoleInput | RoleMenuCreateOrConnectWithoutRoleInput[]
    createMany?: RoleMenuCreateManyRoleInputEnvelope
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
      | UserRoleCreateWithoutRoleInput[]
      | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type RoleMenuUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput>
      | RoleMenuCreateWithoutRoleInput[]
      | RoleMenuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutRoleInput | RoleMenuCreateOrConnectWithoutRoleInput[]
    upsert?: RoleMenuUpsertWithWhereUniqueWithoutRoleInput | RoleMenuUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RoleMenuCreateManyRoleInputEnvelope
    set?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    disconnect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    delete?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    update?: RoleMenuUpdateWithWhereUniqueWithoutRoleInput | RoleMenuUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoleMenuUpdateManyWithWhereWithoutRoleInput | RoleMenuUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
      | UserRoleCreateWithoutRoleInput[]
      | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type RoleMenuUncheckedUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput>
      | RoleMenuCreateWithoutRoleInput[]
      | RoleMenuUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutRoleInput | RoleMenuCreateOrConnectWithoutRoleInput[]
    upsert?: RoleMenuUpsertWithWhereUniqueWithoutRoleInput | RoleMenuUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RoleMenuCreateManyRoleInputEnvelope
    set?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    disconnect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    delete?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    update?: RoleMenuUpdateWithWhereUniqueWithoutRoleInput | RoleMenuUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoleMenuUpdateManyWithWhereWithoutRoleInput | RoleMenuUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    upsert?: UserUpsertWithoutRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRolesInput, UserUpdateWithoutRolesInput>, UserUncheckedUpdateWithoutRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleMenuCreateNestedManyWithoutMenuInput = {
    create?:
      | XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput>
      | RoleMenuCreateWithoutMenuInput[]
      | RoleMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutMenuInput | RoleMenuCreateOrConnectWithoutMenuInput[]
    createMany?: RoleMenuCreateManyMenuInputEnvelope
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
  }

  export type RoleMenuUncheckedCreateNestedManyWithoutMenuInput = {
    create?:
      | XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput>
      | RoleMenuCreateWithoutMenuInput[]
      | RoleMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutMenuInput | RoleMenuCreateOrConnectWithoutMenuInput[]
    createMany?: RoleMenuCreateManyMenuInputEnvelope
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
  }

  export type RoleMenuUpdateManyWithoutMenuNestedInput = {
    create?:
      | XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput>
      | RoleMenuCreateWithoutMenuInput[]
      | RoleMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutMenuInput | RoleMenuCreateOrConnectWithoutMenuInput[]
    upsert?: RoleMenuUpsertWithWhereUniqueWithoutMenuInput | RoleMenuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: RoleMenuCreateManyMenuInputEnvelope
    set?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    disconnect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    delete?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    update?: RoleMenuUpdateWithWhereUniqueWithoutMenuInput | RoleMenuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: RoleMenuUpdateManyWithWhereWithoutMenuInput | RoleMenuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
  }

  export type RoleMenuUncheckedUpdateManyWithoutMenuNestedInput = {
    create?:
      | XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput>
      | RoleMenuCreateWithoutMenuInput[]
      | RoleMenuUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: RoleMenuCreateOrConnectWithoutMenuInput | RoleMenuCreateOrConnectWithoutMenuInput[]
    upsert?: RoleMenuUpsertWithWhereUniqueWithoutMenuInput | RoleMenuUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: RoleMenuCreateManyMenuInputEnvelope
    set?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    disconnect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    delete?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    connect?: RoleMenuWhereUniqueInput | RoleMenuWhereUniqueInput[]
    update?: RoleMenuUpdateWithWhereUniqueWithoutMenuInput | RoleMenuUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: RoleMenuUpdateManyWithWhereWithoutMenuInput | RoleMenuUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutMenusInput = {
    create?: XOR<RoleCreateWithoutMenusInput, RoleUncheckedCreateWithoutMenusInput>
    connectOrCreate?: RoleCreateOrConnectWithoutMenusInput
    connect?: RoleWhereUniqueInput
  }

  export type MenuCreateNestedOneWithoutRolesInput = {
    create?: XOR<MenuCreateWithoutRolesInput, MenuUncheckedCreateWithoutRolesInput>
    connectOrCreate?: MenuCreateOrConnectWithoutRolesInput
    connect?: MenuWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutMenusNestedInput = {
    create?: XOR<RoleCreateWithoutMenusInput, RoleUncheckedCreateWithoutMenusInput>
    connectOrCreate?: RoleCreateOrConnectWithoutMenusInput
    upsert?: RoleUpsertWithoutMenusInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutMenusInput, RoleUpdateWithoutMenusInput>, RoleUncheckedUpdateWithoutMenusInput>
  }

  export type MenuUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<MenuCreateWithoutRolesInput, MenuUncheckedCreateWithoutRolesInput>
    connectOrCreate?: MenuCreateOrConnectWithoutRolesInput
    upsert?: MenuUpsertWithoutRolesInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutRolesInput, MenuUpdateWithoutRolesInput>, MenuUncheckedUpdateWithoutRolesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonNullableFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>
        >,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserRoleCreateWithoutUserInput = {
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    roleId: string
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    userId?: StringFilter<'UserRole'> | string
    roleId?: StringFilter<'UserRole'> | string
  }

  export type UserRoleCreateWithoutRoleInput = {
    user: UserCreateNestedOneWithoutRolesInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    userId: string
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RoleMenuCreateWithoutRoleInput = {
    menu: MenuCreateNestedOneWithoutRolesInput
  }

  export type RoleMenuUncheckedCreateWithoutRoleInput = {
    menuId: string
  }

  export type RoleMenuCreateOrConnectWithoutRoleInput = {
    where: RoleMenuWhereUniqueInput
    create: XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput>
  }

  export type RoleMenuCreateManyRoleInputEnvelope = {
    data: RoleMenuCreateManyRoleInput | RoleMenuCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type RoleMenuUpsertWithWhereUniqueWithoutRoleInput = {
    where: RoleMenuWhereUniqueInput
    update: XOR<RoleMenuUpdateWithoutRoleInput, RoleMenuUncheckedUpdateWithoutRoleInput>
    create: XOR<RoleMenuCreateWithoutRoleInput, RoleMenuUncheckedCreateWithoutRoleInput>
  }

  export type RoleMenuUpdateWithWhereUniqueWithoutRoleInput = {
    where: RoleMenuWhereUniqueInput
    data: XOR<RoleMenuUpdateWithoutRoleInput, RoleMenuUncheckedUpdateWithoutRoleInput>
  }

  export type RoleMenuUpdateManyWithWhereWithoutRoleInput = {
    where: RoleMenuScalarWhereInput
    data: XOR<RoleMenuUpdateManyMutationInput, RoleMenuUncheckedUpdateManyWithoutRoleInput>
  }

  export type RoleMenuScalarWhereInput = {
    AND?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
    OR?: RoleMenuScalarWhereInput[]
    NOT?: RoleMenuScalarWhereInput | RoleMenuScalarWhereInput[]
    roleId?: StringFilter<'RoleMenu'> | string
    menuId?: StringFilter<'RoleMenu'> | string
  }

  export type UserCreateWithoutRolesInput = {
    id: string
    username: string
    password: string
    realName: string
    phone?: string | null
    email?: string | null
    status?: number
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id: string
    username: string
    password: string
    realName: string
    phone?: string | null
    email?: string | null
    status?: number
    remark?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type RoleCreateWithoutUsersInput = {
    id: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    menus?: RoleMenuCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    menus?: RoleMenuUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutRolesInput = {
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    realName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menus?: RoleMenuUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menus?: RoleMenuUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleMenuCreateWithoutMenuInput = {
    role: RoleCreateNestedOneWithoutMenusInput
  }

  export type RoleMenuUncheckedCreateWithoutMenuInput = {
    roleId: string
  }

  export type RoleMenuCreateOrConnectWithoutMenuInput = {
    where: RoleMenuWhereUniqueInput
    create: XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput>
  }

  export type RoleMenuCreateManyMenuInputEnvelope = {
    data: RoleMenuCreateManyMenuInput | RoleMenuCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type RoleMenuUpsertWithWhereUniqueWithoutMenuInput = {
    where: RoleMenuWhereUniqueInput
    update: XOR<RoleMenuUpdateWithoutMenuInput, RoleMenuUncheckedUpdateWithoutMenuInput>
    create: XOR<RoleMenuCreateWithoutMenuInput, RoleMenuUncheckedCreateWithoutMenuInput>
  }

  export type RoleMenuUpdateWithWhereUniqueWithoutMenuInput = {
    where: RoleMenuWhereUniqueInput
    data: XOR<RoleMenuUpdateWithoutMenuInput, RoleMenuUncheckedUpdateWithoutMenuInput>
  }

  export type RoleMenuUpdateManyWithWhereWithoutMenuInput = {
    where: RoleMenuScalarWhereInput
    data: XOR<RoleMenuUpdateManyMutationInput, RoleMenuUncheckedUpdateManyWithoutMenuInput>
  }

  export type RoleCreateWithoutMenusInput = {
    id: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutMenusInput = {
    id: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutMenusInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutMenusInput, RoleUncheckedCreateWithoutMenusInput>
  }

  export type MenuCreateWithoutRolesInput = {
    id: string
    type: string
    name?: string | null
    parentId?: string | null
    path?: string | null
    component?: string | null
    authCode?: string | null
    order?: number
    status?: number
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUncheckedCreateWithoutRolesInput = {
    id: string
    type: string
    name?: string | null
    parentId?: string | null
    path?: string | null
    component?: string | null
    authCode?: string | null
    order?: number
    status?: number
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuCreateOrConnectWithoutRolesInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutRolesInput, MenuUncheckedCreateWithoutRolesInput>
  }

  export type RoleUpsertWithoutMenusInput = {
    update: XOR<RoleUpdateWithoutMenusInput, RoleUncheckedUpdateWithoutMenusInput>
    create: XOR<RoleCreateWithoutMenusInput, RoleUncheckedCreateWithoutMenusInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutMenusInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutMenusInput, RoleUncheckedUpdateWithoutMenusInput>
  }

  export type RoleUpdateWithoutMenusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutMenusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type MenuUpsertWithoutRolesInput = {
    update: XOR<MenuUpdateWithoutRolesInput, MenuUncheckedUpdateWithoutRolesInput>
    create: XOR<MenuCreateWithoutRolesInput, MenuUncheckedCreateWithoutRolesInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutRolesInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutRolesInput, MenuUncheckedUpdateWithoutRolesInput>
  }

  export type MenuUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    component?: NullableStringFieldUpdateOperationsInput | string | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    component?: NullableStringFieldUpdateOperationsInput | string | null
    authCode?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    meta?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyUserInput = {
    roleId: string
  }

  export type UserRoleUpdateWithoutUserInput = {
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleCreateManyRoleInput = {
    userId: string
  }

  export type RoleMenuCreateManyRoleInput = {
    menuId: string
  }

  export type UserRoleUpdateWithoutRoleInput = {
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type RoleMenuUpdateWithoutRoleInput = {
    menu?: MenuUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RoleMenuUncheckedUpdateWithoutRoleInput = {
    menuId?: StringFieldUpdateOperationsInput | string
  }

  export type RoleMenuUncheckedUpdateManyWithoutRoleInput = {
    menuId?: StringFieldUpdateOperationsInput | string
  }

  export type RoleMenuCreateManyMenuInput = {
    roleId: string
  }

  export type RoleMenuUpdateWithoutMenuInput = {
    role?: RoleUpdateOneRequiredWithoutMenusNestedInput
  }

  export type RoleMenuUncheckedUpdateWithoutMenuInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type RoleMenuUncheckedUpdateManyWithoutMenuInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
