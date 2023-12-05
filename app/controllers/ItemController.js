import { AppState } from "../AppState.js";
import { itemServices } from "../services/ItemServices.js";



export class ItemController{

    constructor(){
        // AppState.on('money',this.updateMoney())
        AppState.on('boughtItems', this.drawCart())
        this.drawVendr()
        console.log('Item Controller')
    }

    drawVendr(){
        const items = AppState.itemList
        let content = ''
        items.forEach(item => content += item.itemSlot)
        document.getElementById('Vendr').innerHTML = content
    }

    buyItem(itemName){
        itemServices.buyItem(itemName)
    }

    addQuarter(){
        itemServices.addQuarter()
    }

    drawCart(){
        const items = AppState.boughtItems
        let content = ''
        items.forEach(item => content += item.boughtItem)
        document.getElementById('Purchased Items').innerHTML = content
    }

    updateMoney(){
        document.getElementById('money').innerText = `$${AppState.money}`
    }


}
