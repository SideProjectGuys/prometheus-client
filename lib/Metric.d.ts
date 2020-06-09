export interface MetricOptions {
    name: string;
    help: string;
}
export declare abstract class Metric {
    protected type: string;
    protected name: string;
    protected help: string;
    constructor(opts: MetricOptions);
    getMetric(): string;
    protected abstract getMetricValues(): string;
}
