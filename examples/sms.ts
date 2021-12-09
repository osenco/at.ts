import { AfricasTalking } from "../dist";

const at = new AfricasTalking("apiKey", "username", "from");

// Send SMS
at.sms("Hello there").to(254705459494).send();
at.sendManyDefinedSms([
	{ 254705459494: "Hello there Mauko" },
	{ 254705459494: "Hi Mary" },
]);
at.sendManyTemplateSms(
	"Hi :name, please pay KSh :amount",
	[
		{ name: "Mauko", amount: 100, phone: 254705459494 },
		{ name: "Mary", amount: 200, phone: 254115911301 },
	],
	"phone"
);
