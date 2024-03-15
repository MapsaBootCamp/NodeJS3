import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;

  const mockUserModel = {
    create: jest
      .fn()
      .mockImplementation((dto) => Promise.resolve({ id: Date.now(), ...dto })),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: 'USER_MODEL',
          useValue: mockUserModel,
        },
      ],
    }).compile();

    userService = app.get<UserService>(UserService);
  });

  const userData = {
    username: 'Gholam',
    password: '1234',
  };

  it('create user record!"', async () => {
    const response = await userService.create(userData);
    expect(response).toEqual({
      id: expect.any(Number),
      ...userData,
    });
  });
});
