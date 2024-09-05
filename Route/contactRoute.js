import { Router } from 'express'
import {
  contactHandle,
  getAllContactData
} from '../controllers/contactController.js'
const contactRouter = Router()

contactRouter.route('/contact').post(contactHandle)
contactRouter.route('/allcontactdata').get(getAllContactData)

export default contactRouter
