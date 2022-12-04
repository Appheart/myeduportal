import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from '../layouts';

import {
  Courses,
  Dashboard,
  Examinations,
  Login,
  Payments,
  Register,
  TimeTable,
} from '../pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="payments" element={<Payments />} />
        <Route path="timetable" element={<TimeTable />} />
        <Route path="examinations" element={<Examinations />} />
      </Route>
    </Route>
  )
);

export default router;
