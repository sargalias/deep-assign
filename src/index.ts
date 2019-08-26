export interface Obj {
  [k: string]: any;
}

interface DeepAssign {
  (target: Obj, source: Obj): Obj;
}

// eslint-disable-next-line
const deepAssign: DeepAssign = (target, source) => {
  Object.entries(source).forEach(([key, value]) => {
    if (typeof value === 'object' && value !== null) {
      const newTarget = typeof target[key] === 'object' ? target[key] : {};
      target[key] = deepAssign(newTarget, value);
    } else {
      target[key] = value;
    }
  });
  return target;
};

export default deepAssign;
