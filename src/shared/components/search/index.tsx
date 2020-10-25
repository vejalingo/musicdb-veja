import React, { useContext, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchContext from "../../context";
import { Artist, Loader } from "../";

const ArtistSearch = ({ data }: any) => {
  return (
    <div className="artists">
      {data?.map(({ artist: { picture_big, name, id } }: any) => (
        <Link key={id} to={`/artist/${id}`}>
          <Artist title={name} image={picture_big} />
        </Link>
      ))}
    </div>
  );
};

const Search = () => {
  const dispatch = useDispatch();
  const { searchInput } = useContext(SearchContext);

  const fetchData = useCallback(async () => {
    dispatch({ type: "SEARCH_ARTIST", payload: searchInput });
  }, [searchInput]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const {
    search: { listItems, fetching },
  }: any = useSelector((state) => state);

  return (
    <div className="search">
      {fetching ? (
        <Loader />
      ) : listItems?.data ? (
        <>
          {listItems?.data?.length ? (
            <ArtistSearch data={listItems?.data} />
          ) : (
            <div className="search__not-found">Not Found</div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Search;
