const _toString = Object.prototype.toString

export function isString(obj: any): boolean {
  return _toString.call(obj) === '[object String]'
}

export function isNumber(obj: any): boolean {
  return _toString.call(obj) === '[object Number]'
}

export function isObject(obj: any): boolean {
  return _toString.call(obj) === '[object Object]'
}

export function isArray(obj: any): boolean {
  return _toString.call(obj) === '[object Array]'
}

export function isBoolean(obj: any): boolean {
  return _toString.call(obj) === '[object Boolean]'
}

export function isDate(obj: any): boolean {
  return _toString.call(obj) === '[object Date]'
}

export function isRegExpArray(obj: any): boolean {
  return _toString.call(obj) === '[object RegExpArray]'
}

export function isFunction(obj: any): boolean {
  return _toString.call(obj) === '[object Function]'
}

export function isNull(obj: any): boolean {
  return _toString.call(obj) === '[object Null]'
}

export function isUndefined(obj: any): boolean {
  return _toString.call(obj) === '[object Undefined]'
}

export function isPromise(obj: any): boolean {
  return _toString.call(obj) === '[object Promise]'
}

export function isBlank(obj: any): boolean {
  return isUndefined(obj) || isNull(obj)
}
