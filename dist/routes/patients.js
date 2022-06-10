"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const patients_1 = require("../parser/patients");
const patients_2 = __importDefault(require("../services/patients"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    const patients = patients_2.default.getToDisplayPatients();
    res.json(patients);
});
router.get('/:id', (req, res) => {
    const patient = patients_2.default.findPatient(req.params.id);
    res.json(patient);
});
router.post('/', (req, res) => {
    const data = req.body;
    data.id = (0, uuid_1.v4)();
    data.entries = data.entries ? data.entries : [];
    const patient = (0, patients_1.patientParser)(data);
    const newPatient = patients_2.default.addNewPatient(patient);
    res.json(newPatient);
});
router.post('/:id/entries', (req, res) => {
    const patientId = req.params.id;
    const data = req.body;
    data.id = (0, uuid_1.v4)();
    const entry = (0, patients_1.entryParser)(data);
    const newEntry = patients_2.default.addNewEntry(patientId, entry);
    res.json(newEntry);
});
exports.default = router;
