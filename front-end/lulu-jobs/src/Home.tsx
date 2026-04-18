function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
        <div className="m-4">
          {" "}
          <h1 className="text-4xl md:text-5xl text-center mt-20 font-bold m-3">
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
      </div>
    </>
  );
}
export default Home;
