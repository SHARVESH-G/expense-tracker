import mongoose from 'mongoose';

const ConnectToDataBase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Server Connected to MongoDB");
  }catch (err) {
    console.error("MongoDB Connection Error:");
    process.exit(1);
  };
}

export default ConnectToDataBase;
