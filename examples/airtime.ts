import { AfricasTalking } from "../dist";

const at = new AfricasTalking(
	{
		username: "",
		apiKey: "",
		from: "",
	},
	"sandbox"
);

// Buy airtime
at.airtime()
	.buy(254705459494, 100)
	.then(() => console.log("Airtime bought"));
