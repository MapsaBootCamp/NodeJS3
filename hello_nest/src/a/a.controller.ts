import { Controller, Get, Inject } from '@nestjs/common';
import { AService } from './a.service';

@Controller('a')
export class AController {
  @Inject('Shalgham') private aService;

  @Get()
  testA() {
    return this.aService.harchi();
  }
}
