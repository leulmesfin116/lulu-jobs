function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
        <div>
          {" "}
          <h1 className="text-3xl text-center mt-20 font-bold">
            <div className="flex flex-col lg:flex-row">
              <span>
                Build your{" "}
                <span className="text-bold text-green-500">Resume </span>
              </span>
              <span>
                  with{" "}
                <span className="underline decoration-green-500 underline-offset-1">
                  Lulu
                </span>
              </span>
            </div>
          </h1>
        </div>
        <div>
          <h1 className="text-3xl text-center mt-20 font-bold"></h1> picture
        </div>
      </div>
    </>
  );
}
export default Home;
