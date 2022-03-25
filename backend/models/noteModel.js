const mongoose = require('mongoose')

const noteSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },

    ticket: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Ticket'
    },

    text: {
      type: String,
      required: [true, 'Please add some text']
    },

    isStaff: {
      type: Boolean,
      default: false
    },

    staffId: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Note', noteSchema)

// each ticket is connected with a user, so we need to have a relationship between tickets and users
// each ticket is also associated with a specific product
