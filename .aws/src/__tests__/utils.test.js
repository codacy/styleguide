'use strict';

const utils = require('../helpers/utils');

test('generate SignIn redirect response', () => {
    const res = utils.generateSignInRedirectResponse(
        'http://localhost/signin.html',
        'http://localhost/index.html');
    expect(res.status).toBe('302');
    expect(res.statusDescription).toBe('SignIn');
    expect(res.headers.location[0].value).toBe(
        'http://localhost/signin.html?redirect_url=' +
        'http://localhost/index.html');
  });

test('generate 401 error response', () => {
  const res = utils.generateResponse('401', 'Error Message');
  expect(res.status).toBe('401');
  expect(res.statusDescription).toBe('Error Message');
});
