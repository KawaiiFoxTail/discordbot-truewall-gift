const walletgift = require("truewallet-gift")
const discord = require('discord.js');
const client = new discord.Client();

//-----------------------------------------------------

let wallet = new walletgift('0123456789'); // <-- เบอร์ ของเมิงอ่ะ

//-----------------------------------------------------

client.on('message', (msg) => {
    if(msg.content.startWith(!pay)) {
        const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
        main(args[1]);
    }
})




async function main(link) {
    var response = await wallet.pay(link)
    console.log(response);
}

client.login('TOKEN'); (console.log('Bot Online'))
