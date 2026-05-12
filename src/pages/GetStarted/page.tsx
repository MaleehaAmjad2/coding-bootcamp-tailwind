import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GetStarted() {
  const [showSignup, setShowSignup] = useState(false);
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    alert("Sign in successful! Redirecting to dashboard...");
    navigate("/dashboard");
  }

  function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    if (signUpPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (signUpPassword.length < 8) {
      alert("Password must be at least 8 characters!");
      return;
    }
    alert("Account created successfully! Please sign in.");
    setShowSignup(false);
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] py-16 px-5 text-center">
        <div>
          <h1 className="text-white text-4xl font-bold mb-2">🚀 Get Started</h1>
          <p className="text-white/90">Sign in to continue learning or create a new account</p>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto py-16 px-5">
        <div className="flex justify-center items-center min-h-[500px] py-10 px-5">
          {/* Sign In Card */}
          {!showSignup && (
            <div className="bg-white rounded-xl p-10 w-full max-w-[450px] shadow-lg border-t-4 border-[#1B5E20]">
              <div className="text-5xl text-center mb-4">🔐</div>
              <h2 className="text-center text-[#1B5E20] text-2xl font-bold mb-2">Sign In</h2>
              <p className="text-center text-[#333] mb-8">Welcome back! Please login to your account</p>
              <form onSubmit={handleSignIn}>
                <div className="mb-5">
                  <label className="block font-semibold mb-2">Email Address</label>
                  <input type="email" placeholder="student@codebootcamp.com" value={signInEmail} onChange={e => setSignInEmail(e.target.value)} className="w-full p-3 border-2 border-[#D4C5B0] rounded-lg" required />
                </div>
                <div className="mb-5">
                  <label className="block font-semibold mb-2">Password</label>
                  <input type="password" placeholder="Enter your password" value={signInPassword} onChange={e => setSignInPassword(e.target.value)} className="w-full p-3 border-2 border-[#D4C5B0] rounded-lg" required />
                </div>
                <button type="submit" className="w-full bg-[#1B5E20] text-white py-3 rounded-lg font-semibold cursor-pointer hover:bg-[#2E7D32] transition-all">Sign In →</button>
                <p className="text-center mt-5 pt-4 border-t border-[#E8DDD0] text-[#333]">
                  Don't have an account?{" "}
                  <a href="#" onClick={e => { e.preventDefault(); setShowSignup(true); }} className="text-[#1B5E20] font-semibold cursor-pointer">Sign Up</a>
                </p>
              </form>
            </div>
          )}

          {/* Sign Up Card */}
          {showSignup && (
            <div className="bg-white rounded-xl p-10 w-full max-w-[450px] shadow-lg border-t-4 border-[#1B5E20]">
              <div className="text-5xl text-center mb-4">📝</div>
              <h2 className="text-center text-[#1B5E20] text-2xl font-bold mb-2">Sign Up</h2>
              <p className="text-center text-[#333] mb-8">Create your free account and start learning</p>
              <form onSubmit={handleSignUp}>
                <div className="mb-5">
                  <label className="block font-semibold mb-2">Full Name</label>
                  <input type="text" placeholder="Enter your full name" value={fullName} onChange={e => setFullName(e.target.value)} className="w-full p-3 border-2 border-[#D4C5B0] rounded-lg" required />
                </div>
                <div className="mb-5">
                  <label className="block font-semibold mb-2">Email Address</label>
                  <input type="email" placeholder="student@codebootcamp.com" value={signUpEmail} onChange={e => setSignUpEmail(e.target.value)} className="w-full p-3 border-2 border-[#D4C5B0] rounded-lg" required />
                </div>
                <div className="mb-5">
                  <label className="block font-semibold mb-2">Password</label>
                  <input type="password" placeholder="Create a password (min 8 characters)" value={signUpPassword} onChange={e => setSignUpPassword(e.target.value)} className="w-full p-3 border-2 border-[#D4C5B0] rounded-lg" required />
                </div>
                <div className="mb-5">
                  <label className="block font-semibold mb-2">Confirm Password</label>
                  <input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full p-3 border-2 border-[#D4C5B0] rounded-lg" required />
                </div>
                <button type="submit" className="w-full bg-[#1B5E20] text-white py-3 rounded-lg font-semibold cursor-pointer hover:bg-[#2E7D32] transition-all">Create Account →</button>
                <p className="text-center mt-5 pt-4 border-t border-[#E8DDD0] text-[#333]">
                  Already have an account?{" "}
                  <a href="#" onClick={e => { e.preventDefault(); setShowSignup(false); }} className="text-[#1B5E20] font-semibold cursor-pointer">Sign In</a>
                </p>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}