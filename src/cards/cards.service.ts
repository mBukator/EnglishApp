import { Injectable } from '@nestjs/common';
import { cards } from 'src/moks/cards';
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

  async findAll() {
    return this.cards;
  }

  async findOne(id: number) {
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
