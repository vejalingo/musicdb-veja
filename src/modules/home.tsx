import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TrendingAlbums, TrendingArtists, Search } from "../shared/components";
import types from "../store/types";
import SearchContext from "../shared/context";

const Loading = () => <div>Loading...</div>;

const Charts = () => {
  const dispatch = useDispatch();
  const { searchInput } = useContext(SearchContext);

  useEffect(() => {
    dispatch({ type: types.FETCH_CHARTS });
  }, [dispatch]);

  const {
    list: { listItems, fetching },
  }: any = useSelector((state) => state);

  const { albums, artists } = listItems;

  return (
    <main>
      {searchInput?.length > 0 ? (
        <Search />
      ) : (
        <div className="charts">
          {fetching ? (
            <Loading />
          ) : (
            <>
              <TrendingAlbums data={albums?.data} />
              <TrendingArtists data={artists?.data} />
            </>
          )}
        </div>
      )}
    </main>
  );
};

export default Charts;
