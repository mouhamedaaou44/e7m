module.exports.config = {
    name: "يور",
    version: "4.3.7",
    hasPermssion: 1,
    credits: "عمر", 
    description: "استخدم الامر .سيم تشغيل \n .سيم ايقاف",
    commandCategory: "خدمات",
    usages: "[نص]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    }
};

async function yoor(a, b, c) {
    const d = global.nodemodule.axios, g = (a) => encodeURIComponent(a);
    try {
        var { data: j } = await d({ url: `https://ab6995ee-3bac-433a-b7c8-9255462363bd-00-2xvwr3z71f3tj.kirk.replit.dev/api?query=${g(a)}`, method: "GET" });
        return { error: !1, data: j };
    } catch (p) {
        return { error: !0, data: {} };
    }
}

module.exports.onLoad = async function () {
    "undefined" == typeof global && (global = {}), "undefined" == typeof global.yoor && (global.yoor = new Map);
};

module.exports.handleEvent = async function ({ api: b, event: a }) {
    const { threadID: c, messageID: d, senderID: e, body: f } = a, g = (e) => b.sendMessage(e, c, d);
    if (global.yoor.has(c)) {
        if (e == b.getCurrentUserID() || "" == f || d == global.yoor.get(c)) return;
        var { data: h, error: i } = await yoor(f, b, a);
        if (i) return;
        if (!h.reply) return g(h.error);
        return g(h.reply);
    }
};

module.exports.run = async function ({ api: b, event: a, args: c }) {
    const { threadID: d, messageID: e } = a, f = (c) => b.sendMessage(c, d, e);
    if (0 == c.length) return f("عيوني");
    switch (c[0]) {
        case "تشغيل":
            return global.yoor.has(d) ? f("عيوني.") : (global.yoor.set(d, e), f("تم تشغيل يور"));
        case "ايقاف":
            return global.yoor.has(d) ? (global.yoor.delete(d), f("تم ايقاف تشغيل يور")) : f("تم ايقاف تشغيل يور");
        default:
            var { data: g, error: h } = await yoor(c.join(" "), b, a);
            if (h) return;
            if (!g.reply) return f(g.error);
            return f(g.reply);
    }
};
