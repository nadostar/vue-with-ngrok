// https://ngrok.com/

let port = 8080
if (process.argv[2]) {
    port = process.argv[2]
}

const path = require('path')
const host_file = path.resolve(process.env.NGROK_FILE)

const fs = require('fs');
process.on('SIGINT', async (err) => {
    const err_unlink = await fs.unlinkSync(host_file)
    if (err_unlink) {
        console.log(err_unlink)
    }
});


const ngrok = require('ngrok');
(async () => {
    // startup ngrok
    const url = await ngrok.connect(port)
    console.log(url)
    fs.writeFileSync(host_file, url + ':' + port, err => {
        if (err) {
            console.log(err)
        }
    })
})();