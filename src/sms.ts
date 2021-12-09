import { AxiosResponse } from "axios";
import { AfricasTalking } from "./client";

export class Sms {
	private client: AfricasTalking;
	private message: string;
	private phones: string | string[] | number | number[];

	constructor(client: AfricasTalking) {
		this.client = client;
	}

	/**
	 * 
	 * @param message 
	 * @returns 
	 */
	public text(message: string): Sms {
		this.message = message;
		return this;
	}

	/**
	 * 
	 * @param to 
	 * @returns 
	 */
	public to(to: string | string[] | number | number[]): Sms {
		this.phones = to;

		return this;
	}

	/**
	 * 
	 * @returns 
	 */
	public async send() {
		const { data }: AxiosResponse<any> = await this.client.http.post("/messaging", {
			username: this.client.username,
			apiKey: this.client.apiKey,
			to: this.phones,
			from: this.client.from,
			message: this.message,
		});

		return data;
	}
}
