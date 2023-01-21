import { Telegraf } from 'telegraf';
const TOKEN = import.meta.env.VITE_REACT_APP_TELEGRAM_KEY;
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
