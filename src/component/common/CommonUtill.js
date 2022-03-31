export function isEmpty(obj) {
  return obj === null || obj === undefined || obj === "undefined" || obj === "";
}

export function isNotEmpty(obj) {
  return !isEmpty(obj);
}

export function isZero(obj) {
  return obj === 0 || obj === "0" || obj === "";
}

export function isNotZero(obj) {
  return !isZero(obj);
}

export function getJsonValue(keys, obj, defaultValue) {
  if (isEmpty(obj)) {
    return defaultValue;
  }
  if (Array.isArray(keys) && keys.length > 1) {
    return getJsonValue(keys.splice(1), obj[keys[0]]);
  } else {
    return obj[keys];
  }
}
