const { Events } = require('discord.js');
const { clonedChannels } = require('../events/channelCreate');

module.exports = {
	name: Events.VoiceStateUpdate,

	async execute(oldState, newState) {
        if(clonedChannels.has(oldState.channelId) && oldState.channel.members.size === 0){
            oldState.channel.delete();
        }
	},
};