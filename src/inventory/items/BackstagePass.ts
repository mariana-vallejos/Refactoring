import { Item } from "./Item";

/**
 * - Quality increases as the concert approaches:
    - by 1 when there are more than 10 days
    - by 2 when there are 6–10 days
    - by 3 when there are 1–5 days
    - After the concert (`sellIn` < 0), quality drops to 0.
    - `sellIn` decreases by 1 each day.
    - Quality is capped at 50 before the concert.
 */
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
