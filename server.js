// Step 1
import express from "express";
import cors from "cors";
import "dotenv/config";
// Step 2
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
// middlewares
app.use(express.json());
const allowedOrigins = [
    // "http://meal-kit-ecommerce-project-deployed-frontend.vercel.app/",
    // "http://localhost:5173", //admin
    // "http://localhost:3001", //user
  "https://admin-app-one-rose.vercel.app/"
];
app.use(
  cors({
      origin: (origin, callback) => {
          //Allow requests with no origin (eg. mobile or curl)
          if (!origin) {
              return callback(null, true);
          }
          if (allowedOrigins.includes(origin)) {
              callback(null, true); //Allow the origin
          } else {
              callback(new Error("Not allowed by CORS"));
          }
      },
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true, // Allow cookies or Authorization headers
  })
);
// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.get("/", (req, res) => {
    res.send("API Working");
});
app.listen(port, () => console.log(`Server started on PORT : ${port} :star2:`));