import { USSD } from "./ussd";
import { Airtime } from "./airtime";
import { Sms } from "./sms";
import axios, { AxiosInstance } from "axios";

export class AfricasTalking {
	public apiKey: string;
	public username = "sandbox";
	public from: string | number | null = "AFRICASTKNG";

	public endpoint = "https://api.africastalking.com/version1";

	public http: AxiosInstance;

	/**
	 * 
	 * @param apikey AfricasTalking API Key
	 * @param username AfricasTalking username
	 * @param from AfricasTalking sender ID
	 */
	constructor(
		apikey: string,
		username: string = "sandbox",
		from: string | number | null = "AFRICASTKNG"
	) {
		this.apiKey = apikey;
		this.username = username;
		this.from = from;

		if (username === "sandbox") {
			this.endpoint = "https://api.sandbox.africastalking.com/version1";
		}

		this.http = axios.create({
			baseURL: this.endpoint,
			headers: {
				Accept: "application/json",
				apikey: this.apiKey,
			},
		});
	}

	/**
	 * Check Account Balance 
	 */
	public async balance() {
		const {
			data: { balance },
		} = await axios.get("/balance");

		return balance;
	}

	/**
	 * Set SMS message content
	 *
	 * @param message Message to send
	 */
	public sms(message: string): Sms {
		const sms = new Sms(this);
		sms.text(message);

		return sms;
	}

	/**
	 * 
	 * @param messages Messages to send
	 * @returns 
	 */
	public async sendManyDefinedSms(messages: any[]): Promise<Sms> {
		const sms = new Sms(this);
		Object.entries(messages).forEach(([to, message]) => {
			sms.text(message).to(to).send();
		});

		return sms;
	}

	/**
	 * 
	 * @param template Message template
	 * @param receipients  An array of receipient objects containing data to be sent
	 * @param phoneField Key of the field that contains the phone number
	 * @returns Sms object
	 */
	public async sendManyTemplateSms(
		template: string,
		receipients: any[],
		phoneField: string = "phone"
	): Promise<Sms> {
		const sms = new Sms(this);
		let message = "";

		receipients.forEach((receipient) => {
			Object.keys(receipient).forEach((key) => {
				message = template.replace(
					/`:${key}`/g,
					String(receipient[key])
				);

				sms.text(message).to(receipient[`${phoneField}`]).send();
			});
		});
		return sms;
	}

	/**
	 * 
	 * @returns Airtime object
	 */
	public airtime(): Airtime {
		return new Airtime(this);
	}

	/**
	 * 
	 * @returns USSD object
	 */
	public ussd(): USSD {
		return new USSD(this);
	}
}
