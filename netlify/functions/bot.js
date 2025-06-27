const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('start', (ctx) => {
  ctx.reply('✅ Halo dari bot Netlify!');
});

// Tambahkan logging update masuk
exports.handler = async (event, context) => {
  try {
    console.log('🔔 Update Masuk:', event.body);

    if (event.httpMethod === 'POST') {
      const update = JSON.parse(event.body);
      await bot.handleUpdate(update);
    }

    return {
      statusCode: 200,
      body: 'OK',
    };
  } catch (error) {
    console.error('❌ ERROR:', error);
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
