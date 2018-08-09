const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const client = new Discord.Client();





client.on('ready', () => {
        console.log('By !EtWrk.');
      console.log('By !EtWrk.');
    console.log('By !EtWrk.');
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-Difficult but easy`,"")
client.user.setStatus("dnd")
});





client.login(process.env.BOT_TOKEN);
