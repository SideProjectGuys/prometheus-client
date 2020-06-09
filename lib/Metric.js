"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metric = void 0;
const util_1 = require("./util");
class Metric {
    constructor(opts) {
        this.name = opts.name;
        this.help = opts.help;
    }
    getMetric() {
        const name = util_1.escapeString(this.name);
        const help = `# HELP ${name} ${util_1.escapeString(this.help)}`;
        const type = `# TYPE ${name} ${this.type}`;
        const values = this.getMetricValues();
        return `${help}\n${type}\n${values}`.trim();
    }
}
exports.Metric = Metric;
//# sourceMappingURL=Metric.js.map