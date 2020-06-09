import { escapeString } from './util';

export interface MetricOptions {
	name: string;
	help: string;
}

export abstract class Metric {
	protected type: string;
	protected name: string;
	protected help: string;

	public constructor(opts: MetricOptions) {
		this.name = opts.name;
		this.help = opts.help;
	}

	public getMetric() {
		const name = escapeString(this.name);
		const help = `# HELP ${name} ${escapeString(this.help)}`;
		const type = `# TYPE ${name} ${this.type}`;
		const values = this.getMetricValues();

		return `${help}\n${type}\n${values}`.trim();
	}

	protected abstract getMetricValues(): string;
}
