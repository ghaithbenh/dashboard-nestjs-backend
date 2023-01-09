import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  //orm/packages/modules that we ve created..ext
  imports: [UsersModule],
  //all the controllers(we created)
  // controllers: [
  /*AppController*/
  // ],
  //servicise/pipes/guards
  //but chnstamlo li amalnehm ahna controllers w services mchhedhm
  // providers: [
  /*AppService*/
  // ],
})
export class AppModule {}
