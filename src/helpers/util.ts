export function isDate(val: unknown): val is Date {
    return Object.prototype.toString.call(val) === '[Object Date]';
}

export function isObject(val: unknown): val is Object {
    return val !== null && typeof val === 'object';
}

export function isPlainObject(val: any): val is Object {
    return Object.prototype.toString.call(val) === '[Object Object]'
}