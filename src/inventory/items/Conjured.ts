import { Item } from './Item';

/**
 * - "Conjured" items degrade in quality twice as fast as normal items.
    - Before `sellIn` reaches 0, quality decreases by 2 each day.
    - After expiration (`sellIn` < 0), quality decreases by 4 each day.
    - `sellIn` decreases by 1 per day.
    - Quality is never negative.
 */
export class Conjured extends Item {
  update(): void {
    this.decreaseSellIn();
    this.decreaseQuality(this.sellIn < 0 ? 4 : 2);
  }
}
