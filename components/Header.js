function Header() {
  return (
    <header className="flex flex-row flex-wrap justify-between w-full px-2 py-2 bg-emerald-700">
      <div className="px-5 py-3 text-2xl font-bold text-black">
        Cookie Stand Admin
      </div>
      <div className="flex flex-row justify-end px-16 m-2">
        <button className="p-3 mx-2 font-bold rounded bg-emerald-200">
          rudy
        </button>
        <button className="p-3 mx-2 font-bold rounded bg-emerald-200">
          sign out
        </button>
        <button className="p-3 mx-2 font-bold rounded bg-emerald-200">
          overview
        </button>
      </div>
    </header>
  );
}

export default Header;
