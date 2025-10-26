const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Auto-welcome on member join
client.on('guildMemberAdd', async (member) => {
  try {
    const channel = await member.guild.channels.fetch(process.env.WELCOME_CHANNEL_ID);
    if (!channel) return;

    const embed = new EmbedBuilder()
      .setAuthor({ name: 'Ministry of Induction — Year 0 ADD' })
      .setTitle('Welcome to Velthrone Society')
      .setDescription(
        `Citizen <@${member.user.id}>, your entry has been recorded in the **Capitol Registry**.\n\n` +
        `**Start here:**\n` +
        `• <#${process.env.INTRODUCTIONS_CHANNEL_ID}>\n - State your name and origin for Capitol records.` +
        `• <#${process.env.TREATY_CHANNEL_ID}>\n - The law that binds Panem. Read before speaking.` +
        `• <#${process.env.CENTRAL_SQUARE_CHANNEL_ID}>\n\n - Authorized space for citizen discussion.` +
        `*(Issued under authority of the Capitol.)*`
      )
      .setColor(0xD9D6CF)
      .setTimestamp();

    await channel.send({ embeds: [embed] });
  } catch (err) {
    console.error('Welcome error:', err);
  }
});

client.login(process.env.DISCORD_TOKEN);