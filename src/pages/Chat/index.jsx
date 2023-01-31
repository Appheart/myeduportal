import { useState } from 'react';
import Chats from '../../screens/Chat/Chats';
import ChatView from '../../screens/Chat/ChatView';

import bg from '../../assets/images/bg-image.png';
import { Menu } from '../../components';

const ChatPage = () => {
  const chats = [{}, {}];
  const chatId = true;

  const chat = chats.find((c) => (c.id = chatId));

  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <main className="bg-[url(/images/bg-image.png)] min-h-screen grid place-items-center bg-fixed h-full">
        {chatId && (
          <section className="w-full md:w-[97.5vw] h-[85vh] bg-red-50 flex flex-row">
            <Chats />
            <ChatView isMobile={isMobile} />
          </section>
        )}
      </main>{' '}
      <Menu />
    </>
  );
};

export default ChatPage;
