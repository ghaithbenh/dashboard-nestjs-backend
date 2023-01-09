import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/dto/User.dto';
import { IUserService } from './user';

@Injectable()
export class UserService implements IUserService {
  //local database chinstorihm f array khtr mezelt amaltch bd
  private users: UserDto[] = [];

  createUser(user: UserDto) {
    return this.users.push(user);
  }
  getUser(): UserDto[] {
    return this.users;
  }
  deleteUser() {}
  getUserBYUsername(username: string): UserDto | undefined {
    return this.users.find((user) => user.username === username);
  }
}
