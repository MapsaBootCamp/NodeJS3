import { Router } from "express";
import UserController from "@controllers/user.controller";
import { IRoute } from "@interfaces/route.interface";

import {
  CLASS_MIDDLEWARE_METADATA,
  MIDDLEWARE_METADATA,
  MiddlewareMetaData,
  PATH_METADATA,
  ROUTE_METADATA,
  RequestMappingMetadata,
} from "@/common";

class UserRoute implements IRoute {
  public prefix: string;
  public router = Router();
  public userController = new UserController();

  constructor() {
    this.setupRoutes();
  }

  private setupRoutes() {
    this.prefix = Reflect.getMetadata(PATH_METADATA, UserController);
    let middleware: MiddlewareMetaData = Reflect.getMetadata(
      MIDDLEWARE_METADATA,
      UserController
    );

    console.log("middleware", middleware);

    if (middleware[CLASS_MIDDLEWARE_METADATA].length > 0) {
      this.router.use(...middleware[CLASS_MIDDLEWARE_METADATA]);
    }

    const routes: Array<RequestMappingMetadata> = Reflect.getMetadata(
      ROUTE_METADATA,
      this.userController
    );

    routes.forEach((route) => {
      if (middleware[route.methodName]) {
        this.router[route.requestMethod](
          route.path,
          ...middleware[route.methodName],
          (req, res, next) => {
            this.userController[route.methodName](req, res, next);
          }
        );
      } else {
        this.router[route.requestMethod](route.path, (req, res, next) => {
          this.userController[route.methodName](req, res, next);
        });
      }
    });

    // this.router.get(`/`, this.userController.getUsers);
    // this.router.get(`/:id`, this.userController.getUserById);

    // this.router.post(
    //   `/`,
    //   validationMiddleware(CreateUserDto, "body"),
    //   this.userController.createUser
    // );
    // this.router.put(
    //   `/:id`,
    //   validationMiddleware(UpdateUserDto, "body", true),
    //   this.userController.updateUser
    // );
    // this.router.delete(`/:id`, this.userController.deleteUser);
  }
}

export default UserRoute;
