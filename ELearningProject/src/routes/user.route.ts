import { Router } from "express";
import UserController from "@controllers/user.controller";
import { CreateUserDto } from "@dtos/user.dto";
import { IRoute } from "@interfaces/route.interface";
import validationMiddleware from "@middlewares/validation.middleware";

class UserRoute implements IRoute {
  public path = "/users";
  public router = Router();
  public userController = new UserController();

  constructor() {
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.get(`/`, this.userController.getUsers);
    this.router.get(`/:id`, this.userController.getUserById);
    this.router.post(
      `/`,
      validationMiddleware(CreateUserDto, "body"),
      this.userController.createUser
    );
    this.router.put(
      `/:id`,
      validationMiddleware(CreateUserDto, "body", true),
      this.userController.updateUser
    );
    this.router.delete(`/:id`, this.userController.deleteUser);
  }
}

export default UserRoute;
