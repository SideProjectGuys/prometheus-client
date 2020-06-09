"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prometheus = void 0;
class Prometheus {
    constructor() {
        this.metrics = [];
    }
    getContentType() {
        return 'text/plain; version=0.0.4; charset=utf-8';
    }
    getMetrics() {
        let metrics = '';
        for (const metric of this.metrics) {
            metrics += metric.getMetric() + '\n\n';
        }
        return metrics;
    }
    async start() {
        await this.setup();
        await this.collectMetrics();
        setInterval(() => this.collectMetrics(), 15000);
    }
}
exports.Prometheus = Prometheus;
//# sourceMappingURL=Prometheus.js.map