import TgBot from "node-telegram-bot-api"
import { config } from "./lib/config"

export class TelegramBot {

	private readonly bot

	constructor() {
		this.bot = new TgBot(config.token, { polling: true })
	}

}