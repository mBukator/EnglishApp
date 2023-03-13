import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'src/users/user.module';
import { TasksModule } from 'src/tasks/tasks.module';
import { RoomModule } from 'src/room/room.module';
import { CardsModule } from 'src/cards/cards.module';
import { BlogsModule } from 'src/blogs/blogs.module';

@Module({
  imports: [UserModule, TasksModule, RoomModule, CardsModule, BlogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
