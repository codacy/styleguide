'use strict';

exports.generateRedirectResponse = function (redirectUrl){
    /* URI encode the original request to be sent as redirect_url in query params */
    return {
        status: '302',
        statusDescription: 'Redirect',
        headers: {
            location: [{
                key: 'Location',
                value: `${redirectUrl}`,
            }],
        },
    };
}

exports.generateSignInRedirectResponse = function (signInUri, redirectUrl){
    /* URI encode the original request to be sent as redirect_url in query params */
    return {
        status: '302',
        statusDescription: 'SignIn',
        headers: {
            location: [{
                key: 'Location',
                value: `${signInUri}?redirect_url=${redirectUrl}`,
            }],
        },
    };
}

exports.generateResponse = function(code, descr) {
  return {
      status: code,
      statusDescription: descr,
  };
}

exports.parseCookies = function(headers) {
    const parsedCookie = {};
    if (headers.cookie) {
        headers.cookie[0].value.split(';').forEach((cookie) => {
            if (cookie) {
                const parts = cookie.split('=');
                parsedCookie[parts[0].trim()] = parts[1].trim();
            }
        });
    }
    return parsedCookie;
  }

exports.log = function(label, json){
    console.log(`[${label}]\n` + JSON.stringify(json));
}
