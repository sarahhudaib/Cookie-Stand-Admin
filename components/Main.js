function Main({ handleSubmit, cookies }) {
  return (
    <>
      <div className="flex flex-col items-center content-center justify-center w-full bg-emerald-200">
        <form
          className="flex flex-col items-center justify-center w-4/5 px-10 py-10 my-10 font-bold text-black rounded-md bg-emerald-400"
          onSubmit={handleSubmit}
        >
          <legend className="col-span-4 my-3 text-3xl">
            Create Cookie Stand
          </legend>

          <div className="flex items-center justify-center w-full my-2">
            <label className="mx-2 my-2">Location</label>
            <input
              name="loc"
              className="w-4/5 h-full mx-2 my-2 bg-gray-100 rounded-md"
              type={"text"}
            />
          </div>

          <div className="grid grid-cols-4 grid-rows-2 gap-1">
            <label className="mx-2 mt-2">Minimum Customers per hour</label>
            <label className="mx-2 mt-2">Maximum Customers per hour</label>
            <label className="mx-2 mt-2">Average Cookies per sale</label>

            <button className="w-full h-full row-span-2 bg-emerald-500">
              Create
            </button>

            <input
              name="min"
              className="mx-2 mb-2 h-fit"
              type={"number"}
           
            />
            <input
              name="max"
              className="mx-2 mb-2 h-fit"
              type={"number"}
           
            />
            <input
              name="avg"
              className="mx-2 mb-2 h-fit"
              type={"text"}
            
            />
          </div>
        </form>
{/* 
        <p className="my-4 text-xl text-black bg-emerald-100">
          Report table coming soon ...
        </p> */}

        <p className="my-4 text-xl text-black bg-emerald-100">{cookies} </p>
      </div>
    </>
  );
}

export default Main;
