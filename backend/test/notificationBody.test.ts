import assert from 'node:assert/strict';
import test from 'node:test';
import { buildNotificationBody } from '../src/jobs/scheduler';

test('puts allergy warning before the daily meal summary in push bodies', () => {
  const body = buildNotificationBody('달걀찜', '쌀밥, 미역국');

  assert.equal(body, '알레르기 유의 메뉴: 달걀찜 | 당일 식단: 쌀밥, 미역국');
  assert.ok(body.indexOf('알레르기 유의 메뉴') < body.indexOf('당일 식단'));
});
