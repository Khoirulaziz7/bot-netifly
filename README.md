
# 🤖 Telegram Bot with Telegraf.js + Netlify Functions

Bot Telegram ini dibangun menggunakan [Telegraf.js](https://telegraf.js.org/) dan dijalankan di **Netlify Functions (serverless)** menggunakan **webhook**.

## 📁 Struktur Folder

project/ ├── netlify.toml └── netlify/ └── functions/ └── bot.js

## 🚀 Fitur

- Bot Telegram dengan `Telegraf.js`
- Dideploy menggunakan [Netlify Functions](https://docs.netlify.com/functions/overview/)
- Berjalan dengan Webhook, bukan polling
- Siap untuk di-deploy secara gratis di Netlify

## 🧾 Prasyarat

- Akun Telegram dan Bot Token dari [@BotFather](https://t.me/BotFather)
- Akun [Netlify](https://netlify.com/)
- Node.js v16 atau lebih baru
- Git

## 🛠️ Instalasi Lokal

```bash
git clone https://github.com/username/repo-bot.git
cd repo-bot
npm install

📦 Struktur file

netlify/functions/bot.js

File utama fungsi serverless Netlify yang menangani update dari Telegram via webhook.

netlify.toml

File konfigurasi Netlify yang mengarahkan endpoint /webhook ke fungsi bot.

[build]
  functions = "netlify/functions"

[[redirects]]
  from = "/webhook"
  to = "/.netlify/functions/bot"
  status = 200

🧪 Contoh Command

bot.command('start', (ctx) => ctx.reply('Halo dari Netlify!'));

🌐 Deployment ke Netlify

1. Push repo ini ke GitHub


2. Hubungkan ke akun Netlify


3. Set environment variable BOT_TOKEN di Netlify:

Masuk ke Site Settings → Environment Variables

Tambahkan: BOT_TOKEN = xxxxxxxx



4. Deploy site


5. Set Webhook ke URL Netlify kamu:



curl -F "url=https://NAMA-SITE.netlify.app/webhook" https://api.telegram.org/bot<BOT_TOKEN>/setWebhook

Gantilah NAMA-SITE dan <BOT_TOKEN> sesuai dengan milikmu.

💡 Tips

Bot harus pakai webhook, karena Netlify tidak bisa menjalankan bot.launch() dengan polling.

Gunakan MongoDB Atlas atau database eksternal jika ingin menyimpan data pengguna.

Gunakan library seperti dotenv hanya untuk lokal. Di production, gunakan Environment Variables Netlify.


🧰 Tools yang Digunakan

Telegraf.js

Netlify Functions

Telegram Bot API

