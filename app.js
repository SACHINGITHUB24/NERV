const Tgfanyc = require('tgfancy')
const TelegramBot = require('node-telegram-bot-api')
const dotenv = require('dotenv').config()
const axios = require('axios')
const Github = require('github-api')

const token = process.env.BOT_TOKEN



const githhubtoken = process.env.GITHUB_TOKEN

const bot = new Tgfanyc(token,{
    polling: true,
    Tgfanyc: {
        feature:true,
        cancellation:true,

    }
})

bot.onText(/\/start/, async (msg,match) => {
    const chatid = msg.chat.id;

    bot.sendMessage(chatid,"Welcome Sachin Mehta welcome to NERV Bot your Personal Digital Nervous System created by you with ❣️! ")

})


// ghost => GMAIL , Hosting Services, GITHUB API
bot.onText(/\/ghost/, async (msg) => {
    const chatid = msg.chat.id;
    // const response = await axios.get(webhookurl)
    // bot.sendMessage(chatid,"Your Repositories are: ",response)

    const repodata = new Github({
        token: githhubtoken
    })

    const me = repodata.getUser()

    me.getProfile().then(({data}) => {
        // console.log(`username: ${data.login}`);
        // console.log(`Bio: ${data.bio}`)
        bot.sendMessage(chatid,`Username: ${data.login}`)
        bot.sendMessage(chatid,`Bio: ${data.bio}`)
        bot.sendMessage(chatid,`Repositories: ${data.public_repos}`)
        bot.sendMessage(chatid,`Issues: ${data.issuesCount}`)
        bot.sendMessage(chatid,`Issues: ${data.pullsCount}`)
        bot.sendMessage(chatid,`Issues: ${data.followers}`)



        bot.sendMessage(chatid, "Started Development of Ghost feature Very soon development will done and the bot will live soon till then check our and research well 🔥🔥🔥🔥🔥!!!")
    })
    



})

bot.on("message", async (msg) => {
    const chatid = msg.chat.id;

    console.log("Started Development NERV")
    console.log("Welcome to NERV")
})