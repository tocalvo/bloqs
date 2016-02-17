//--IN PROGRESS--//

/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    StatementInputBloq = require('./../../statementInputBloq');

/**
 * Bloq name: forAdvanced-v2
 *
 * Bloq type: Statement-Input
 *
 * Description: It repeats the following code, iterating a specific variable
 *              from and until two given values, adding or subtracting a
 *              determined quantity in each iteration.
 *
 * Return type: none
 */

var forAdvancedV2 = _.merge(_.clone(StatementInputBloq, true), {

    name: 'forAdvanced-v2',
    bloqClass: 'bloq-for',
    content: [
        [{
            alias: 'text',
            value: 'bloq-for-count'
        }, {
            bloqInputId: 'VAR',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'bloq-for-from'
        }, {
            bloqInputId: 'INIT',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'bloq-for-to'
        }, {
            bloqInputId: 'FINAL',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            id: 'MODE',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-for-add',
                value: '+'
            }, {
                label: 'bloq-for-subtract',
                value: '-'
            }]
        }, {
            bloqInputId: 'ADD',
            alias: 'bloqInput',
            acceptType: 'all'
        }, {
            alias: 'text',
            value: 'bloq-for-exec'
        }]
    ],
    code: '\'for({VAR}={INIT};{VAR}\' + (\'{MODE}\' === \'+\'?\'<=\':\'>=\' ) + \'{FINAL};{VAR}{MODE}={ADD}){{STATEMENTS}}\''
});

utils.generateBloqInputConnectors(forAdvancedV2);

module.exports = forAdvancedV2;