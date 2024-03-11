const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT ?? 3333;
const dirname = process.argv.at(2);

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });

  fs.readdir(dirname, (err, files) => {
    if (err) console.log(err);
    else {
      res.write("Directories and Files: <br>");
      files.forEach((file) => {
        res.write(`${file} <br>`);
      });

      res.end();
    }
  });
});

server.listen(PORT);

console.log(`Running at ${PORT}`);
