const path = require('path')
const fs = require('fs')

const host_file = path.resolve(process.env.NGROK_FILE)

let public_host = ''
let port = '8080'

try {
    const data = fs.readFileSync(host_file, 'utf8')
    if (data) {
        public_host = data.replace(/^https:\/\//, '').replace(/:\d+$/, '')
        port = data.replace(/^.*:/, '')
    }
} catch (error) {
    console.log(error)
}

module.exports = {
    devServer: {
        public: public_host,
        port: port
    }
}