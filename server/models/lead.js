const mongoose = require('mongoose')

const LeadSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  }
})
// ‘Models’ are higher-order constructors that take a schema and create an
// instance of a document equivalent to records in a relational database.
// the first parameter is the name of the collection, lead will be converted to the plural form: leads
module.exports = mongoose.model('lead', LeadSchema)
