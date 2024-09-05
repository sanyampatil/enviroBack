import myContact from '../model/contactModel.js'

const contactHandle = async (req, res) => {
  try {
    console.log('hiiiii sanyam')
    const { fullName, email, phone, state, city, district, purpose, yourmsg } =
      req.body
    console.log('fillName', fullName)
    console.log('req.body', req.body)

    const contactData = await myContact.create({
      fullName,
      email,
      phone,
      state,
      city,
      district,
      yourmsg,
      purpose
    })
    if(!fullName || email  phone, state, city, district, yourmsg, purpose
)

    res.status(200).json({
      success: true,
      message: 'successfully send',
      contactData
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'not send'
    })
  }
}

const getAllContactData = async (req, res) => {
  try {
    const allContactData = await myContact.find({})

    res.status(200).json({
      success: true,
      message: 'contact data load',
      allContactData
    })
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'contact data not load',
      error
    })
  }
}

export { contactHandle, getAllContactData }
