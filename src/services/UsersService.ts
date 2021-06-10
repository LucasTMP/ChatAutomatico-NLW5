import { UsersRepository } from "../repositories/UsersRepository";
import { getCustomRepository } from "typeorm";

interface IUsersCreate {
    email: string,
};

class UsersService {

    async create({ email }: IUsersCreate) {

        const usersRepository = getCustomRepository(UsersRepository);

        const usersAlreadyExists = await usersRepository.findOne({
            email
        })

        if (usersAlreadyExists) {
            return usersAlreadyExists;
        };


        const user = usersRepository.create({
            email
        });

        await usersRepository.save(user);

        return user;

    }


}

export { UsersService };