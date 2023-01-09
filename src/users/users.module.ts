import { UsersController } from './controllers/users/users.controller';
import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts/posts.controller';
import { UserService } from './services/user/user.service';
import { PostService } from './services/post/post.service';

@Module({
  controllers: [UsersController, PostsController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
    PostService,
  ],
})
export class UsersModule {}
