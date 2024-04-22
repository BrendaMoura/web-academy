import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import validateEnv from "./utils/validateEnv";
import router from "./router";
import setLangCookie from "./middleware/setLangCookie";

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 4444;

app.use(cookieParser());
app.use(setLangCookie);
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});
