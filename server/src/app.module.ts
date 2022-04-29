import { HeroModule } from './hero/hero.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilesModule } from './files/files.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.ci0rj.mongodb.net/testTask?retryWrites=true&w=majority'
    ),
    HeroModule,
    FilesModule,
    MulterModule.register({
      dest: './uploads',
    }),
    FilesModule,
  ],
})
export class AppModule {}
