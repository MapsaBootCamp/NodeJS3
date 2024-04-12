import { Global, Inject, Injectable, Module } from '@nestjs/common';
import {
  AService,
  ConfigService,
  DevConfigService,
  ProductionConfigService,
} from './a.service';
import { AController } from './a.controller';
import { AHelperModule } from './a.helper';
import { CsvParserModule } from 'src/csvParser/csvParser.module';

@Global()
@Module({
  imports: [AHelperModule, CsvParserModule.forRoot('./user.csv')],
  // providers: [{ provide: AService, useClass: AService }],
  // providers: [AService],
  providers: [
    AService,
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV == 'production'
          ? ProductionConfigService
          : DevConfigService,
    },
    {
      provide: 'Golabi',
      useClass: AService,
    },
    {
      /// Token
      provide: 'Shalgham',
      useValue: { harchi: () => 'mapsa' },
    },
  ],
  controllers: [AController],
  exports: [AService],
})
export class AModule {}
