export class Breed {
  constructor(
    private name: string,
    private subBreeds: string[]
  ) { }

  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }

  public addSubbreed(name: string): void {
    this.subBreeds.push(name);
  }

  public hasSubbreeds(): boolean {
    return this.subBreeds.length > 0;
  }

  public getSubbreeds(): string[] {
    return this.subBreeds;
  }
  public static fromJSON(json: any): Breed {
    return new Breed(json.name, json.subbreeds);
  }

  public static fromJSONS(jsons: any[]): Breed[] {
    return jsons ? jsons.map(Breed.fromJSON) : new Array<Breed>();
  }
}