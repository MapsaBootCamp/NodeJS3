import { Injectable, Module } from '@nestjs/common';

function sleep(ms) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}

class DatabaseConnection {
  constructor(private options) {
    if (this.options.dbName === 'Mongo') {
      console.log('Mongo');
    } else {
      console.log('Gheir Mongo');
    }
  }
}

@Injectable()
class OptionsProvider {
  get() {
    return { dbName: 'Mongo' };
  }
}

const connectionProvider = {
  provide: 'CONNECTION',
  useFactory: async (
    optionsProvider: OptionsProvider,
    optionalProvider?: string,
  ) => {
    if (optionalProvider) {
      console.log('optional', optionalProvider);
    }
    const options = optionsProvider.get();
    await sleep(5 * 1000);
    return new DatabaseConnection(options);
  },
  inject: [OptionsProvider, { token: 'SomeOptionalProvider', optional: true }],
  //       \_____________/            \__________________/
  //        This provider              The provider with this
  //        is mandatory.              token can resolve to `undefined`.
};

@Module({
  providers: [
    connectionProvider,
    OptionsProvider,
    { provide: 'SomeOptionalProvider', useValue: 'anything' },
  ],
})
export class AHelperModule {}
