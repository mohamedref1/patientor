"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entryParser = exports.patientParser = void 0;
const patients_types_1 = require("../data/patients.types");
const helper_1 = require("./helper");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const assertNever = (_value) => {
    throw new Error('invalid entry type');
};
const patientParser = (d) => {
    if (!(0, helper_1.isString)(d.id) || d.id === '') {
        throw new Error('Parser Error: missing or invalid id');
    }
    if (!(0, helper_1.isString)(d.name) || d.name === '') {
        throw new Error('Parser Error: missing or invalid name');
    }
    if (!(0, helper_1.isString)(d.dateOfBirth) || !(0, helper_1.isDate)(d.dateOfBirth)) {
        throw new Error('Parser Error: missing or invalid date of birth');
    }
    if (!(0, helper_1.isString)(d.ssn) || d.ssn === '') {
        throw new Error('Parser Error: missing or invalid ssn');
    }
    if (!(0, helper_1.isString)(d.occupation) || d.occupation === '') {
        throw new Error('Parser Error: missing or invalid occupation');
    }
    if (!(0, helper_1.isString)(d.gender) || !(0, helper_1.isGender)(d.gender)) {
        throw new Error('Parser Error: missing or invalid gender');
    }
    if (!(0, helper_1.isValidEntries)(d.entries)) {
        throw new Error('Parser Error: missing or invalid entries');
    }
    const gender = d.gender === 'male'
        ? patients_types_1.Gender.MALE
        : d.gender === 'female'
            ? patients_types_1.Gender.FEMALE
            : patients_types_1.Gender.OTHER;
    return {
        id: d.id,
        name: d.name,
        dateOfBirth: d.dateOfBirth,
        ssn: d.ssn,
        occupation: d.occupation,
        entries: d.entries,
        gender
    };
};
exports.patientParser = patientParser;
const entryParser = (d) => {
    var _a;
    if (!(0, helper_1.isValidEntry)(d)) {
        throw new Error('Parser Error: missing or invalid entry');
    }
    if (!(0, helper_1.isString)(d.id) ||
        !(0, helper_1.isString)(d.type) ||
        !(0, helper_1.isString)(d.description) ||
        !(0, helper_1.isDate)(d.date) ||
        !(0, helper_1.isString)(d.specialist) ||
        (d.diagnosisCodes && !(d.diagnosisCodes instanceof Array)) ||
        (d.diagnosisCodes && !(d.diagnosisCodes.every((d) => (0, helper_1.isString)(d))))) {
        throw new Error('Parser Error: invalid entry');
    }
    switch (d.type) {
        case 'Hospital':
            if (!d.discharge ||
                !(0, helper_1.isDate)(d.discharge.date) ||
                !(0, helper_1.isString)(d.discharge.criteria)) {
                throw new Error('Parser Error: invalid hospital entry');
            }
            return {
                id: d.id,
                type: d.type,
                description: d.description,
                date: d.date,
                specialist: d.specialist,
                diagnosisCodes: d.diagnosisCodes,
                discharge: d.discharge
            };
        case 'HealthCheck':
            if (d.healthCheckRating === undefined ||
                !(Object.values(patients_types_1.HealthCheckRating).includes(d.healthCheckRating))) {
                throw new Error('Parser Error: invalid health check entry');
            }
            return {
                id: d.id,
                type: d.type,
                description: d.description,
                date: d.date,
                specialist: d.specialist,
                diagnosisCodes: d.diagnosisCodes,
                healthCheckRating: d.healthCheckRating
            };
        case 'OccupationalHealthcare':
            if (!(0, helper_1.isString)(d.employerName) ||
                !d.sickLeave ||
                !(0, helper_1.isDate)((_a = d.sickLeave) === null || _a === void 0 ? void 0 : _a.startDate) ||
                !(0, helper_1.isDate)(d.sickLeave.endDate)) {
                throw new Error('Parser Error: invalid occupational healthcare entry');
            }
            return {
                id: d.id,
                type: d.type,
                description: d.description,
                date: d.date,
                specialist: d.specialist,
                diagnosisCodes: d.diagnosisCodes,
                employerName: d.employerName,
                sickLeave: d.sickLeave
            };
        default:
            return assertNever(d);
    }
};
exports.entryParser = entryParser;
