import ChatClient from "./ChatClient";
import ChatClientImpl from "./ChatClient";
import UserImpl from "./User";
import User from "./User";
import MessageImpl from "./Message";
import FancyTestingLibrary from "./FancyTestingLibrary/FancyTestingLibrary";
import FancyTestingLibraryImpl from "./FancyTestingLibrary/FancyTestingLibrary";

interface SystemTest{
    runSystemTest() : void;
}

class SystemTestImpl implements SystemTest{
    // from a system perspective we will test an entire flux
    // this is a simulation of a chat, every chats connects to a server

    fancyTestingLibrary : FancyTestingLibrary = new FancyTestingLibraryImpl();
    runSystemTest(): void {
        const chatId : number = 1;

        const user1 : User = new UserImpl();
        user1.setName("angela");
        const chatClient1 : ChatClient = new ChatClientImpl(user1, chatId);
        const messageStatus1 =chatClient1.sendMessage(new MessageImpl(user1, "HELLO 1 ! !"));


        const user2 : User = new UserImpl();
        user2.setName("suelen");
        const chatClient2 : ChatClient = new ChatClientImpl(user2, chatId);
        const messageStatus2 =chatClient2.sendMessage(new MessageImpl(user1, "HELLO 2 ! !"));

        const user3 : User = new UserImpl();
        user3.setName("douglas");
        const chatClient3 : ChatClient = new ChatClientImpl(user3, chatId);
        const messageStatus3 =chatClient3.sendMessage(new MessageImpl(user3, "HELLO  3 ! !"));

        const disconnectStatus1 = chatClient1.disconnectFromServer();
        const disconnectStatus2 =chatClient2.disconnectFromServer();
        const disconnectStatus3 =chatClient3.disconnectFromServer();

        this.fancyTestingLibrary.assertEquals(messageStatus1 , true);
        this.fancyTestingLibrary.assertEquals(messageStatus2 , true);
        this.fancyTestingLibrary.assertEquals(messageStatus3 , true);

        this.fancyTestingLibrary.assertEquals(disconnectStatus1 , true);
        this.fancyTestingLibrary.assertEquals(disconnectStatus2 , true);
        this.fancyTestingLibrary.assertEquals(disconnectStatus3 , true);

        console.log("[SUCCESS] WE TESTED THE FLUX AND GUARANTEE ALL IS WORKING WELL");

    }
}

const test : SystemTest = new SystemTestImpl();
test.runSystemTest();