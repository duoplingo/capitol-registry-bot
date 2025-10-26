const { EmbedBuilder } = require('discord.js');

const embed = new EmbedBuilder()
  .setAuthor({ name: 'Ministry of Registration — Year 0 ADD' })
  .setTitle('Welcome to Velthrone Society')
  .setDescription(
    `May the odds be ever in your favor, <@${member.user.id}>.\n\n` +
    `Please complete the server onboarding and declare your District Affiliation.`
  )
  .addFields(
    {
      name: '— GETTING STARTED:',
      value:
        `<#${process.env.ANNOUNCEMENTS_CHANNEL_ID}> — Server announcements\n` +
        `<#${process.env.INTRODUCTIONS_CHANNEL_ID}> — Introduce yourself\n` +
        `<#${process.env.TREATY_CHANNEL_ID}> — Rules & expectations\n` +
        `<#${process.env.GAMES_HISTORY_CHANNEL_ID}> — Past Hunger Games\n` +
        `<#${process.env.GENERAL_SQUARE_CHANNEL_ID}> — Meet other citizens`
    },
    {
      name: '— CITIZEN POPULATION:',
      value: `There are now **${member.guild.memberCount}** citizens of Velthrone.`
    },
    {
      name: '— UPCOMING HUNGER GAMES:',
      value: `The 1st Hunger Games: Coming soon`
    }
  )
  .setFooter({ text: 'Issued under authority of the Capitol' })
  .setColor(0xD9D6CF)
  .setTimestamp();

await channel.send({ embeds: [embed] });