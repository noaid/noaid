/**
 * Created by ximing on 2018/8/6.
 */
'use strict';
const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

exports.isDirectory = (source) => lstatSync(source).isDirectory();
exports.getDirectories = (source) =>
    readdirSync(source)
        .map((name) => join(source, name))
        .filter(exports.isDirectory);
