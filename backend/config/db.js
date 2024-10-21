import mongoose from "mongoose";

export const connectDB = async () => {
  (
    await mongoose.connect(
      "mongodb+srv://karanoza10:23296780@cluster0.barhkjy.mongodb.net/projectSS"
    ).then((req, res) => {
      console.log("MongoDB Connected");
    })
  )
};
