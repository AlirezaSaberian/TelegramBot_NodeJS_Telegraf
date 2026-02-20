# Alisa Telegraf Bot 🤖

A clean and functional Telegram bot built with **Node.js** and the **Telegraf.js** framework. This bot demonstrates command handling, message filtering, and fetching data from external APIs using **Axios**.

## 🚀 Features

- **Greeting System:** Interactive `/start` and `/help` commands.
- **Dynamic Parameters:** Custom `/sayHi [name]` command to process user input.
- **API Integration:** Fetches live placeholder data using **Axios** via the `/todos` command.
- **Secure Configuration:** Environment variable management using `dotenv` to keep API tokens safe.
- **Modular Logic:** Cleanly organized code using modern JavaScript.

## 🛠 Tech Stack

- [Node.js](https://nodejs.org/) - Runtime Environment
- [Telegraf](https://telegraf.js.org/) - Modern Telegram Bot Framework
- [Axios](https://axios-http.com/) - Promise-based HTTP client
- [Dotenv](https://www.npmjs.com/package/dotenv) - Environment variable management

## 📦 Installation & Setup

1. **Clone the repository:**

```bash
git clone [https://github.com/AlirezaSaberian/TelegramBot_NodeJS_Telegraf.git](https://github.com/AlirezaSaberian/TelegramBot_NodeJS_Telegraf.git)
cd AlisaTelegrafNode_Bot
```

2. **Install dependencies:**

```
npm install
```

3. **Configure Environment Variables:**

```
TOKEN=YOUR_BOT_TOKEN_HERE
```

4. **Run the bot:**

```
node index.js
```

## 📜 Available Commands On Bot

| Command         | Description            |
| :-------------- | :--------------------- |
| `/start`        | Welcome message        |
| `/help`         | Show help guide        |
| `/say`          | Ask what to say        |
| `/sayHi [name]` | Greet with a name      |
| `/Alisa`        | About the creator      |
| `/todos`        | Get a sample todo task |
