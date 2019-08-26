import deepAssign from './index'; // eslint-disable-line

describe('deepAssign', () => {
  test('should return empty object when called with {}, {}', () => {
    const target = {};
    const source = {};

    const result = deepAssign(target, source);

    expect(result).toEqual({});
  });

  test('return object should be the target object', () => {
    const target = {};
    const source = {};

    const result = deepAssign(target, source);

    expect(result).toBe(target);
  });
});
