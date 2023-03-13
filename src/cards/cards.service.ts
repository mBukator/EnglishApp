import { Injectable, UseFilters } from '@nestjs/common';
import { cards } from 'src/moks/cards';
import { NoDataExeption } from './cards.exeptions';
import { NoDataExeptionFilter } from './cards.filter';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card } from './entities/card.entity';

@Injectable()
export class CardsService {
  private cards: Card[] = cards;

  async create(createCardDto: CreateCardDto) {
    createCardDto._id = cards.length+1
    console.log('newCard', createCardDto);
    this.cards.push(createCardDto);
    return createCardDto;
  }

  @UseFilters(new NoDataExeptionFilter())
  async findAll() {
    if(this.cards == null) {
      throw new NoDataExeption();
    }
    return this.cards;
  }

  @UseFilters(new NoDataExeptionFilter())
  async findOne(id: number) {
    if(this.cards == null) {
      throw new NoDataExeption();
    }
    for(var i = 0; i < this.cards.length; i++) {
      if(this.cards[i]._id === id)
        return this.cards[i];
    }
    return null;
  }

  async update(id: number, updateCardDto: UpdateCardDto) {
    let toUpdate = this.findOne(id);
    let updated = Object.assign(await toUpdate, updateCardDto);
    return updated;
  }

  async remove(id: number) {
    let toRemove = this.findOne(id);
    if (await toRemove != null) {
      return this.cards.splice(cards.indexOf(await toRemove), 1);
    }
  }
}
