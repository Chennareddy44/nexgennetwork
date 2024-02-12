import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Head = () => {
  const [searchRecommendations, setSearchRecommendations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => getSearchRecommendations(searchQuery), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchRecommendations = async (searchQuery) => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    setSearchRecommendations(data[1]);
  };

  const dispatch = useDispatch();
  const toogleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-1 shadow-lg sticky top-0 bg-white">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toogleMenuHandler()}
          className="w-10 h-10 cursor-pointer mr-10"
          alt="Hamburger Menu"
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
        />
        <a href="/">
          <img
            className="w-40 h-10 cursor-pointer"
            alt="YouTube Logo"
            src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
          />
        </a>
      </div>
      <div className="col-span-10 ml-20 pt-1">
        <input
          className="w-2/3 h-9 rounded-l-full border border-gray-400 px-2 outline-blue-500"
          type="input"
          placeholder="Search Top Videos"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button className="w-10 h-9 rounded-r-full border border-gray-400">
          🔍
        </button>
        {searchQuery && showSuggestions && (
          <div className="fixed w-[32rem] py-2 px-2 bg-white shadow-lg rounded-lg border border-gray-100">
            <ul>
              {searchRecommendations.map((s) => (
                <li className="py-2 px-3 shadow-sm hover:bg-gray-100" key={s}>
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
