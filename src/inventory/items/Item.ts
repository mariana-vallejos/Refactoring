export class Item {
  MIN_QUALITY = 0;
  MAX_QUALITY = 50;

  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}

  update(): void{
    throw new Error("Update method not implemented");
  }

  protected decreaseSellIn(): void {
    this.sellIn--;
  }

  protected increaseQuality(amount = 1): void {
    this.quality = Math.min(this.MAX_QUALITY, this.quality + amount);
  }

  protected decreaseQuality(amount = 1): void {
    this.quality = Math.max(this.MIN_QUALITY, this.quality - amount);
  }

  toString(): string {
    return `${this.name}, ${this.sellIn}, ${this.quality}`;
  }
}
