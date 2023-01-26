import {
  createBrowserRouter,
  createRoutesFromElements,
  defer,
  Route,
} from 'react-router-dom';
import { AuthLayout, ProtectedLayout } from '../layouts';

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem('user');
      resolve(user);
    }, 3000)
  );

import {
  Courses,
  Dashboard,
  Error404,
  Examinations,
  Explore,
  Forum,
  JAMB,
  Login,
  Notes,
  NYSC,
  Payment,
  Profile,
  RandomCourse,
  Register,
  Remita,
  TakeATour,
  TimeTable,
} from '../pages';
import RandomInstitution from '../pages/Instutions/[id]';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<AuthLayout />}
      loader={() => defer({ userPromise: getUserData() })}
    >
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<ProtectedLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="courses">
          <Route index element={<Courses />} />
          <Route path=":courseId" element={<RandomCourse />} />
        </Route>
        <Route path="institutions">
          <Route index />
          <Route path=":instituteId" element={<RandomInstitution />} />
        </Route>
        <Route path="timetable" element={<TimeTable />} />
        <Route path="examinations" element={<Examinations />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/NYSC" element={<NYSC />} />
        <Route path="/Remita" element={<Remita />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/take-a-tour" element={<TakeATour />} />
        <Route path="/explore">
          <Route index element={<Explore />} />
          <Route path="notes" element={<Notes />} />
        </Route>
        <Route path="/jamb">
          <Route index element={<JAMB />} />
          <Route path="notes" element={<Notes />} />
        </Route>
      </Route>
      <Route path="/*" element={<Error404 />} />
    </Route>
  )
);

export default router;
