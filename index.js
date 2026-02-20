// AlisaTelegrafNode_Bot

require("dotenv").config();
const { Telegraf } = require("telegraf");
const axios = require("axios");
const { message } = require("telegraf/filters");

const { TOKEN } = process.env;

// Create the bot
const myBot = new Telegraf(TOKEN);

// myBot.use((ctx) => {
//   ctx.reply(ctx.message.text);
// });

myBot.start((ctx) => {
  ctx.reply("Hii!👋🏼 Welcome To Alisa Bot:)");
});

myBot.help((ctx) => {
  ctx.reply("Commands: \n/start: say welcome!");
});

// Update Types
// myBot.on(message("text"), (ctx) => {
//   const userMessage = ctx.message.text;
//   ctx.reply(`You said: ${userMessage}`);
// });

// Custom Command
myBot.command("say", (ctx) => {
  ctx.reply("What can I say?");
});

myBot.command("sayHi", (ctx) => {
  if (ctx.message.text.split(" ").length < 2) {
    return ctx.reply("Please provide a name after the command.");
  }
  ctx.reply(`Hi ${ctx.message.text.split(" ")[1]}!`);
});

// Hear Command
myBot.hears("Alisa", (ctx) => {
  ctx.reply("Alisa means Alireza Saberian!");
});

// Fetch API
myBot.command("todos", async (ctx) => {
  const todos = await axios.get("https://jsonplaceholder.typicode.com/todos");
  ctx.reply(`Todo: ${JSON.stringify(todos.data[1])}`);
});

// Launch bot
myBot.launch();
