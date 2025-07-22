import { Item } from './Item';

/**
 * - "Sulfuras" is a legendary item:
    - It never needs to be sold (sellIn does not change).
    - The item never changes over time.
 */
export class Sulfuras extends Item {
  update(): void {
  }
}
