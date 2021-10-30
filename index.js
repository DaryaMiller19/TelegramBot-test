process.env.NTBA_FIX_319 = 1;

const TelegramBot = require("node-telegram-bot-api");

const token = '2039688992:AAHYLBD8Z5U2ZTVqNLXxN8JW8hByKh0Yecc';

const bot = new TelegramBot(token, {polling: true});

bot.on('message' , message => {
    const number = Math.round(Math.random() * 20);

    if (message.text == number) {
        bot.sendMessage(message.chat.id, 'You got it')
    } else {
        bot.sendMessage(message.chat.id, 'You didnt get it')
    }
})
