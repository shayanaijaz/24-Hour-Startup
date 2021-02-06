var express = require("express");
var cors = require("cors")

const { getPackedSettings } = require("http2");

const {Client} = require('pg');

const client = new Client({
    // user: 'shayanaijaz',
    // password: '03232075115',
    // host: 'postgresql://localhost:5432',
    // database: 'devices',
    // port: 5433
    connectionString: 'postgres://postgres:03232075115@localhost:5432/devices'
})

client.connect();

var app = express();

app.use(cors());


app.get("/devices", async (req, res, next) => {

    var result = await client.query('SELECT * FROM public.devices');

    console.log(result.rows)

    res.status(200).send(result.rows);
   });

app.get("/devices/generator/:id", async (req, res, next) => {
    console.log(req.params);

    var value = [req.params.id];

    var result = await client.query('SELECT * FROM public.generators WHERE id = $1', value);

    console.log(result.rows)

    res.status(200).send(result.rows);
})

app.get("/devices/:id/generators", async(req, res, next) => {
    var value = [req.params.id];

    var result = await client.query('SELECT * FROM public.generators WHERE device_id = $1', value);

    console.log(result.rows);

    res.status(200).send(result.rows);
})

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

