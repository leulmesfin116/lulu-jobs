function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
        <div className="m-4">
          {" "}
          <h1 className="text-6xl md:text-5xl lg:text-8xl xl:text-7xl text-center mt-20 font-bold m-3">
            <div>
              Build your{" "}
              <span className="text-bold text-green-500">Resume</span>
              <br className="hidden lg:block" /> with{" "}
              <span className="underline decoration-green-500 underline-offset-1">
                Lulu
              </span>
            </div>
          </h1>
          <h2 className="text-lg text-center">
            Get hired faster with{" "}
            <span className="font-semibold text-green-500">Lulu</span> with
            better resume and more job
          </h2>
        </div>
        <div>
          <h1 className="text-3xl text-center mt-20 font-bold"></h1> picture
        </div>
        <div className="flex flex-col-2 gap-6">
          <button className="bg-green-100 text-green-500 p-2 rounded-lg hover:bg-green-100 hover:text-green-500 hover:border-2 hover:border-green-400">
            {" "}
            Get started
          </button>
          <button className="bg-green-500 text-white rounded-lg p-2 hover:bg-white hover:text-green-500 hover:border-2 hover:border-green-100">
            create a free resume
          </button>
        </div>
      </div>
    </>
  );
}
export default Home;
