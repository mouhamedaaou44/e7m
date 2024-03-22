 module.exports.config = {
  name: "المطور",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SIFO",
  description: "معلومات عن مطور البوت.",
  commandCategory: "〘 المجموعات 〙",
  usages: "adm",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
  "https://i.imgur.com/0eAtz82.gif"
  ];
  var callback = () => api.sendMessage({body:`〘━━━━━━❪المطور❫━━━━━〙\n⦿¦✗¦←الاسم: MOHAMED IBRAHI\n⦿¦✗¦←العمر : 16\n⦿¦✗¦←البلد: موريتانيا 🇲🇷 \n⦿¦✗¦←حساب الفيس: https://www.facebook.com/profile.php?id=lluffysan\n〘━━━━━━❪kiro bot❫━━━━〙\n`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };