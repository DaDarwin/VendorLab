import { Item } from './models/itemModel.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
class ObservableAppState extends EventEmitter {

  itemList = [
    new Item('candy',1),
    new Item('candy',1),
    new Item('candy',1),
    new Item('candy',1),
    new Item('candy',1),
    new Item('candy',1),
    new Item('candy',1),
    new Item('candy',1),
    new Item('candy',1),
    new Item('candy',1),
    new Item('candy',1),
    new Item('candy',1),
    new Item('candy',1),
    
  ]

  money = 0

  /**@TYPE [Item[]] */
  boughtItems = []
}

export const AppState = createObservableProxy(new ObservableAppState())