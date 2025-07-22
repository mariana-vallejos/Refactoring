import { Item } from "./Item";

export class AgedBrie extends Item {
  update(): void {
    this.decreaseSellIn();

    this.increaseQuality();

    if (this.sellIn < 0) {
      this.increaseQuality();
    }
  }
}
