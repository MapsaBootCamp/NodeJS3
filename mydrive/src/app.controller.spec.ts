import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeAll(() => {
    console.log('before all');
  });

  afterAll(() => {
    console.log('after all');
  });

  afterEach(() => {
    console.log('after each');
  });

  const appServiceMock = {
    sayBye: jest.fn().mockImplementation((dto) => `bye ${dto.name}!`),
  };

  beforeEach(async () => {
    console.log('before each');
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    })
      .overrideProvider(AppService)
      .useValue(appServiceMock)
      .compile();

    appController = app.get<AppController>(AppController);
  });

  it('should return "Hello World!"', () => {
    expect(appController.getHello()).toBe('Hello World!');
  });

  it('should say bye!', () => {
    expect(appController.sayBye({ name: 'Gholam' })).toBe('bye Gholam!');
  });
});
