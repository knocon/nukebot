async function createEmbeds() {
    const loadouts = await fetchLoadouts();
    embeds = [];
    loadouts.forEach((loadout) => {
        const embed = new EmbedBuilder()
            .setColor(0xe24733)
            .setTitle('Some title')
            .setAuthor({
                name: 'WARZONE SEASON ${meta} META',
                iconURL:
                    'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/common/icon-wz-white.png',
            })
            .setDescription('Some description here')
            .setThumbnail('https://i.imgur.com/yazb6g9.gif')
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
            .setImage('https://i.imgur.com/6suCtVC.png')
            .setTimestamp()
            .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
        embeds.push(embed);
    });
    console.log(embeds);
    return embeds;
}

module.exports = {
    createEmbeds,
};
