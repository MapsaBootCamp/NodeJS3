import { Module } from '@nestjs/common';
import { BController } from './b.controller';
import { AModule } from 'src/a/a.module';
import { CsvParserModule } from 'src/csvParser/csvParser.module';

@Module({
  imports: [AModule, CsvParserModule.forRoot('./products.csv')],
  controllers: [BController],
})
export class BModule {}
