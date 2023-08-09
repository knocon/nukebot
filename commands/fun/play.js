const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('play').setDescription('Play a spotify song!'),
    async execute(interaction) {
        await interaction.reply('Not implemented yet.');
    },
};
