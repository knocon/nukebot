const { Events } = require('discord.js');
const { createEmbeds } = require('./utils/createEmbeds.js');

const channelId = '1141625256386252810';

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);

        /**
         * ? Creates embeds.
         * ? Clears channel, posts after it.
         */

        const embeds = await createEmbeds();
        const channel = client.channels.cache.get(channelId);
        await channel.messages.fetch();
        try {
            channel.bulkDelete(channel.messages.cache);
        } catch (error) {
            console.error(error);
        }
        channel.send({ embeds });
    },
};
