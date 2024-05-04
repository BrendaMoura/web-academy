import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { v4 as uuidv4 } from "uuid";
import session from "express-session";

import validateEnv from "./utils/validateEnv";
import router from "./router";
import setLangCookie from "./middleware/setLangCookie";
import { ProdutoCarrinho } from "./resources/compra/compra.types";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json";

declare module "express-session" {
  interface SessionData {
    uid: string;
    tipoUsuarioId: string;
    carrinho: ProdutoCarrinho[];
  }
}

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 4444;

app.use(cookieParser());
app.use(
  session({
    genid: () => uuidv4(),
    secret: "hrEg7485u34nbgf43jkSOej9sgyYY3jfe9su3r45Ihs89hfg6tf6ds8",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(setLangCookie);
app.use(express.json());
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});
