import { AfricasTalking } from "../dist";

const at = new AfricasTalking(
	{
		username: "",
		apiKey: "",
		from: "",
	},
	"sandbox"
);

// Send SMS
at.sms("Hello there").to(254705459494).send();
