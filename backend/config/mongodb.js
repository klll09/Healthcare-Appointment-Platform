import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Falls back to your hardcoded string locally, but uses Render's environment variable when deployed
    const connectionString = process.env.MONGO_URI || "mongodb+srv://kritikk:kritik2006@cluster0.33ipi8j.mongodb.net/doctor_appointment?appName=Cluster0";
    
    await mongoose.connect(connectionString);
    console.log("Database Connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export default connectDB;