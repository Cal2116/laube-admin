export enum ResponseCode {
  SUCCESS = 200,
  ERROR = -1,
}

export enum ResponseMessage {
  SUCCESS = '操作成功',
  ERROR = '操作失败',
}

export enum EnableStatus {
  ENABLE = 1,
  DISABLE = 0,
}

export enum StorageKey {
  ACCESS_TOKEN = 'accessToken',
  USER_INFO = 'userInfo',
}

export enum MenuType {
  CATALOG = 'catalog',
  MENU = 'menu',
  BUTTON = 'button',
}
