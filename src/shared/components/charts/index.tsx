import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TrendingAlbums, TrendingArtists } from "../../components";
import types from "../../../store/types";

const Loading = () => <div>Loading...</div>;

const Charts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.FETCH_CHARTS });
  }, [dispatch]);

  const {
    list: { listItems, fetching },
  }: any = useSelector((state) => state);

  const { albums, artists } = listItems;

  return (
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
  );
};

export default Charts;
