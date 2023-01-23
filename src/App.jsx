import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';

import router from './router';
import UseScrollTo from './app/hooks/useScrollTo';

const tele = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tele.ready();
  });

  return (
    <div className="App bg-[#fff]">
      <RouterProvider router={router}>
        <UseScrollTo x={0} y={0} />
      </RouterProvider>
    </div>
  );
}

export default App;
