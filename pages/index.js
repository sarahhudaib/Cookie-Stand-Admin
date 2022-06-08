import Head from "next/head";
import { useState } from "react";
// import Footer from './components/Footer';

export default function Home() {
  //   const [count, setCount] = useState(0)
  //   return (
  //     <div className="container">
  //       <Head>
  //         <title>Create Next App</title>
  //         <link rel="icon" href="/favicon.ico" />
  //       </Head>

  //       <main>
  //         <h1 className="title">
  //           Welcome to <a href="https://nextjs.org">Next.js!</a>
  //         </h1>

  //         <p className="description">
  //           Get started by editing <code>pages/index.js</code>
  //         </p>

  //         <div className="grid">
  //           <a href="https://nextjs.org/docs" className="card">
  //             <h3>Documentation &rarr;</h3>
  //             <p>Find in-depth information about Next.js features and API.</p>
  //           </a>

  //           <a href="https://nextjs.org/learn" className="card">
  //             <h3>Learn &rarr;</h3>
  //             <p>Learn about Next.js in an interactive course with quizzes!</p>
  //           </a>

  //           <a href="    " className="card">
  //             <h3>Examples &rarr;</h3>
  //             <p>Discover and deploy boilerplate example Next.js projects.</p>
  //           </a>

  //           <a href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className="card">
  //             <h3>Deploy &rarr;</h3>
  //             <p> Instantly deploy your Next.js site to a public URL with Vercel.</p>
  //           </a>
  //         </div>
  //       </main>

  //       <footer>
  //         <a
  //           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Powered by{' '}
  //           <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
  //         </a>
  //       </footer>

  //       <style jsx>{`
  //         .container {
  //           min-height: 100vh;
  //           padding: 0 0.5rem;
  //           display: flex;
  //           flex-direction: column;
  //           justify-content: center;
  //           align-items: center;
  //         }

  //         main {
  //           padding: 5rem 0;
  //           flex: 1;
  //           display: flex;

  //           flex-direction: column;
  //           justify-content: center;

  //           align-items: center;
  //         }

  //         footer {
  //           width: 100%;
  //           height: 100px;
  //           border-top: 1px solid #eaeaea;
  //           display: flex;
  //           justify-content: center;
  //           align-items: center;
  //         }

  //         footer img {
  //           margin-left: 0.5rem;
  //         }

  //         footer a {
  //           display: flex;
  //           justify-content: center;
  //           align-items: center;
  //         }

  //         a {
  //           color: inherit;
  //           text-decoration: none;
  //         }

  //         .title a {
  //           color: #0070f3;
  //           text-decoration: none;
  //         }

  //         .title a:hover,
  //         .title a:focus,
  //         .title a:active {
  //           text-decoration: underline;

  //         }

  //         .title {
  //           margin: 0;
  //           line-height: 1.15;
  //           font-size: 4rem;
  //         }

  //         .title,
  //         .description {
  //           text-align: center;
  //         }

  //         .description {
  //           line-height: 1.5;
  //           font-size: 1.5rem;
  //         }

  //         code {

  //           background: #fafafa;
  //           border-radius: 5px;
  //           padding: 0.75rem;
  //           font-size: 1.1rem;
  //           font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
  //             DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
  //         }

  //         .grid {
  //           display: flex;
  //           align-items: center;
  //           justify-content: center;
  //           flex-wrap: wrap;

  //           max-width: 800px;
  //           margin-top: 3rem;
  //         }

  //         .card {
  //           margin: 1rem;
  //           flex-basis: 45%;
  //           padding: 1.5rem;
  //           text-align: left;
  //           color: inherit;

  //           text-decoration: none;
  //           border: 1px solid #eaeaea;
  //           border-radius: 10px;
  //           transition: color 0.15s ease, border-color 0.15s ease;
  //         }

  //         .card:hover,
  //         .card:focus,
  //         .card:active {
  //           color: #0070f3;
  //           border-color: #0070f3;
  //         }

  //         .card h3 {
  //           margin: 0 0 1rem 0;
  //           font-size: 1.5rem;
  //         }

  //         .card p {
  //           margin: 0;
  //           font-size: 1.25rem;
  //           line-height: 1.5;
  //         }

  //         .logo {
  //           height: 1em;
  //         }

  //         @media (max-width: 600px) {
  //           .grid {
  //             width: 100%;
  //             flex-direction: column;
  //           }
  //         }
  //       `}</style>

  //       <style jsx global>{`

  //         html, body {
  //           margin: 0;
  //           padding: 0;
  //         }

  //         * {
  //           box-sizing: border-box;
  //         }

  //         body {
  //           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,

  //           Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  //         }

  //         `}</style>
  //     </div>

  //   )
  // }

  const [cookieStand, setCookieStand] = useState("");
  function formHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const cookieStand = JSON.stringify(Object.fromEntries(formData));
    setCookieStand(cookieStand);
  }

  return (
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Cookie Stand Admin" />

      <main className="w-2/3 m-auto">
        <form
          onSubmit={formHandler}
          name="formData"
          className="grid grid-cols-8 gap-1 mt-4 mb-4 rounded-md bg-form-group"
        >
          <legend className="col-span-3 col-start-4 m-2 text-2xl">
            Create Cookie Stand
          </legend>
          {/* legend: used to display   */}
          <label
            className="col-span-1 col-start-1 row-start-2 ml-6"
            for="location"
          >
            Location
          </label>
          <input
            className="col-span-7 col-start-2 row-start-2 mr-4 text-sm"
            name="location"
          ></input>

          <label
            className="col-span-2 col-start-1 row-start-3 text-sm text-center"
            for="min_cust"
          >
            Minimum Customers per Hour
          </label>
          <input
            className="col-span-2 col-start-1 row-start-4 mb-4 ml-2 mr-2 text-sm"
            name="min_Customers"
          ></input>

          <label
            className="col-span-2 col-start-3 row-start-3 text-sm text-center"
            for="max_cust"
          >
            Maximum Customers per Hour
          </label>
          <input
            className="col-span-2 col-start-3 row-start-4 mb-4 ml-2 mr-2 text-sm"
            name="max_Customers"
          ></input>

          <label
            className="col-span-2 col-start-5 row-start-3 text-sm text-center"
            for="avg_per"
          >
            Average Cookies per Sale
          </label>
          <input
            className="col-span-2 col-start-5 row-start-4 mb-4 ml-2 mr-2 text-sm"
            name="avg_Cookies"
          ></input>

          <button className="col-span-2 col-start-7 row-span-2 row-start-3 mt-2 mb-2 ml-2 mr-4 rounded-md bg-button">
            Create
          </button>
        </form>
        <p className="p-3 mt-3 mb-3 text-center">{cookieStand}</p>

      </main>
      <p className="p-3 mt-3 mb-3 text-center">Report Table Coming Soon ...</p>
      
      <footer className="p-4 bg-header-footer h-50">
        <p className="pb-4 text-center-left ">© 2022 Copyright</p>
       
        {/* <p className="pb-4 text-center-left ">Sarah Hudaib</p> */}
      </footer>

      {/* </Footer> */}
    </div>
  );

  function Header(props) {
    return (
      <header className="flex p-6 bg-header-footer">
        <h1 className="text-3xl font-bold ">{props.title}</h1>
      </header>
    );
  }
}
