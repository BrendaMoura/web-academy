import http from "http";
import fs from "fs";
import dotenv from "dotenv";
import { loremIpsum } from "lorem-ipsum";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT ?? 3333;
const htmlFile = "./public/index.html";
const cssFile = "./public/styles.css";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

  if (req.url === "/") {
    fs.readFile(htmlFile, (err, dataHTML) => {
      if (err) throw new Error(err);

      fs.readFile(cssFile, (err, dataCss) => {
        if (err) throw new Error(err);

        const htmlWithCss = dataHTML
          .toString()
          .replace("</head>", `<style>${dataCss}</style></head>`);

        res.end(htmlWithCss, "utf-8");
      });
    });
  } else if (req.url.includes("favicon")) {
    res.end();
  } else {
    const qtd = req.url.split("=")[1];

    const texto = loremIpsum({
      count: Number(qtd),
      format: "html",
      paragraphLowerBound: 3,
      paragraphUpperBound: 7,
      random: Math.random,
      sentenceLowerBound: 5,
      sentenceUpperBound: 15,
      suffix: "\n",
      units: "paragraphs",
    });

    fs.readFile(htmlFile, (err, dataHTML) => {
      if (err) throw new Error(err);

      fs.readFile(cssFile, (err, dataCss) => {
        if (err) throw new Error(err);

        const htmlWithCss = dataHTML
          .toString()
          .replace("</head>", `<style>${dataCss}</style></head>`);

        res.end(htmlWithCss.replace("{{lorem}}", texto));
      });
    });
  }
});

server.listen(PORT);

console.log(`Running at ${PORT}`);
