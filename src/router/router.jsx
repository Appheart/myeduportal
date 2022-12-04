import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';

import Layout from '../layouts/mainLayout';

import { DetailPage, ErrorPage, ExplorePage, WatchPage } from '../pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<ExplorePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="watch">
          <Route index element={<WatchPage />} />
          <Route path=":id" element={<DetailPage />} />
        </Route>

        <Route path="watch">
          <Route path=":id" element={<WatchPage />} />
        </Route>
      </Route>
      <Route path="/*" element={<ErrorPage />} />
    </Route>
  )
);

export default router;
