import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly knownUsers = [
    {
      userId: 1,
      username: 'jerome',
      password: 'lebaron',
    },
    {
      userId: 2,
      username: 'antoine',
      password: 'michel',
    },
  ];

  async findOne(username: string) {
    return this.knownUsers.find((user) => user.username === username);
  }
}
