import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from 'src/common/decorators/public.decorator';
import { SignInDto } from './dtos/login.dto';
import { Role } from 'src/common/decorators/role.decorator';
import { Role as IRole } from 'src/user/schemas/user.schema';
import { RoleGuard } from 'src/common/guards/role.guard';

@UseGuards(RoleGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @Role(IRole.ADMIN)
  @Post('create-permission')
  async createPermission(@Body('name') permissionName: string) {
    console.log('++++++++++++++++++++++++++++', permissionName);
    return await this.authService.createPermission(permissionName);
  }
  @Role(IRole.ADMIN)
  @Post('assign-permission')
  async assignPermission(
    @Body('userId') userId: string,
    @Body('permissionsId') permissionsId: string[],
  ) {
    return await this.authService.assignPermission(userId, ...permissionsId);
  }
}
