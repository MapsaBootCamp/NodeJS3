import { Controller, Get, Inject, Optional } from '@nestjs/common';
import { AService, ConfigService } from './a.service';
import { CsvParser } from 'src/csvParser/csvParser.provider';

@Controller('a')
export class AController {
  // @Inject('Shalgham')
  // private aService;

  constructor(
    @Inject('Shalgham') private readonly aService,
    @Optional() private configService: ConfigService,
    private readonly csvParser: CsvParser,
  ) {}

  @Get('config')
  async testConfig() {
    try {
      const csvData = await this.csvParser.parse();
      console.log(csvData);

      return this.configService.getCofig();
    } catch (error) {
      return 'Shlagham';
    }
  }

  @Get()
  testA() {
    return this.aService.harchi();
  }
}
