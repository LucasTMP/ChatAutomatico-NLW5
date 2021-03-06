import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

interface IConnectionCreate{
    admin_id?: string,
    user_id: string,
    socket_id: string,
    id?: string,
}

class ConnectionsService {

    private connectionRepository : Repository<Connection>;

    constructor(){
        this.connectionRepository = getCustomRepository(ConnectionsRepository);
    };

    async create({socket_id, user_id, admin_id, id}: IConnectionCreate){

        const connection = this.connectionRepository.create({
            socket_id,
            user_id,
            admin_id,
            id   
        });

        await this.connectionRepository.save(connection);

        return connection;
    };

    async findByUserId(user_id: string){
        const connection = await this.connectionRepository.findOne({
            user_id
        })

        return connection;
    }

    async allWithoutAdmin(){
        const connections = await this.connectionRepository.find({
            where: {admin_id : null},
            relations: ["user"]
        })

        return connections;

    };
    
    async findBySocketID(socket_id : string){

        const connection = await this.connectionRepository.findOne({
            socket_id
        })

        return connection;

    }

    async updateAdminID(user_id: string, admin_id: string){

        const connection = await this.connectionRepository
        .createQueryBuilder()
        .update(Connection)
        .set({admin_id})
        .where("user_id = :user_id", {
            user_id
        }).execute();

    }
}

export {ConnectionsService};