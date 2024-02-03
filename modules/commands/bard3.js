module.exports.config = {
  name: "bard3",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "",
  description: "Bard AI(Lệnh này chỉ có admin dùng được thôi!)",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 0
};

module.exports.run = async function ({ api, event, args, Users, Currencies, Threads }) {
  try {
    const { BardAPI } = require('bard-api-node');

    async function testAssistant() {
      try {
        const assistant = new BardAPI();

        // Set session information for authentication
        await assistant.setSession('__Secure-1PSID', 'bAhaAcaCtNq6kunosLF6ZVh_bxNqpU-PKjffk_P8Rs6z0QZDZ7E1n__yoebJbphjGYINjA.'); // or '__Secure-3PSID'

        // Send a query to Bard
        const response = await assistant.getBardResponse('Hello, how are you?');
        console.log('Bard:', response.content);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    testAssistant();
  } catch (error) {
    console.error('Error:', error);
  }
};
