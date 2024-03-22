const axios = require('axios');
module['exports']['config'] = {
    name: "ارسمي",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "",
    description: " رسم الصور (DALLE).",
usePrefix: false,
    commandCategory: "〘 الذكاء الاصطناعي  〙",
    usages: "[اِسْتَدْعَى | نموذج]",
    cooldowns: 0
};

const fs = require("fs");
const { get } = require("axios");

module['exports']['run'] = async function({ api, event, args }) {
    let path = __dirname + "/cache/image.png";
    const tzt = args.join(" ").split("").map(item => item.trim());
    let txt = tzt[0];
    let txt2 = .;

    let tid = event.threadID;
    let mid = event.messageID;

    if (!args[0] || !txt || !txt2) return api.sendMessage("يرجى تقديم موجه ونموذج.", tid, mid);
  
    try {
 
        api.sendMessage("⏳توليد ...", tid, mid);
const tranChat = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ja&dt=t&q=${encodeURIComponent(txt)}`);

var zaba = tranChat.data[0][0][0];
      
        let enctxt = encodeURI(zaba);
        let url = `https://deku-rest-api.replit.app/dalle?prompt=${enctxt}`;

        let result = (await get(url, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(path, Buffer.from(result, "utf-8"));
        api.sendMessage({ attachment: fs.createReadStream(path) }, tid, () => fs.unlinkSync(path), mid);
    }catch (e) {
        return api.sendMessage(e.message, tid, mid);
    }
};
