import express from "express";
const routes = express.Router();

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


export default routes;