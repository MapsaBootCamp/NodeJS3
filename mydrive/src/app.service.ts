import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello kheili shalghamha!';
  }
  sayBye(dto: any) {
    return '';
  }
}
