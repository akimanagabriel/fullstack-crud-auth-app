/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const [students, setStudents] = useState([]);

  async function getAllStudents() {
    const { data } = await axios.get("http://localhost:8000/students");
    setStudents(data);
  }

  useEffect(() => {
    getAllStudents();
  }, []);

  async function handleDelete(id) {
    if (window.confirm("Are you sure to delete student with id " + id)) {
      await axios.delete("http://localhost:8000/students/" + id);
      // window.alert("Student removed");
      getAllStudents();
    }
  }

  return (
    <div>
      <h1>STUDENTS CRUD</h1>

      {/* students table */}
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Names</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Grade</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 &&
            students.map((std) => (
              <tr key={std.id}>
                <td>{std.id}</td>
                <td>{std.names}</td>
                <td>{std.email}</td>
                <td>{std.phone}</td>
                <td>{std.class}</td>
                <td>
                  <button
                    onClick={() => handleDelete(std.id)}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link
                    className="btn btn-sm btn-outline-secondary"
                    to={"/students/" + std.id}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
