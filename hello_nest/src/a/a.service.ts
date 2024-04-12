import { Injectable } from '@nestjs/common';

@Injectable()
export class AService {
  harchi() {
    console.log('harchi');
    return 'harchi';
  }
}

export abstract class ConfigService {
  abstract getCofig(envPath?: string);
}

@Injectable()
export class DevConfigService extends ConfigService {
  getCofig(envPath = '.env.developement') {
    return envPath;
  }
}

@Injectable()
export class ProductionConfigService extends ConfigService {
  getCofig(envPath = '.env.production') {
    return envPath;
  }
}
