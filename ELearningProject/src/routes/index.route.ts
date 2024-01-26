import { Router } from "express";
import { IRoute } from "@interfaces/route.interface";

class IndexRoute implements IRoute {
  public prefix = "/";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`/`, (req, res, next) => {
      return res.send("Welcome!");
    });
  }
}

export default IndexRoute;
