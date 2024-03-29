import { Elysia } from "elysia"
import { cors } from "@elysiajs/cors"
import TelegramBot from "node-telegram-bot-api"
import { AppConfig } from "./constants/config/app.config"
import { handleTelegramCommand } from "./handler"

const app = new Elysia()

app.use(cors().get("/", () => "Hi"))

const bot = new TelegramBot(AppConfig.TELEGRAM_BOT_TOKEN, {
  polling: AppConfig.TELEGRAM_POLLING,
})

bot.on("message", (msg) => {
  const chatId = msg.chat.id
  handleTelegramCommand(bot, msg, chatId)
})

app.listen(8080)
