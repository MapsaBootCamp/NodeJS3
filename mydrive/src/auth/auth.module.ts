import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { SECRET_KEY } from 'src/common/constants/auth.constant';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: SECRET_KEY,
      signOptions: { expiresIn: 60 * 60 * 60 },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
