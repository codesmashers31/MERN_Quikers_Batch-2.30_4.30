import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/register",
        form
      );
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response.data.message);
    }
  };

  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Register</h1>

      <input className="border p-2 w-full mb-2"
        name="name" placeholder="Name" onChange={change} />

      <input className="border p-2 w-full mb-2"
        name="email" placeholder="Email" onChange={change} />

      <input className="border p-2 w-full mb-2"
        type="password" name="password" placeholder="Password" onChange={change} />

      <button onClick={submit}
        className="bg-blue-600 text-white p-2 rounded w-full">
        Register
      </button>

      <p className="mt-3">{msg}</p>
    </div>
  );
}
