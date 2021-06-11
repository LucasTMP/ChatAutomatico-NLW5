import {Request, Response} from "express";
import { MessagesServices } from "../services/MessagesService";

class MessagesController{

    async create(request: Request, response:Response){

        const {text, user_id, admin_id} = request.body;

        const messagesService =  new MessagesServices();

        const message = await messagesService.create({
            text,
            user_id, 
            admin_id});

        return response.json(message);

    }

    async showByUser(request: Request, response:Response){

        const { id } = request.params;
        const messagesService = new MessagesServices();
        const list = await messagesService.listByUser(id);

        return response.json(list);

    }

    async show(request: Request, response:Response){

       
        const messagesService = new MessagesServices();
        const list = await messagesService.list();

        return response.json(list);

    }

};

export { MessagesController };