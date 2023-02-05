import React, { Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  defer,
  Route,
} from 'react-router-dom';
import { AuthLayout, ProtectedLayout } from '../layouts';

const WAECPage = React.lazy(() => import('../pages/Services/WAEC'));
const JupebPage = React.lazy(() => import('../pages/Services/UNN/JUPEB'));

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem('user');
      resolve(user);
    }, 3000)
  );

const AccreditedCenters = React.lazy(() =>
  import('../pages/Services/JAMB/AccreditedCenters')
);
const CGPA = React.lazy(() => import('../pages/Explore/cGPAManager'));
const Courses = React.lazy(() => import('../pages/Courses'));
const Dashboard = React.lazy(() => import('../pages/Home/index.jsx'));
const Error404 = React.lazy(() => import('../pages/404'));
const Events = React.lazy(() => import('../pages/Events'));
const Examinations = React.lazy(() => import('../pages/Examinations'));
const Explore = React.lazy(() => import('../pages/Explore'));
const JAMB = React.lazy(() => import('../pages/Services/JAMB'));
const LectureMaterials = React.lazy(() =>
  import('../pages/Explore/LectureMaterials')
);
const Login = React.lazy(() => import('../pages/Auth/Login'));
const Notes = React.lazy(() => import('../pages/Explore/Notes'));
const NYSC = React.lazy(() => import('../pages/Services/NYSC'));
const Payment = React.lazy(() => import('../pages/Cart/'));
const Profile = React.lazy(() => import('../pages/Profile'));
const RandomCourse = React.lazy(() => import('../pages/courses/[id].jsx'));
const Register = React.lazy(() => import('../pages/Auth/Register'));
const Registrations = React.lazy(() =>
  import('../pages/Services/Registrations')
);
const Remita = React.lazy(() => import('../pages/Services/Remita'));
const TakeATour = React.lazy(() => import('../pages/Explore/TakeATour'));
const TasksTracker = React.lazy(() => import('../pages/TasksTracker'));
const TimeTable = React.lazy(() => import('../pages/Explore/TimeTable'));
const Chat = React.lazy(() => import('../pages/Chat'));
const RandomInstitution = React.lazy(() => import('../pages/Instutions/[id]'));
const UploadFiles = React.lazy(() => import('../pages/UploadFiles'));
const Walleti = React.lazy(() => import('../pages/Walleti'));
const UNNPage = React.lazy(() => import('../pages/Services/UNN'));

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
        <Route path="/chat" element={<Chat />} />
        <Route path="/walleti" element={<Walleti />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tasks-tracker" element={<TasksTracker />} />
        <Route path="/explore">
          <Route
            index
            element={
              <Suspense fallback={<p>...</p>}>
                <Explore />
              </Suspense>
            }
          />
          <Route path="notes" element={<Notes />} />
          <Route path="cgpa" element={<CGPA />} />
          <Route path="timetable" element={<TimeTable />} />
          <Route path="lecture-materials" element={<LectureMaterials />} />
        </Route>
        <Route path="/jamb">
          <Route index element={<JAMB />} />
          <Route path="accredited-centres" element={<AccreditedCenters />} />
          <Route path="notes" element={<Notes />} />
        </Route>
        <Route path="/waec" element={<WAECPage />}></Route>
        <Route path="/upload" element={<UploadFiles />} />
        <Route path="/unn">
          <Route index element={<UNNPage />} />
          <Route path="jupeb" element={<JupebPage />} />
        </Route>
      </Route>
      <Route path="/*" element={<Error404 />} />
    </Route>
  )
);

export default router;
