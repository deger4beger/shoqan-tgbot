import TgBot from "node-telegram-bot-api"
import { config } from "./lib/config"

export class TelegramBot {

	private readonly bot

	constructor() {
		this.bot = new TgBot(config.token, { polling: true })
	}

	start() {
		this.bot.on("message", msg => {
			const text = msg.text
       		const chatId = msg.chat.id
			switch (text) {
				case "/start": {
					this.bot.sendMessage(chatId, "Добро пожаловать петушок")
				}
			}
		})
	}

}