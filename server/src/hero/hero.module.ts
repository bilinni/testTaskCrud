import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';
import { Hero, HeroSchema } from './hero.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Hero.name, schema: HeroSchema }])],
  controllers: [HeroController],
  providers: [HeroService],
})
export class HeroModule {}