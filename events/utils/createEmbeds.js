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
            .setDescription(`Weapon is considered as being the absolute meta of its category.`)
            .setThumbnail('https://i.imgur.com/pDMCrxm.gif')
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )
            .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
            .setImage(
                'https://api.wzhub.gg/storage/uploads/loadouts/1689543138_3e10395c-d09e-47a1-8ea3-0ab62497b51e.png',
            )
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
