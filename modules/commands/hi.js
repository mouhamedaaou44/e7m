const DIG = require("discord-image-generation");
const fs = require("fs-extra");

module.exports.config = {
    name: "جورديكن",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Gry KJ",
    description: "e7m",
    commandCategory: "〘 المجموعات 〙",
    usages: "",
    cooldowns: 0
  };
  module.exports.run = async ({
    api,
    event
  }) => {
let uid;
let text;
    var TOKEN = "6628568379%7Cc1e620fa708a1d5696fb991c1bde5662"
    if(!event.type == "message_reply"){
    uid = event.senderID;
      text = "مين غيرك جورديكن 😹";
    } else{
        uid = event.messageReply.senderID;
      text = "شوفوا الجوديكن يا جماعة 🌝";
    }

    let url = `https://graph.facebook.com/${uid}/picture?height=720&width=720&access_token=${TOKEN}`
let avt = await new DIG.Gay().getImage(url)
      const pathSave = `${__dirname}/tmp/gay.png`;
  fs.writeFileSync(pathSave, Buffer.from(avt));
    api.sendMessage({body:text,
attachment: fs.createReadStream(pathSave)
    }, event.threadID, event.messageID, () => fs.unlinkSync(pathSave));  
  }