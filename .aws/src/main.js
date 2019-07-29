"use strict";

const GOOGLE_CLIENT_ID = '170551589177-80828028farb3dbecq8rnrnvveif5gk8';
const ACCEPTED_DOMAIN =  'codacy.com';

const oauth_helper = require("./helpers/oauth");
const utils = require("./helpers/utils");

exports.auth = function(event, context, callback) {
  utils.log("auth", event);
  utils.log("context", context);
  utils.log("process.env", process.env);

  const signInUri = "/signin.html";

  const cfrequest = event.Records[0].cf.request;
  const headers = cfrequest.headers;
  const parsedCookies = utils.parseCookies(headers);
  const uri = cfrequest.uri;
  const currentEncodedUrl = encodeURIComponent(`https://${headers.host[0].value}${uri}`);

  if ([signInUri].includes(uri)) {
    utils.log("RESPONSE", cfrequest);
    callback(null, cfrequest);
    return;
  }

  /* Check for session-id in cookie, if present then proceed with request */
  if (parsedCookies && parsedCookies["id_token"]) {
    const token = parsedCookies["id_token"];
    utils.log("auth", { token: token });
    oauth_helper
      .verify(GOOGLE_CLIENT_ID ,token, ACCEPTED_DOMAIN)
      .then(() => {
        utils.log("auth", { msg: "Successful verification" });
        delete cfrequest.headers.authorization;
        utils.log("RESPONSE", cfrequest);
        callback(null, cfrequest);
      })
      .catch((err) => {
        if (err.httpCode == "401") {
          const response = utils.generateSignInRedirectResponse(signInUri, currentEncodedUrl);
          utils.log("RESPONSE", response);
          callback(null, response);
        } else {
          const response = utils.generateRedirectResponse(signInUri.concat("?forbidden=true"));
          utils.log("RESPONSE", response);
          callback(null, response);
        }
      });
    return;
  }

  utils.log("auth", { msg: "no auth header" });
  const response = utils.generateSignInRedirectResponse(signInUri, currentEncodedUrl);
  utils.log("RESPONSE", response);
  callback(null, response);
};
