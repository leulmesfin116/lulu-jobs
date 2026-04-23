import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // only navigate if successful
        if (data.status === "success") {
          localStorage.setItem("userName", data.data.user.name);
          navigate("/Dashboard");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };
  // fetching the signup

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-[#050505] px-6 overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      {/* Logo Container */}
      <div className="absolute top-4 left-6 md:top-8 md:left-10 z-50">
        <Link
          to="/"
          className="text-2xl md:text-3xl font-black tracking-tighter text-black dark:text-white hover:text-green-500 transition-all duration-300 ease-in-out cursor-pointer no-underline"
        >
          lulu
        </Link>
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-4 right-6 md:top-8 md:right-10 z-50">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md bg-white dark:bg-[#0a0a0a] p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 animate-fade-up relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2 dark:text-white">
            Create Account
          </h1>
          <p className="text-gray-500 italic dark:text-gray-400">
            Join <span className="text-green-500 font-bold">Lulu</span> and
            build your future
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 ml-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition-all"
              required
            />
          </div>


          <button
            type="submit"
            className="w-full bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-500/30 active:scale-[0.98] mt-2"
          >
            Create Account
          </button>
        </form>


        <p className="text-center mt-8 text-gray-500 dark:text-gray-400 text-sm">
          Already have an account?{" "}
          <Link
            to="/Auth"
            className="text-green-600 dark:text-green-400 font-bold hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
