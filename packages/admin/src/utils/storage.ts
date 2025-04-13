export const getStorageValue = (key: string) => {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : null
}

export const setStorageValue = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const removeStorageValue = (key: string) => {
  localStorage.removeItem(key)
}

export const clearStorage = () => {
  localStorage.clear()
}
