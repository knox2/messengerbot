const http = require('http')
const Bot = require('messenger-bot')

// load the ENV variables
//require('dotenv').config();

let bot = new Bot({
    token: process.env.PAGE_TOKEN,
    verify: process.env.VERIFY_TOKEN,
});

bot.on('error', (err) => {
    console.log(err.message)
});

bot.on('message', (payload, reply) => {
    let text = payload.message.text;
    console.log(text);
});

let port = process.env.PORT || 3000;
http.createServer(bot.middleware()).listen(port);