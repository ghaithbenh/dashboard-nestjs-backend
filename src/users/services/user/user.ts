// ken l methods hedhm najmo nistamlouhm cuz amlna implements f user service
//lil class hedha yani kn methodes li fih njmo nistamlouhm
//w zeda type f  controllers hatyneh iuserservice w lewm tji kk

import { UserDto } from 'src/dto/User.dto';

export interface IUserService {
  createUser(user: UserDto);
  getUser(): UserDto[];
  getUserBYUsername(username: string): UserDto | undefined;
  deleteUser();
}
