import { RouterProvider } from 'react-router-dom';
import { createContext, useState } from 'react';

import router from './router';

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState({
    name: 'Paul Ishaili',
    userName: 'mrpaulishaili',
    email: 'paulishaili@gmail.com',

    session: '2021 - 2022',
    semester: '1st',

    courses: [
      {
        code: 'CHM 101',
        title: '',
        unit: '',
        examDate: '',
        lectureNotes: [],
        textBooks: [],
      },
      {
        code: 'CHM 111',
        title: '',
        unit: '',
        examDate: '',
        lectureNotes: [],
        textBooks: [],
      },
    ],
  });

  return (
    <UserContext.Provider value={user}>
      <div className="App bg-[#fff]">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </UserContext.Provider>
  );
};

export default App;
