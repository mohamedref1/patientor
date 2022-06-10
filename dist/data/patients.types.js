"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthCheckRating = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
    Gender["OTHER"] = "other";
})(Gender = exports.Gender || (exports.Gender = {}));
var HealthCheckRating;
(function (HealthCheckRating) {
    HealthCheckRating[HealthCheckRating["HEALTHY"] = 0] = "HEALTHY";
    HealthCheckRating[HealthCheckRating["LOW_RISK"] = 1] = "LOW_RISK";
    HealthCheckRating[HealthCheckRating["HIGH_RISK"] = 2] = "HIGH_RISK";
    HealthCheckRating[HealthCheckRating["CRITICAL_RISK"] = 3] = "CRITICAL_RISK";
})(HealthCheckRating = exports.HealthCheckRating || (exports.HealthCheckRating = {}));
