import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "@dtos/user.dto";
import { IUser } from "@interfaces/user.interface";
import UserService from "@services/user.service";

class UserController {
  private userService = new UserService();

  public getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allUsersData: IUser[] = await this.userService.findAllUser();
      res.status(200).json({ data: allUsersData });
    } catch (error) {
      console.log("error");
      next(error);
    }
  };

  public getUserById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id: userId } = req.params;
    const user = await this.userService.findUserById(userId);
    return res.status(200).json(user);
  };

  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const user = await this.userService.createUser(req.body);
      return res.status(201).json({ data: user });
    } catch (error) {
      next(error);
    }
  };
  public updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id: userId } = req.params;
      await this.userService.updateUser(userId, req.body);
      return res.status(200).json({ msg: "update shod" });
    } catch (error) {
      next(error);
    }
  };
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
