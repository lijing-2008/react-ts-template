class LocalCache {
  //增加缓存条目
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  //查找
  getCache(key: string) {
    const val = window.localStorage.getItem(key)
    if (val) {
      return JSON.parse(val)
    } else {
      return null
    }
  }

  //删除缓存
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  //清空缓存
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
