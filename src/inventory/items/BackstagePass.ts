import { Item } from './Item';

export class BackstagePass extends Item {
  update(): void {
    this.decreaseSellIn();

    if (this.sellIn < 0) {
      this.quality = 0;
      return;
    }

    if (this.sellIn < 5) {
      this.increaseQuality(3);
    } else if (this.sellIn < 10) {
      this.increaseQuality(2);
    } else {
      this.increaseQuality(1);
    }
  }
}
