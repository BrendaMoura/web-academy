import { NextFunction, Request, Response } from "express";
import { ChangeLangDto } from "./language.types";
import { StatusCodes } from "http-status-codes";

const changeLanguage = (req: Request, res: Response, next: NextFunction) => {
  const { lang } = req.body as ChangeLangDto;
  res.cookie("lang", lang);
  res.status(StatusCodes.NO_CONTENT).json();
};

export default { changeLanguage };
