import { RouterProvider } from 'react-router-dom';

import router from './router';

function App() {
  return (
    <div className="App bg-[#fff]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
