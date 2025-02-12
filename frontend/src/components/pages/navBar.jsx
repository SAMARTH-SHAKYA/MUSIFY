import React, { useState } from "react";
import { Search, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white shadow-md">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <a href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Music size={24} /> Musify
        </a>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-1 pl-10 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2 text-gray-400" size={16} />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex gap-3">
        <Button className="bg-blue-600 hover:bg-blue-700" onClick={()=>{navigate("/login")}}>Login</Button>
        <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;