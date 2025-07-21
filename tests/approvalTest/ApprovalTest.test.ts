import { Item } from "../../src/inventory/Item";
import { GameInventory } from "../../src/inventory/GameInventory";

describe("Approval Test", () => {
  it("should match the approved output over 30 days", () => {
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

    let output = "";
    for (let day = 0; day < 31; day++) {
      output += `-------- day ${day} --------\n`;
      output += "name, sellIn, quality\n";
      for (const item of app.getItems()) {
        output += `${item.toString()}\n`;
      }
      output += "\n";
      app.updateQuality();
    }

    expect(output).toMatchSnapshot();
  });
});
