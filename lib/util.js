"use strict";
// Copied from: https://github.com/siimon/prom-client/blob/master/lib/util.js
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeLabelValue = exports.escapeString = exports.hashObject = void 0;
exports.hashObject = (labels) => {
    // We don't actually need a hash here. We just need a string that
    // is unique for each possible labels object and consistent across
    // calls with equivalent labels objects.
    let keys = Object.keys(labels);
    if (keys.length === 0) {
        return '';
    }
    // else
    if (keys.length > 1) {
        keys.sort(); // need consistency across calls
    }
    let hash = '';
    let i = 0;
    const size = keys.length;
    for (; i < size - 1; i++) {
        hash += `${keys[i]}:${labels[keys[i]]},`;
    }
    hash += `${keys[i]}:${labels[keys[i]]}`;
    return hash;
};
exports.escapeString = (str) => str.replace(/\n/g, '\\n').replace(/\\(?!n)/g, '\\\\');
exports.escapeLabelValue = (str) => {
    if (typeof str !== 'string') {
        return str;
    }
    return exports.escapeString(str).replace(/"/g, '\\"');
};
//# sourceMappingURL=util.js.map