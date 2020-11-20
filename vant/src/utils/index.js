export function setStorage(name, val) {
  localStorage.setItem(name, JSON.stringify(val))
}

/**
 * [export description]
 *
 * @param   {[type]}  name   [name string]
 * @param   {[type]}  parse  是否转换 true是，false否
 *
 * @return  {[type]}         any
 */
export function getStorage(name, parse = false) {
  if (parse) {
    return (
      (localStorage.getItem(name) && JSON.parse(localStorage.getItem(name))) ||
      null
    )
  }

  return localStorage.getItem(name)
}

export function clearStorage() {
  localStorage.clear()
}

export function removeStorage(name) {
  localStorage.remove(name)
}
