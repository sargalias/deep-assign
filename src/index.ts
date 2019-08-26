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
      target[key] = deepAssign(newTarget, value); // eslint-disable-line no-param-reassign
    } else {
      target[key] = value; // eslint-disable-line no-param-reassign
    }
  });
  return target;
};

export default deepAssign;
