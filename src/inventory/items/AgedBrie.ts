import { Item } from "./Item";

/**
 * - "Aged Brie" increases in quality as it ages.
    - `sellIn` decreases by 1 each day.
    - If `sellIn` is below 0, quality increases twice as fast (by 2 instead of 1).
    - Quality is capped at 50.
 */
export class AgedBrie extends Item {
  update(): void {
    this.decreaseSellIn();

    this.increaseQuality();

    if (this.sellIn < 0) {
      this.increaseQuality();
    }
  }
}
