const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(interaction) {
        console.log('message received');

        await interaction.reply('reponse');
    },
};
