import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login successful! Redirecting to dashboard...");
    navigate("/dashboard");
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] py-16 px-5 text-center">
        <div>
          <h1 className="text-white text-4xl font-bold mb-2">🔐 Login</h1>
          <p className="text-white/90">Welcome back! Please login to your account</p>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto py-16 px-5">
        <div className="flex justify-center items-center min-h-[500px]">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border-t-4 border-[#1B5E20]">
            <div className="text-5xl text-center mb-4">🔐</div>
            <h2 className="text-2xl font-bold text-center text-[#1B5E20] mb-6">Sign In</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border-2 border-[#D4C5B0] rounded-lg"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block font-semibold mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border-2 border-[#D4C5B0] rounded-lg"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-[#1B5E20] text-white py-3 rounded-lg font-semibold hover:bg-[#2E7D32] transition-all">
                Sign In →
              </button>
              <p className="text-center mt-4 text-[#666]">
                Don't have an account?{" "}
                <Link to="/register" className="text-[#1B5E20] font-semibold">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}