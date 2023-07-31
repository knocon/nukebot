const { Events } = require('discord.js');

const targetChannelId = '1135601577533648906';

module.exports = {
	name: Events.VoiceStateUpdate,

	async execute(oldState, newState) {
		if (newState.channelId === targetChannelId) {
			console.log('trigger');
		}
	},
};
