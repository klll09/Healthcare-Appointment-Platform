import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // We hardcode direct connection string right here to bypass the .env issues completely
    await mongoose.connect("mongodb+srv://kritikk:kritik2006@cluster0.33ipi8j.mongodb.net/doctor_appointment?appName=Cluster0");
    console.log("Database Connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export default connectDB;