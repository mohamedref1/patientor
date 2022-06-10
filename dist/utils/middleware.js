"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
const requestLogger = (req, _res, next) => {
    logger_1.default.info('Method: ', req.method);
    logger_1.default.info('Path: ', req.path);
    logger_1.default.info('Body: ', req.body);
    next();
};
const unkownEndPoint = (_req, res) => {
    res.status(404).json('unkown endpoint');
};
const errorHandler = (error, _req, res, next) => {
    if (error instanceof Error && typeof error.message === 'string') {
        res.status(400).json({ error: error.message });
        return;
    }
    next();
};
exports.default = {
    requestLogger,
    unkownEndPoint,
    errorHandler
};
