const express = require('express')
const app = express()
const player = require('play-sound')(opts = {})

const allowCors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*,chat-server-local,content-type')
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next()
}

app.use(allowCors)

let playerInstance = null;
app.use('/play-sound', function (req, res) {
    try{
        playerInstance.kill()
    }catch (e){

    }
    playerInstance = player.play('msg.mp3', function(err){
        if (err) console.log(err)
    })
    res.send('ok')
})

app.use('/stop-sound', function (req, res) {
    try{
        playerInstance.kill()
    }catch (e){

    }
    res.send('ok')
})


app.listen(3131)