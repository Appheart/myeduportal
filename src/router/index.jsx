import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from '../layouts';

import {
  Courses,
  Credentials,
  Dashboard,
  Examinations,
  Login,
  Payments,
  Profile,
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
        <Route path="credentials" element={<Credentials />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Route>
  )
);

export default router;
