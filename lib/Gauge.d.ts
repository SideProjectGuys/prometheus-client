import { Metric, MetricOptions } from './Metric';
interface GaugeOptions extends MetricOptions {
}
export declare class Gauge extends Metric {
    private values;
    constructor(opts: GaugeOptions);
    set(labels: {
        [key: string]: any;
    }, value: number): void;
    getMetricValues(): string;
}
export {};
