// import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
// import { Request, Response } from 'express';
// import { AppService } from './app.service';
// import { UserDto } from './dto/User.dto';

//app.controller is where u create all ur routes(endpoints(methods like get w post )	)
// u create all ur routes in the controller
/*kinhot haja dekhl controller f akwes heka i walli ll path yani ll url@Controller('/app')
kinhot just localhost:3000/ maghyr app twalli tymchych*/

//controller is for controlling the req and the res
/*{@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}}*/

// @Get('/hello') kk l path iwalli ll url localhost:3000/app/hello kn nkhaliw l app fouk
// khtr l get req matmchy  kn kithot l path li feha kn fergha tymchy toul
//hedhy kifeh taayet l injectabe

/*{@Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }}*/

//hedhy kithib tmachy l get req hedhy iwalli app/name
//ken thib lokhra twalli app/hello
/*{@Get('name')
  getName(): string {
    return this.appService.getName();
  }
}*/
/*{ @Post('user')
  createUser(@Body() user: UserDto, @Res() res: Response) {
    console.log(user);
    res.status(201).send(user);
  }
}}*/
