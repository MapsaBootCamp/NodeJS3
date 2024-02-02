import { Controller, Get } from "@/common";
import { NextFunction, Request, Response } from "express";

@Controller("/")
class IndexController {
  @Get("")
  index(req: Request, res: Response, next: NextFunction) {
    return res.send("Welcome!");
  }
}

export default IndexController;
