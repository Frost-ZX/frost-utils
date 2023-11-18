import {
  getCommonDateTime,
  getHEXColor,
  isArray,
  isObject,
  toBroadcastAddress,
} from '../common/index.js';

test(`getCommonDateTime() => yyyy-MM-dd HH:mm:ss`, () => {
  expect(getCommonDateTime()).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/);
});

test(`getHEXColor() => /^#[0-9A-F]{6}$/`, () => {
  expect(getHEXColor()).toMatch(/^#[0-9A-F]{6}$/);
});

test(`isArray([]) => true`, () => {
  expect(isArray([])).toBe(true);
});

test(`isObject({}) => true`, () => {
  expect(isObject({})).toBe(true);
});

test(`toBroadcastAddress('192.168.1.100', '255.255.255.0') => 192.168.1.255`, () => {
  expect(toBroadcastAddress('192.168.1.100', '255.255.255.0')).toBe('192.168.1.255');
});
