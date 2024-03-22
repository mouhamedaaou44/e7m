module.exports.config = {
	name: "مادخلك",
	version: "2.0.0",
	hasPermssion: 1,
	credits: "Thọ & Mod By DuyVuong",
	description: "إعادة إرسال الرسائل المحذوفه",
  usePrefix: true,
	commandCategory: "مسؤولي المجموعة ", 
	usages: "resend",
	cooldowns: 0,
  hide:true,
  dependencies: {"request":"",       
                 "fs-extra":"",
                 "axios":""
                }

};

module.exports.handleEvent = async function ({ event, api, client, Users }) {
    const request = global.nodemodule["request"];
    const axios = global.nodemodule["axios"]
    const { writeFileSync, createReadStream } = global.nodemodule["fs-extra"];
  let {messageID, senderID, threadID, body:content } = event;
     if (!global.logMessage) global.logMessage = new Map();	
     if (!global.data.botID) global.data.botID = api.getCurrentUserID();
