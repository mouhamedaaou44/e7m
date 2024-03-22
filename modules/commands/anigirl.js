module.exports.config = {
    name: `قرعه`,
    version: `1.0.0`,
    hasPermssion: 0,
    credits: `العاب`,
    description: `لعبه حجر ورقه مقص \n كيفية الاستخدام : اسم الامر بعدين تختار لو ورقة لو حجر لو مقص وتراهن بمبلغ /kbb ورق 50`,
    commandCategory: `〘 الالعاب 〙 `,
    usages: `[مقص/حجر/ورق]`,
    cooldowns: 10
};
module.exports.run = async function({ api, event, args, Users, Currencies }) {
    const { threadID, messageID, senderID } = event;
    const money = (await Currencies.getData(senderID)).money;
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];

    const listIMG = ['https://i.imgur.com/1uBAGlO.jpg', 'https://i.imgur.com/EOZx1tL.jpg', 'https://i.imgur.com/2WSbVaK.jpg'];
    const listItem = ['مقص', 'حجر', 'ورق'];

    var bot = listItem[Math.floor(Math.random() * listItem.length)];
