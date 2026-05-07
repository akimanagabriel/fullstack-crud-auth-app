/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    names: "",
    email: "",
    phone: "",
    grade: "",
  });

  async function getStudentById() {
    const { data } = await axios.get("http://localhost:8000/students/" + id);
    setFormData({ ...data, grade: data.class });
  }

  useEffect(() => {
    getStudentById();
  }, [id]);

  const redirect = useNavigate();
  async function handleUpdate(e) {
    e.preventDefault();
    await axios.put("http://localhost:8000/students/" + id, formData);
    redirect("/");
  }

  return (
    <div className="mt-5">
      <h1>Edit {formData.names} details </h1>

      <form
        onSubmit={handleUpdate}
        className="mt-4"
      >
        <input
          onChange={(e) => setFormData({ ...formData, names: e.target.value })}
          type="text"
          value={formData.names}
          className="form-control"
        />

        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
          className="form-control"
        />

        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          value={formData.phone}
          className="form-control"
        />

        <input
          type="text"
          value={formData.grade}
          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
          className="form-control"
        />

        <button
          type="submit"
          className="btn btn-primary"
        >
          Save changes
        </button>
      </form>
    </div>
  );
}

export default EditStudent;
