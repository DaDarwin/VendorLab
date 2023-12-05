import { AppState } from "../AppState.js";
import { Item } from "../models/itemModel.js";

class ItemServices{
    buyItem(itemName){
        AppState.boughtItems.push(AppState.itemList.find(item => item.name == itemName))
    }

    addQuarter(){
        AppState.money += .25
        console.log(AppState.money)
    }

}

export const itemServices = new ItemServices()