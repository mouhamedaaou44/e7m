module.exports.config = {
	name: "ايموجي",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
	description: "تغير ايموجي المجموعة",
	commandCategory: "〘 المجموعات 〙", 
	usages: "groupemoji [name]", 
	cooldowns: 0,
	dependencies: [] 
};

mmodule.exports.run = async function({ api, event, args }) {
	var emoji = args.join(" ")
	if (!emoji) api.sendMessage("لم تقم بإدخال الإيموجي 💩💩", event.threadID, event.messageID)
	else api.changeThreadEmoji(emoji, event.threadID, () => api.sendMessage(`🔨 لقد قام البوت بتغيير الإيموجي بنجاح إلى: ${emoji}`, event.threadID, event.messageID));
}