import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const nav = useNavigate();

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3000/api/auth/login", form);

    .
    
    (res.data.token, res.data.user); // ⬅ Token + User saved globally
    nav("/dashboard");
  };

  return (
    <div>
      <input name="email" onChange={change} />
      <input name="password" type="password" onChange={change} />
      <button onClick={submit}>Login</button>
    </div>
  );
}
