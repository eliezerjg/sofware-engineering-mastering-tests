import User from "./User";

interface ChatServer{
    connect(user : User, chatId : number) : boolean;
    disconnect(user : User, chatId : number) : boolean;
    notifyAll() : void;
}


class ChatServerImpl implements ChatServer{
    users : User[] = [];
    chatId : number = 1;


    connect(user: User, chatId: number): boolean {
        if(this.chatId !== chatId){
            console.warn("WRONG CHAT ID");
            return false;
        }

        this.users.push(user);

        console.log("USER " + user.getName() + " connected to the server");
        this.notifyAll();
        return true;
    }

    disconnect(user: User, chatId: number): boolean {
        if(this.chatId !== chatId){
            console.warn("WRONG CHAT ID");
            return false;
        }

        this.users = this.users.filter(n => n !== user);
        console.log("user " + user.getName() + " disconnected from chat id:" + chatId);
        this.notifyAll();


        return true;
    }

    notifyAll(): void {
        console.log("doing broadcast");
    }

}

export default ChatServerImpl;