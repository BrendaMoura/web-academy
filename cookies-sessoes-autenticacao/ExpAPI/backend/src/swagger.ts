import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";
dotenv.config();

const doc = {
  info: {
    title: "API da Loja virtual",
    description: "Documentação da API",
  },
  host: `${process.env.HOST}:${process.env.PORT}`,
  definitions: {
    CreateProdutoDto: {
      nome: "Martelo",
      preco: 29.0,
      estoque: 10,
    },
    Produto: {
      id: "8a2053de-5d92-4c43-97c0-c9b2b0d56703",
      nome: "Bacon",
      preco: 261,
      estoque: 1,
      createdAt: "2023-11-07T19:27:15.645Z",
      updatedAt: "2023-11-07T19:27:15.645Z",
    },
    Produtos: [
      {
        id: "8a2053de-5d92-4c43-97c0-c9b2b0d56703",
        nome: "Bacon",
        preco: 261,
        estoque: 1,
        createdAt: "2023-11-07T19:27:15.645Z",
        updatedAt: "2023-11-07T19:27:15.645Z",
      },
      {
        id: "e7d9ab18-f4fb-4c7f-9f87-80d914e5cec5",
        nome: "Sacola",
        preco: 30,
        estoque: 100,
        createdAt: "2023-11-07T19:23:30.645Z",
        updatedAt: "2023-11-07T19:27:15.645Z",
      },
    ],
    CreateUsuarioDto: {
      nome: "Márcia",
      email: "marcia@gmail.com",
      senha: "marcia123",
      tipoUsuarioId: "48aa1186-15b3-4512-a863-5a86b9687666",
    },
    Usuario: {
      id: "d1c61bd3-ddb7-4ac6-bb06-d2dde417f560",
      nome: "Márcia",
      email: "marcia@gmail.com",
      senha: "marcia123",
      tipoUsuarioId: "48aa1186-15b3-4512-a863-5a86b9687666",
    },
    Usuarios: [
      {
        id: "d1c61bd3-ddb7-4ac6-bb06-d2dde417f560",
        nome: "Márcia",
        email: "marcia@gmail.com",
        senha: "marcia123",
        tipoUsuarioId: "48aa1186-15b3-4512-a863-5a86b9687666",
      },
      {
        id: "0dd92da1-f06b-43e9-bb30-fb4064b3fefc",
        nome: "Márcio",
        email: "marcio@gmail.com",
        senha: "marcio123",
        tipoUsuarioId: "ce28a957-3ae0-4804-bab1-7bfca75c6888",
      },
    ],
    LoginDto: {
      email: "marcia@gmail.com",
      senha: "marcia123",
    },
  },
};
const outputFile = "./swagger-output.json";
const routes = ["./src/router/index.ts"];
swaggerAutogen()(outputFile, routes, doc);
