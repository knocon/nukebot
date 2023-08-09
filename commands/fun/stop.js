const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('stop').setDescription('Stops current song!'),
    async execute(interaction) {
        await interaction.reply('Not implemented yet.');
    },
};
