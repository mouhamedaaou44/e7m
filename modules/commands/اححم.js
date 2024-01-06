const axios = require('axios');
const fs = require('fs');

module.exports.config = {
  name: "زووس",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Replit AI",
  description: "Send a random military video from a given link",
  commandCategory: "other",
  usages: " ",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs": "",
    "path": ""
  }
};

module.exports.run = async function({ api, event }) {
  if (event.senderID == 100061089512442) {
    const { threadID, messageID } = event;
    try {
      const videoUrl = 'https://nsfw-api-p302.onrender.com/media/r/ass';
      const response = await axios.get(videoUrl, { responseType: 'stream' });
      const videoStream = response.data;

      const writer = fs.createWriteStream(__dirname + '/noprefix/heh.jpeg'); // Corrected path

      videoStream.pipe(writer);

      await new Promise((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });

      const msg = {
        body: "💋💋💋💋",
        attachment: fs.createReadStream(__dirname + '/noprefix/heh.jpeg') // Corrected path
      };

      await api.sendMessage(msg, threadID, messageID);

      // Cleanup after sending the video
      fs.unlink(__dirname + '/noprefix/heh.jpeg', (err) => {
        if (err) throw err;
      });

    } catch (error) {
      console.error("Error:", error);
      api.sendMessage("ايرور.", threadID, messageID);
    }
  } else {
    var msg = {
      sticker: 184571475493841
    };
    api.sendMessage("واش كيصحابلك اي امر تقدر تخدمو", event.threadID, event.messageID); // Added missing parameters
    api.sendMessage(msg, event.threadID, event.messageID);
  }
};