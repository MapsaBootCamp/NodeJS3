import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interface/user.interface';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@Inject('USER_MODEL') private readonly userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.userModel.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find({});
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    });
  }

  async remove(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id);
  }

  async findByUsername(username: string): Promise<User> {
    return await this.userModel.findOne({ username });
  }
}
