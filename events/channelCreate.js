const { Events } = require('discord.js');
const { masterChannel, parentId } = require('../config.json');

const targetChannelId = masterChannel;
const dynamicChannels = new Map();

module.exports = {
    name: Events.VoiceStateUpdate,

    async execute(oldState, newState) {
        if (newState.channelId === targetChannelId) {
            console.log('User joined target channel to clone.');
            const newChannel = await newState.guild.channels.create({
                name: '☢️',
                type: 2,
                parent: parentId,
                userLimit: 1,
            });
            dynamicChannels.set(newChannel.id, newChannel);

            const member = newState.member;
            if (member) {
                await member.voice.setChannel(newChannel);
                console.log('User joined cloned channel.');
            }
        }
    },
    dynamicChannels,
};
