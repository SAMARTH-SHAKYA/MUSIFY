import React from "react";

const Login = () => {
  return (
    <div className="flex h-screen">
      {/* Left side with image and text */}
      <div className="w-1/2 bg-cover bg-center flex items-center justify-center" 
           style={{ backgroundImage: "url('https://source.unsplash.com/featured/?music,concert')" }}>
        <div className="text-white text-center px-8">
          <h1 className="text-5xl font-bold">Melodic Vibes</h1>
          <p className="mt-4 text-lg">Experience the rhythm of life through music.</p>
        </div>
      </div>
      
      {/* Right side with login form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100 p-10">
        <h2 className="text-4xl font-bold text-blue-600">Welcome</h2>
        <p className="mt-2 text-gray-600">Login with your email</p>
        
        <div className="mt-6 w-full max-w-sm">
          <label className="block text-gray-700">Email ID</label>
          <input type="email" className="w-full px-4 py-2 border rounded-lg mt-1" placeholder="Enter your email" />
          
          <label className="block text-gray-700 mt-4">Password</label>
          <input type="password" className="w-full px-4 py-2 border rounded-lg mt-1" placeholder="Enter your password" />
          
          <button className="w-full bg-blue-600 text-white py-2 mt-4 rounded-lg hover:bg-blue-700">LOGIN</button>
          
          <p className="mt-4 text-center text-gray-600">
            Don't have an account? <a href="#" className="text-blue-500">Register Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;