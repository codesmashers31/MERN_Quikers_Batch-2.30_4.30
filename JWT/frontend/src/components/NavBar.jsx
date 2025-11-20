import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="p-4 bg-black text-white flex justify-between">
      <h2>MERN App</h2>

      {user ? (
        <div>
          <span className="mr-3">Hi {user.name}</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Login Please</p>
      )}
    </nav>
  );
}
