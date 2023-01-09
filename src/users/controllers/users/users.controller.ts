import {
  Controller,
  Inject,
  Post,
  Get,
  Delete,
  Body,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { UserDto } from 'src/dto/User.dto';
import { IUserService } from 'src/users/services/user/user';

//yani nhoto /api/users khtr hatyna lbackend koll lewmo b/api
@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: IUserService,
  ) {}

  @Get()
  getUsers() {
    return this.userService.getUser();
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() user: UserDto) {
    return this.userService.createUser(user);
  }

  @Delete()
  deleteUser() {
    return this.userService.deleteUser();
  }

  //hatyna param khtr l parametre teana id
  @Get('/:username')
  getUserByUsername(@Param('username') username: string) {
    return this.userService.getUserBYUsername(username);
  }
}
