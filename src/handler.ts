import TelegramBot from "node-telegram-bot-api"
import { TelegramCommand } from "./constants/command/telegramCommand"
import axios from "axios"
import { AppConfig } from "./constants/config/app.config"

// TODO: Handle command from Telegram and send response to API
const handleTelegramCommand = async (
  bot: TelegramBot,
  msg: TelegramBot.Message,
  chatId: number,
) => {
  const commandToMessageMap: Record<any, string> = {
    [TelegramCommand.start]: "Welcome to the bot",
    [TelegramCommand.stats]: "Stats",
    [TelegramCommand.checkin]: "Checkin",
    [TelegramCommand.checkout]: "Checkout",
    [TelegramCommand.askPermission]: "Ask permission",
    [TelegramCommand.status]: "Status",
    [TelegramCommand.profile]: "Profile",
    [TelegramCommand.register]: "Register",
    [TelegramCommand.staffs]: "Staffs",
    [TelegramCommand.export]: "Export",
    [TelegramCommand.exportTasks]: "Export tasks",
    [TelegramCommand.print]: "Print",
    [TelegramCommand.tasks]: "Tasks",
    [TelegramCommand.tasksNew]: "Tasks new",
    [TelegramCommand.tasksDelete]: "Tasks delete",
    [TelegramCommand.info]: "Info",
    [TelegramCommand.help]: "Help",
  }

  const messageText = commandToMessageMap[msg.text ?? ""] || "No command found!"

  bot.sendMessage(chatId, messageText)
  postToWebhook(messageText)
  console.log(msg)
}

const postToWebhook = async (data: any) => {
  try {
    const webhookUrl = AppConfig.WEBHOOK_URL
    await axios.post(webhookUrl, data)
  } catch (error: any) {
    // console.log("error", error)
  }
}

export { handleTelegramCommand }
