import each from 'jest-each';
import deepCopyObj, { Obj } from './index'; // eslint-disable-line no-unused-vars

describe('deepCopyObj', () => {
  describe('equality tests', () => {
    each`
      obj
      ${undefined}
      ${{}}
      ${{ a: 5, b: 7 }}
      ${{ a: 5, b: undefined, c: null }}
      ${{ a: 5, b: 7, c: {} }}
      ${{ a: 5, b: null, c: undefined, d: { a: 5, b: null, c: undefined } }}
      ${{
        a: { a: 5, b: null, c: undefined, d: { a: 1, b: null, c: undefined } },
        b: null,
        c: undefined,
        d: { a: 5, b: null, c: undefined, d: { a: 1, b: null, c: undefined } },
      }}
    `.test('deepCopyObj() called with $obj should return $obj', ({ obj }) => {
      const result = deepCopyObj(obj);
      expect(result).toEqual(obj);
    });

    test('other subtypes of Object should be ignored', () => {
      const obj: Obj = {
        a: { a: 5, b: null, c: undefined, d: { a: 1, b: null, c: undefined } },
        f: new Date(),
        e: [1, 2, 3],
        d: { a: 5, b: null, c: undefined, d: { a: 1, b: null, c: undefined } },
      };
      const expected: Obj = {
        a: { a: 5, b: null, c: undefined, d: { a: 1, b: null, c: undefined } },
        d: { a: 5, b: null, c: undefined, d: { a: 1, b: null, c: undefined } },
      };

      const result = deepCopyObj(obj);

      expect(result).toEqual(expected);
    });

    test('should only copy own properties', () => {
      const mockProto = {
        protoProperty: 10,
      };
      const obj: Obj = Object.create(mockProto);
      obj.a = 5;
      obj.b = 7;

      const result = deepCopyObj(obj);

      expect(result).toEqual({ a: 5, b: 7 });
    });
  });

  describe('reference tests', () => {
    test('result of {} should not be the same object', () => {
      const obj = {};
      const result = deepCopyObj(obj);
      expect(result).not.toBe(obj);
    });

    test('result of nested object (one level) should not have the same objects in references', () => {
      const nestedObj = {
        nestedA: 1,
        nestedB: 2,
      };
      const obj = {
        a: 3,
        b: 4,
        nestedObj,
      };

      const result = deepCopyObj(obj);

      expect(result).not.toBe(obj);
      expect(result.nestedObj).not.toBe(nestedObj);
    });

    test('result of deeply nested object should not have the same objects in references', () => {
      const nestedObj1: Obj = {
        nestedA: 1,
        nestedB: null,
      };

      const nestedObj3: Obj = {
        nestedA: 1,
        nestedB: undefined,
      };
      const nestedObj2: Obj = {
        nestedA: 1,
        nestedB: 2,
        nestedObj3,
      };

      const obj = {
        a: 3,
        b: 4,
        nestedObj1,
        nestedObj2,
      };

      const result = deepCopyObj(obj);

      expect(result).not.toBe(obj);
      expect(result.nestedObj1).not.toBe(nestedObj1);
      expect(result.nestedObj2).not.toBe(nestedObj2);
      expect(result.nestedObj2.nestedObj3).not.toBe(nestedObj3);
    });
  });
});
