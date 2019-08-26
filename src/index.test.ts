import deepAssign from './index'; // eslint-disable-line

describe('deepAssign', () => {
  test('should return empty object when called with {}, {}', () => {
    const target = {};
    const source = {};

    const result = deepAssign(target, source);

    expect(result).toEqual({});
  });
});
