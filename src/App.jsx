import { RouterProvider } from 'react-router-dom';
import { createContext, useState } from 'react';

import router from './router';
import UseScrollTo from './app/hooks/useScrollTo';

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState({
    name: 'Paul Ishaili',
    userName: 'mrpaulishaili',
    email: 'paulishaili@gmail.com',

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
};

export default App;
