export const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getItemLocalStorage = (key: string) => {
  return localStorage.getItem(key)
}