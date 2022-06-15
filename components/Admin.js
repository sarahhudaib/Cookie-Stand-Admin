import Head from "next/head";
import Header from "./Header";
import Table from "./Table";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";

function CookieStandAdmin() {
  const [counter, setCounter] = useState(0);
  const [rows, setRows] = useState([]);
  const [totals, setTotals] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  // const [form, setForm] = useState({
  //   name: "",
  //   price: "",
  const handleSubmit = (e) => {
    console.log(totals);
    e.preventDefault();
    setCounter(counter + 1);

    var randomArray = (length, max, min) => { return Array(length).fill().map(() => 
      Math.round(Math.random() * (max - min) + min))}
    // var randomArray = randomArray(totals.length, 100, 0);

    var values = randomArray(14, e.target.max.value, e.target.min.value)
    // console.log(values);
    // var newRow = {  
    //   id: counter,
    //   name: e.target.name.value,
    //   price: e.target.price.value,
    //   quantity: e.target.quantity.value,
    //   total: values[0],
    //   tax: values[1],
    //   tip: values[2],
    //   total_with_tax: values[3],
    //   total_with_tip: values[4],
    //   total_with_tax_and_tip: values[5],
      
    let newRow = {
        location: e.target.loc.value,
        min: e.target.min.value,
        max: e.target.max.value,
        avg: e.target.avg.value,
        values: values
    };

    let newTotals = []
    for (let i = 0; i < values.length; i++) {
        newTotals.push(values[i] + totals[i])
    }
    
    console.log(newTotals);

    setRows([...rows, newRow]);
    setTotals(newTotals);
  }
    
  // return (
  //   <div>
  //     <Head>
  //       <title>Cookie Stand Admin</title>
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>
  //     <Header />
  //     <Table rows={rows} totals={totals} />
  //     <Form handleSubmit={handleSubmit} />
  //     <Footer />
  //   </div>
  // );

  return(
    <div className="flex flex-col items-center content-center justify-center w-full bg-emerald-100">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />
      <Form handleSubmit={handleSubmit}/>
      {
        rows.length == 0 ? 
        (<h2 className="py-10 text-2xl font-bold text-black">No Cookie Stands Available</h2>) : 
        (<Table rows={rows} totals={totals}/>) 
      }
      <Footer counter={counter}/>
    </div>
  )
}
export default CookieStandAdmin;
