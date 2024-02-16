import { Module } from '@nestjs/common';
import { BController } from './b.controller';
import { AModule } from 'src/a/a.module';

@Module({
  imports: [AModule],
  controllers: [BController],
})
export class BModule {}
