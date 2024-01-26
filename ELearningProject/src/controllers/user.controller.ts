import { NextFunction, Request, Response } from "express";
import { CreateUserDto, UpdateUserDto } from "@dtos/user.dto";
import { IUser } from "@interfaces/user.interface";
import UserService from "@services/user.service";
import { Controller, Get, Middleware, Post, Delete, Put } from "@common";
import validationMiddleware from "@/middlewares/validation.middleware";

@Controller("/users")
@Middleware((req, res, next) => {
  console.log("hello class");
  next();
})
class UserController {
  private userService = new UserService();

  @Get("/")
  public async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const allUsersData: IUser[] = await this.userService.findAllUser();
      res.status(200).json({ data: allUsersData });
    } catch (error) {
      console.log("error");
      next(error);
    }
  }

  @Get("/:id")
  public async getUserById(req: Request, res: Response, next: NextFunction) {
    const { id: userId } = req.params;
    const user = await this.userService.findUserById(userId);
    return res.status(200).json(user);
  }

  @Post("/")
  @Middleware(validationMiddleware(CreateUserDto, "body"))
  public async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.createUser(req.body);
      return res.status(201).json({ data: user });
    } catch (error) {
      next(error);
    }
  }

  @Put("/:id")
  @Middleware(validationMiddleware(UpdateUserDto, "body", true))
  public async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id: userId } = req.params;
      await this.userService.updateUser(userId, req.body);
      return res.status(200).json({ msg: "update shod" });
    } catch (error) {
      next(error);
    }
  }

  @Delete("/:id")
  public async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id: userId } = req.params;
      await this.userService.deleteUser(userId);
      return res.status(204);
    } catch (error) {
      next(error);
    }
  }
}

export default UserController;
