import {io} from "../http";
import {ConnectionsService} from "../services/ConnectionsService";
import {MessagesServices} from "../services/MessagesService"

io.on("connect", async (socket) =>{

    const connectionsService = new ConnectionsService();
    const messagesService = new MessagesServices();
    const allConnectionsWithoutAdmin = await connectionsService.allWithoutAdmin();

    io.emit("admin_list_all_users", allConnectionsWithoutAdmin);

    socket.on("admin_list_messages_by_user", async (params, callback) =>{

        const {user_id} = params;

        const allMessages = await messagesService.listByUser(user_id);

        callback(allMessages);

    })

});