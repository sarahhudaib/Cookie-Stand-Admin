import hours from "../data";

function Table(props) {
    return(
        <>
        <table className="w-1/2 mx-auto my-4 border-2 border-black" >
            <thead className="border-2 border-black">
                <th className="px-4 py-2 border-2 border-black bg-emerald-600">Location</th>
                {
                    ["6am","7am","8am","9am","10am","11am","12am","1pm", 
                    "2pm","3pm","4pm","5pm","6pm","7pm"].map(cell => {
                        return (<th className="px-4 py-2 border-2 border-black bg-emerald-600">{cell}</th>);
                    })
                }
                <th className="px-4 py-2 border-2 border-black bg-emerald-600">Total</th>
            </thead>
            
            <tbody>
              {
              props.rows.map(row => {
                  return (
                    <tr>
                        <td className="py-2 border-2 border-black bg-emerald-300">
                            {row.location}</td>

                        {hours.map((cell=>{
                            return (<td className="py-2 border-2 border-black bg-emerald-300">
                                {cell}</td>);}))
                        }

                        <td className="py-2 border-2 border-black bg-emerald-300">
                            {hours.reduce((total, curr) => total += curr, 0)}
                        </td>

                    </tr>
                  );
              })
            }
            
            </tbody>

            <tfoot className="font-bold">
                <td className="border-2 border-black bg-emerald-600">Totals</td>

                {hours.map((cell=>{
                    return (<td className="border-2 border-black bg-emerald-600">
                        {cell * props.rows.length}</td>);}))
                }

                <td className="border-2 border-black bg-emerald-600">
                    {
                        hours.reduce((total, curr) => total += curr, 0) * props.rows.length
                    }
                </td>

            </tfoot>
            
        </table>
                
        </>
    )
}

export default Table