'use strict';

jest.mock('../helpers/oauth');

const main = require('../main');
const mocked_oauth_helper = require('../helpers/oauth');
const oauth_helper = jest.requireActual('../helpers/oauth');

var BASE_EVENT = {
    Records: [
      {
        cf: {
          config: {
            distributionDomainName: "xxx.cloudfront.net",
            distributionId: "XXXXX",
            eventType: "viewer-request",
            requestId: "xxxx=="
          },
          request: {
            clientIp: "10.10.10.10",
            headers: {
              host: [{ key: "Host", value: "handbook.codacy.org" }],
              accept: [
                {
                  key: "Accept",
                  value: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
                }
              ],
              cookie: [
                {
                  key: "Cookie",
                  value: "G_ENABLED_IDPS= ; G_AUTHUSER_H=0; id_token=xxx.xxx.xxx-xxx-xxx-xxx-xxx"
                }
              ]
            },
            method: "GET",
            querystring: "",
            uri: "/"
          }
        }
      }
    ]
  }

test('valid token returns the successfully', done => {
    const origin_request = BASE_EVENT.Records[0].cf.request;

    function callback(context, response) {
        expect(response.headers.host[0].value).toBe(
            origin_request.headers.host[0].value);
        expect(response.uri).toBe(origin_request.uri);
        done();
    }

    mocked_oauth_helper.verify.mockReturnValue(Promise.resolve(true));
    main.auth(BASE_EVENT, null, callback);
});


test('non-valid token returns unauthorized and redirect to signin', done => {
    const origin_request = BASE_EVENT.Records[0].cf.request;

    function callback(context, response) {
        expect(response.status).toBe("302");
        expect(response.statusDescription).toBe('SignIn');
        expect("sigin.html").toEqual(expect.not.stringContaining(response.headers.location[0].value));
        done();
    }

    mocked_oauth_helper.verify.mockReturnValue(Promise.reject(
      oauth_helper.getError('401', "Not a valid token")));
    BASE_EVENT.Records[0].cf.request.uri="/index.html"
    main.auth(BASE_EVENT, null, callback);
});


test('forbidden user returns redirect to signin with forbiden', done => {
    const origin_request = BASE_EVENT.Records[0].cf.request;

    function callback(context, response) {
        expect(response.status).toBe("302");
        expect(response.statusDescription).toBe('Redirect');
        expect(response.headers.location[0].value).toBe("/signin.html?forbidden=true");
        done();
    }

    mocked_oauth_helper.verify.mockReturnValue(Promise.reject(
      oauth_helper.getError('403', "Forbiden")));
    BASE_EVENT.Records[0].cf.request.uri="/index.html"
    main.auth(BASE_EVENT, null, callback);
});
