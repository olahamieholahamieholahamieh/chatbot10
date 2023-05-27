const { Configuration, OpenAIApi } = require("openai"); 
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config()
// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const token = process.env.TELEGRAM_API_KEY;

// Set up the OpenAI API
const openaiApiKey = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
  apiKey: openaiApiKey,
});
const openai = new OpenAIApi(configuration);

// Create a new bot instance
const bot = new TelegramBot(token, { polling: true });

// Handle incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

async function runCompletion (messageText) {
const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: messageText, max_tokens: 500,
});
  bot.sendMessage(chatId, completion.data.choices[0].text);
console.log(completion.data.choices[0].text);
}
runCompletion (messageText);
  // Send the response back to the user
});


