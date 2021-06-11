import {Router} from "express";
import { MessagesController } from "./controllers/MessagesController";
import {SettingsController} from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersControllers";

const routes = Router();

const usersController = new UsersController();
const settingsController = new SettingsController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);

routes.get("/settings", settingsController.index);



routes.post("/users", usersController.create);


routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);
routes.get("/messages", messagesController.show);





routes.get("/", (request, response) => {
    return response.status(200).json({
        Status : "OK NLW 05"
    })
});

routes.post("/", (request, response) =>{

const {Status} = request.body;

return response.status(201).json({
    Msg : "Usuário Criado com sucesso",
    Status : Status
})

});


export {routes};