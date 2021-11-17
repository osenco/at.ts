import { ATConfig } from "./types";
import { USSD } from "./ussd";
import { Airtime } from "./airtime";
import { Sms } from "./sms";
import axios, { AxiosInstance } from "axios";

export class AfricasTalking {
	private env = "live";
	public config: ATConfig = {
		username: "",
		apiKey: "",
		from: "",
	};

	public endpoint = "https://api.africastalking.com/version1";

	public http: AxiosInstance;

	constructor(config: ATConfig, env: string = "live") {
		this.config = config;
		this.env = env;

		if (this.env === "sandbox") {
			this.endpoint = "https://api.sandbox.africastalking.com/version1";
		}

		this.http = axios.create({
			baseURL: this.endpoint,
			headers: {
				Accept: "application/json",
				apikey: this.config.apiKey,
			},
		});
	}

	public async balance() {
		const {
			data: { balance },
		} = await axios.get("/balance");

		return balance;
	}

	public sms(message: string): Sms {
		const sms = new Sms(this);
		sms.text(message);

		return sms;
	}

	public airtime(): Airtime {
		return new Airtime(this);
	}

	public ussd(): USSD {
		return new USSD(this);
	}
}
