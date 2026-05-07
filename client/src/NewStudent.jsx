import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewStudent() {
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    phone: "",
    grade: "",
  });

  const redirect = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    await axios.post("http://localhost:8000/students", formData);
    redirect("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Names</label>
        <input
          value={formData.names}
          onChange={(e) => setFormData({ ...formData, names: e.target.value })}
          type="text"
          className="form-control"
        />
        <label htmlFor="">Email</label>
        <input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="text"
          className="form-control"
        />
        <label htmlFor="">Phone number</label>
        <input
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          type="text"
          className="form-control"
        />
        <label htmlFor="">Class</label>
        <input
          value={formData.grade}
          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
          type="text"
          className="form-control"
        />

        <button
          className="btn btn-secondary mt-3"
          type="submit"
        >
          save student
        </button>
      </form>
    </div>
  );
}

export default NewStudent;
