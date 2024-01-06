module.exports.config = {
	name: "تصدق",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Your Name",
	description: "Give money to someone by tagging them or replying to their message",
	commandCategory: "economy",
	usages: "[Tag | Reply] [Amount]",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args, Currencies, Users }) {
	const { threadID, messageID, senderID, mentions } = event;
	let receiverID = senderID;
	let amount = parseInt(args[0]);

	if (isNaN(amount) || amount <= 0) {
		return api.sendMessage('حط شحال دالفلوس باغي التصدق.', threadID, messageID);
	}

	if (event.type == 'message_reply') {
		receiverID = event.messageReply.senderID;
	} else if (Object.keys(mentions).length == 1) {
		receiverID = Object.keys(mentions)[0];
	}

	let senderBalance = (await Currencies.getData(senderID)).money;
  let name = (await Users.getData(receiverID)).name;
	if (!senderBalance || senderBalance < amount) {
		return api.sendMessage('فقير دزب سير حتا يكونو عندك هاذ الفلوس عاد اجي تصدق بيهم.', threadID, messageID);
	}

	await Currencies.decreaseMoney(senderID, amount);
	await Currencies.increaseMoney(receiverID, amount);

	return api.sendMessage(`تصدقتي ب ${amount} لهاذ الفقير ${name}.`, threadID, messageID);
}