import { UpdateHeroDto } from './dto/UpdateHeroDto';
import { CreateHeroDto } from './dto/CreateHeroDto';
import { Hero } from './hero.schema';
import { HeroService } from './hero.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}
  @Post()
  async create(@Body('hero') createHeroDto: CreateHeroDto): Promise<Hero> {
    const hero = await this.heroService.create(createHeroDto);
    return hero;
  }
  @Get()
  async findAll(@Query() query: number): Promise<Hero[]> {
    const heroes = await this.heroService.findAll(query);
    return heroes;
  }
  @Get(':id')
  async findById(@Param('id') id: string): Promise<any> {
    const hero = await this.heroService.findById(id);
    return hero;
  }
  // @Get('count')
  // async getCount() {
  //   return await this.heroService.getCount();
  // }
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateHeroDto: UpdateHeroDto) {
    const hero = this.heroService.update(id, updateHeroDto);
    return hero;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    const hero = this.heroService.delete(id);
    return hero;
  }
}
