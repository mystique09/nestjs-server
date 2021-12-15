import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an error when creating user', async () => {
    const response = await service.create({username: 'testuser123', password: '', email: 'testemail@gmail.com'});

    expect(response === "User created!").toBeFalsy();
  });

  it('should create new user', async () => {
    const response = await service.create({username: 'testuser123', password: 'testpass', email: 'testemail@gmail.com'});

    expect(response).toEqual("User created!");
  });

  it('should return all user', async () => {
    const response = await service.findAll();

    expect(response.length).toBeInstanceOf(Object);
  });
});
