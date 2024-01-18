import User from "@models/user.model";
import { IUser } from "@/interfaces/user.interface";
import { CreateUserDto } from "@dtos/user.dto";

class UserService {
  private readonly UserModel = User;

  public async findAllUser(): Promise<IUser[]> {}
  public async findUserById(userId: string): Promise<IUser> {}
  public async createUser(userData: CreateUserDto): Promise<IUser> {}
  public async deleteUser(userId: string): Promise<IUser> {}
}

export default UserService;
