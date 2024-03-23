import express from "express";
import dotenv from "dotenv";
import validateEnv from "./utils/validateEnv";
import logger from "./middlewares/logger";
import router from "./router/router";
import { engine } from "express-handlebars";

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

app.use(logger("simples"));

app.use("/html", express.static(`${__dirname}/../public/html`));
app.use("/css", express.static(`${__dirname}/../public/css`));
app.use("/js", express.static(`${__dirname}/../public/js`));
app.use("/img", express.static(`${__dirname}/../public/img`));

app.use(router);

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
