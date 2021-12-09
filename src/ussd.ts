import { AfricasTalking } from "./client";
import { USSDOptions, USSDResponse } from "./types";

export class USSD {
	private client: AfricasTalking;

	/**
	 * 
	 * @param client 
	 */
	constructor(client: AfricasTalking) {
		this.client = client;
	}

	public async send(
		message: string,
		options?: USSDOptions
	): Promise<USSDResponse> {
		return this.client.http
			.post("/ussd/send/", {message, ...options})
			.then(({ data }) => data);
	}
}
