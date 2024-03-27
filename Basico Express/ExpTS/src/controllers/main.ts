import { Request, Response } from "express";
import { loremIpsum } from "lorem-ipsum";

const hello = (req: Request, res: Response): void => {
  res.send("Hello World!");
};

const lorem = (req: Request, res: Response): void => {
  const { qtdParagrafos } = req.params;

  const texto = loremIpsum({
    count: Number(qtdParagrafos),
    format: "html",
    paragraphLowerBound: 6,
    paragraphUpperBound: 7,
    random: Math.random,
    sentenceLowerBound: 5,
    sentenceUpperBound: 15,
    suffix: "\n",
    units: "paragraphs"
  });

  res.send(texto);
};

const hb1 = (req: Request, res: Response): void => {
  res.render("main/hb1", {
    message: "Hello World from HB1!"
  });
};

const hb2 = (req: Request, res: Response): void => {
  res.render("main/hb2", {
    isDoctorWhoFan: true,
    message: "Doctor Who is amazing, good you know!!!"
  });
};

const hb3 = (req: Request, res: Response): void => {
  const series = [
    { nome: "Doctor Who", ano: 1963 },
    { nome: "The Mandalorian", ano: 2019 },
    { nome: "The Big Bang Theory", ano: 2007 },
    { nome: "Chicago Fire", ano: 2012 }
  ];

  res.render("main/hb3", { series });
};

const hb4 = (req: Request, res: Response) => {
  const technologies = [
    { name: "Express", type: "Framework", poweredByNodejs: true },
    { name: "Laravel", type: "Framework", poweredByNodejs: false },
    { name: "React", type: "Library", poweredByNodejs: true },
    { name: "Handlebars", type: "Engine View", poweredByNodejs: true },
    { name: "Django", type: "Framework", poweredByNodejs: false },
    { name: "Docker", type: "Virtualization", poweredByNodejs: false },
    { name: "Sequelize", type: "ORM tool", poweredByNodejs: true }
  ];

  res.render("main/hb4", { technologies });
};

export default { hello, lorem, hb1, hb2, hb3, hb4 };
