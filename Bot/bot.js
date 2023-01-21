import { Telegraf } from 'telegraf';
const TOKEN = '5959409322:AAF4D2MgUwo9zvM53ZD3ID1VOd0ET3m7t0E';
const bot = new Telegraf(TOKEN);

const web_link = 'https://edupora.netlify.app/';

bot.start((ctx) =>
  ctx.reply('Welcome :)))))', {
    reply_markup: {
      keyboard: [[{ text: 'web app', web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
