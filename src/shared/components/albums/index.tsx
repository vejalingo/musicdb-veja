import React from "react";
import { Link } from "react-router-dom";
import { Album } from "../";

interface TrendingAlbumsI {
  data: [TrendingAlbumI];
}

interface TrendingAlbumI {
  cover_big: string;
  title: string;
  id: string;
}

const TrendingAlbums = ({ data }: TrendingAlbumsI) => {
  return (
    <>
      <h2>Trending Albums</h2>
      <div className="albums">
        {data?.map(({ cover_big, title, id }: TrendingAlbumI) => (
          <Link key={id} to={`/album/${id}`}>
            <Album title={title} image={cover_big} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default TrendingAlbums;
