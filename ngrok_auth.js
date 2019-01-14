const ngrok = require('ngrok');
(async () => {
    await ngrok.authtoken(process.env.NGROK_AUTHTOKEN)
})