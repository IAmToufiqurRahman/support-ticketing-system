const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },

    product: {
      type: String,
      required: [true, 'Please select a product'],
      enum: ['Laptops', 'Mobile phones', 'Smart watches', 'Smart Appliances']
    },

    description: {
      type: String,
      required: [true, 'Please enter a description of the issue']
    },

    status: {
      type: String,
      required: true,
      enum: ['new', 'open', 'closed'],
      default: 'new'
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Ticket', ticketSchema)

// each ticket is connected with a user, so we need to have a relationship between tickets and users
// each ticket is also associated with a specific product
