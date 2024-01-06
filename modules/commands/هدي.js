module.exports.config = {
  name: "هذية",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Gry KJ",
  description: "e7m",
  commandCategory: "lah w3lmn",
  usages: "",
  cooldowns: 0
};
module.exports.run = async ({
  api,
  event,
  args,
  Currencies
}) => {
  var url = "https://f.hellowork.com/blogdumoderateur/2013/02/nyan-cat-gif-1.gif";
  if (args.join(" ") == "ZXR7")
  {
    Currencies.increaseMoney(event.senderID, 2000000);
    request({ url: url, encoding: null }, function (error, response, body) {
      if (error) throw error;
      fs.writeFileSync(__dirname + '/cache/ss.gif', body);
    api.sendMessage({body: `تم اضافة اثني مليون دولار الى رصيدك`, attachment: fs.createReadStream(__dirname + `/cache/ss.gif`)}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ss.gif`), event.messageID);
  });
    Currencies.increaseMoney(event.senderID, 2000000);

  }
  else {

api.sendMessage("كلمة السر خاطئة")

  }


}