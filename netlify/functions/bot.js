const { Telegraf } = require('telegraf');

// Token dari bot Telegram kamu
const bot = new Telegraf(process.env.BOT_TOKEN);

// Contoh command
bot.command('start', (ctx) => ctx.reply('Halo dari Netlify!'));

// Handler fungsi Netlify
let initialized = false;

exports.handler = async (event, context) => {
  if (!initialized) {
    // Jalankan webhook Telegraf
    bot.handleUpdate(JSON.parse(event.body));
    initialized = true;
  }

  return {
    statusCode: 200,
    body: 'OK',
  };
};
