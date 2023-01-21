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
  Error404,
  Examinations,
  Forum,
  Login,
  NYSC,
  Payment,
  PDF,
  Profile,
  RandomCourse,
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
        <Route path="courses">
          <Route index element={<Courses />} />
          <Route path=":courseId" element={<RandomCourse />} />
        </Route>
        <Route path="timetable" element={<TimeTable />} />
        <Route path="examinations" element={<Examinations />} />
        <Route path="credentials" element={<Credentials />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/NYSC" element={<NYSC />} />
        <Route path="/Forum" element={<Forum />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/pdf" element={<PDF />} />
      </Route>
      <Route path="/*" element={<Error404 />} />
    </Route>
  )
);

export default router;
