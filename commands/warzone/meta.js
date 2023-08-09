const { SlashCommandBuilder } = require('discord.js');
const { season5 } = require('./season5.js');

const formattedLoadouts = season5
    .map((loadout, index) => {
        return `
      // META WEAPON #${index + 1}
      WEAPON: '${loadout.weapon} [${loadout.type}]'
      '${loadout.attachments.first.type}': '${loadout.attachments.first.name}' 
      '${loadout.attachments.second.type}': '${loadout.attachments.second.name}'
      '${loadout.attachments.third.type}': '${loadout.attachments.third.name}'
      '${loadout.attachments.fourth.type}': '${loadout.attachments.fourth.name}'
      '${loadout.attachments.fifth.type}': '${loadout.attachments.fifth.name}'
    `;
    })
    .join('\n');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meta')
        .setDescription('Provides current meta loadout for warzone season 5.'),
    async execute(interaction) {
        await interaction.reply(`
        \`\`\`js
        CURRENT META WEAPONS FOR SEASON 5 WARZONE
        
        ${formattedLoadouts}
        \`\`\`
      `);
    },
};
