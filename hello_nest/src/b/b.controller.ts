import { Controller } from '@nestjs/common';
import { AService } from 'src/a/a.service';

@Controller('b')
export class BController {
  constructor(private aService: AService) {}
}
