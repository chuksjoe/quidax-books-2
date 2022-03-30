import { useEffect, useState } from "react";
import { useReactiveVar } from "@apollo/client";

import { searchTextVar } from "../caches/general";

import Search from '../assets/svgs/search.svg';
import Close from '../assets/svgs/close.svg';
import Arrow from '../assets/svgs/arrow-back.svg';
import { useLocation } from "react-router-dom";

function SearchInputSmall({ className }) {
  const location = useLocation();
  const searchText = useReactiveVar(searchTextVar);
  const [showTextbox, setShowTextbox] = useState(false);

  const handleClose = () => {
    setShowTextbox(false);
    searchTextVar('');
  };

  useEffect(() => {
    setShowTextbox(false);
  }, [location]);

  return (
    <>
      <button
        className="search-input-sm"
        onClick={() => setShowTextbox(true)}
      >
        <img src={Search} alt="Search" width="24" />
      </button>

      <div
        role="presentation"
        onClick={(e) => (e?.target?.classList?.contains('search-overlay') && setShowTextbox(false))}
        className={`search-overlay ${showTextbox ? 'show' : ''} w-full ${searchText ? '' : 'h-full'}`}
      >
        <div className="inner-content w-full flex items-center">
          <button
            style={{ marginRight: '1.25rem' }}
            onClick={handleClose}
          >
            <img src={Arrow} alt="Back Arrow" width="24" />
          </button>

          <div className="w-full relative">
            <input
              value={searchText}
              placeholder="Books, genres, authors, etc."
              onChange={(e) => searchTextVar(e?.target?.value?.trimStart())}
              className="w-full no-outline"
            />
            {searchText ? (
              <button
                onClick={() => searchTextVar('')}
                className="absolute btn"
              >
                <img src={Close} alt="Close" width="16" />
              </button>
            ) : (
              <div
                className="absolute btn"
              >
                <img src={Search} alt="Search" width="16" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchInputSmall;
