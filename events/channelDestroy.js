const { Events } = require('discord.js');
const { dynamicChannels } = require('../events/channelCreate');

module.exports = {
    name: Events.VoiceStateUpdate,

    async execute(oldState) {
        if (dynamicChannels.has(oldState.channelId) && oldState.channel.members.size === 0) {
            oldState.channel.delete();
        }
    },
};
