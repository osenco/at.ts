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

at.smsManyDefined([{
	254705459494: "You good?"
}])

at.smsManyTemplate([254705459494], 'Hi :name, invoice amount is :amount', ['name', 'amount'])