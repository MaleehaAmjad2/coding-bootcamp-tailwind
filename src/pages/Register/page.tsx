import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters!");
      return;
    }
    alert("Account created successfully! Please login.");
    navigate("/login");
  };

  return (
    <div>
      <section className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] py-16 px-5 text-center">
        <div>
          <h1 className="text-white text-4xl font-bold mb-2">📝 Sign Up</h1>
          <p className="text-white/90">Create your free account and start learning</p>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto py-16 px-5">
        <div className="flex justify-center items-center min-h-[500px]">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border-t-4 border-[#1B5E20]">
            <div className="text-5xl text-center mb-4">📝</div>
            <h2 className="text-2xl font-bold text-center text-[#1B5E20] mb-6">Create Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-3 border-2 border-[#D4C5B0] rounded-lg"
                  required
                />
              </div>
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
              <div className="mb-4">
                <label className="block font-semibold mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border-2 border-[#D4C5B0] rounded-lg"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block font-semibold mb-2">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-3 border-2 border-[#D4C5B0] rounded-lg"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-[#1B5E20] text-white py-3 rounded-lg font-semibold hover:bg-[#2E7D32] transition-all">
                Create Account →
              </button>
              <p className="text-center mt-4 text-[#666]">
                Already have an account?{" "}
                <Link to="/login" className="text-[#1B5E20] font-semibold">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}