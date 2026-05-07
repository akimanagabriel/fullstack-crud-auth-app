import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import App from "../App";
import NewStudent from "../NewStudent";
import EditStudent from "../EditStudent";

function AppRoutes() {
  return (
    <div className="container py-4">
      <nav>
        <Link
          className="btn btn-info mx-3"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="btn btn-info mx-3"
          to={"/new"}
        >
          Add Student
        </Link>
      </nav>

      <Routes>
        {/* nav */}

        <Route
          index
          element={<App />}
        />

        <Route
          path="/new"
          element={<NewStudent />}
        />

        <Route
          path="/students/:id"
          element={<EditStudent />}
        />
      </Routes>
    </div>
  );
}

export default AppRoutes;
