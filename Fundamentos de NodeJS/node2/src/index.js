import http from "http";
import fs from "fs";
import dotenv from "dotenv";
import createLink from "../utils/utils.js";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT ?? 3333;
const dirname = process.argv.at(2);

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

  if (req.url === "/") {
    fs.readdir(dirname, (err, files) => {
      if (err) throw new Error(err);
      else {
        res.write("Directories and Files: <br>");
        files.forEach((file) => {
          res.write(createLink(file));
        });
        res.end();
      }
    });
  } else if (req.url.includes("favicon")) {
    res.end();
  } else {
    const fileUrl = `${dirname}${req.url}`;
    fs.readFile(fileUrl, (err, data) => {
      if (err) throw new Error(err);
      res.write(`<a href="/">Voltar</a><br>\n`);
      res.write(data.toString());
      res.end();
    });
  }
});

server.listen(PORT);

console.log(`Running at ${PORT}`);
