import { Injectable } from '@nestjs/common';

@Injectable()
export class AService {
  harchi() {
    console.log('harchi');
    return 'harchi';
  }
}
