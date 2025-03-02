import User from "./User";

interface Message{
    getUser() : User;
    setUser(user : User) : void;
    getMessageText() : string;
    setMessageText(messageText : string) : void;
}

class MessageImpl implements Message{
    private user : User;
    private messageText : string;

    constructor(user : User, messageText : string) {
        this.user = user;
        this.messageText =  messageText;
    }

    getMessageText(): string {
        return this.messageText;
    }

    getUser(): User {
        return this.user;
    }

    setMessageText(messageText: string): void {
        this.messageText = messageText;
    }

    setUser(user: User): void {
        this.user = user;
    }

}

export default MessageImpl;