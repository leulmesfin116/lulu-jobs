import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup:", { name, email, password });
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gray-50 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -u-z-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 -u-z-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      {/* Logo Container */}
      <div className="absolute top-4 left-6 md:top-8 md:left-10 z-50">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-black tracking-tighter text-black hover:text-green-500 transition-all duration-300 ease-in-out cursor-pointer no-underline"
        >
          lulu
        </Link>
      </div>

      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-100 animate-fade-up relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">Create Account</h1>
          <p className="text-gray-500 italic">Join <span className="text-green-500 font-bold">Lulu</span> and build your future</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
           <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
              required
            />
          </div>

          <div className="flex items-start items-center gap-2 px-1">
             <input type="checkbox" className="rounded text-green-500 focus:ring-green-500" required />
             <span className="text-xs text-gray-500">I agree to the <span className="text-green-600 font-semibold cursor-pointer">Terms of Service</span> and <span className="text-green-600 font-semibold cursor-pointer">Privacy Policy</span></span>
          </div>

          <button 
            type="submit"
            className="w-full bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-500/30 active:scale-[0.98] mt-2"
          >
            Create Account
          </button>
        </form>

        <div className="relative my-8">
           <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
           <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400 font-medium">Or continue with</span></div>
        </div>

        <button className="w-full bg-white border border-gray-200 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
           <svg className="w-5 h-5" viewBox="0 0 24 24">
             <path fill="#EA4335" d="M12 5.04c1.94 0 3.51.68 4.67 1.77L20.1 3.37C17.91 1.31 15.01 0 12 0 7.31 0 3.25 2.67 1.21 6.6l3.86 3C6.01 7.02 8.79 5.04 12 5.04z"/>
             <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.86 3c2.26-2.09 3.56-5.17 3.56-8.82z"/>
             <path fill="#FBBC05" d="M5.07 14.56c-.22-.66-.34-1.36-.34-2.06 0-.7.12-1.4.34-2.06L1.21 7.44C.44 9.06 0 10.92 0 12.87c0 1.95.44 3.81 1.21 5.43l3.86-3.74z"/>
             <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.47 1.14-4.07 1.14-3.13 0-5.78-2.11-6.73-4.96l-3.86 3C3.25 21.33 7.31 24 12 24z"/>
           </svg>
           Google
        </button>

        <p className="text-center mt-8 text-gray-500 text-sm">
          Already have an account? <Link to="/Auth" className="text-green-600 font-bold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
