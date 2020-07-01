//const { MONGO_DB_URL } = require('./config/config');
const mongoose = require('mongoose');
// Connect to database
const connectToDB = require('./config/db');
const Lead = require('./models/lead');
const cors = require('cors');
const express = require('express');
const app = express();
// To fix cors error:
app.use(cors());

// Init middleware (used to be body parser)
app.use(express.json({ extended: false }));

// @route   GET
// @desc    Schwall
app.get('/api/leads', async (req, res) => {
  const fetchLeads = await Lead.find();
  res.send(fetchLeads);
});

// @route   POST
// @desc    Add lead
app.post('/api/leads', async (req, res) => {
  console.log(req);
  let lead = new Lead({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  });
  await lead.save();
  res.send(req.body.firstName + ' ' + req.body.lastName + ' added to DB');
});

app.listen(5000, () => console.log('Server started on Port 5000!'));
