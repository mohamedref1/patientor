"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = __importDefault(require("../data/patients"));
const getPatients = () => {
    return patients_1.default;
};
const getToDisplayPatients = () => {
    return patients_1.default.map((p) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const obj = p;
        delete obj.ssn;
        return obj;
    });
};
const findPatient = (id) => {
    const patient = patients_1.default.find((patient) => patient.id === id);
    if (!patient) {
        throw new Error(`User Error: cannot find an entry matches the given id: ${id}`);
    }
    return patient;
};
const addNewPatient = (patient) => {
    patients_1.default.push(patient);
    return {
        id: patients_1.default[patients_1.default.length - 1].id,
        name: patients_1.default[patients_1.default.length - 1].name,
        dateOfBirth: patients_1.default[patients_1.default.length - 1].dateOfBirth,
        occupation: patients_1.default[patients_1.default.length - 1].occupation,
        gender: patients_1.default[patients_1.default.length - 1].gender,
        entries: []
    };
};
const addNewEntry = (id, entry) => {
    const patientIdx = patients_1.default.findIndex((p) => p.id === id);
    if (patientIdx === -1) {
        throw new Error('Service Error: patient not found');
    }
    patients_1.default[patientIdx].entries = patients_1.default[patientIdx].entries.concat(entry);
    return entry;
};
exports.default = {
    getPatients,
    getToDisplayPatients,
    findPatient,
    addNewPatient,
    addNewEntry
};
