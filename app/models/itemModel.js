export class Item{
    name
    price
    url
    alt

    constructor(item, price, url){
        this.name = item
        this.price = price
        this.url = url
        this.alt = `A Image of ${this.name}`
    }

    get itemSlot(){
        return /**HTML */ '<div>${this.name}</div>'
        }

    get boughtItem(){
        return /**HTML */ '<div>${this.name}</div>'
    }
}