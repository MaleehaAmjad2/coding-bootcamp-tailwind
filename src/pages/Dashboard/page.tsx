import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard">

      <section className="hero-small">
        <div>
          <h1>Welcome Back! 👋</h1>
          <p>Continue your coding journey where you left off</p>
        </div>
      </section>

      <main className="page">

        <div className="stats-container">
          <div className="stat-card"><h3>3</h3><p>Enrolled Courses</p></div>
          <div className="stat-card"><h3>58%</h3><p>Overall Progress</p></div>
          <div className="stat-card"><h3>12</h3><p>Lessons Completed</p></div>
        </div>

        <h2 className="section-title-center">📚 Enrolled Courses Progress</h2>
        <div className="progress-grid">

          <div className="progress-card">
            <div className="course-icon">🌐</div>
            <div className="course-name">Web Development</div>
            <h3>HTML, CSS, JavaScript & React</h3>
            <div className="progress">
              <div className="progress-bar"><div className="progress-fill progress-70"></div></div>
              <span>70% Complete</span>
            </div>
            <div className="modules-left">⏰ 5 modules left</div>
            <div className="completion-date">📅 Est. completion: 2 weeks</div>
            <Link to="/courses" className="btn btn-primary">Continue Course →</Link>
          </div>

          <div className="progress-card">
            <div className="course-icon">🐍</div>
            <div className="course-name">Python Programming</div>
            <h3>Data Structures, OOP & Projects</h3>
            <div className="progress">
              <div className="progress-bar"><div className="progress-fill progress-50"></div></div>
              <span>50% Complete</span>
            </div>
            <div className="modules-left">⏰ 6 modules left</div>
            <div className="completion-date">📅 Est. completion: 3 weeks</div>
            <Link to="/courses" className="btn btn-primary">Continue Course →</Link>
          </div>

          <div className="progress-card">
            <div className="course-icon">⚛️</div>
            <div className="course-name">Full Stack Development</div>
            <h3>Frontend + Backend + Database</h3>
            <div className="progress">
              <div className="progress-bar"><div className="progress-fill progress-43"></div></div>
              <span>43% Complete</span>
            </div>
            <div className="modules-left">⏰ 9 modules left</div>
            <div className="completion-date">📅 Est. completion: 5 weeks</div>
            <Link to="/courses" className="btn btn-primary">Continue Course →</Link>
          </div>

        </div>

        <h2 className="section-title-center">📈 My Progress Overview</h2>
        <div className="chart-container">
          <div className="bars-wrapper">
            <div className="progress-bar-item">
              <div className="bar bar-70"></div>
              <div className="label">Web Dev</div>
              <div className="percentage">70%</div>
            </div>
            <div className="progress-bar-item">
              <div className="bar bar-50"></div>
              <div className="label">Python</div>
              <div className="percentage">50%</div>
            </div>
            <div className="progress-bar-item">
             <div className="bar bar-43"></div>
              <div className="label">Full Stack</div>
              <div className="percentage">43%</div>
            </div>
          </div>
        </div>

        <h2 className="section-title-center">📋 Enrolled Courses Details</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Price (PKR)</th>
                <th>Progress</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Web Development</td>
                <td>₨ 4,999</td>
                <td>70%</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>Python Programming</td>
                <td>₨ 3,499</td>
                <td>50%</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>Full Stack Development</td>
                <td>₨ 5,999</td>
                <td>43%</td>
                <td>In Progress</td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}