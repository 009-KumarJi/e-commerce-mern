import mongoose from "mongoose";

const connectDB = async (URI) => {
  console.log(`Connecting to MongoDB...`);
  try {
    const conn = await mongoose.connect(URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;