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
  AccreditedCenters,
  CGPA,
  Courses,
  Dashboard,
  Error404,
  Events,
  Examinations,
  Explore,
  JAMB,
  LectureMaterials,
  Login,
  Notes,
  NYSC,
  Payment,
  Profile,
  RandomCourse,
  Register,
  Registrations,
  Remita,
  TakeATour,
  TasksTracker,
  TimeTable,
} from '../pages';
import RandomInstitution from '../pages/Instutions/[id]';
import UploadFiles from '../pages/UploadFiles';

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
        <Route path="registrations" element={<Registrations />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/take-a-tour" element={<TakeATour />} />
        <Route path="/take-a-tour" element={<TakeATour />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tasks-tracker" element={<TasksTracker />} />
        <Route path="/explore">
          <Route index element={<Explore />} />
          <Route path="notes" element={<Notes />} />
          <Route path="cgpa" element={<CGPA />} />
          <Route path="timetable" element={<TimeTable />} />
          <Route path="lecture-materials" element={<LectureMaterials />} />
        </Route>
        <Route path="/jamb">
          <Route index element={<JAMB />} />
          <Route path="accreditted_centres" element={<AccreditedCenters />} />
          <Route path="notes" element={<Notes />} />
        </Route>
        <Route path="/upload" element={<UploadFiles />} />
      </Route>
      <Route path="/*" element={<Error404 />} />
    </Route>
  )
);

export default router;
