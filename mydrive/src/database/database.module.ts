import { Module } from '@nestjs/common';
import { providers } from './database.provider';
@Module({
  providers: [...providers],
  exports: [...providers],
})
export class DatabaseModule {}
