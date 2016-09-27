/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementBloq = require('./../../statementBloq');

/**
* Bloq name: botbloqVehicleStop
*
* Bloq type: Statement
*
* Description: Move the vehicle forward
*
*/

var botbloqVehicleStop = _.merge(_.clone(StatementBloq, true), {

    name: 'botbloqVehicleStop',
    bloqClass: 'bloq-botbloq-vehicle-stop',
    content: [
        [{
            alias: 'text',
            value: 'Parar'
        }]
    ],
    code: '',
    python: {
        libraries:['botbloqVehicle'],
        needInstanceOf:[{
            name: 'vehicle',
            type: 'BotbloqVehicle'
        }],
        codeLines: [{
            code: 'botbloqVehicle.parar()'
        }]
    }
});

utils.generateBloqInputConnectors(botbloqVehicleStop);

module.exports = botbloqVehicleStop;
