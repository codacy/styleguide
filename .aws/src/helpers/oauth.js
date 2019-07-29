'use strict';

const {OAuth2Client} = require('google-auth-library');
const utils = require('./utils');

exports.getError = function(code, message){
  const err = new Error();
  err.httpCode = code;
  err.message = message;
  return err;
}

exports.verify = async function(client_id, token, accepted_domain) {
    let ticket;
    try {
        const client = new OAuth2Client(client_id);
        ticket = await client.verifyIdToken({
            idToken: token,
            audience: client_id + '.apps.googleusercontent.com'
        });
    } catch (err) {
        utils.log('ERROR', err);
        throw getError('401', err.message);
    }
    utils.log('ticket', ticket);
    if (ticket.payload.hd !== accepted_domain) {
        throw getError('403', 'Forbidden!');
    }
    return true;
}
