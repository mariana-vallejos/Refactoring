export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}

  toString(): string {
    return `${this.name}, ${this.sellIn}, ${this.quality}`;
  }
}
