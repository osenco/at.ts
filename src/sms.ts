import { AfricasTalking } from "./client";

export class Sms {
	private client: AfricasTalking;
	private message: string;
	private phones: string | string[] | number | number[];

	constructor(client: AfricasTalking) {
		this.client = client;
	}

	public text(message: string) {
		this.message = message;
		return this;
	}

	public to(to: string | string[] | number | number[]) {
		this.phones = to;

		return this;
	}

	public async send() {
		const { data } = await this.client.http.post("/messaging", {
			username: this.client.config.username,
			apiKey: this.client.config.apiKey,
			to: this.phones,
			from: this.client.config.from,
			message: this.message,
		});

		return data;
	}
}
