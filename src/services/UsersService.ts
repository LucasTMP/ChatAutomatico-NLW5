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

    async create(email: string) {


        const usersAlreadyValid = await this.usersRepository.findOne({
            email
        })

        if (usersAlreadyValid) {
            return usersAlreadyValid;
        };


        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        return user;

    }


    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });
    
        return user;
      }

}

export { UsersService };
