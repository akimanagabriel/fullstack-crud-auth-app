import React from "react";
import { Link, useNavigate, Route, Routes } from "react-router-dom";
import App from "../App";
import NewStudent from "../NewStudent";
import EditStudent from "../EditStudent";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Protected from "../auth/Protected";
import Guest from "../auth/Guest";

function AppRoutes() {
  const redirect = useNavigate();
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

        <Link
          className="btn btn-info mx-3"
          to={"/login"}
        >
          Login
        </Link>

        <button
          className="btn btn-outline-danger mx-3"
          onClick={() => {
            window.localStorage.removeItem("auth");
            redirect("/login");
          }}
        >
          Logout
        </button>
      </nav>

      <Routes>
        {/* nav */}
        <Route element={<Protected />}>
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
        </Route>

        <Route element={<Guest />}>
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default AppRoutes;
