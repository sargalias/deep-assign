import each from 'jest-each';
import deepAssign from './index'; // eslint-disable-line

describe('deepAssign, correct result and references', () => {
  each`
      target | source                   | expected
      ${{}}  | ${{}}                    | ${{}}
      ${{}}  | ${{ a: 1, b: 2 }}        | ${{ a: 1, b: 2 }}
      ${{ a: 1 }}  | ${{ b: 2, c: 3 }}  | ${{ a: 1, b: 2, c: 3 }}
      ${{ a: 1 }}  | ${{ a: 2, b: 3 }}  | ${{ a: 2, b: 3 }}
  }}
  `.test(
    'deepAssign called with $target and $source should return $expected',
    ({ target, source, expected }) => {
      const result = deepAssign(target, source);
      expect(result).toEqual(expected);
      expect(result).toBe(target);
    },
  );

  test('flat target with nested source', () => {
    const target = { a: 1 };
    const source = { b: 2, c: { d: 4, e: 5 } };
    const expected = { a: 1, b: 2, c: { d: 4, e: 5 } };

    const result = deepAssign(target, source);

    expect(result).toEqual(expected);
    expect(result).toBe(target);
    expect(result.c).not.toBe(source.c);
  });

  test('nested target and source with the same nested property', () => {
    const target = {
      a: 1,
      b: {
        c: 2,
        d: 3,
      },
    };
    const source = {
      b: {
        d: 4,
        e: 5,
      },
      f: 7,
    };
    const expected = {
      a: 1,
      b: {
        c: 2,
        d: 4,
        e: 5,
      },
      f: 7,
    };

    const result = deepAssign(target, source);

    expect(result).toEqual(expected);
    expect(result).toBe(target);
    expect(result.b).toBe(target.b);
  });
});
