const { EmbedBuilder } = require('discord.js');
const { fetchLoadouts } = require('./fetch_meta.js');

async function createEmbeds() {
    const loadouts = await fetchLoadouts();
    embeds = [];
    loadouts.forEach((loadout) => {
        const embed = new EmbedBuilder()
            .setColor(0xe24733)
            .setTitle(`${loadout.title}`)
            .setAuthor({
                name: 'NUKE-BOT WARZONE-META',
                iconURL:
                    'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/common/icon-wz-white.png',
            })
            .setDescription(
                `Weapon is considered as being the absolute meta of its category. Tunings are gonna be added at a later update.`,
            )
            .setThumbnail('https://i.imgur.com/pDMCrxm.gif')
            .addFields(
                { name: loadout.attachments[0].type, value: loadout.attachments[0].name },
                { name: loadout.attachments[1].type, value: loadout.attachments[1].name },
                { name: loadout.attachments[2].type, value: loadout.attachments[2].name },
                { name: loadout.attachments[3].type, value: loadout.attachments[3].name },
                { name: loadout.attachments[4].type, value: loadout.attachments[4].name },
                { name: '\u200B', value: '\u200B' },
                // { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .setImage(loadout.src)
            .setTimestamp()
            .setFooter({ text: `${loadout.date}`, iconURL: 'https://i.imgur.com/pDMCrxm.gif' });
        embeds.push(embed);
    });
    console.log(embeds);
    return embeds;
}

module.exports = {
    createEmbeds,
};
