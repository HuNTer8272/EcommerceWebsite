import express from "express";
import dotenv from "dotenv";
import compression from "compression";
import cors from "cors";
import { initDb } from "./db/connection.js";
import productRouter from "./routes/products.js";
import authRouter from "./routes/authRouter.js";
import CategoryRouter from "./routes/CategoryRouter.js";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();
const app = express();

app.use(express.json());

app.use(compression());
app.use(
  cors({
    origin: ["http://localhost:3000", process.env.FRONTEND_URL],
    credentials: true,
  })
);

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:4000", 
    changeOrigin: true,
  })
);

app.use("/auth", authRouter);
app.use("/category", CategoryRouter);
app.use("/product", productRouter);

app.listen(process.env.PORT, async () => {
  await initDb();
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
