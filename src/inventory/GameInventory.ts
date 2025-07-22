import { ItemFactory } from "./ItemFactory";
import { Item } from "./items/Item";

export class GameInventory {
  constructor(private items: Item[]) {}

  updateQuality(): void {
    for (const item of this.items) {
      const specializedItem = ItemFactory.create(item.name, item.sellIn, item.quality);
      specializedItem.update();
      // 👇 Aquí sobrescribes los valores originales
      item.sellIn = specializedItem.sellIn;
      item.quality = specializedItem.quality;
    }
  }

  getItems(): Item[] {
    return this.items;
  }
}
