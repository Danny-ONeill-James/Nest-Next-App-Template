import { Injectable } from '@nestjs/common';

export type User = any; //TODO: create a user interface

@Injectable()
export class UsersService {
  //TODO: Transfer this into a database schema
  private readonly users = [
    {
      userId: 1,
      username: 'Joe',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'Blogs',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
