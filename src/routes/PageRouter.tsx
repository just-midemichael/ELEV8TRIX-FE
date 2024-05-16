import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import React from "react";
import Home from "../pages/Home";
import Dashboard from "../account/admin/scenes/dashboard/Dashboard";
import CreateUser from "../account/admin/scenes/user/CreateUser";
import UserManegement from "../account/admin/scenes/user/UserManagement";
import PaymentHistory from "../account/admin/scenes/user/PaymentHistory";
import Team from "../account/admin/scenes/team/Team";
import TeamManagement from "../account/admin/scenes/team/TeamManagement";
import Authorization from "../account/admin/scenes/team/Authorization";
import AdminSetting from "../account/admin/scenes/setting/Setting";
import Profile from "../account/admin/scenes/setting/Profile";
import CreateCourse from "../account/admin/scenes/course/CreateCourse";
import CourseManagement from "../account/admin/scenes/course/CourseManagement";
import RequireAdminAuth from "../utils/RequireAdminAuth";
import RequireUserAuth from "../utils/RequireUserAuth";
import { useContexApi } from "../utils/ContextApi";

//Lazy Load page for performance optimization
const LazyCourses = lazy(() => import("../pages/Courses"));
const LazyAbout = lazy(() => import("../pages/About"));
const LazyContact = lazy(() => import("../pages/Contact"));
const LazyPageNotFound = lazy(() => import("../pages/PageNoteFound"));
const LazyAdmin = lazy(() => import("../account/admin/Admin"));
const LazyAdminLogin = lazy(() => import("../account/admin/Login"));
const LazyUser = lazy(() => import("../account/user/User"));
const LazyUserLogin = lazy(() => import("../account/user/Login"));
const LazyLearning = lazy(() => import("../account/user/MyLearning"));
const LazyCart = lazy(() => import("../account/user/Cart"));
const LazyUserProfile = lazy(() => import("../account/user/UserProfile"));
const LazyCourseDetails = lazy(() => import("../pages/CourseDetails"));

const PageRouter = () => {
  // Take constants,variables,method from context api function
  const authUser = useContexApi();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="*"
        element={
          <React.Suspense>
            <LazyPageNotFound />
          </React.Suspense>
        }
      />
      <Route
        path="/courses"
        element={
          <React.Suspense>
            <LazyCourses />
          </React.Suspense>
        }
      />
      <Route
        path="courses/:courseTitle/:id/"
        element={
          <React.Suspense>
            <LazyCourseDetails />
          </React.Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <React.Suspense>
            <LazyAbout />
          </React.Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <React.Suspense>
            <LazyContact />
          </React.Suspense>
        }
      />
      <Route
        path="/admin_login"
        element={
          <React.Suspense>
            <LazyAdminLogin />
          </React.Suspense>
        }
      />
      <Route
        path="/login"
        element={
          <React.Suspense>
            <LazyUserLogin />
          </React.Suspense>
        }
      />

      {/* Admin Routes --------------------------------------------------*/}

      <Route
        path="/admin"
        element={
          <React.Suspense>
            <RequireAdminAuth>
              <LazyAdmin />
            </RequireAdminAuth>
          </React.Suspense>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="create_course" element={<CreateCourse />} />
        <Route path="course_management" element={<CourseManagement />} />
        <Route path="create_user" element={<CreateUser />} />
        <Route path="user_management" element={<UserManegement />} />
        <Route path="payment_history" element={<PaymentHistory />} />
        <Route path="team" element={<Team />} />
        <Route path="team_management" element={<TeamManagement />} />
        <Route path="authorization" element={<Authorization />} />
        <Route path="setting" element={<AdminSetting />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* User Routes---------------------------------------------------*/}

      <Route
        path={`user/${authUser.user}`}
        element={
          <React.Suspense>
            <RequireUserAuth>
              <LazyUser />
            </RequireUserAuth>
          </React.Suspense>
        }
      >
        <Route index element={<LazyUserProfile />} />
      </Route>

      <Route
        path="/my_learning"
        element={
          <React.Suspense>
            <RequireUserAuth>
              <LazyLearning />
            </RequireUserAuth>
          </React.Suspense>
        }
      />
      <Route
        path="/cart"
        element={
          <React.Suspense>
            <LazyCart />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default PageRouter;
