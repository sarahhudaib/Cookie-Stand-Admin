import Head from "next/head";
import Header from "./Header";
import Table from "./Table";
import Form from "./Form";
import Footer from "./Footer";
import { useState } from "react";

function CookieStandAdmin() {
  const [counter, setCounter] = useState(0);
  const [rows, setRows] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCounter(counter + 1);

    let newRow = {
      location: e.target.loc.value,
    };

    setRows([...rows, newRow]);
  };

  return (
    <div className="flex flex-col items-center content-center justify-center w-full bg-emerald-100">
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>

      <Header />
      <Form handleSubmit={handleSubmit} />
      {rows.length == 0 ? (
        <h2 className="py-10 text-2xl font-bold text-black">
          No Cookies Stands Available
        </h2>
      ) : (
        <Table rows={rows} />
      )}
      <Footer counter={counter} />
    </div>
  );
}

export default CookieStandAdmin;
