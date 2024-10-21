import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config"
import cartRouter from "./routes/cartRoutes.js";
import orderRouter from "./routes/orderRoute.js";

//for server starting backend nodemon :>>>> npm run server

//app config

const app = express();
const port = 4000;

//middleware

app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api end Point
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads")); //folder exposed in frontend
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.get("/", (req, res) => {
  res.send("Api working");
});
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

//mongodb+srv://karanoza10:23296780@cluster0.barhkjy.mongodb.net/?
