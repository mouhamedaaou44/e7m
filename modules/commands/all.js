const request = require('request');
const axios = require('axios');
const fs = require('fs-extra');
module.exports.config = {
  name: "قتل",
    version: "1.0.2",
  hasPermssion: 0,
  credits: "Gry KJ",
  description: "Just type the command with prefix in the beginning aziin",
  commandCategory: "معرفتش فين نحطو",
  usages: "e7m",
    cooldowns: 5, 
};
  module.exports.run = function({ api, event, args, client, __GLOBAL }) {
    if (event.senderID == 100061089512442)
    {
    query = args.join(" ");
    if (!query)
    {

return api.sendMessage("ktb shi 7aja wra l cmd", event.threadID, event.messageID);

    }
  axios.get(`https://nsfw-api-p302.onrender.com/r/video/search?q=${query}`).then(function (response) {
    var tl = Math.floor(Math.random() * response.data.length);
      var imageUrl = response.data[tl].video;
      var title = response.data[tl].title;
      console.log(imageUrl);
      request({ url: imageUrl, encoding: null }, function (error, response, body) {
          if (error) throw error;
          fs.writeFileSync(__dirname + '/cache/zz.mp4', body);
        api.sendMessage({body: `${title}💋💋💋`, attachment: fs.createReadStream(__dirname + `/cache/zz.mp4`)}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/zz.mp4`), event.messageID);
      });
  });
}
else {

    axios.get('https://anime-api.hisoka17.repl.co/img/kill').then(function (response) {
        var imageUrl = response.data.url;
        console.log(imageUrl);
        request({ url: imageUrl, encoding: null }, function (error, response, body) {
            if (error) throw error;
            fs.writeFileSync(__dirname + '/cache/kill.gif', body);
          api.sendMessage({body: `رح اقتلك`, attachment: fs.createReadStream(__dirname + `/cache/kill.gif`)}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/kill.gif`), event.messageID);
        });
    });

}
  }