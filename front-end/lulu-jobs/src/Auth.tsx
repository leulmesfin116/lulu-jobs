import { Link } from "react-router-dom";

function Auth() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gray-50 px-6">
      {/* Logo Container */}
      <div className="absolute top-4 left-6 md:top-8 md:left-10 z-50">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-black tracking-tighter text-black hover:text-green-500 transition-all duration-300 ease-in-out cursor-pointer no-underline"
        >
          lulu
        </Link>
      </div>

      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-100 animate-fade-up">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">Welcome Back</h1>
          <p className="text-gray-500 italic">Login to your <span className="text-green-500 font-bold">Lulu</span> account</p>
        </div>
        
        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-500/30 active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-8 text-gray-500 text-sm">
          Don't have an account? <Link to="/Signup" className="text-green-600 font-bold hover:underline">Start for free</Link>
        </p>
      </div>
    </div>
  );
}
export default Auth;
