import { Injectable } from '@nestjs/common';
// ki amalna injectable najmo nanjectiyouha f controller walla ay blassa
//thot ism l fun exp hedhy thisappservicegetHello()
//check app.controller.ts
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getName(): string {
    return 'arizona';
  }
  createUser(): string {
    return 'new user created';
  }
}
