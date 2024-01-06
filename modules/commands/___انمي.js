const axios = require('axios');
const fs = require('fs');
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyBFNMIC7pTPGo2zBxE8JrF0oPpOpxV6KU8');

module.exports.config = {
  name: "انمي_ادت",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Gry KJ",
  description: "فيديو انمي عشوائي",
  commandCategory: "media",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
var cNames = [
  "Naruto Uzumaki",
  "Sasuke Uchiha",
  "Goku Son",
  "Vegeta",
  "Monkey D. Luffy",
  "Roronoa Zoro",
  "Ichigo Kurosaki",
  "Rukia Kuchiki",
  "Edward Elric",
  "Alphonse Elric",
  "Light Yagami",
  "L Lawliet",
  "Eren Yeager",
  "Mikasa Ackerman",
  "Levi Ackerman",
  "Inuyasha",
  "Kagome Higurashi",
  "Sesshomaru",
  "Astro Boy",
  "Gon Freecss",
  "Killua Zoldyck",
  "Guts",
  "Griffith",
  "Saitama",
  "Genos",
  "Mob",
  "Reigen Arataka",
  "Tanjiro Kamado",
  "Nezuko Kamado",
  "Zenitsu Agatsuma",
  "Inosuke Hashibira",
  "Meliodas",
  "Elizabeth Liones",
  "Ban",
  "Gowther",
  "King",
  "Diane",
  "Lelouch vi Britannia",
  "Suzaku Kururugi",
  "CC",
  "Gintoki Sakata",
  "Kagura",
  "Shinpachi Shimura",
  "Spike Spiegel",
  "Faye Valentine",
  "Edward Wong Hau Pepelu Tivrusky IV",
  "Ryuko Matoi",
  "Satsuki Kiryuin",
  "Senku Ishigami",
  "Taiju Oki",
  "Emma",
  "Norman",
  "Ray",
  "Maka Albarn",
  "Soul Eater Evans",
  "Death the Kid",
  "Asuka Langley Soryu",
  "Shinji Ikari",
  "Rei Ayanami",
  "Kirito",
  "Asuna",
  "Eren Jaeger",
  "Mikasa Ackerman",
  "Levi Ackerman",
  "Kaneki Ken",
  "Touka Kirishima",
  "Rize Kamishiro",
  "Luffy Monkey D.",
  "Sanji Vinsmoke",
  "Zoro Roronoa",
  "Nami",
  "Usopp",
  "Vash the Stampede",
  "Edward",
  "Spike",
  "Gon",
  "Hisoka",
  "Kurapika",
  "Killua",
  "Guts",
  "Griffith",
  "Saber",
  "Archer",
  "Gilgamesh",
  "Natsu Dragneel",
  "Lucy Heartfilia",
  "Gray Fullbuster",
  "Erza Scarlet",
  "Ichigo Kurosaki",
  "Rukia Kuchiki",
  "Renji Abarai",
  "Hollow Ichigo",
  "Lelouch Lamperouge",
  "C.C.",
  "Suzaku Kururugi",
  "Gino Weinberg",
  "Kallen Stadtfeld",
  "Zero Two",
  "Hiro",
  "Ichigo",
  "Guts",
  "Casca",
  "Griffith",
  "Jotaro Kujo",
  "Joseph Joestar",
  "Dio Brando",
  "Jonathan Joestar",
  "Giorno Giovanna",
  "Bruno Bucciarati",
  "Jolyne Cujoh",
  "Josuke Higashikata",
  "Johnny Joestar",
  "Gon Freecss",
  "Killua Zoldyck",
  "Hisoka Morow",
  "Kurapika",
  "Meruem",
  "Goku Son",
  "Vegeta",
  "Piccolo",
  "Frieza",
  "Cell",
  "Majin Buu",
  "Gohan",
  "Trunks",
  "Bulma",
  "Videl",
  "Android 18",
  "Gon Freecss",
  "Killua Zoldyck",
  "Hisoka Morow",
  "Kurapika",
  "Meruem",
  "Guts",
  "Griffith",
  "Casca",
  "Judeau",
  "Farnese",
  "Serpico",
  "Sanji Vinsmoke",
  "Zoro Roronoa",
  "Nami",
  "Usopp",
  "Vinsmoke Judge",
  "Reiju Vinsmoke",
  "Sanji Vinsmoke",
  "Zoro Roronoa",
  "Nami",
  "Usopp",
  "Vinsmoke Judge",
  "Reiju Vinsmoke",
  "Senku Ishigami",
  "Taiju Oki",
  "Tsukasa Shishio",
  "Chrome",
  "Ryuko Matoi",
  "Satsuki Kiryuin",
  "Mako Mankanshoku",
  "Goku Son",
  "Vegeta",
  "Piccolo",
  "Frieza",
  "Cell",
  "Majin Buu",
  "Gohan",
  "Trunks",
  "Bulma",
  "Videl",
  "Android 18",
  "Light Yagami",
  "L Lawliet",
  "Near",
  "Mello",
  "Ryuk",
  "Rem",
  "Eren Yeager",
  "Mikasa Ackerman",
  "Armin Arlert",
  "Levi Ackerman",
  "Inuyasha",
  "Kagome Higurashi",
  "Sesshomaru",
  "Naruto Uzumaki",
  "Sasuke Uchiha",
  "Sakura Haruno",
  "Kakashi Hatake",
  "Gaara",
  "Itachi Uchiha",
  "Hinata Hyuga",
  "Neji Hyuga",
  "Jiraiya",
  "Tsunade",
  "Rock Lee",
  "Roronoa Zoro",
  "Nami",
  "Usopp",
  "Sanji Vinsmoke",
  "Tony Tony Chopper",
  "Nico Robin",
  "Franky",
  "Brook",
  "Monkey D. Luffy",
  "Roronoa Zoro",
  "Nami",
  "Usopp",
  "Sanji Vinsmoke",
  "Tony Tony Chopper",
  "Nico Robin",
  "Franky",
  "Brook",
  "Natsu Dragneel",
  "Lucy Heartfilia",
  "Gray Fullbuster",
  "Erza Scarlet",
  "Ichigo Kurosaki",
  "Rukia Kuchiki",
  "Renji Abarai",
  "Hollow Ichigo",
  "Luffy Monkey D."
 ]


var rand = cNames[Math.floor(Math.random() * cNames.length)];

  const keyword = `${rand} edit`;
  const limit = 10; // Get top 10 search results

  try {
    const results = await youtube.searchVideos(keyword, limit);
    // Choose a random video from the top 40 results
    const randomIndex = Math.floor(Math.random() * results.length);
    const videoID = results[randomIndex].id;
    const videoURL = `https://www.youtube.com/watch?v=${videoID}`;
    // Using 'highestaudio' and 'mp4' format to keep the sound
    const streamOptions = { quality: 'highestaudio', filter: 'audioandvideo', format: 'mp4' };
    const stream = ytdl(videoURL, streamOptions);
    const tempPath = `./temp-${videoID}.mp4`;

    stream.pipe(fs.createWriteStream(tempPath));
    stream.on('end', () => {
      api.sendMessage({
        body: `ادت انمي: ${results[randomIndex].title}`,
        attachment: fs.createReadStream(tempPath)
      }, event.threadID, () => {
        fs.unlinkSync(tempPath); // Delete the temp file after sending the video with sound
      }, event.messageID);
    });
  } catch (err) {
    api.sendMessage("An error occurred while fetching the video.", event.threadID, event.messageID);
    console.error(err);
  }
};