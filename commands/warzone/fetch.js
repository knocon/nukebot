const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');
const cheerio = require('cheerio');
const loadouts = [];

const url = 'https://wzhub.gg/loadouts';
module.exports = {
    data: new SlashCommandBuilder().setName('fetch').setDescription('Fetches loadout data!'),
    async execute(interaction) {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        console.log('Inside Interaction');
        console.log($());
        //console.log($('.loadouts - list__group'));
        $('.loadouts-list__group')
            .find('.wrap-card loadout-card expand-card')
            .each((i, el) => {
                const title = $(el).find('.gun-badge__text').text();
                console.log(title);
                const image = $(el).find('.loadout-item__image img').attr('src');

                const attachments = $(el).find('.loadout-item__attachments').text();

                loadouts.push({
                    title,
                    image,
                    attachments,
                });
            });

        const title = $('h1').text();
        const meta = $('.meta').text();

        await interaction.reply('some stuff');
    },
};
