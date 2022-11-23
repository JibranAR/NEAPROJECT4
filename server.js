
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const SpotifyWebApi = require("spotify-web-api-node");


const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/login', (req, res,) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'b1de9c42b86d45b39aa1193168b2a4af',
        clientSecret: 'de9a144b090145578686bcebfc0dc5a3'

    })
    spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
        res.json({
            access_token: data.body.access_token,
            refresh_token: data.body.refresh_token,
            expires_in: data.body.expires_in,
        })
    })
    .catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
})

app.listen(3001)
