//const { MONGO_DB_URL } = require('./config/config');
const mongoose = require('mongoose');
// Connect to database
const connectToDB = require('./config/db');
const Lead = require('./models/lead');
const cors = require('cors');
const express = require('express');
const app = express();
// To fix cors error:
app.use(cors()); // app is your express object

// @route   GET
// @desc    Schwall
app.get('/', async (req, res) => {
  const fetchLeads = await Lead.find();
  res.send(fetchLeads);
});

// @route   POST
// @desc    Add lead
app.post('/addLead', async (req, res) => {
  console.log('post route triggered');
  console.log(req.body);
  let lead = new Lead({
    firstName: 'Bühleramk'
  });
  await lead.save();
  res.send('entry added');
  console.log('entry safed');
});

app.listen(5000, () => console.log('Server started on Port 5000!'));
