export class ShopItem {
  id:string

  constructor(
    public name: string, 
    public price: number,
    public isBought: boolean = false){
    
    this.id = self.crypto.randomUUID()

  }
}
