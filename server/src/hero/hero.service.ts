import { UpdateHeroDto } from './dto/UpdateHeroDto';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Hero, HeroDocument } from './hero.schema';
import { CreateHeroDto } from './dto/CreateHeroDto';

@Injectable()
export class HeroService {
  constructor(@InjectModel(Hero.name) private heroModel: Model<HeroDocument>) {}

  async create(createHeroDto: CreateHeroDto): Promise<Hero> {
    return await new this.heroModel(createHeroDto).save();
  }

  async findAll(query): Promise<Hero[]> {
    return await this.heroModel
      .find()
      .select(['nickname', 'images'])
      .skip(query.offset)
      .limit(query.limit);
  }

  async findById(id): Promise<Hero> {
    return await this.heroModel.findOne({ _id: id });
  }

  // async getCount(): Promise<any> {
  //   return await this.heroModel
  //     .find()
  //     .select('_id');
  // }

  async update(id: string, updateHeroDto: UpdateHeroDto): Promise<Hero> {
    return await this.heroModel.findByIdAndUpdate({ _id: id }, updateHeroDto);
  }
  async delete(id): Promise<Hero> {
    return await this.heroModel.findByIdAndDelete({ _id: id });
  }
}
