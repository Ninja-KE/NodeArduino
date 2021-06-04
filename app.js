//import required modules
const express = require('express')
const app = express()
const five = require('johnny-five')
const server = require('http').createServer(app)
const conn = require('./db')
const nexmo = require('./sms')


//listen to server on port 4000
server.listen(process.env.PORT || 4000)
console.log('server running on port 4000')

//body parser
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))


//initialize board
const board = new five.Board({
    port: "COM4"
})


board.on('ready', () => {
    const motion = new five.Motion(3)

    //on motion detected
    motion.on('motionstart', () => {
        console.log('intruder detected')
        const from = 'Vonage APIs';
        const to = 'recipient/owners number';
        const text = 'Intruder detected';

        //send sms and insert into database
        nexmo.message.sendSms(from, to, text);
        const data = "intruder detected"
        const sql = "insert into sensor values(null, '"+ data +"', null)"
        conn.query(sql, () => {
                console.log('Data saved successfully')
            });
    })
})