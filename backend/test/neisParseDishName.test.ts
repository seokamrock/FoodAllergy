import assert from 'node:assert/strict';
import test from 'node:test';
import { parseDishName } from '../src/services/neis';

test('removes NEIS (N) markers while preserving allergy numbers', () => {
  const dishes = parseDishName('비빔밥(N) (5.6.13.16)<br/>깍두기(N) (9)');

  assert.deepEqual(dishes, [
    { name: '비빔밥', allergens: [5, 6, 13, 16] },
    { name: '깍두기', allergens: [9] },
  ]);
});
