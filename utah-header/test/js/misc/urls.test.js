// @ts-check
import { describe, expect, test } from 'vitest';
import environments from '../../../src/js/enumerations/environments';
import { generateURL } from '../../../src/js/misc/urls';

describe('generateURL', () => {
  test('some urls', () => {
    expect(generateURL({
      domain: 'https://header-test.utah.gov',
      path: '/home/landing/page/index.html',
      params: [],
      env: environments.UNITTEST,
    })).toBe('https://header-test.utah.gov/home/landing/page/index.html?e=unittest');
  });

  test('blank params', () => {
    expect(generateURL({
      domain: 'https://header-test.utah.gov',
      path: '/home/landing/page/index.html',
      env: environments.UNITTEST,
    })).toBe('https://header-test.utah.gov/home/landing/page/index.html?e=unittest');

    expect(generateURL({
      domain: 'https://header-test.utah.gov',
      path: '/home/landing/page/index.html',
      env: environments.UNITTEST,
    })).toBe('https://header-test.utah.gov/home/landing/page/index.html?e=unittest');

    expect(generateURL({
      domain: 'https://header-test.utah.gov',
      path: '/home/landing/page/index.html',
      params: undefined,
      env: environments.UNITTEST,
    })).toBe('https://header-test.utah.gov/home/landing/page/index.html?e=unittest');

    expect(generateURL({
      domain: 'https://header-test.utah.gov',
      path: '/home/landing/page/index.html',
      params: [],
      env: environments.UNITTEST,
    })).toBe('https://header-test.utah.gov/home/landing/page/index.html?e=unittest');
  });

  test('empty params', () => {
    expect(generateURL({
      domain: 'https://header-test.utah.gov',
      path: '/home/landing/page/index.html',
      params: ['', '', '', ''],
      env: environments.UNITTEST,
    })).toBe('https://header-test.utah.gov/home/landing/page/index.html?e=unittest');
  });

  test('has params', () => {
    expect(generateURL({
      domain: 'https://header-test.utah.gov',
      path: '/home/landing/page/index.html',
      params: ['param1', 'param2', '', 'param3'],
      env: environments.UNITTEST,
    })).toBe('https://header-test.utah.gov/home/landing/page/index.html?param1&param2&param3&e=unittest');
  });

  test('PROD w/ param', () => {
    expect(generateURL({
      domain: 'https://header-test.utah.gov',
      path: '/home/landing/page/index.html',
      params: ['param1'],
      env: environments.PROD,
    })).toBe('https://header-test.utah.gov/home/landing/page/index.html?param1');
  });

  test('PROD w/o param', () => {
    expect(generateURL({
      domain: 'https://header-test.utah.gov',
      path: '/home/landing/page/index.html',
      env: environments.PROD,
    })).toBe('https://header-test.utah.gov/home/landing/page/index.html');
  });
});
