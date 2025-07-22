// src/inventory/ItemFactory.ts
import { Item } from './items/Item';
import { NormalItem } from './items/NormalItem';
import { AgedBrie } from './items/AgedBrie';
import { BackstagePass } from './items/BackstagePass';
import { Sulfuras } from './items/Sulfuras';
import { Conjured } from './items/Conjured';

export class ItemFactory {
  static create(name: string, sellIn: number, quality: number): Item {
    if (name === "Aged Brie") {
      return new AgedBrie(name, sellIn, quality);
    }
    if (name === "Sulfuras, Hand of Ragnaros") {
      return new Sulfuras(name, sellIn, quality);
    }
    if (name.startsWith("Backstage passes")) {
      return new BackstagePass(name, sellIn, quality);
    }
    if (name.startsWith("Conjured")) {
      return new Conjured(name, sellIn, quality);
    }
    
    return new NormalItem(name, sellIn, quality);
  }
}
