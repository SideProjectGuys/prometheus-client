"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gauge = void 0;
const Metric_1 = require("./Metric");
const util_1 = require("./util");
class Gauge extends Metric_1.Metric {
    constructor(opts) {
        super(opts);
        this.type = 'gauge';
        this.values = new Map();
    }
    set(labels, value) {
        const hash = util_1.hashObject(labels);
        this.values.set(hash, { labels, value });
    }
    getMetricValues() {
        let values = '';
        for (const val of this.values.values()) {
            let labels = '';
            for (const key of Object.keys(val.labels)) {
                labels += `${key}="${util_1.escapeLabelValue(val.labels[key])}",`;
            }
            let metricName = this.name;
            if (labels) {
                metricName += `{${labels.substring(0, labels.length - 1)}}`;
            }
            const line = `${metricName} ${val.value}`;
            values += `${line.trim()}\n`;
        }
        return values;
    }
}
exports.Gauge = Gauge;
//# sourceMappingURL=Gauge.js.map