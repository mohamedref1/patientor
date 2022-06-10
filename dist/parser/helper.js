"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEntries = exports.isValidEntry = exports.isGender = exports.isDate = exports.isString = void 0;
const patients_types_1 = require("../data/patients.types");
const isString = (value) => {
    return (value !== undefined &&
        (typeof value === 'string' ||
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            value instanceof String));
};
exports.isString = isString;
const isDate = (value) => {
    return Boolean(Date.parse(value));
};
exports.isDate = isDate;
const isGender = (value) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Object.values(patients_types_1.Gender).includes(value);
};
exports.isGender = isGender;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isValidEntry = (value) => {
    const keys = [
        'type',
        'discharge',
        'id',
        'description',
        'date',
        'specialist',
        'diagnosisCodes',
        'employerName',
        'sickLeave',
        'healthCheckRating'
    ];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Object.keys(value).every((k) => keys.includes(k));
};
exports.isValidEntry = isValidEntry;
const isValidEntries = (value) => {
    if (!(value instanceof Array)) {
        return false;
    }
    return value.every((v) => isValidEntry(v));
};
exports.isValidEntries = isValidEntries;
