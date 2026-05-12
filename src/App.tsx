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
        {/* Home Page */}
        <Route path="/" element={
          <div>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] py-24 px-5 text-center flex items-center justify-center min-h-[500px]">
              <div className="max-w-[800px]">
                <h1 className="text-5xl font-bold text-white mb-5">Master Coding Skills Online</h1>
                <p className="text-xl text-white/90 mb-10">Learn from industry experts and launch your coding career</p>
                <Link to="/getstarted" className="inline-block bg-[#1B5E20] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#2E7D32] hover:-translate-y-0.5 transition-all">Enroll Now</Link>
              </div>
            </section>

            {/* Featured Courses */}
            <section className="max-w-[1200px] mx-auto py-16 px-5">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#1B5E20] mb-4">Featured Courses</h2>
                <p className="text-[#333] text-lg">Choose from our most popular coding programs</p>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                {/* Course Card 1 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:-translate-y-2.5 hover:shadow-lg transition-all w-full max-w-[320px] flex flex-col">
                  <div className="h-48 overflow-hidden bg-gray-100">
                    <img src="/images/course1.jpg" alt="Web Development" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-2">Web Development</h3>
                    <p className="text-[#333] text-sm mb-2">HTML, CSS, JavaScript, React & Node.js</p>
                    <p className="text-[#666] text-xs mb-5">12 Weeks | Beginner to Advanced</p>
                    <Link to="/courses" className="mt-auto bg-[#2E7D32] text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-[#1B5E20] transition-all">View Details</Link>
                  </div>
                </div>

                {/* Course Card 2 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:-translate-y-2.5 hover:shadow-lg transition-all w-full max-w-[320px] flex flex-col">
                  <div className="h-48 overflow-hidden bg-gray-100">
                    <img src="/images/course2.jpg" alt="Python Programming" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-2">Python Programming</h3>
                    <p className="text-[#333] text-sm mb-2">Data structures, OOP, and real-world projects</p>
                    <p className="text-[#666] text-xs mb-5">10 Weeks | Beginner to Intermediate</p>
                    <Link to="/courses" className="mt-auto bg-[#2E7D32] text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-[#1B5E20] transition-all">View Details</Link>
                  </div>
                </div>

                {/* Course Card 3 */}
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:-translate-y-2.5 hover:shadow-lg transition-all w-full max-w-[320px] flex flex-col">
                  <div className="h-48 overflow-hidden bg-gray-100">
                    <img src="/images/course3.jpg" alt="Full Stack Development" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-2">Full Stack Development</h3>
                    <p className="text-[#333] text-sm mb-2">Complete backend and frontend mastery</p>
                    <p className="text-[#666] text-xs mb-5">16 Weeks | Intermediate to Advanced</p>
                    <Link to="/courses" className="mt-auto bg-[#2E7D32] text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-[#1B5E20] transition-all">View Details</Link>
                  </div>
                </div>
              </div>
              <div className="text-center mt-10">
                <Link to="/courses" className="inline-block bg-transparent text-white border-2 border-[#1B5E20] px-7 py-3 rounded-lg font-semibold hover:bg-[#1B5E20] transition-all">Explore Courses</Link>
              </div>
            </section>

            {/* Why Choose Us */}
            <section className="max-w-[1200px] mx-auto py-16 px-5">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#1B5E20]">Why Choose Our Bootcamp?</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="bg-white p-10 rounded-xl text-center w-full max-w-[250px] shadow-md border-t-4 border-[#1B5E20]">
                  <div className="text-5xl mb-4">🎓</div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Expert Instructors</h3>
                  <p className="text-[#333] text-sm">Learn from industry professionals with 10+ years experience</p>
                </div>
                <div className="bg-white p-10 rounded-xl text-center w-full max-w-[250px] shadow-md border-t-4 border-[#1B5E20]">
                  <div className="text-5xl mb-4">💻</div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Hands-On Projects</h3>
                  <p className="text-[#333] text-sm">Build real-world applications from day one</p>
                </div>
                <div className="bg-white p-10 rounded-xl text-center w-full max-w-[250px] shadow-md border-t-4 border-[#1B5E20]">
                  <div className="text-5xl mb-4">🕐</div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">Flexible Schedule</h3>
                  <p className="text-[#333] text-sm">Learn at your own pace, 24/7 access to materials</p>
                </div>
              </div>
            </section>

            {/* Dashboard Preview */}
            <section className="max-w-[1200px] mx-auto py-16 px-5">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#1B5E20]">Your Learning Dashboard</h2>
                <p className="text-[#333] text-lg">Track your progress and continue learning</p>
              </div>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="bg-white rounded-xl p-8 text-center max-w-[280px] shadow-md border border-[#E8DDD0]">
                  <div className="text-4xl font-bold text-[#1B5E20] mb-2">3</div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">Enrolled Courses</h3>
                  <p className="text-[#666] text-sm">Active courses in progress</p>
                </div>
                <div className="bg-white rounded-xl p-8 text-center max-w-[280px] shadow-md border border-[#E8DDD0]">
                  <div className="text-4xl font-bold text-[#1B5E20] mb-2">65%</div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">Overall Progress</h3>
                  <p className="text-[#666] text-sm">Completion rate across all courses</p>
                </div>
                <div className="bg-white rounded-xl p-8 text-center max-w-[280px] shadow-md border border-[#E8DDD0]">
                  <div className="text-4xl font-bold text-[#1B5E20] mb-2">12</div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">Lessons Completed</h3>
                  <p className="text-[#666] text-sm">Modules finished successfully</p>
                </div>
              </div>
              <div className="text-center mt-10">
                <Link to="/dashboard" className="inline-block bg-[#1B5E20] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#2E7D32] transition-all">Go to Dashboard</Link>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] py-20 px-5 text-center">
              <div className="max-w-[700px] mx-auto">
                <h2 className="text-4xl font-bold text-white mb-5">Ready to Start Your Coding Journey?</h2>
                <p className="text-white/90 text-lg mb-10">Join thousands of successful students who've transformed their careers</p>
                <Link to="/getstarted" className="inline-block bg-[#1B5E20] text-white px-7 py-3 rounded-lg font-semibold hover:bg-[#2E7D32] transition-all">Enroll Today</Link>
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