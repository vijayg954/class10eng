import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DbConnect from "./config/Db.js";

// import oneLinerRoutes from "./routes/oneLinerroutes.js";
import quizRoutes from "./routes/quizRoutes.js";

import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]);

dotenv.config();
DbConnect();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/v1/class10eng/quiz", quizRoutes);
app.use("/api/v1/enggrammar/quiz", quizRoutes);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`App is listening on ${PORT}`);
});