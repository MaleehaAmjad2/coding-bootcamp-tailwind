import { useState } from "react";

export default function AboutUs() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (name && question) {
      setSuccess(true);
      setName("");
      setQuestion("");
      setTimeout(() => setSuccess(false), 5000);
    }
  }

  return (
    <div className="aboutUs">

      <section className="hero-small">
        <div>
          <h1>About CodeBootcamp</h1>
          <p>Empowering students to become professional developers</p>
        </div>
      </section>

      <main className="page">

        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>To make quality coding education accessible and affordable for everyone in Pakistan, helping students launch successful tech careers.</p>
        </div>

        <div className="story-section">
          <h2>Our Story</h2>
          <p>CodeBootcamp was founded in 2020 with a simple goal: bridge the gap between academic learning and industry demands. We started with just 10 students in a small classroom, and today we've trained over 500+ successful developers who work at top companies.</p>
        </div>

        <h2 className="section-title-center">Our Impact</h2>
        <div className="stats-container">
          <div className="stat-card"><h3>500+</h3><p>Students Trained</p></div>
          <div className="stat-card"><h3>3</h3><p>Courses Offered</p></div>
          <div className="stat-card"><h3>90%</h3><p>Job Placement Rate</p></div>
          <div className="stat-card"><h3>10+</h3><p>Years Experience</p></div>
        </div>

        <h2 className="section-title-center">Our Values</h2>
        <div className="card-container">
          <div className="card value-card">
            <div className="value-icon">🎯</div>
            <h3>Quality Education</h3>
            <p>Industry-relevant curriculum updated regularly</p>
          </div>
          <div className="card value-card">
            <div className="value-icon">💻</div>
            <h3>Practical Learning</h3>
            <p>Project-based approach with real-world applications</p>
          </div>
          <div className="card value-card">
            <div className="value-icon">🚀</div>
            <h3>Career Support</h3>
            <p>Resume building, interview prep, and job placement</p>
          </div>
          <div className="card value-card">
            <div className="value-icon">💰</div>
            <h3>Affordable Pricing</h3>
            <p>Quality education at prices students can afford</p>
          </div>
        </div>

        <div className="email-card">
          <div className="email-icon">📧</div>
          <h3>Contact Us</h3>
          <p>Have questions? Reach out to us directly!</p>
          <a href="mailto:maleehaa728@gmail.com" className="email-link">maleehaa728@gmail.com</a>
        </div>

        <div className="question-card">
          <div className="question-icon">❓</div>
          <h3>Have Questions? Ask Anything!</h3>
          <p>Write your question below and we'll get back to you soon.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label>Your Question</label>
              <textarea value={question} onChange={e => setQuestion(e.target.value)} rows={4} placeholder="Type your question here..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message →</button>
          </form>
          {success && <div className="success-message">Message sent successfully!</div>}
        </div>

      </main>
    </div>
  );
}