const axios = require('axios');
const cheerio = require('cheerio');

let loadouts = [];

async function fetchLoadouts() {
    const url = 'https://wzhub.gg/loadouts';

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    console.log('Fetching current meta-loadouts.');

    $('h2:contains("Pure Meta")')
        .next('.loadouts-list__group')
        .find('.loadout-card')
        .each((i, element) => {
            const $card = $(element);

            const title = $card.find('.gun-badge__text').text().trim();

            const fullTypeText = $card.find('.loadout-card__type').text().trim();
            const type = fullTypeText.split('\n')[0];

            const attachments = [];

            $card.find('.attachment-card').each((i, el) => {
                const name = $(el).find('.attachment-card-content__name div').text();

                const type = $(el).find('.attachment-card-content__name span').text();

                /**
                 * ? Vertical Tune works as intented.
                 * ? Horizontal Tune contains both tunings.
                 */
                /*
                    const $vertical = $(el).find('.attachment-card__tune--is-vertical');
                    const verticalTune = $vertical.next().text();

                    const $horizontal = $(el).find('.attachment-card__tune');
                    const horizontalTune = $horizontal.next().text();
                    const horizontal = horizontalTune.match(/\n(.*)/)[1];

                    */

                /**
                 * ? Provides both tuning values
                 */
                /*
                    const $parent = $(el).find('.attachment-card-content');
                    const text = $parent.text();
                    const lines = text.split('\n');
                    const verticalTune = lines[lines.length - 1];
                    */

                let attachment = {
                    name,
                    type,
                };

                attachments.push(attachment);
            });

            loadouts.push({
                title,
                type,
                attachments,
            });
        });

    // Loop through each loadout
    loadouts.forEach((loadout) => {
        console.log(`Loadout: ${loadout.title} (${loadout.type})`);

        // Loop through each attachment
        loadout.attachments.forEach((attachment) => {
            console.log(`- ${attachment.type}: ${attachment.name}`);
            if (attachment.verticalTune) {
                console.log(`Vertical Tune: ${attachment.verticalTune}`);
            }

            if (attachment.horizontalTune) {
                console.log(`Horizontal Tune: ${attachment.horizontalTune}`);
            }
        });
    });

    console.log('Fetching loadouts done.');
    return loadouts;
}

module.exports = {
    fetchLoadouts,
};
