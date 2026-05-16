import { Link } from "react-router-dom";

export default function Dashboard() {
  const courses = [
    {
      id: 1,
      name: "Web Development for Beginners",
      short: "HTML/CSS/JS",
      progress: 70,
      modulesLeft: 5,
      completion: "2 weeks",
      icon: "🌐",
      link: "/courses",
      color: "bg-green-600",
    },
    {
      id: 2,
      name: "Python Programming 101",
      short: "Intro",
      progress: 50,
      modulesLeft: 6,
      completion: "3 weeks",
      icon: "🐍",
      link: "/courses",
      color: "bg-blue-600",
    },
    {
      id: 3,
      name: "Full Stack Web Development",
      short: "MERN",
      progress: 43,
      modulesLeft: 9,
      completion: "5 weeks",
      icon: "⚛️",
      link: "/courses",
      color: "bg-orange-500",
    },
  ];

  const sessionsData = [
    { week: "W1", sessions: 5 },
    { week: "W2", sessions: 7 },
    { week: "W3", sessions: 6 },
    { week: "W4", sessions: 8 },
    { week: "W5", sessions: 10 },
    { week: "W6", sessions: 9 },
  ];

  const activityLog = [
    { id: 1, action: "Completed Module 5 of Web Development", time: "3 hours ago" },
    { id: 2, action: "Started Python OOP section", time: "1 day ago" },
    { id: 3, action: "Submitted Full Stack project", time: "2 days ago" },
    { id: 4, action: "Attended live React workshop", time: "3 days ago" },
  ];

  const announcements = [
    { id: 1, title: "New Web Dev project released", time: "7 hours ago" },
    { id: 2, title: "Python assignment deadline extended", time: "1 day ago" },
    { id: 3, title: "Full Stack workshop this Friday", time: "3 days ago" },
  ];

  // 8 milestones: 5 completed, 3 pending
  const milestones = [
    { id: 1, title: "Complete Web Dev Module 6", due: "May 20, 2026", status: "completed" },
    { id: 2, title: "Python OOP Assignment", due: "May 22, 2026", status: "pending" },
    { id: 3, title: "Full Stack Project Draft", due: "May 25, 2026", status: "completed" },
    { id: 4, title: "Web Dev Final Project", due: "May 28, 2026", status: "completed" },
    { id: 5, title: "Python Data Structures Quiz", due: "May 30, 2026", status: "pending" },
    { id: 6, title: "Full Stack Deployment", due: "June 2, 2026", status: "completed" },
    { id: 7, title: "React State Management Workshop", due: "June 5, 2026", status: "completed" },
    { id: 8, title: "Capstone Project Kickoff", due: "June 8, 2026", status: "pending" },
  ];

  const overallProgress = Math.round(courses.reduce((sum, c) => sum + c.progress, 0) / courses.length);
  const totalLessonsCompleted = courses.reduce((sum, c) => sum + Math.floor(c.progress * 0.15), 0);
  const totalModulesLeft = courses.reduce((sum, c) => sum + c.modulesLeft, 0);
  const maxProgress = 100;
  const maxSessions = 10;

  const lineChartWidth = 600;
  const step = lineChartWidth / (sessionsData.length - 1);
  const points = sessionsData
    .map((d, i) => `${i * step},${100 - (d.sessions / maxSessions) * 80}`)
    .join(" ");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] py-12 px-5 text-center">
        <div>
          <h1 className="text-white text-4xl font-bold mb-2">Welcome Back, Sarah! 👋</h1>
          <p className="text-white/90">Continue your coding journey where you left off</p>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto py-10 px-5">
        {/* Stats Row */}
        <div id="stats-section" className="flex flex-wrap justify-center gap-5 mb-12 scroll-mt-24">
          <div className="bg-white rounded-xl p-6 text-center min-w-[160px] shadow-md border border-[#E8DDD0]">
            <h3 className="text-4xl font-bold text-[#1B5E20] mb-1">{courses.length}</h3>
            <p className="text-[#333]">Enrolled Courses</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center min-w-[160px] shadow-md border border-[#E8DDD0]">
            <h3 className="text-4xl font-bold text-[#1B5E20] mb-1">{overallProgress}%</h3>
            <p className="text-[#333]">Overall Progress</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center min-w-[160px] shadow-md border border-[#E8DDD0]">
            <h3 className="text-4xl font-bold text-[#1B5E20] mb-1">{totalLessonsCompleted}</h3>
            <p className="text-[#333]">Lessons Completed</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center min-w-[160px] shadow-md border border-[#E8DDD0]">
            <h3 className="text-4xl font-bold text-[#1B5E20] mb-1">{totalModulesLeft}</h3>
            <p className="text-[#333]">Modules Left</p>
          </div>
        </div>

        {/* Quick Actions Buttons */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#1B5E20] mb-6">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollToSection("activity-section")} className="bg-[#2E7D32] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1B5E20] transition-all">📋 View Activity</button>
            <button onClick={() => scrollToSection("graphs-section")} className="bg-[#2E7D32] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1B5E20] transition-all">📈 View Graphs</button>
            <button onClick={() => scrollToSection("milestones-section")} className="bg-[#2E7D32] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1B5E20] transition-all">🎯 View Milestones</button>
          </div>
        </div>

        {/* Two‑column layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* LEFT COLUMN: Course Cards + Next Milestones */}
          <div className="flex-1 space-y-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-md p-5 border-l-4 border-[#1B5E20]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{course.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-[#1B5E20]">{course.name}</h3>
                    <p className="text-xs text-[#666]">{course.short}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{course.progress}% complete</span>
                  </div>
                  <div className="w-full h-2 bg-[#E8DDD0] rounded-full overflow-hidden">
                    <div className={`h-full ${course.color} rounded-full`} style={{ width: `${course.progress}%` }}></div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs text-[#666]">⏰ {course.modulesLeft} modules left • 📅 {course.completion}</span>
                    <Link to={course.link} className="bg-[#2E7D32] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#1B5E20] transition-all">
                      Resume Lesson →
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Next Milestones Card - single column, each milestone on its own line */}
            <div id="milestones-section" className="bg-white rounded-xl shadow-md p-5 scroll-mt-24">
              <h2 className="text-xl font-bold text-[#1B5E20] mb-4">🎯 Next Milestones</h2>
              <div className="space-y-3">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="border-b border-[#E8DDD0] pb-2 flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-[#1B5E20]">{milestone.title}</p>
                      <p className="text-xs text-[#666]">Due: {milestone.due}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      milestone.status === "completed" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {milestone.status === "completed" ? "Completed" : "Pending"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Activity + Announcements + Graphs */}
          <div className="flex-1 space-y-6">
            {/* Recent Activity */}
            <div id="activity-section" className="bg-white rounded-xl shadow-md p-5 scroll-mt-24">
              <h2 className="text-xl font-bold text-[#1B5E20] mb-3">🕒 Recent Activity</h2>
              <ul className="space-y-2">
                {activityLog.map((act) => (
                  <li key={act.id} className="border-b border-[#E8DDD0] pb-2 text-sm text-[#333]">
                    <span className="font-medium">{act.action}</span>
                    <span className="text-xs text-[#666] block">{act.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Announcements */}
            <div className="bg-white rounded-xl shadow-md p-5">
              <h2 className="text-xl font-bold text-[#1B5E20] mb-3">📢 Announcements</h2>
              <ul className="space-y-2">
                {announcements.map((ann) => (
                  <li key={ann.id} className="border-b border-[#E8DDD0] pb-2 text-sm text-[#333]">
                    <span className="font-medium">{ann.title}</span>
                    <span className="text-xs text-[#666] block">{ann.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Graphs Section */}
            <div id="graphs-section" className="space-y-6 scroll-mt-24">
              {/* Total Sessions Attended */}
              <div className="bg-white rounded-xl shadow-md p-5 w-full">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-xl font-bold text-[#1B5E20]">📈 Total Sessions Attended</h2>
                  <span className="text-xs text-[#666]">Last 6 weeks</span>
                </div>
                <div className="w-full overflow-x-auto">
                  <svg width="100%" height="150" viewBox={`0 0 ${lineChartWidth} 120`} preserveAspectRatio="none" className="w-full">
                    <line x1="0" y1="20" x2={lineChartWidth} y2="20" stroke="#E8DDD0" strokeWidth="1" strokeDasharray="4" />
                    <line x1="0" y1="45" x2={lineChartWidth} y2="45" stroke="#E8DDD0" strokeWidth="1" strokeDasharray="4" />
                    <line x1="0" y1="70" x2={lineChartWidth} y2="70" stroke="#E8DDD0" strokeWidth="1" strokeDasharray="4" />
                    <line x1="0" y1="95" x2={lineChartWidth} y2="95" stroke="#E8DDD0" strokeWidth="1" strokeDasharray="4" />
                    <polyline points={points} fill="none" stroke="#1B5E20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    {sessionsData.map((_, i) => (
                      <circle key={i} cx={i * step} cy={100 - (sessionsData[i].sessions / maxSessions) * 80} r="4" fill="#1B5E20" stroke="white" strokeWidth="2" />
                    ))}
                  </svg>
                </div>
                <div className="flex justify-between text-xs text-[#666] mt-2 px-1">
                  {sessionsData.map((d) => <span key={d.week}>{d.week}</span>)}
                </div>
                <p className="text-center text-xs text-[#666] mt-3">Sessions attended per week</p>
              </div>

              {/* Course Progress Overview */}
              <div className="bg-white rounded-xl shadow-md p-5 w-full">
                <h2 className="text-xl font-bold text-[#1B5E20] mb-4">📊 Course Progress Overview</h2>
                <div className="flex items-end justify-between w-full gap-2">
                  {courses.map((course) => (
                    <div key={course.id} className="flex flex-col items-center flex-1 min-w-0">
                      <div className={`w-full max-w-[60px] mx-auto ${course.color} rounded-t-md transition-all duration-300`} style={{ height: `${(course.progress / maxProgress) * 150}px` }}></div>
                      <div className="text-xs font-medium mt-2 text-center truncate w-full">{course.name.split(" ")[0]}</div>
                      <div className="text-xs text-gray-500">{course.progress}%</div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  {courses.map((course) => (
                    <div key={course.id} className="flex items-center gap-1">
                      <div className={`w-3 h-3 rounded-full ${course.color}`}></div>
                      <span className="text-xs">{course.name.split(" ")[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}