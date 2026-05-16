import { Link } from "react-router-dom";

export default function CourseDetails() {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] py-16 px-5 text-center">
        <div>
          <h1 className="text-white text-4xl font-bold mb-2">📚 Our Courses</h1>
          <p className="text-white/90">Choose from our most popular coding programs</p>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto py-16 px-5">
        <div className="flex flex-wrap justify-center gap-8">
          {/* Course 1: Web Development */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:-translate-y-2.5 hover:shadow-lg transition-all w-[320px] max-w-full flex flex-col">
            <div className="text-5xl text-center pt-5 pb-2">🌐</div>
            <h2 className="text-[#1B5E20] text-center text-2xl font-bold mb-2">Web Development</h2>
            <p className="text-center text-[#333] text-sm px-4 mb-4">HTML, CSS, JavaScript, React & Node.js</p>
            <div className="flex flex-wrap justify-center gap-2 px-4 mb-5">
              <span className="bg-[#E8DDD0] px-3 py-1 rounded-full text-xs">📅 12 Weeks</span>
              <span className="bg-[#E8DDD0] px-3 py-1 rounded-full text-xs">🎯 Beginner</span>
              <span className="bg-[#E8DDD0] px-3 py-1 rounded-full text-xs">💻 45 Lessons</span>
            </div>
            <div className="px-5 mb-5">
              <h3 className="text-[#1B5E20] font-semibold mb-2">Overview</h3>
              <p className="text-[#333] text-sm">Build stunning, responsive websites from scratch using modern technologies.</p>
            </div>
            <div className="px-5 mb-5">
              <h3 className="text-[#1B5E20] font-semibold mb-2">What You'll Learn</h3>
              <ul className="list-none">
                <li className="text-[#333] text-sm py-1 border-b border-dashed border-[#E8DDD0]">• HTML5 & Semantic Structure</li>
                <li className="text-[#333] text-sm py-1 border-b border-dashed border-[#E8DDD0]">• CSS3 Flexbox & Animations</li>
                <li className="text-[#333] text-sm py-1 border-b border-dashed border-[#E8DDD0]">• JavaScript ES6+ (DOM, Functions)</li>
                <li className="text-[#333] text-sm py-1 border-b border-dashed border-[#E8DDD0]">• React.js (Components, Hooks)</li>
                <li className="text-[#333] text-sm py-1 border-b border-dashed border-[#E8DDD0]">• Git & GitHub</li>
              </ul>
            </div>
            <div className="flex justify-between items-center p-4 border-t border-[#E8DDD0] mt-auto">
              <div className="text-2xl font-bold text-[#1B5E20]">₨ 4,999</div>
              <Link to="/register" className="bg-[#1B5E20] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#2E7D32] transition-all">Enroll</Link>
            </div>
          </div>

          {/* Course 2: Python Programming */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:-translate-y-2.5 hover:shadow-lg transition-all w-[320px] max-w-full flex flex-col">
            <div className="text-5xl text-center pt-5 pb-2">🐍</div>
            <h2 className="text-[#1B5E20] text-center text-2xl font-bold mb-2">Python Programming</h2>
            <p className="text-center text-[#333] text-sm px-4 mb-4">Data structures, OOP & real-world projects</p>
            <div className="flex flex-wrap justify-center gap-2 px-4 mb-5">
              <span className="bg-[#E8DDD0] px-3 py-1 rounded-full text-xs">📅 10 Weeks</span>
              <span className="bg-[#E8DDD0] px-3 py-1 rounded-full text-xs">🎯 Beginner</span>
              <span className="bg-[#E8DDD0] px-3 py-1 rounded-full text-xs">💻 35 Lessons</span>
            </div>
            <div className="px-5 mb-5">
              <h3 className="text-[#1B5E20] font-semibold mb-2">Overview</h3>
              <p className="text-[#333] text-sm">Learn Python from zero to building automation scripts, data tools, and APIs.</p>
            </div>
            <div className="px-5 mb-5">
              <h3 className="text-[#1B5E20] font-semibold mb-2">What You'll Learn</h3>
              <ul className="list-none">
                <li className="text-[#333] text-sm py-1 border-b border-dashed border-[#E8DDD0]">• Python Basics (Variables, Loops)</li>
                <li className="text-[#333] text-sm py-1 border-b border-dashed border-[#E8DDD0]">• Functions, Modules & Packages</li>
                <li className="text-[#333] text-sm py-1 border-b border-dashed border-[#E8DDD0]">• Object-Oriented Programming (OOP)</li>
                <li className="text-[#333] text-sm py-1 border-b border-dashed border-[#E8DDD0]">• File Handling & Exception Handling</li>
                <li className="text-[#333] text-sm py-1 border-b border-dashed border-[#E8DDD0]">• Build APIs with Flask/Django</li>
              </ul>
            </div>
            <div className="flex justify-between items-center p-4 border-t border-[#E8DDD0] mt-auto">
              <div className="text-2xl font-bold text-[#1B5E20]">₨ 3,499</div>
              <Link to="/register" className="bg-[#1B5E20] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#2E7D32] transition-all">Enroll</Link>
            </div>
          </div>

          {/* Course 3: Full Stack Development */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:-translate-y-2.5 hover:shadow-lg transition-all w-[320px] max-w-full flex flex-col">
            <div className="text-5xl text-center pt-5 pb-2">⚛️</div>
            <h2 className="text-[#1B5E20] text-center text-2xl font-bold mb-2">Full Stack</h2>
            <p className="text-center text-[#333] text-sm px-4 mb-4">Frontend + Backend + Database Mastery</p>
            <div className="flex flex-wrap justify-center gap-2 px-4 mb-5">
              <span className="bg-[#E8DDD0] px-3 py-1 rounded-full text-xs">📅 16 Weeks</span>
              <span className="bg-[#E8DDD0] px-3 py-1 rounded-full text-xs">🎯 Intermediate</span>
              <span className="bg-[#E8DDD0] px-3 py-1 rounded-full text-xs">💻 60 Lessons</span>
            </div>
            <div className="px-5 mb-5">
              <h3 className="text-[#1B5E20] font-semibold mb-2">Overview</h3>
              <p className="text-[#333] text-sm">Build complete web applications from frontend to backend.</p>
            </div>
            <div className="px-5 mb-5">
              <h3 className="text-[#1B5E20] font-semibold mb-2">What You'll Learn</h3>
              <ul className="list-none">
                <li className="text-[#333] text-sm py-1 border-b border-dashed border-[#E8DDD0]">• Frontend: HTML, CSS, React.js</li>
                <li className="text-[#333] text-sm py-1 border-b border-dashed border-[#E8DDD0]">• Backend: Node.js, Express, APIs</li>
                <li className="text-[#333] text-sm py-1 border-b border-dashed border-[#E8DDD0]">• Databases: MongoDB, SQL</li>
                <li className="text-[#333] text-sm py-1 border-b border-dashed border-[#E8DDD0]">• Authentication (JWT)</li>
                <li className="text-[#333] text-sm py-1 border-b border-dashed border-[#E8DDD0]">• Deployment: Vercel, AWS</li>
              </ul>
            </div>
            <div className="flex justify-between items-center p-4 border-t border-[#E8DDD0] mt-auto">
              <div className="text-2xl font-bold text-[#1B5E20]">₨ 5,999</div>
              <Link to="/register" className="bg-[#1B5E20] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#2E7D32] transition-all">Enroll</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}