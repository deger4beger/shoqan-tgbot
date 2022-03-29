import { TelegramBot } from "./app"

function createBot() {
	const bot = new TelegramBot()
	bot.start()
}

createBot()