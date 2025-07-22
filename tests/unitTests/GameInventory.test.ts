import { Item } from "../../src/inventory/items/Item";
import { GameInventory } from "../../src/inventory/GameInventory";

describe("GameInventory", () => {
  describe("BackstagePasses", () => {
    test.each([
      [0, 0, 0, -1],  // after concert
      [10, 40, 42, 9], // +2 quality (10 days or less)
      [12, 40, 41, 11], // +1 quality (more than 10 days)
      [5, 47, 50, 4],  // +3 quality, max limit
      [1, 49, 50, 0], 
    ])(
      "Backstage passes: sellIn: %i, quality: %i => quality: %i, sellIn: %i",
      (sellIn, quality, expectedQuality, expectedSellIn) => {
        const items: Item[] = [
          new Item("Backstage passes to a Pokemon Gym concert", sellIn, quality),
        ];
        const app = new GameInventory(items);

        app.updateQuality();

        expect(items[0].quality).toBe(expectedQuality);
        expect(items[0].sellIn).toBe(expectedSellIn);
      }
    );
  });

  test("Sulfuras", () => {
    const items: Item[] = [new Item("Sulfuras, Hand of Ragnaros", 10, 80)];
    const app = new GameInventory(items);

    app.updateQuality();

    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(10);
  });

  describe("AgedBrie", () => {
    test("increases quality by 1", () => {
      const items: Item[] = [new Item("Aged Brie", 5, 7)];
      const app = new GameInventory(items);

      app.updateQuality();

      expect(items[0].quality).toBe(8);
      expect(items[0].sellIn).toBe(4);
    });

    test("does not increase above max quality", () => {
      const items: Item[] = [new Item("Aged Brie", 5, 50)];
      const app = new GameInventory(items);

      app.updateQuality();

      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(4);
    });
  });

  describe("Conjured", () => {
    test("degrades twice as fast before sellIn", () => {
      const items: Item[] = [new Item("Conjured Mana Cake", 3, 6)];
      const app = new GameInventory(items);

      app.updateQuality();

      expect(items[0].quality).toBe(4);
      expect(items[0].sellIn).toBe(2);
    });

    test("degrades twice as fast after sellIn", () => {
      const items: Item[] = [new Item("Conjured Mana Cake", 0, 6)];
      const app = new GameInventory(items);

      app.updateQuality();

      expect(items[0].quality).toBe(2);
      expect(items[0].sellIn).toBe(-1);
    });

  });

  describe("NormalItem", () => {
    test("decreases quality and sellIn", () => {
      const items: Item[] = [new Item("Elixir of the Mongoose", 5, 7)];
      const app = new GameInventory(items);

      app.updateQuality();

      expect(items[0].quality).toBe(6);
      expect(items[0].sellIn).toBe(4);
    });

    test("degrades twice as fast after sellIn", () => {
      const items: Item[] = [new Item("Elixir of the Mongoose", 0, 6)];
      const app = new GameInventory(items);

      app.updateQuality();

      expect(items[0].quality).toBe(4);
      expect(items[0].sellIn).toBe(-1);
    });
  });

  test("Unknown item 'foo'", () => {
    const items: Item[] = [new Item("foo", 0, 0)];
    const app = new GameInventory(items);

    app.updateQuality();

    expect(items[0].name).toBe("foo");
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(-1);
  });
});
