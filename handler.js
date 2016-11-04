'use strict';
require('dotenv').config();


var authorize = require('./authorize');

module.exports.authorize = function(event, context, callback) {
    authorize( event )
    .then( context.succeed )
    .catch( err => {
      if ( ! err ) context.fail( "Unhandled error case" );
      context.fail( err );
    });
};


