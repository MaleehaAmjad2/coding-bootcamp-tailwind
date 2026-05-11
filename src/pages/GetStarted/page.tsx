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
    <div className="getStarted">

      <section className="hero-small">
        <div>
          <h1>🚀 Get Started</h1>
          <p>Sign in to continue learning or create a new account</p>
        </div>
      </section>

      <main className="page">
        <div className="auth-container">

          {/* Sign In Card */}
          {!showSignup && (
            <div className="auth-card">
              <div className="auth-icon">🔐</div>
              <h2>Sign In</h2>
              <p>Welcome back! Please login to your account</p>
              <form onSubmit={handleSignIn}>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="student@codebootcamp.com"
                    value={signInEmail}
                    onChange={e => setSignInEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={signInPassword}
                    onChange={e => setSignInPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Sign In →</button>
                <p className="auth-switch">
                  Don't have an account?{" "}
                  <a href="#" onClick={e => { e.preventDefault(); setShowSignup(true); }}>
                    Sign Up
                  </a>
                </p>
              </form>
            </div>
          )}

          {/* Sign Up Card */}
          {showSignup && (
            <div className="auth-card">
              <div className="auth-icon">📝</div>
              <h2>Sign Up</h2>
              <p>Create your free account and start learning</p>
              <form onSubmit={handleSignUp}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="student@codebootcamp.com"
                    value={signUpEmail}
                    onChange={e => setSignUpEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    placeholder="Create a password (min 8 characters)"
                    value={signUpPassword}
                    onChange={e => setSignUpPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Create Account →</button>
                <p className="auth-switch">
                  Already have an account?{" "}
                  <a href="#" onClick={e => { e.preventDefault(); setShowSignup(false); }}>
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}