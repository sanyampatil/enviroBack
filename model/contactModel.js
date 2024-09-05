import mongoose, { Schema } from 'mongoose'

const contactDetail = new Schema({
  fullName: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  state: {
    type: String
  },
  city: {
    type: String
  },
  district: {
    type: String
  },
  purpose: {
    type: String
  },
  yourmsg: {
    type: String
  }
})

const myContact = mongoose.model('myContacts', contactDetail)
export default myContact
