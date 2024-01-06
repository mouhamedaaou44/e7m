const DIG = require("discord-image-generation");
const fs = require("fs-extra");

module.exports.config = {
    name: "هز",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Gry KJ",
  description: "",
  commandCategory: "الــــجـــروب",
  usages: "noprefix",
  cooldowns: 5,
    };

  module.exports.run = async function ({ event, api, Users}) {
    const uid = Object.keys(event.mentions)[0] || event.senderID;
    const avatarURL = await Users.getAvatarUrl(uid);
    const img = await new DIG.Triggered().getImage(avatarURL);
    const pathSave = `${__dirname}/cache/${uid}_Trigger.gif`;
    fs.writeFileSync(pathSave, Buffer.from(img));
    api.sendMessage({ body: `صورتك مهزوزة`, attachment: fs.createReadStream(`${pathSave}`) }, event.threadID, () => fs.unlinkSync(`${pathSave}`), event.messageID);
  };