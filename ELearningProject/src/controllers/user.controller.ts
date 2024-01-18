import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "@dtos/user.dto";
import { IUser } from "@interfaces/user.interface";
import userService from "@services/user.service";

class UserController {
  public userService = new userService();

  public async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const allUsersData: IUser[] = await this.userService.findAllUser();

      res.status(200).json({ data: allUsersData });
    } catch (error) {
      next(error);
    }
  }

  public async getUserById(req: Request, res: Response, next: NextFunction) {}
  public async createUser(req: Request, res: Response, next: NextFunction) {}
  public async updateUser(req: Request, res: Response, next: NextFunction) {}
  public async deleteUser(req: Request, res: Response, next: NextFunction) {}
}

export default UserController;
