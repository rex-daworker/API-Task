"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.success = void 0;
const success = (data, message = "Success") => ({
    status: "success",
    message,
    data
});
exports.success = success;
const error = (message = "Error", details = null) => ({
    status: "error",
    message,
    details
});
exports.error = error;
