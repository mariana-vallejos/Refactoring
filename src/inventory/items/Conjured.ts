import { Item } from './Item';

export class Conjured extends Item {
  update(): void {
    this.decreaseSellIn();
    this.decreaseQuality(this.sellIn < 0 ? 4 : 2);
  }
}
