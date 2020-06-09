import { Metric, MetricOptions } from './Metric';
import { escapeLabelValue, hashObject } from './util';

interface GaugeOptions extends MetricOptions {}

export class Gauge extends Metric {
	private values: Map<string, { labels: { [key: string]: any }; value: number }>;

	public constructor(opts: GaugeOptions) {
		super(opts);
		this.type = 'gauge';
		this.values = new Map();
	}

	public set(labels: { [key: string]: any }, value: number) {
		const hash = hashObject(labels);
		this.values.set(hash, { labels, value });
	}

	public getMetricValues() {
		let values = '';

		for (const val of this.values.values()) {
			let labels = '';
			for (const key of Object.keys(val.labels)) {
				labels += `${key}="${escapeLabelValue(val.labels[key])}",`;
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
