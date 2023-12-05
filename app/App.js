import { ItemController } from './controllers/ItemController.js';
import { router } from './router-config.js';

class App {

  router = router
  ItemController = new ItemController()
}


const app = new App()
// @ts-ignore
window.app = app
