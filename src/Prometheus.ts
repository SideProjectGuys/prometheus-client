import { Metric } from './Metric';

export abstract class Prometheus {
	protected metrics: Metric[] = [];

	public getContentType() {
		return 'text/plain; version=0.0.4; charset=utf-8';
	}

	public getMetrics() {
		let metrics = '';

		for (const metric of this.metrics) {
			metrics += metric.getMetric() + '\n\n';
		}

		return metrics;
	}

	public async start() {
		await this.setup();

		await this.collectMetrics();
		setInterval(() => this.collectMetrics(), 15000);
	}

	protected abstract async setup(): Promise<void>;
	protected abstract async collectMetrics(): Promise<void>;
}
