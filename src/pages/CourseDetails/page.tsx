import { Link } from "react-router-dom";

export default function CourseDetails() {
  return (
    <div className="courseDetails">

      <section className="hero-small">
        <div>
          <h1>📚 Our Courses</h1>
          <p>Choose from our most popular coding programs</p>
        </div>
      </section>

      <main className="page">
        <div className="card-container">

          <div className="card course-card-detail">
            <div className="course-icon-header">🌐</div>
            <h2>Web Development</h2>
            <p className="course-subtitle">HTML, CSS, JavaScript, React & Node.js</p>
            <div className="course-meta-detail">
              <span>📅 12 Weeks</span>
              <span>🎯 Beginner</span>
              <span>💻 45 Lessons</span>
            </div>
            <div className="course-description-detail">
              <h3>Overview</h3>
              <p>Build stunning, responsive websites from scratch using modern technologies.</p>
            </div>
            <div className="course-curriculum-detail">
              <h3>What You'll Learn</h3>
              <ul>
                <li>• HTML5 & Semantic Structure</li>
                <li>• CSS3 Flexbox & Animations</li>
                <li>• JavaScript ES6+ (DOM, Functions)</li>
                <li>• React.js (Components, Hooks)</li>
                <li>• Git & GitHub</li>
              </ul>
            </div>
            <div className="course-footer-detail">
              <div className="course-price">₨ 4,999</div>
              <Link to="/getstarted" className="btn btn-primary">Enroll</Link>
            </div>
          </div>

          <div className="card course-card-detail">
            <div className="course-icon-header">🐍</div>
            <h2>Python Programming</h2>
            <p className="course-subtitle">Data structures, OOP & real-world projects</p>
            <div className="course-meta-detail">
              <span>📅 10 Weeks</span>
              <span>🎯 Beginner</span>
              <span>💻 35 Lessons</span>
            </div>
            <div className="course-description-detail">
              <h3>Overview</h3>
              <p>Learn Python from zero to building automation scripts, data tools, and APIs.</p>
            </div>
            <div className="course-curriculum-detail">
              <h3>What You'll Learn</h3>
              <ul>
                <li>• Python Basics (Variables, Loops)</li>
                <li>• Functions, Modules & Packages</li>
                <li>• Object-Oriented Programming (OOP)</li>
                <li>• File Handling & Exception Handling</li>
                <li>• Build APIs with Flask/Django</li>
              </ul>
            </div>
            <div className="course-footer-detail">
              <div className="course-price">₨ 3,499</div>
              <Link to="/getstarted" className="btn btn-primary">Enroll</Link>
            </div>
          </div>

          <div className="card course-card-detail">
            <div className="course-icon-header">⚛️</div>
            <h2>Full Stack</h2>
            <p className="course-subtitle">Frontend + Backend + Database Mastery</p>
            <div className="course-meta-detail">
              <span>📅 16 Weeks</span>
              <span>🎯 Intermediate</span>
              <span>💻 60 Lessons</span>
            </div>
            <div className="course-description-detail">
              <h3>Overview</h3>
              <p>Build complete web applications from frontend to backend.</p>
            </div>
            <div className="course-curriculum-detail">
              <h3>What You'll Learn</h3>
              <ul>
                <li>• Frontend: HTML, CSS, React.js</li>
                <li>• Backend: Node.js, Express, APIs</li>
                <li>• Databases: MongoDB, SQL</li>
                <li>• Authentication (JWT)</li>
                <li>• Deployment: Vercel, AWS</li>
              </ul>
            </div>
            <div className="course-footer-detail">
              <div className="course-price">₨ 5,999</div>
              <Link to="/getstarted" className="btn btn-primary">Enroll</Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}