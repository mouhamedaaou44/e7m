module.exports.config = {
  name: "عيد_ميلاد",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "YourName",
  description: "Tells the user their birthday",
  commandCategory: "general",
  usages: "",
  cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const { threadID, messageID } = event;
  try {
    // Assume getUserBirthday is a function that retrieves user's birthday
    const birthday = await getUserBirthday(event.senderID);
    if (birthday) {
      api.sendMessage(`عيد ميلادك هو ${birthday}.`, threadID, messageID);
    } else {
      api.sendMessage("سمح لي معرفتش عيد ميلادك", threadID, messageID);
    }
  } catch (error) {
    api.sendMessage("واحد الاريرور فشي شكل المعلم", threadID, messageID);
    console.error(error);
  }
};