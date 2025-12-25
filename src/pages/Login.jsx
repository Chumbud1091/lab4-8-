import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const usernameRef = useRef(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    login();                 
    navigate("/dashboard");   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-80"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

        <input
          ref={usernameRef}
          placeholder="Username"
          className="w-full mb-3 p-2 border rounded"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
