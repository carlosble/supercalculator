import createView from './view.js';
import createClient from './client.js';
import createService from './service.js';
import createController from './controller.js';

window.onload =  function(){
    let view = createView();
    let client = createClient();
    let service = createService(client);
    let controller = createController(view, service);
    controller.start();
};
