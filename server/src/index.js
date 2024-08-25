import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { StramChat } from "stream-chat";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
const api_key = process.env.api_key;
const api_secret = process.env.api_secret;
const serverClient = StramChat.getInstance(api_key, api_secret);

app.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, username, password } = req.body;
    const userID = uuidv4();
    const hashedPassword = await bcrypt.hash(password, 10);
    const token = serverClient.createToken(userID);
    res.json({ token, userID, firstName, lastName, username, hashedPassword });
  } catch (error) {
    res.json(error);
  }
});
app.post("/login");

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
