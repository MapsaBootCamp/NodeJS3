import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/database/database.module';
import { providers } from './user.providers';
import { UserGateWay } from './user.gateway';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserService, ...providers, UserGateWay],
  exports: [UserService],
})
export class UserModule {}
