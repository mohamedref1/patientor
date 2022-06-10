"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("./helper");
const diagnosisParser = (d) => {
    if (!(0, helper_1.isString)(d.code) || d.code === '') {
        throw new Error('Parser Error: missing or invalid diagonse code');
    }
    if (!(0, helper_1.isString)(d.name) || d.name === '') {
        throw new Error('Parser Error: missing or invalid diagonse name');
    }
    if (d.latin !== undefined && (!(0, helper_1.isString)(d.latin) || d.latin === '')) {
        throw new Error('Parser Error: invalid diagonse latin');
    }
    return {
        code: d.code,
        name: d.name,
        latin: d.latin
    };
};
exports.default = diagnosisParser;
