const Discord = require('discord.js');

const client = new Discord.Client();


const prefix = '-'

client.once('ready', () => {
    console.log("AmbreBot is online");
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('Hi I am AmbreBot, kshitij made me, and I have to say that saarthak is a fucking noob!');
    }
    else if (command === 'amongus'){
        message.channel.send('Lets play Among Us!');
    }
    else if (command === 'disha'){
        message.channel.send('Disha is dumb af, cute tho');
    }
    else if (command === 'ex'){
        message.channel.send('Wo toh bewafa nikli uski baat chhod re');
    }
    else if (command === 'moveon'){
        message.channel.send('Nayi bandi dhund le');
    }
    else if (command === 'help'){
        message.channel.send('Commands are : ping,amongus,disha,ex,moveon,help  ');
    }



    
});


 client.login('NzU2ODc3Njk5MjAwNDUwNjIw.X2YPSQ.P6S9juC5g8XDjTX8BxdPjShH9r0')