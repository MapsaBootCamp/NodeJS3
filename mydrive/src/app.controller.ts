import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './common/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getHello() {
    return 'Hello World!';
  }

  @Get()
  sayBye(dto: any) {
    return this.appService.sayBye(dto);
  }
}
