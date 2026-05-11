import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "./components/Navbar/page";
import Footer from "./components/Footer/page";

import Dashboard from "./pages/Dashboard/page";
import AboutUs from "./pages/AboutUs/page";
import GetStarted from "./pages/GetStarted/page";
import CourseDetails from "./pages/CourseDetails/page";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        {/* Home Page - directly inside App.tsx */}
        <Route path="/" element={
          <div className="home">

            <section className="hero hero-main">
              <div className="hero-content">
                <h1 className="hero-title">Master Coding Skills Online</h1>
                <p className="hero-subtitle">Learn from industry experts and launch your coding career</p>
                <Link to="/getstarted" className="btn btn-primary">Enroll Now</Link>
              </div>
            </section>

            <section className="courses-section section-main">
              <div className="section-header">
                <h2 className="section-title">Featured Courses</h2>
                <p className="section-subtitle">Choose from our most popular coding programs</p>
              </div>
              <div className="card-container">
                <div className="card card-course">
                  <div className="card-image">
                    <img src="/images/course1.jpg" alt="Web Development Course" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Web Development</h3>
                    <p className="card-description">HTML, CSS, JavaScript, React & Node.js</p>
                    <p className="card-duration">12 Weeks | Beginner to Advanced</p>
                    <Link to="/courses" className="btn btn-secondary">View Details</Link>
                  </div>
                </div>
                <div className="card card-course">
                  <div className="card-image">
                    <img src="/images/course2.jpg" alt="Python Programming Course" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Python Programming</h3>
                    <p className="card-description">Data structures, OOP, and real-world projects</p>
                    <p className="card-duration">10 Weeks | Beginner to Intermediate</p>
                    <Link to="/courses" className="btn btn-secondary">View Details</Link>
                  </div>
                </div>
                <div className="card card-course">
                  <div className="card-image">
                    <img src="/images/course3.jpg" alt="Full Stack Development Course" />
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">Full Stack Development</h3>
                    <p className="card-description">Complete backend and frontend mastery</p>
                    <p className="card-duration">16 Weeks | Intermediate to Advanced</p>
                    <Link to="/courses" className="btn btn-secondary">View Details</Link>
                  </div>
                </div>
              </div>
              <div className="section-footer">
                <Link to="/courses" className="btn btn-outline">Explore Courses</Link>
              </div>
            </section>

            <section className="features-section section-main">
              <div className="section-header">
                <h2 className="section-title">Why Choose Our Bootcamp?</h2>
              </div>
              <div className="features-grid">
                <div className="feature feature-item">
                  <div className="feature-icon">🎓</div>
                  <h3 className="feature-title">Expert Instructors</h3>
                  <p className="feature-text">Learn from industry professionals with 10+ years experience</p>
                </div>
                <div className="feature feature-item">
                  <div className="feature-icon">💻</div>
                  <h3 className="feature-title">Hands-On Projects</h3>
                  <p className="feature-text">Build real-world applications from day one</p>
                </div>
                <div className="feature feature-item">
                  <div className="feature-icon">🕐</div>
                  <h3 className="feature-title">Flexible Schedule</h3>
                  <p className="feature-text">Learn at your own pace, 24/7 access to materials</p>
                </div>
              </div>
            </section>

            <section className="section-main">
              <div className="section-header">
                <h2 className="section-title">Your Learning Dashboard</h2>
                <p className="section-subtitle">Track your progress and continue learning</p>
              </div>
              <div className="card-container">
                <div className="card dash-preview-card">
                  <div className="dash-preview-content">
                    <div className="dash-preview-number">3</div>
                    <h3 className="dash-preview-title">Enrolled Courses</h3>
                    <p className="dash-preview-text">Active courses in progress</p>
                  </div>
                </div>
                <div className="card dash-preview-card">
                  <div className="dash-preview-content">
                    <div className="dash-preview-number">65%</div>
                    <h3 className="dash-preview-title">Overall Progress</h3>
                    <p className="dash-preview-text">Completion rate across all courses</p>
                  </div>
                </div>
                <div className="card dash-preview-card">
                  <div className="dash-preview-content">
                    <div className="dash-preview-number">12</div>
                    <h3 className="dash-preview-title">Lessons Completed</h3>
                    <p className="dash-preview-text">Modules finished successfully</p>
                  </div>
                </div>
              </div>
              <div className="section-footer">
                <Link to="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
              </div>
            </section>

            <section className="cta-section section-main">
              <div className="cta-content">
                <h2 className="cta-title">Ready to Start Your Coding Journey?</h2>
                <p className="cta-text">Join thousands of successful students who've transformed their careers</p>
                <Link to="/getstarted" className="btn btn-primary">Enroll Today</Link>
              </div>
            </section>

          </div>
        } />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/courses" element={<CourseDetails />} />

      </Routes>

      <Footer />
    </Router>
  );
}