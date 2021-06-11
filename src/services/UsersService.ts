import { UsersRepository } from "../repositories/UsersRepository";
import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";

interface IUsersCreate {
    email: string,
};

class UsersService {

    private usersRepository : Repository<User>;

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    };

    async create({ email }: IUsersCreate) {


        const usersAlreadyExists = await this.usersRepository.findOne({
            email
        })

        if (usersAlreadyExists) {
            return usersAlreadyExists;
        };


        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        return user;

    }


}

export { UsersService };