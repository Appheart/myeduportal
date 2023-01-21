import { RouterProvider } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';

import router from './router';
import UseScrollTo from './app/hooks/useScrollTo';

export const UserContext = createContext();

const tele = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tele.ready();
  });

  const [user, setUser] = useState({
    name: 'Paul Ishaili',
    username: 'mrpaulishaili',
    email: 'paulishaili@gmail.com',
    tel: '+2349161464483',

    session: '2021 - 2022',
    semester: 1,

    courses: ['CHM101', 'GSP101', 'BIO151', 'GSP111', 'BIO111'],
  });

  return (
    <UserContext.Provider value={user}>
      <div className="App bg-[#fff]">
        <RouterProvider router={router}>
          <UseScrollTo x={0} y={0} />
        </RouterProvider>
      </div>
    </UserContext.Provider>
  );
}

export default App;
