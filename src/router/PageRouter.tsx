import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import React from "react";
import Home from "../pages/Home";
import Dashboard from "../admin/scenes/dashboard/index";
import UserManegement from "../admin/scenes/userManagement/UserManagement";
import Team from "../admin/scenes/team/Team";
import AdminSetting from "../admin/scenes/setting/index";
import CourseManagement from "../admin/scenes/courseManagement/CourseManagement";

//Lazy Load page for performance optimization
const LazyCourses = lazy(() => import("../pages/Courses"));
const LazyAbout = lazy(() => import("../pages/About"));
const LazyContact = lazy(() => import("../pages/Contact"));
const LazyPageNotFound = lazy(() => import("../pages/PageNoteFound"));
const LazyAdmin = lazy(() => import("../admin/Admin"));
const LazyAdminLogin = lazy(() => import("../admin/Login"));
const LazyUser = lazy(() => import("../user/User"));
const LazyUserLogin = lazy(() => import("../user/Login"));
const LazyLearning = lazy(() => import("../user/MyLearning"));
const LazyCourseDetails = lazy(() => import("../pages/CourseDetails"));

const PageRouter = () => {
  // constant to take constants,variables,method from context api function

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
        path="courses/:id"
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

      <Route
        path="/admin"
        element={
          <React.Suspense>
            <LazyAdmin />
          </React.Suspense>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="course_management" element={<CourseManagement />} />
        <Route path="user_management" element={<UserManegement />} />
        <Route path="team" element={<Team />} />
        <Route path="setting" element={<AdminSetting />} />
      </Route>
      <Route
        path="/user"
        element={
          <React.Suspense>
            <LazyUser />
          </React.Suspense>
        }
      />
      <Route
        path="/my_learning"
        element={
          <React.Suspense>
            <LazyLearning />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default PageRouter;
