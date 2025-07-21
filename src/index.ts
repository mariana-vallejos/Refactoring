import { Item } from "./inventory/Item";
import { GameInventory } from "./inventory/GameInventory";

console.log("Here we are!");

const items: Item[] = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of sRagnaros", -1, 80),
  new Item("Backstage passes to a Pokemon Gym concert", 15, 20),
  new Item("Backstage passes to a Pokemon Gym concert", 10, 49),
  new Item("Backstage passes to a Pokemon Gym concert", 5, 49),
  new Item("Conjured Mana Cake", 3, 6),
];

const app = new GameInventory(items);

for (let day = 0; day < 31; day++) {
  console.log(`-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  for (const item of app.getItems()) {
    console.log(item.toString());
  }
  console.log("");
  app.updateQuality();
}
