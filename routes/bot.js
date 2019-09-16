const express = require("express")
const router = express.Router()
const bot = require("../controllers/bot")

router.get("/communicate", bot.communicate)
router.get("/view", bot.loadChatView)

module.exports = router