import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] py-16 px-5 text-center">
        <div>
          <h1 className="text-white text-4xl font-bold mb-2">Welcome Back! 👋</h1>
          <p className="text-white/90">Continue your coding journey where you left off</p>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto py-16 px-5">
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-5 my-8">
          <div className="bg-white rounded-xl p-6 text-center min-w-[180px] shadow-md border border-[#E8DDD0]"><h3 className="text-4xl font-bold text-[#1B5E20] mb-1">3</h3><p className="text-[#333]">Enrolled Courses</p></div>
          <div className="bg-white rounded-xl p-6 text-center min-w-[180px] shadow-md border border-[#E8DDD0]"><h3 className="text-4xl font-bold text-[#1B5E20] mb-1">58%</h3><p className="text-[#333]">Overall Progress</p></div>
          <div className="bg-white rounded-xl p-6 text-center min-w-[180px] shadow-md border border-[#E8DDD0]"><h3 className="text-4xl font-bold text-[#1B5E20] mb-1">12</h3><p className="text-[#333]">Lessons Completed</p></div>
        </div>

        {/* Enrolled Courses Progress */}
        <h2 className="text-center text-[#1B5E20] text-3xl font-bold my-12">📚 Enrolled Courses Progress</h2>
        <div className="flex flex-wrap justify-center gap-6 my-8">
          {/* Course 1 */}
          <div className="bg-white rounded-xl p-5 w-[280px] shadow-md border-l-4 border-[#1B5E20]">
            <div className="text-3xl mb-2">🌐</div>
            <div className="font-semibold text-[#1B5E20] mb-2">Web Development</div>
            <h3 className="font-semibold text-[#1B5E20] mb-2 text-base">HTML, CSS, JavaScript & React</h3>
            <div className="my-4">
              <div className="w-full h-2 bg-[#E8DDD0] rounded-full overflow-hidden">
                <div className="h-full bg-[#1B5E20] rounded-full" style={{ width: "70%" }}></div>
              </div>
              <span className="text-[#333] text-sm">70% Complete</span>
            </div>
            <div className="text-red-500 text-sm my-2">⏰ 5 modules left</div>
            <div className="text-[#666] text-xs mb-4">📅 Est. completion: 2 weeks</div>
            <Link to="/courses" className="bg-[#1B5E20] text-white px-4 py-2 rounded-lg text-center inline-block hover:bg-[#2E7D32] transition-all">Continue Course →</Link>
          </div>

          {/* Course 2 */}
          <div className="bg-white rounded-xl p-5 w-[280px] shadow-md border-l-4 border-[#1B5E20]">
            <div className="text-3xl mb-2">🐍</div>
            <div className="font-semibold text-[#1B5E20] mb-2">Python Programming</div>
            <h3 className="font-semibold text-[#1B5E20] mb-2 text-base">Data Structures, OOP & Projects</h3>
            <div className="my-4">
              <div className="w-full h-2 bg-[#E8DDD0] rounded-full overflow-hidden">
                <div className="h-full bg-[#1B5E20] rounded-full" style={{ width: "50%" }}></div>
              </div>
              <span className="text-[#333] text-sm">50% Complete</span>
            </div>
            <div className="text-red-500 text-sm my-2">⏰ 6 modules left</div>
            <div className="text-[#666] text-xs mb-4">📅 Est. completion: 3 weeks</div>
            <Link to="/courses" className="bg-[#1B5E20] text-white px-4 py-2 rounded-lg text-center inline-block hover:bg-[#2E7D32] transition-all">Continue Course →</Link>
          </div>

          {/* Course 3 */}
          <div className="bg-white rounded-xl p-5 w-[280px] shadow-md border-l-4 border-[#1B5E20]">
            <div className="text-3xl mb-2">⚛️</div>
            <div className="font-semibold text-[#1B5E20] mb-2">Full Stack Development</div>
            <h3 className="font-semibold text-[#1B5E20] mb-2 text-base">Frontend + Backend + Database</h3>
            <div className="my-4">
              <div className="w-full h-2 bg-[#E8DDD0] rounded-full overflow-hidden">
                <div className="h-full bg-[#1B5E20] rounded-full" style={{ width: "43%" }}></div>
              </div>
              <span className="text-[#333] text-sm">43% Complete</span>
            </div>
            <div className="text-red-500 text-sm my-2">⏰ 9 modules left</div>
            <div className="text-[#666] text-xs mb-4">📅 Est. completion: 5 weeks</div>
            <Link to="/courses" className="bg-[#1B5E20] text-white px-4 py-2 rounded-lg text-center inline-block hover:bg-[#2E7D32] transition-all">Continue Course →</Link>
          </div>
        </div>

        {/* Graphical Progress View */}
        <h2 className="text-center text-[#1B5E20] text-3xl font-bold my-12">📈 My Progress Overview</h2>
        <div className="bg-white rounded-xl p-5 my-5 border border-[#E8DDD0]">
          <div className="flex flex-wrap justify-center gap-10 items-end">
            <div className="text-center w-[100px]"><div className="w-[60px] mx-auto bg-[#1B5E20] rounded-lg" style={{ height: "70px" }}></div><div className="font-semibold text-[#1B5E20] mt-2">Web Dev</div><div className="text-[#666] text-sm">70%</div></div>
            <div className="text-center w-[100px]"><div className="w-[60px] mx-auto bg-[#1B5E20] rounded-lg" style={{ height: "50px" }}></div><div className="font-semibold text-[#1B5E20] mt-2">Python</div><div className="text-[#666] text-sm">50%</div></div>
            <div className="text-center w-[100px]"><div className="w-[60px] mx-auto bg-[#1B5E20] rounded-lg" style={{ height: "43px" }}></div><div className="font-semibold text-[#1B5E20] mt-2">Full Stack</div><div className="text-[#666] text-sm">43%</div></div>
          </div>
        </div>

        {/* Enrolled Courses Details Table */}
        <h2 className="text-center text-[#1B5E20] text-3xl font-bold my-12">📋 Enrolled Courses Details</h2>
        <div className="w-full overflow-x-auto my-5">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
            <thead className="bg-[#1B5E20] text-white">
              <tr><th className="p-4 text-left">Course Name</th><th className="p-4 text-left">Price (PKR)</th><th className="p-4 text-left">Progress</th><th className="p-4 text-left">Status</th></tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E8DDD0]"><td className="p-4">Web Development</td><td className="p-4">₨ 4,999</td><td className="p-4">70%</td><td className="p-4"><span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">In Progress</span></td></tr>
              <tr className="border-b border-[#E8DDD0] bg-gray-50"><td className="p-4">Python Programming</td><td className="p-4">₨ 3,499</td><td className="p-4">50%</td><td className="p-4"><span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">In Progress</span></td></tr>
              <tr className="border-b border-[#E8DDD0]"><td className="p-4">Full Stack Development</td><td className="p-4">₨ 5,999</td><td className="p-4">43%</td><td className="p-4"><span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs">Just Started</span></td></tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}