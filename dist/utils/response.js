"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.success = void 0;
const success = (data, message = "Success") => {
    return {
        status: "success",
        message,
        data
    };
};
exports.success = success;
const error = (message = "Error", details = null) => {
    return {
        status: "error",
        message,
        details
    };
};
exports.error = error;
