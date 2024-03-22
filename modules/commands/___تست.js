const fs = require("fs-extra");
const request = require("request");
const google = require("googlethis");
const cloudscraper = require("cloudscraper");
const axios = require("axios");
module.exports.config = {
  name: "شات",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Gry KJ",
  description: "تكلم مع شيلي",
  commandCategory: "〘 الخدمات 〙",
  usages: "[ask]",
  cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
  let { messageID, threadID, senderID, body } = event;
  let tid = threadID,
    mid = messageID;

  const content = encodeURIComponent(args.join(" "));
  if (!args[0]) return api.sendMessage("ktb shi 7aja mn wra شات azby", tid, mid);
  try {
    const res = await axios.get(`https://simsimi.fun/api/v2/?mode=talk&lang=ar&message=${content}&filter=false`);
    const msg = {

      body: res.data.success,
    }
    if (args.indexOf("ذكاء") == 0)
    {

        const query = args.slice(1).join(" ");

        if (!query) {
            return api.sendMessage("أرجوك قم بإدخال سؤال ", event.threadID, event.messageID);
        }

        const userID = event.senderID;

        try {
            const response = await axios.get(`https://gpt4.siam-apiproject.repl.co/api?uid=${userID}&query=${encodeURIComponent(query)}`);
            const answer = response.data.lastAnswer;

             msg.body = answer;
        } catch (error) {
            console.error("Error:", error);
          msg.body = " ❌ | حدث خطأ أثناء جلب الرد...";
        }



    }
    if (args.indexOf("ارسل") == 0 && (args.indexOf("صور") == 1))
    {
      var query = args.slice(2).join(' ');
      let result = await google.image(query, { safe: true });
      if (result.length === 0) {
        api.sendMessage(`⚠️  صور البحث الخاصة بك لم يرجع بأي نتيجة.`, event.threadID, event.messageID)
        return;
      }

      let streams = [];
      let counter = 0;

      console.log(result)

      for (let image of result) {
        if (counter >= 6)
          break;

        console.log(`${counter}: ${image.url}`);


        let url = image.url;
        if (!url.endsWith(".jpg") && !url.endsWith(".png"))
          continue;

        let path = __dirname + `/cache/search-image-${counter}.jpg`;
        let hasError = false;
        await cloudscraper.get({ uri: url, encoding: null })
          .then((buffer) => fs.writeFileSync(path, buffer))
          .catch((error) => {
            console.log(error)
            hasError = true;
          });

        if (hasError)
          continue;

        console.log(`دفعت إلى تيارات: ${path}`);
        streams.push(fs.createReadStream(path).on("end", async () => {
          if (fs.existsSync(path)) {
            fs.unlink(path, (err) => {
              if (err) return console.log(err);

              console.log(`الملف المحذوف: ${path}`);
            });
          }
        }));

        counter += 1;
      }

      api.sendMessage("⏳ | جاري إرسال الصور...", event.threadID, event.messageID)

        msg.body = `--------------------\nنتائج البحث\n"${query}"\n\nما تم إيجاده: ${result.length} صورة${result.length > 1 ? 's' : ''}\nيمكن أن تظهر فقط: 6 صور\n\n--------------------`,
        msg.attachment = streams

    }
    if (args.indexOf("بوسيني") == 0 || (args.indexOf("bosini") == 0 || (args.indexOf("عطيني") == 0 && (args.indexOf("بوسة") == 1 || (args.indexOf("بوس") == 0)))))
    {
      axios.get('https://anime.grykj.repl.co/api/kiss').then(function(response) {
        var imageUrl = response.data.url;
        console.log(imageUrl);
        axios({
          method: 'get',
          url: imageUrl,
          responseType: 'arraybuffer'
        }).then(function(response) {
          fs.writeFileSync(__dirname + '/cache/kiss0.gif', response.data);
        }).catch(function(error) {
          console.error(error);
        });
      }).catch(function(error) {
        console.error(error);
      });
      var tl = ["واخا بب هاك بوسة","محح","muaaah 😘","💋💋💋💋"];
      var rand = tl[Math.floor(Math.random() * tl.length)];
      msg.body = `${rand}`
      msg.attachment = fs.createReadStream(__dirname + `/cache/kiss0.gif`)
    }


    if (args.indexOf("عنقيني") == 0 || (args.indexOf("عطيني") == 0 && (args.indexOf("الحنان") == 1 || (args.indexOf("3n9ini") == 0))))
    {
      axios.get('https://anime.grykj.repl.co/api/hug').then(function(response) {
        var imageUrl = response.data.url;
        console.log(imageUrl);
        axios({
          method: 'get',
          url: imageUrl,
          responseType: 'arraybuffer'
        }).then(function(response) {
          fs.writeFileSync(__dirname + '/cache/hug.gif', response.data);
        }).catch(function(error) {
          console.error(error);
        });
      }).catch(function(error) {
        console.error(error);
      });
      msg.attachment = fs.createReadStream(__dirname + `/cache/hug.gif`)
    }
    if (res.data.error) {
      api.sendMessage(`Error: ${res.data.error}`, tid, (error, info) => {
        if (error) {
          console.error(error);
        }
      }, mid);
    } else {
      api.sendMessage(msg, tid, (error, info) => {
        if (error) {
          console.error(error);
        }
      }, mid);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage(error, tid, mid);
  }
};