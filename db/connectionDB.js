import mongoose from 'mongoose'

const connectionDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      'mongodb://127.0.0.1:27017/contact'
    )
    console.log(
      `\n MongoDB connected ! DB host: ${connectionInstance.connection.host}`
    )
  } catch (error) {
    console.log('MONGODB connection error: ', error)
    process.exit(1)
  }
}

export default connectionDB
