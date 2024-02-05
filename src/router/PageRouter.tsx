import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import React from "react";
import Home from "../page/Home";

//Lazy Load page for performance optimization
const LazyCourses = lazy(() => import("../page/Courses"));
const LazyAbout = lazy(() => import("../page/About"));
const LazyContact = lazy(() => import("../page/Contact"));
const LazyPageNotFound = lazy(() => import("../page/PageNoteFound"));

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
        path="/Courses"
        element={
          <React.Suspense>
            <LazyCourses />
          </React.Suspense>
        }
      />
      <Route
        path="/About"
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
    </Routes>
  );
};

export default PageRouter;
