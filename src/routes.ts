import {Router} from "express";
import {SettingsController} from "./controllers/SettingsController";

const routes = Router();


const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);

routes.get("/settings", settingsController.index);












routes.get("/", (request, response) => {
    return response.status(200).json({
        Status : "OK NLW 05"
    })
});

routes.post("/", (request, response) =>{

const {Status} = request.body;

return response.status(201).json({
    Msg : "Usuario Criado com sucesso",
    Status : Status
})

});


export {routes};