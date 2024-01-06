module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "𝐊𝐈𝐓𝐄 凧",
  description: "Notify bot or group member with random gif/photo/video",
  dependencies: {
    "fs-extra": "",
    "path": ""
  }
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "joinGif");
  if (existsSync(path)) mkdirSync(path, { recursive: true });	

  const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users, Threads }) {
    const { join } = global.nodemodule["path"];
  const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == '100061089512442')) {
      return api.sendMessage('احاااااااااا زهير ايش تعمل هنا', threadID);
    } 
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
      api.changeNickname(`» ${global.config.PREFIX} « → ${(!global.config.BOTNAME) ? "Gry 凧<3" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    return api.sendMessage(`▂▃▅▆تحميل...𝟏𝟎𝟎%▆▅▃▂\n⫸ تم الاتصال بنجاح ⫷\n●▬▬▬▬▬๑⇩⇩๑▬▬▬▬▬●\n[⚜️] shelly ルシア  𝘽𝙤𝙩\المالك:- Gry [⚜️]\n[⚜️] 1-لا تقم بعمل سبام\n[⚜️] 2-لا تقم بطرد واعادة اضافة البوت\n[⚜️] لترى قائمة الاوامر اكتب [ .الاوامر ] \n●▬▬▬▬▬๑⇧⇧๑▬▬▬▬▬●
\n❛━━･❪ البادئة [ . ]❫･━━❜\n[⚜️] اذا كان لديك استفسار يمكنك التواصل معي : https://www.facebook.com/6jfl.1\n◆━━━━━━━━━━━━━◆\n[⚜️] تم صنع هذا البوت بواسطة GRY KJ. شكرا لاستخدامه \n[⚜️] 𝙰𝚍𝚖𝚒𝚗: Gry凧`, threadID);
  }
  else {
    try {
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
        const moment = require("moment-timezone");
  const time = moment.tz("africa/morocco").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("africa/morocco").format("HH");
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      const path = join(__dirname, "cache", "joinGif");
      const pathGif = join(path, `${threadID}.gif`);

      var mentions = [], nameArray = [], memLength = [], i = 0;

      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName;
        nameArray.push(userName);
        mentions.push({ tag: userName, id });
        memLength.push(participantIDs.length - i++);
      }
      memLength.sort((a, b) => a - b);

      (typeof threadData.customJoin == "undefined") ? msg = "[⚜️] أهلا {type} {name}.\nبك إلى {threadName}.\n[❗] من الان {name} جزء من هذه العائلة. لا تقلق لست وحدك هنا. انت العضو رقم : {soThanhVien} في {threadName}.\n[💥]اذا قمت بعمل سبام سيتم طردك من المجموعة \n[❤️] {session} || {time} استمتع": msg = threadData.customJoin;
      msg = msg
                .replace(/\{name}/g, nameArray.join(', '))
                .replace(/\{type}/g, (memLength.length > 1) ? 'ُ' : 'ُ')
                .replace(/\{soThanhVien}/g, memLength.join(', '))
                .replace(/\{threadName}/g, threadName)
                .replace(/\{session}/g, hours <= 10 ? "اتمنى ان تحضى بصباح جيد" : 
    hours > 10 && hours <= 12 ? "مساء الخير لك" :
    hours > 12 && hours <= 18 ? "لتحضى بليلة سعيدة" : "لتحضى بليلة سعيدة")
                .replace(/\{time}/g, time);  



      if (existsSync(path)) mkdirSync(path, { recursive: true });

      const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

      if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
      else if (randomPath.length != 0) {
        const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
      }
      else formPush = { body: msg, mentions }

      return api.sendMessage(formPush, threadID);

    } catch (e) { return console.log(e) };
  }
                       }