import { Request, Response } from "express"
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

class SettingsController {

    async create(request: Request, response: Response) {

        const { chat, username } = request.body;

        const settingsRepository = getCustomRepository(SettingsRepository);

        const settings = settingsRepository.create({
            chat,
            username,
        });

        await settingsRepository.save(settings);

        return response.status(201).json(settings);

    }


    async index(request: Request, response: Response) {

        const settingsRepository = getCustomRepository(SettingsRepository);

        const settings = await settingsRepository.findOne();

        return response.status(200).json(settings);

    }

};

export { SettingsController };