import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { Permission } from './interfaces/permission.interface';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @Inject('Permission_MODEL') private permissionModel: Model<Permission>,
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string) {
    const user = await this.usersService.findByUsername(username);

    if (user?.password !== pass) {
      console.log('USER+++++++++++', user);
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, sub: user.id, role: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async createPermission(name: string): Promise<Permission> {
    return await this.permissionModel.create({ name });
  }

  async assignPermission(
    userId: string,
    ...permissionsId: string[]
  ): Promise<any> {
    return await this.usersService.assignPermission(userId, permissionsId);
  }
}
