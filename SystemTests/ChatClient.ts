import User from "./User";
import Message from "./Message";
import ChatServerImpl from "./ChatServer";

interface ChatClient {
    sendMessage(message : Message) : boolean;
    receiveMessage(message : Message) : boolean;
    connectToServer() : boolean;
    disconnectFromServer() : boolean;
}


class ChatClientImpl implements ChatClient{
    private user : User;
    private messages : Message[] = [];
    private chatId : number;

    constructor(user : User, chatId : number) {
        this.user = user;
        this.chatId = chatId;
        this.connectToServer();
    }

    sendMessage(message: Message): boolean {
        this.messages.push(message);
        console.log( "USER "  +  message.getUser().getName() + " SENT MESSAGE: " + message.getMessageText());
        return true;
    }

    receiveMessage(message: Message): boolean {
        this.messages.push(message);
        console.log("RECEIVED NEW MESSAGE: " + message.getMessageText() + " - from: "  + message.getUser().getName());
        return false;
    }

    connectToServer(): boolean {
        const chatServer = new ChatServerImpl();
        return chatServer.connect(this.user, this.chatId);
    }

    disconnectFromServer(): boolean {
        const chatServer = new ChatServerImpl();
        return chatServer.disconnect(this.user, this.chatId);
    }


}

export default ChatClientImpl;