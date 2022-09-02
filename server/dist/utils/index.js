"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateToISOString = void 0;
const formatDateToISOString = (date) => {
    const dateISOFormat = date.toISOString();
    return dateISOFormat;
};
exports.formatDateToISOString = formatDateToISOString;
