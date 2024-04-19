import express from "express";
import router from "./usuario/usuario.router";

const app = express();
const PORT = 4444;

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on the port ${PORT}`);
});
