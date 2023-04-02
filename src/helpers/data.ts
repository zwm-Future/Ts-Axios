import { isPlainObject } from './util'

export function transformRequest(data: unknown): unknown | string {
    if (isPlainObject(data)) {
        return JSON.stringify(data);
    }
    return data;
}