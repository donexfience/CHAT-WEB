import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const app = express();
import authroute from "./routes/authroute.js";
import connectToMongoDB from "./db/connecttomongodb.js";
import messageroute from "./routes/messageroute.js";

const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser()); // for Jwt breaking

app.use("/api/auth", authroute);
app.use("/api/messages", messageroute);
// app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
