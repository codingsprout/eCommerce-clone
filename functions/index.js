const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51Hgtq1K6Z2ILZabMLCv4NHRM7JJrVennrWWvhylgPKpg7igs7qWwMpvQ9wzHYTo8nLNkTjU3sQ7LzNoWMh4qAfWi00BRh0LfN5'
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('testing');
});

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;

  console.log('Payment request received', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
