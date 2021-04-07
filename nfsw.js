const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', rai => {
    if (rai.content.startsWith(prefix + "nfsw on")) {
        if (!rai.member.hasPermission('MANAGE_CHANNELS')) return rai.channel.send(`**😐 You Don't have Permission \`MANAGE_CHANNELS\` **`);
        if (!rai.guild.member(client.user).hasPermission('ADMINISTRATOR')) return rai.channel.send(`**😐I'm Don't have Permission \`ADMINISTRATOR'\` **`);
        const channel = rai.mentions.channels.first() || rai.channel;
        if (rai.content.startsWith(prefix + "nfsw off")) return;
        channel.setNSFW(true).then(() => {
            rai.channel.send(`**🥱 Done Channel Set to Nfsw Mode : On ${channel} **`)
        })
    }
})
client.on('message', rai => {
    if (rai.content.startsWith(prefix + "nfsw off")) {
        if (!rai.member.hasPermission('MANAGE_CHANNELS')) return rai.channel.send(`**😐 You Don't have Permission \`MANAGE_CHANNELS\` **`);
        if (!rai.guild.member(client.user).hasPermission('ADMINISTRATOR')) return rai.channel.send(`**😐I'm Don't have Permission \`ADMINISTRATOR'\` **`);
        if (rai.content.startsWith(prefix + "nfsw on")) return;
        const channel = rai.mentions.channels.first() || rai.channel;
          channel.setNSFW(false).then(() => {
            rai.channel.send(`**🥱 Done Channel Set to Nfsw Mode : Off ${channel} **`)
        })
    }
});

client.login("");
