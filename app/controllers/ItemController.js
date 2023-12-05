import { AppState } from "../AppState.js";
import { itemServices } from "../services/ItemServices.js";



export class ItemController{

    constructor(){
        this.drawVendr()
        AppState.on('money',this.updateMoney)
        AppState.on('boughtItems', this.drawCart)
        // console.log('Item Controller')
    }

    drawVendr(){
        const items = AppState.itemList
        let content = ''
        items.forEach(item => content += item.itemSlot)
        document.getElementById('Vendr').innerHTML = content
    }

    drawCart(){
        const items = AppState.boughtItems
        let content = ''
        items.forEach(item => content += item.boughtItem)
        document.getElementById('Purchased Items').innerHTML = content
    }
    buyItem(itemName){
        itemServices.buyItem(itemName)
    }

    addQuarter(){
        itemServices.addQuarter()
    }


    updateMoney(){
        document.getElementById('money').innerText = `$${AppState.money}`
    }


}
