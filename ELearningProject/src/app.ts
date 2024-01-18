import * as express from "express";
import { PORT, DB_HOST, DB_PORT, DB_DATABASE } from "@/config";
import { IRoute } from "@/interfaces/route.interface";
import { connect } from "mongoose";

class App {
  private app: express.Application;
  public port: string | number;

  constructor(routes: IRoute[]) {
    this.app = express();
    this.port = PORT || 3000;

    // this.dbConnection();
    this.setupMiddlewares();
    this.setupRoutes(routes);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server listening on the port ${this.port}`);
    });
  }

  private async dbConnection() {
    try {
      const dbURL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
      await connect(dbURL);
    } catch (error) {
      console.error("Error database connection:", error);
    }
  }

  private setupMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private setupRoutes(routes: IRoute[]) {
    routes.forEach((route) => {
      this.app.use(route.path, route.router);
    });
  }
}

export default App;
