import React from "react";
import { Link } from "react-router-dom";
import { Album } from "../";

interface TrendingAlbumsI {
  data: [TrendingAlbumI];
  heading?: string;
}

interface TrendingAlbumI {
  cover_big: string;
  title: string;
  id: string;
  release_date?: string;
}

const TrendingAlbums = ({
  data,
  heading = "Trending Albums",
}: TrendingAlbumsI) => {
  return (
    <>
      <h2>{heading}</h2>
      <div className="albums">
        {data?.map(({ cover_big, title, id, release_date }: TrendingAlbumI) => (
          <Link key={id} to={`/album/${id}`}>
            <Album title={title} image={cover_big} year={release_date} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default TrendingAlbums;
