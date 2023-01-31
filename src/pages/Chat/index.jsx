import { useState } from 'react';
import Chats from '../../screens/Chat/Chats';
import ChatView from '../../screens/Chat/ChatView';

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
          <section className="grid place-items-center">
            <h3>Feature on premium</h3>
          </section>
        )}
      </main>{' '}
      <Menu />
    </>
  );
};

export default ChatPage;
