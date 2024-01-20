import User, { UserDocument } from "@models/user.model";
import { IUser } from "@/interfaces/user.interface";
import { CreateUserDto, UpdateUserDto } from "@dtos/user.dto";
import { Model } from "mongoose";

class UserService {
  private readonly UserModel: Model<UserDocument> = User;

  public async findAllUser(): Promise<IUser[]> {
    return await this.UserModel.find();
  }
  public async findUserById(userId: string): Promise<IUser> {
    return await this.UserModel.findById(userId);
  }
  public async createUser(userData: CreateUserDto): Promise<IUser> {
    return await this.UserModel.create(userData);
  }

  public async updateUser(
    userId: string,
    userData: UpdateUserDto
  ): Promise<IUser> {
    return await this.UserModel.findByIdAndUpdate(userId, userData);
  }

  public async deleteUser(userId: string): Promise<IUser> {
    return await this.UserModel.findByIdAndDelete(userId);

  }
}

export default UserService;
