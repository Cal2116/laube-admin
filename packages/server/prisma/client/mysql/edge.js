Object.defineProperty(exports, '__esModule', { value: true })

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')

const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: '6.6.0',
  engine: 'f676762280b54cd07c770017ed3711ddde35f37a',
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
}

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
})

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  realName: 'realName',
  phone: 'phone',
  email: 'email',
  status: 'status',
  remark: 'remark',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
}

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
}

exports.Prisma.UserRoleScalarFieldEnum = {
  userId: 'userId',
  roleId: 'roleId',
}

exports.Prisma.MenuScalarFieldEnum = {
  id: 'id',
  type: 'type',
  name: 'name',
  parentId: 'parentId',
  path: 'path',
  component: 'component',
  authCode: 'authCode',
  order: 'order',
  status: 'status',
  meta: 'meta',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
}

exports.Prisma.RoleMenuScalarFieldEnum = {
  roleId: 'roleId',
  menuId: 'menuId',
}

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc',
}

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
}

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last',
}

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  realName: 'realName',
  phone: 'phone',
  email: 'email',
  remark: 'remark',
}

exports.Prisma.RoleOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
}

exports.Prisma.UserRoleOrderByRelevanceFieldEnum = {
  userId: 'userId',
  roleId: 'roleId',
}

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull,
}

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive',
}

exports.Prisma.MenuOrderByRelevanceFieldEnum = {
  id: 'id',
  type: 'type',
  name: 'name',
  parentId: 'parentId',
  path: 'path',
  component: 'component',
  authCode: 'authCode',
}

exports.Prisma.RoleMenuOrderByRelevanceFieldEnum = {
  roleId: 'roleId',
  menuId: 'menuId',
}

exports.Prisma.ModelName = {
  User: 'User',
  Role: 'Role',
  UserRole: 'UserRole',
  Menu: 'Menu',
  RoleMenu: 'RoleMenu',
}
/**
 * Create the Client
 */
