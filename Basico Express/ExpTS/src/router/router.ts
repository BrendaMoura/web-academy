import { Router, Request, Response } from "express";
import { loremIpsum } from "lorem-ipsum";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

router.get("/lorem/:qtdParagrafos", (req: Request, res: Response) => {
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
    units: "paragraphs",
  });

  res.send(texto);
});

router.get("/hb1", (req: Request, res: Response) => {
  res.render("hb1", {
    message: "Hello World from HB1!",
    layout: false,
  });
});

router.get("/hb2", (req: Request, res: Response) => {
  res.render("hb2", {
    isDoctorWhoFan: true,
    message: "Doctor Who is amazing, good you know!!!",
    layout: false,
  });
});

router.get("/hb3", (req: Request, res: Response) => {
  const series = [
    { nome: "Doctor Who", ano: 1963 },
    { nome: "The Mandalorian", ano: 2019 },
    { nome: "The Big Bang Theory", ano: 2007 },
    { nome: "Chicago Fire", ano: 2012 },
  ];

  res.render("hb3", {
    series,
    layout: false,
  });
});

export default router;
