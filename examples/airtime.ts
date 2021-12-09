import { AfricasTalking } from "../dist";

const at = new AfricasTalking('apiKey', 'username', 'from');

// Buy airtime
at.airtime()
	.buy(254705459494, 100)
	.then(() => console.log("Airtime bought"));
