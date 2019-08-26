interface Obj {
  [k: string]: any;
}

interface DeepAssign {
  (target: Obj, source: Obj): Obj;
}

// eslint-disable-next-line
const deepAssign: DeepAssign = (target, source) => {
  return Object.assign(target, source);
};

export default deepAssign;
