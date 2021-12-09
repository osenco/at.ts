import { AfricasTalking } from "./client";

export class Airtime {
	private client: AfricasTalking;

	constructor(client: AfricasTalking) {
		this.client = client;
	}

	public async buy(phone: number | string, amount: number) {
		const { data } = await this.client.http.post("/airtime/send", {
			username: this.client.username,
			apiKey: this.client.apiKey,
			amount,
			phone,
		});

		return data;
	}
}
