import { Controller, Get } from '@nestjs/common';
import { AService } from 'src/a/a.service';
import { CsvParser } from 'src/csvParser/csvParser.provider';

@Controller('b')
export class BController {
  constructor(
    private aService: AService,
    private readonly csvParser: CsvParser,
  ) {}

  @Get()
  async testB() {
    return await this.csvParser.parse();
  }
}
