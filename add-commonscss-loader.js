/**
 * Created by yeanzhi on 16/7/17.
 */
'use strict';
const path = require('path');
module.exports = function(source) {
    return `@import '${path.join(__dirname, 'client/styles', 'var.scss')}';
            ${source}`;
};
