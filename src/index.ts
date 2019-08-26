export interface Obj {
  [k: string]: any;
}

const deepCopyObj = (obj?: Obj) => {
  if (obj === undefined) {
    return undefined;
  }

  const result: Obj = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (isObjectSubtype(value)) {
      if (isStrictObject(value)) {
        result[key] = deepCopyObj(value);
      }
    } else {
      result[key] = value;
    }
  });
  return result;
};

const isObjectSubtype = (value: any): boolean =>
  typeof value === 'object' && value !== null;

const isStrictObject = (value: any): boolean => value.constructor === Object;

export { deepCopyObj as default };
