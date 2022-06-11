function Form(props) {
  return (
    <div className="grid grid-cols-1 grid-rows-1 justify-items-center">
      <form
        onSubmit={props.formHandle}
        className="grid justify-center w-3/4 grid-cols-1 grid-rows-3 gap-4 p-5 m-2 text-center rounded shadow-lg bg-emerald-400"
      >
        <div className="text-center">
          <label htmlFor="title">Create Cookie Stand</label>
        </div>
        <div className="grid grid-cols-6 grid-rows-1 align-middle">
          <label htmlFor="location" className="grid grid-cols-1 ">
            Location
          </label>
          <input type="text" id="location" className="col-span-5 h-7" />
        </div>
        <div className="grid grid-cols-4 grid-rows-1 gap-2 text-center ">
          <div className="grid grid-cols-1 grid-rows-2">
            <label htmlFor="minCust">Minimum customers per hour</label>
            <input type="number" id="minCust" />
          </div>
          <div className="grid grid-cols-1 grid-rows-2">
            <label htmlFor="maxCust">Maximum customers per hour</label>
            <input type="number" id="maxCust" />
          </div>
          <div className="grid grid-cols-1 grid-rows-2">
            <label htmlFor="avgCookies">Average cookies per sale</label>
            <input type="number" id="avgCookies" />
          </div>
          <button
            type="submit"
            className="self-center h-12 px-4 py-2 rounded shadow bg-emerald-600 w-21 justify-self-center hover:bg-emerald-200 focus:shadow-outline focus:outline-none"
          >
            {" "}
            Create{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
