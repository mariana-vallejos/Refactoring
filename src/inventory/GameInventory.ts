import { Item } from "./Item";

export class GameInventory {
  constructor(private items: Item[]) {}

  updateQuality(): void {
    for (const item of this.items) {
      if (
        item.name !== "Aged Brie" &&
        item.name !== "Backstage passes to a Pokemon Gym concert"
      ) {
        if (item.quality > 0 && item.name !== "Sulfuras, Hand of Ragnaros") {
          item.quality--;
        }
      } else {
        if (item.quality < 50) {
          item.quality++;

          if (item.name === "Backstage passes to a Pokemon Gym concert") {
            if (item.sellIn < 11 && item.quality < 50) {
              item.quality++;
            }
            if (item.sellIn < 6 && item.quality < 50) {
              item.quality++;
            }
          }
        }
      }

      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        item.sellIn--;
      }

      if (item.sellIn < 0) {
        if (item.name !== "Aged Brie") {
          if (item.name !== "Backstage passes to a Pokemon Gym concert") {
            if (item.quality > 0 && item.name !== "Sulfuras, Hand of Ragnaros") {
              item.quality--;
            }
          } else {
            item.quality = 0;
          }
        } else {
          if (item.quality < 50) {
            item.quality++;
          }
        }
      }
    }
  }

  getItems(): Item[] {
    return this.items;
  }
}
