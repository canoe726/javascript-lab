import { Request, Response } from "express";

const getProduct = (req: Request, res: Response) => {
  res.send("안녕하세요!");
};

export { getProduct };