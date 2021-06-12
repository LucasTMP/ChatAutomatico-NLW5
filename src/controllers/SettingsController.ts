import { Request, Response } from "express"
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { SettingsService } from "../services/SettingsService";

class SettingsController {

    async create(request: Request, response: Response) {

        const { chat, username } = request.body;

        const settingsService = new SettingsService();

        try {
            const settings =  await settingsService.create({chat, username});
            
            return response.status(201).json(settings);
        } catch (error) {
            return response.status(400).json({
                message: error.message
            });
        };

    }


    async index(request: Request, response: Response) {

        const settingsRepository = getCustomRepository(SettingsRepository);

        const settings = await settingsRepository.findOne();

        return response.status(200).json(settings);

    }

    async findByUsername(request: Request, response: Response){

        const {username} = request.params;

        const settingsService = new SettingsService();

        const settings = await settingsService.findByUsername(username);

        response.json(settings);

    }

    async update(request: Request, response: Response){

        const {username} = request.params;
        const {chat} = request.body;

        const settingsService = new SettingsService();

        const settings = await settingsService.update(username, chat);

        response.json(settings);

    };

};

export { SettingsController };