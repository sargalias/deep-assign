import each from 'jest-each';
import deepAssign from './index'; // eslint-disable-line

describe('deepAssign', () => {
  each`
      target | source | expected
      ${{}}  | ${{}}  | ${{}}
  `.test(
    'deepAssign called with $target and $source should return $expected and should have the same reference as target',
    ({ target, source, expected }) => {
      const result = deepAssign(target, source);
      expect(result).toEqual(expected);
      expect(result).toBe(target);
    },
  );
});
