const { Events } = require('discord.js');

const targetChannelId = '1135601577533648906';
const clonedChannels = new Map();

module.exports = {
	name: Events.VoiceStateUpdate,

	async execute(oldState, newState) {
		if (newState.channelId === targetChannelId) {
			console.log('User joined target channel to clone.');

			const newChannel = await newState.channel.clone();
			clonedChannels.set(newChannel.id, newChannel);

			const member = newState.member;
			if (member) {
				await member.voice.setChannel(newChannel);
				console.log('User joined cloned channel.');

			}

		}
	},
	clonedChannels,
};