const config = {
  generator: {
    name: 'client',
    provider: {
      fromEnvVar: null,
      value: 'prisma-client-js',
    },
    output: {
      value: '/Users/laube/workspace/laube/laube-admin-react/packages/server/prisma/client/mysql',
      fromEnvVar: null,
    },
    config: {
      engineType: 'library',
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: 'darwin-arm64',
        native: true,
      },
    ],
    previewFeatures: [],
    sourceFilePath: '/Users/laube/workspace/laube/laube-admin-react/packages/server/prisma/schema.prisma',
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: null,
  },
  relativePath: '../..',
  clientVersion: '6.6.0',
  engineVersion: 'f676762280b54cd07c770017ed3711ddde35f37a',
  datasourceNames: ['db'],
  activeProvider: 'mysql',
  postinstall: false,
  inlineDatasources: {
    db: {
      url: {
        fromEnvVar: 'DB_URL',
        value: null,
      },
    },
  },
  inlineSchema:
    'datasource db {\n  provider = "mysql"\n  url      = env("DB_URL")\n}\n\ngenerator client {\n  provider = "prisma-client-js"\n  output   = "./client/mysql"\n}\n\nmodel User {\n  id        String   @id @db.VarChar(20)\n  username  String   @unique @db.VarChar(50)\n  password  String   @db.VarChar(255)\n  realName  String   @map("real_name") @db.VarChar(50)\n  phone     String?  @db.VarChar(20)\n  email     String?  @db.VarChar(100)\n  status    Int      @default(1) @db.TinyInt()\n  remark    String?  @db.VarChar(255)\n  createdAt DateTime @default(now()) @map("created_at")\n  updatedAt DateTime @updatedAt @map("updated_at")\n\n  roles UserRole[]\n\n  @@map("user")\n}\n\nmodel Role {\n  id          String   @id @db.VarChar(20)\n  name        String   @unique @db.VarChar(50)\n  description String?  @db.VarChar(255)\n  status      Int      @default(1) @db.TinyInt()\n  createdAt   DateTime @default(now()) @map("created_at")\n  updatedAt   DateTime @updatedAt @map("updated_at")\n\n  users UserRole[]\n  menus RoleMenu[]\n\n  @@map("role")\n}\n\nmodel UserRole {\n  userId String @db.VarChar(20)\n  roleId String @db.VarChar(20)\n\n  user User @relation(fields: [userId], references: [id])\n  role Role @relation(fields: [roleId], references: [id])\n\n  @@id([userId, roleId])\n  @@map("user_role")\n}\n\nmodel Menu {\n  id        String   @id @db.VarChar(20)\n  type      String   @db.VarChar(20)\n  name      String?  @db.VarChar(50)\n  parentId  String?  @map("parent_id") @db.VarChar(20)\n  path      String?  @db.VarChar(255)\n  component String?  @db.VarChar(255)\n  authCode  String?  @map("auth_code") @db.VarChar(50)\n  order     Int      @default(0)\n  status    Int      @default(1) @db.TinyInt()\n  meta      Json?\n  createdAt DateTime @default(now()) @map("created_at")\n  updatedAt DateTime @updatedAt @map("updated_at")\n\n  roles RoleMenu[]\n\n  @@map("menu")\n}\n\nmodel RoleMenu {\n  roleId String @map("role_id") @db.VarChar(20)\n  menuId String @map("menu_id") @db.VarChar(20)\n\n  role Role @relation(fields: [roleId], references: [id])\n  menu Menu @relation(fields: [menuId], references: [id])\n\n  @@id([roleId, menuId])\n  @@map("role_menu")\n}\n',
  inlineSchemaHash: '31c87ad8ae0b7456cc443c4dc79ac4daaa25fe7569661ee1d0822c74fdebcfbf',
  copyEngine: true,
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse(
  '{"models":{"User":{"dbName":"user","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["20"]],"isGenerated":false,"isUpdatedAt":false},{"name":"username","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["50"]],"isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"realName","dbName":"real_name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["50"]],"isGenerated":false,"isUpdatedAt":false},{"name":"phone","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["20"]],"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["100"]],"isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":["TinyInt",[]],"default":1,"isGenerated":false,"isUpdatedAt":false},{"name":"remark","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"roles","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserRole","nativeType":null,"relationName":"UserToUserRole","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Role":{"dbName":"role","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["20"]],"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["50"]],"isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":["TinyInt",[]],"default":1,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"users","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UserRole","nativeType":null,"relationName":"RoleToUserRole","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"menus","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"RoleMenu","nativeType":null,"relationName":"RoleToRoleMenu","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"UserRole":{"dbName":"user_role","schema":null,"fields":[{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["20"]],"isGenerated":false,"isUpdatedAt":false},{"name":"roleId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["20"]],"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"UserToUserRole","relationFromFields":["userId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Role","nativeType":null,"relationName":"RoleToUserRole","relationFromFields":["roleId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":{"name":null,"fields":["userId","roleId"]},"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Menu":{"dbName":"menu","schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["20"]],"isGenerated":false,"isUpdatedAt":false},{"name":"type","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["20"]],"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["50"]],"isGenerated":false,"isUpdatedAt":false},{"name":"parentId","dbName":"parent_id","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["20"]],"isGenerated":false,"isUpdatedAt":false},{"name":"path","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"component","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["255"]],"isGenerated":false,"isUpdatedAt":false},{"name":"authCode","dbName":"auth_code","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["50"]],"isGenerated":false,"isUpdatedAt":false},{"name":"order","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":0,"isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":["TinyInt",[]],"default":1,"isGenerated":false,"isUpdatedAt":false},{"name":"meta","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Json","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updated_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":true},{"name":"roles","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"RoleMenu","nativeType":null,"relationName":"MenuToRoleMenu","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"RoleMenu":{"dbName":"role_menu","schema":null,"fields":[{"name":"roleId","dbName":"role_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["20"]],"isGenerated":false,"isUpdatedAt":false},{"name":"menuId","dbName":"menu_id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["20"]],"isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Role","nativeType":null,"relationName":"RoleToRoleMenu","relationFromFields":["roleId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"menu","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Menu","nativeType":null,"relationName":"MenuToRoleMenu","relationFromFields":["menuId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":{"name":null,"fields":["roleId","menuId"]},"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}'
)
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DB_URL:
      (typeof globalThis !== 'undefined' && globalThis['DB_URL']) ||
      (typeof process !== 'undefined' && process.env && process.env.DB_URL) ||
      undefined,
  },
})

if (
  (typeof globalThis !== 'undefined' && globalThis['DEBUG']) ||
  (typeof process !== 'undefined' && process.env && process.env.DEBUG) ||
  undefined
) {
  Debug.enable(
    (typeof globalThis !== 'undefined' && globalThis['DEBUG']) ||
      (typeof process !== 'undefined' && process.env && process.env.DEBUG) ||
      undefined
  )
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
