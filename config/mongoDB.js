import mongoose from "mongoose";
import 'dotenv/config'

const connectDB = async () => {
  try {
    // console.log(process.env);
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(`MongoDB Connected!`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;