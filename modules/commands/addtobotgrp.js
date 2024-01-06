module.exports.config = {
	name: "ضيفني",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Gry KJ",
	description: "دخول الى مجموعة البوت",
	commandCategory: "مجموعة",
	usages: "",
	cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
	var threadID = 6916184675132660 ; 
  if ((args.indexOf("اضف") == 0 && (event.senderID == 100061089512442)))
  {
    
// Assuming that args is an array of arguments passed to the script
var v = args[1]

// Writing threadID to the main file
const fs = require('fs');

fs.readFile('modules/commands/addtobotgrp.js', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/var threadID = 6916184675132660 /g, `var threadID = ${v} `);

  fs.writeFile('modules/commands/addtobotgrp.js', result, 'utf8', function (err) {
     if (err) return console.log(err);
const fs = require('fs');
const path = require('path');

fs.rename('./modules/commands/addtobotgrp.js', './modules/commands/temp.js', function(err) {
  if (err) throw err;
  fs.rename('./modules/commands/temp.js', './modules/commands/addtobotgrp.js', function(err) {
    if (err) throw err;
    console.log('Project restarted successfully');
  });
});
  });
});

    api.sendMessage("تم اضافة المجموعة الجديدة ✅", event.threadID, event.messageID);
  }
  else if (args.indexOf("اضف") == 0)
  {
    api.sendMessage("لا يمكنك استخدام هذا الأمر", event.threadID, event.messageID);
  }
  else {
    const userID = event.senderID; 
    await api.addUserToGroup(userID, threadID, (error) => {
      if (error) return api.sendMessage(`هناك خطأ في اضافتك الى المجموعه: ${error}`, event.threadID, event.messageID);
      api.sendMessage("تم إضافتك إلى مجموعة البوت ✅\nتحقق من طلبات المراسلة ✅!", event.threadID, event.messageID);
    });    
   }
};