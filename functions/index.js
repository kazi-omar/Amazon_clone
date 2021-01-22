const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');
const stripe = require("stripe")("sk_test_51HRubfIvizXGkTnyJytKTZ5PYIcQZH0BjHK1LHEPNXrItYhRwONETYKgmItOIu1Jnw2SXhncs7nXmVYvcp4itWa400XvDPJpxI");

//API

//! -app config
const app = express();

//! -middleware

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

app.use(cors({ origin: true }));
app.use(express.json());

//!-api routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment req received', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });
    //ok crreated
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//!-listen command
exports.api = functions.https.onRequest(app);


// default link:  http://localhost:5001/clone-58963/us-central1/api