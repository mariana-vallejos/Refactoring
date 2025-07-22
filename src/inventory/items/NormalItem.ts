import { Item } from './Item';

export class NormalItem extends Item {
  update(): void {
    this.decreaseSellIn();

    this.decreaseQuality();

    if (this.sellIn < 0) {
      this.decreaseQuality();
    }
  }
}
