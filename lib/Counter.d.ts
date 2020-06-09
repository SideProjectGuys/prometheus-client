import { Metric, MetricOptions } from './Metric';
interface CounterOptions extends MetricOptions {
}
export declare class Counter extends Metric {
    private values;
    constructor(opts: CounterOptions);
    set(labels: {
        [key: string]: any;
    }, value: number): void;
    getMetricValues(): string;
}
export {};
