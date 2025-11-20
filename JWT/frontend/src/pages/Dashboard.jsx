import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { token, user, logout } = useContext(AuthContext);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/auth/dashboard", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => setMsg(res.data.message))
      .catch(() => logout());
  }, []);

  return (
    <div>
      <h1>Welcome {user?.name}</h1>
      <p>{msg}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
