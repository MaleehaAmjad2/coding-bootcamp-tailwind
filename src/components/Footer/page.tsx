import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12 px-5 border-t-2 border-[#D4C5B0]">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-around gap-10 mb-10 max-md:flex-col max-md:text-center">
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-white text-lg mb-4">CodeBootcamp</h4>
          <p className="text-white/80 text-sm">Your gateway to a successful coding career</p>
        </div>
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-white text-lg mb-4">Quick Links</h4>
          <ul className="list-none">
            <li><Link to="/courses" className="text-white/70 block mb-2 hover:text-white hover:ml-1 transition-all">Courses</Link></li>
            <li><Link to="/about" className="text-white/70 block mb-2 hover:text-white hover:ml-1 transition-all">About Us</Link></li>
            <li><Link to="/dashboard" className="text-white/70 block mb-2 hover:text-white hover:ml-1 transition-all">Dashboard</Link></li>
          </ul>
        </div>
        <div className="flex-1 min-w-[250px]">
          <h4 className="text-white text-lg mb-4">Follow Us</h4>
          <ul className="list-none">
            <li><a href="#" className="text-white/70 block mb-2 hover:text-white hover:ml-1 transition-all">Facebook</a></li>
            <li><a href="#" className="text-white/70 block mb-2 hover:text-white hover:ml-1 transition-all">Twitter</a></li>
            <li><a href="#" className="text-white/70 block mb-2 hover:text-white hover:ml-1 transition-all">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center border-t border-white/20 pt-5">
        <p className="text-white/50 text-sm">&copy; 2026 CodeBootcamp. All rights reserved.</p>
      </div>
    </footer>
  );
}