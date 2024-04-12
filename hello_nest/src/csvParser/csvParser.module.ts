import { DynamicModule, Module } from '@nestjs/common';
import { CsvParser } from './csvParser.provider';

@Module({})
export class CsvParserModule {
  static forRoot(path: string): DynamicModule {
    return {
      module: CsvParserModule,
      providers: [
        {
          provide: 'CSV_PATH',
          useValue: path,
        },
        CsvParser,
      ],
      exports: [CsvParser],
    };
  }
}
