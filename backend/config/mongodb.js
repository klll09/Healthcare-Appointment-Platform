import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionString = process.env.MONGO_URI;
    
    if (!connectionString) {
      throw new Error("MONGO_URI environment variable is missing!");
    }

    await mongoose.connect(connectionString);
    console.log("Database Connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export default connectDB;