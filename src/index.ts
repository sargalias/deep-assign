interface Obj {
  [k: string]: any;
}

interface DeepAssign {
  (target: Obj, source: Obj): Obj;
}

// eslint-disable-next-line
const deepAssign: DeepAssign = (target, source) => {
  Object.entries(source).forEach(([key, value]) => {
    if (typeof value === 'object') {
      target[key] = deepAssign({}, value);
    } else {
      target[key] = value;
    }
  });
  return target;
};

export default deepAssign;
