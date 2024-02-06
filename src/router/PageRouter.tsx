import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import React from "react";
import Home from "../page/Home";
import Dashboard from "../admin/scenes/dashboard/index";
import UserManegement from "../admin/scenes/userManagement/UserMangement";
import Team from "../admin/scenes/team/Team";
import AdminSetting from "../admin/scenes/setting/index";
import CourseManagement from "../admin/scenes/courseManagement/CourseManagement";

//Lazy Load page for performance optimization
const LazyCourses = lazy(() => import("../page/Courses"));
const LazyAbout = lazy(() => import("../page/About"));
const LazyContact = lazy(() => import("../page/Contact"));
const LazyPageNotFound = lazy(() => import("../page/PageNoteFound"));
const LazyAdmin = lazy(() => import("../admin/Admin"));
const LazyUser = lazy(() => import("../user/User"));

const PageRouter = () => {
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
        path="/admin"
        element={
          <React.Suspense>
            <LazyAdmin />
          </React.Suspense>
        }
      >
        <Route index element={<UserManegement />} />
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
    </Routes>
  );
};

export default PageRouter;
