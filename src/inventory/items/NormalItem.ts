import { Item } from './Item';

/**
 * - Normal items lose 1 quality per day.
    - Once the `sellIn` date has passed, quality degrades twice as fast (by 2).
    - `sellIn` decreases by 1 each day.
    - Quality is never negative.
 */
export class NormalItem extends Item {
  update(): void {
    this.decreaseSellIn();

    this.decreaseQuality();

    if (this.sellIn < 0) {
      this.decreaseQuality();
    }
  }
}
