const Head = () => {
  return (
    <div className="grid grid-flow-col p-4 m-1 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          className="w-10 h-10 cursor-pointer mr-10"
          alt="Hamburger Menu"
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
        />
        <img
          className="w-40 h-10 cursor-pointer"
          alt="YouTube Logo"
          src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
        />
      </div>
      <div className="col-span-10 ml-20 pt-1">
        <input
          className="w-2/3 h-9 rounded-l-full border border-gray-400 outline-none px-2"
          type="input"
          placeholder="Search Top Videos"
          onChange={(e) => e.target.value}
        />
        <button className="w-10 h-9 rounded-r-full border border-gray-400">
          🔍
        </button>
      </div>
      <div className="col-span-1 pt-1">
        <img
          className="w-7 h-7 cursor-pointer text-end"
          alt="User Icon"
          src="https://cdn-icons-png.freepik.com/256/456/456212.png"
        />
      </div>
    </div>
  );
};

export default Head;
