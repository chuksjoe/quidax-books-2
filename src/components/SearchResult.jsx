import { useEffect } from "react";
import { useReactiveVar } from "@apollo/client";

import { toggleScroll } from "../utils/general";
import BookCard from "./BookCard";
import { searchTextVar } from "../caches/general";
import useGetBooks from "../hooks/useGetBooks";

function SearchResult() {
  const searchText = useReactiveVar(searchTextVar);
  const { loading, error, data } = useGetBooks({ searchText });

  useEffect(() => {
    toggleScroll();

    return () => setTimeout(() => {
      toggleScroll();
    }, 0);
  }, [searchText]);

  return (
    <div className={`z-20 ${searchText ? 'overlay' : 'hidden'} pt-32 w-full h-full bg-white fixed top-0 left-0 overflow-auto`}>
      <div className="w-full h-full">
        <div className="content margin-center">
          <div className="border-b border-gray-200 pb-3 text-sm">
            {searchText ? (
              <p className="">
                <span className="font-bold">{`${data?.length || 0} result(s)`}</span>
                &nbsp;found for&nbsp;
                <span className="font-bold">{`\`${searchText}\``}</span>
              </p>
            ) : (
              <h3 className="font-bold">All Search Result...</h3>
            )}
          </div>
          <div className="flex wrap -mx-3 mt-3">
            {loading && <p>Loading...</p>}
            {error && <p>{error.toString()}</p>}
            {data?.map((item) => (
              <div className="book-card-container" key={item?.id}>
                <BookCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult;
