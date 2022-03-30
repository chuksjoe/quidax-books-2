import { useReactiveVar } from "@apollo/client";

import { searchTextVar } from "../caches/general";

import Search from '../assets/svgs/search.svg';
import Close from '../assets/svgs/close.svg';

function SearchInput({ className }) {
  const searchText = useReactiveVar(searchTextVar);

  return (
    <div className="search-input">
      <div className="w-full relative">
        <input
          value={searchText}
          placeholder="Search books, genres, authors, etc."
          onChange={(e) => searchTextVar(e?.target?.value?.trimStart())}
          className="w-full no-outline"
        />
        {searchText ? (
          <button
            onClick={() => searchTextVar('')}
            className="absolute btn"
          >
            <img src={Close} alt="Close" width="16" height="" />
          </button>
        ) : (
          <div
            className="absolute btn"
          >
            <img src={Search} alt="Search" width="16" height="" />
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchInput;
