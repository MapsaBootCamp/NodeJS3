import { Global, Module } from '@nestjs/common';
import { AService } from './a.service';
import { AController } from './a.controller';

@Global()
@Module({
  // providers: [{ provide: AService, useClass: AService }],
  // providers: [AService],
  providers: [
    AService,
    {
      provide: 'Shalgham',
      useValue: { harchi: () => 'mapsa' },
    },
  ],
  controllers: [AController],
  exports: [AService],
})
export class AModule {}
