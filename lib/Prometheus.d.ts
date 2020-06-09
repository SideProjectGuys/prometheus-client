import { Metric } from './Metric';
export declare abstract class Prometheus {
    protected metrics: Metric[];
    getContentType(): string;
    getMetrics(): string;
    start(): Promise<void>;
    protected abstract setup(): Promise<void>;
    protected abstract collectMetrics(): Promise<void>;
}
