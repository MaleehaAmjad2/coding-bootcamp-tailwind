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
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] py-16 px-5 text-center">
        <div>
          <h1 className="text-white text-4xl font-bold mb-2">About CodeBootcamp</h1>
          <p className="text-white/90">Empowering students to become professional developers</p>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto py-16 px-5">
        {/* Mission */}
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-[#1B5E20] text-3xl font-bold mb-5">Our Mission</h2>
          <p className="text-[#333] text-lg leading-relaxed">To make quality coding education accessible and affordable for everyone in Pakistan, helping students launch successful tech careers.</p>
        </div>

        {/* Story */}
        <div className="text-center max-w-[800px] mx-auto mb-12 p-8 bg-white rounded-xl shadow-md border border-[#E8DDD0]">
          <h2 className="text-[#1B5E20] text-3xl font-bold mb-5">Our Story</h2>
          <p className="text-[#333] leading-relaxed">CodeBootcamp was founded in 2020 with a simple goal: bridge the gap between academic learning and industry demands. We started with just 10 students in a small classroom, and today we've trained over 500+ successful developers who work at top companies.</p>
        </div>

        {/* Impact Stats */}
        <h2 className="text-center text-[#1B5E20] text-3xl font-bold my-12">Our Impact</h2>
        <div className="flex flex-wrap justify-center gap-5 my-8">
          <div className="bg-white rounded-xl p-6 text-center min-w-[180px] shadow-md border border-[#E8DDD0]"><h3 className="text-4xl font-bold text-[#1B5E20] mb-1">500+</h3><p className="text-[#333]">Students Trained</p></div>
          <div className="bg-white rounded-xl p-6 text-center min-w-[180px] shadow-md border border-[#E8DDD0]"><h3 className="text-4xl font-bold text-[#1B5E20] mb-1">3</h3><p className="text-[#333]">Courses Offered</p></div>
          <div className="bg-white rounded-xl p-6 text-center min-w-[180px] shadow-md border border-[#E8DDD0]"><h3 className="text-4xl font-bold text-[#1B5E20] mb-1">90%</h3><p className="text-[#333]">Job Placement Rate</p></div>
          <div className="bg-white rounded-xl p-6 text-center min-w-[180px] shadow-md border border-[#E8DDD0]"><h3 className="text-4xl font-bold text-[#1B5E20] mb-1">10+</h3><p className="text-[#333]">Years Experience</p></div>
        </div>

        {/* Values */}
        <h2 className="text-center text-[#1B5E20] text-3xl font-bold my-12">Our Values</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white rounded-xl p-6 text-center max-w-[280px] shadow-md"><div className="text-4xl mb-4">🎯</div><h3 className="text-xl font-bold mb-2">Quality Education</h3><p className="text-[#333] text-sm">Industry-relevant curriculum updated regularly</p></div>
          <div className="bg-white rounded-xl p-6 text-center max-w-[280px] shadow-md"><div className="text-4xl mb-4">💻</div><h3 className="text-xl font-bold mb-2">Practical Learning</h3><p className="text-[#333] text-sm">Project-based approach with real-world applications</p></div>
          <div className="bg-white rounded-xl p-6 text-center max-w-[280px] shadow-md"><div className="text-4xl mb-4">🚀</div><h3 className="text-xl font-bold mb-2">Career Support</h3><p className="text-[#333] text-sm">Resume building, interview prep, and job placement</p></div>
          <div className="bg-white rounded-xl p-6 text-center max-w-[280px] shadow-md"><div className="text-4xl mb-4">💰</div><h3 className="text-xl font-bold mb-2">Affordable Pricing</h3><p className="text-[#333] text-sm">Quality education at prices students can afford</p></div>
        </div>

        {/* Email Card */}
        <div className="bg-white rounded-xl p-8 text-center max-w-[450px] mx-auto my-10 border-2 border-[#1B5E20] shadow-md">
          <div className="text-4xl mb-4">📧</div>
          <h3 className="text-[#1B5E20] text-xl font-bold mb-2">Contact Us</h3>
          <p className="text-[#333] mb-4">Have questions? Reach out to us directly!</p>
          <a href="mailto:maleehaa728@gmail.com" className="inline-block text-[#1B5E20] font-semibold px-5 py-2 border border-[#1B5E20] rounded-lg hover:bg-[#1B5E20] hover:text-white transition-all">maleehaa728@gmail.com</a>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl p-8 text-center max-w-[550px] mx-auto my-10 border-2 border-[#1B5E20] shadow-lg">
          <div className="text-5xl mb-4">❓</div>
          <h3 className="text-[#1B5E20] text-2xl font-bold mb-4">Have Questions? Ask Anything!</h3>
          <p className="text-[#333] mb-6">Write your question below and we'll get back to you soon.</p>
          <form onSubmit={handleSubmit}>
            <div className="text-left mb-5">
              <label className="block font-semibold mb-2">Your Name</label>
              <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name" className="w-full p-3 border-2 border-[#D4C5B0] rounded-lg" required />
            </div>
            <div className="text-left mb-5">
              <label className="block font-semibold mb-2">Your Question</label>
              <textarea value={question} onChange={e => setQuestion(e.target.value)} rows={4} placeholder="Type your question here..." className="w-full p-3 border-2 border-[#D4C5B0] rounded-lg" required></textarea>
            </div>
            <button type="submit" className="bg-[#1B5E20] text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-[#2E7D32] transition-all">Send Message →</button>
          </form>
          {success && <div className="mt-5 p-3 bg-green-500 text-white rounded-lg">Message sent successfully!</div>}
        </div>
      </main>
    </div>
  );
}