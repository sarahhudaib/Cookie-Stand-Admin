function Form(props) {
    return (
      <>
      <div className="flex flex-col items-center content-center justify-center w-full bg-emerald-100">
        <form className="flex flex-col items-center justify-center w-4/5 px-10 py-10 my-10 font-bold text-black rounded-md bg-emerald-400"
        onSubmit={props.handleSubmit}>
            <legend className="col-span-4 my-3 text-3xl">
              Create Cookie Stand</legend>
  
              <div className="flex items-center justify-center w-full my-2 mb-6 bg-emerald-300">
                <label className="mx-2 my-2">Location</label>
                <input name="loc" className="w-4/5 h-full mx-2 my-2 bg-gray-200 rounded-md shadow-md" 
                type={"text"} />
              </div>
  
              <div className="grid grid-cols-4 grid-rows-2 gap-1">
                <label className="mx-2 mt-2 bg-emerald-300">Minimum Customers per hour</label>
                <label className="mx-2 mt-2 bg-emerald-300">Maximum Customers per hour</label>
                <label className="mx-2 mt-2 bg-emerald-300">Average Cookies per sale</label>
                
                <button className="w-full h-full row-span-2 bg-emerald-700"
                type="submit">Create</button>  
  
                <input name="min" value="0" className="mx-2 mb-2 h-fit" type={"number"} />
                <input name="max" value="100" className="mx-2 mb-2 h-fit" type={"number"} />
                <input name="avg" value="50" className="mx-2 mb-2 h-fit" type={"text"} />
              </div>
        </form>
  
      </div>
      </>
    )
  }
export default Form
  
  