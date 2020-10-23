import React from "react";
import { Link } from "react-router-dom";
import { Artist } from "../";

interface TrendingArtistsI {
  data: [TrendingArtistI];
}

interface TrendingArtistI {
  picture_big: string;
  name: string;
  id: string;
}

const TrendingArtists = ({ data }: TrendingArtistsI) => {
  return (
    <>
      <h2>Trending Artists</h2>
      <div className="artists">
        {data?.map(({ picture_big, name, id }: TrendingArtistI) => (
          <Link key={id} to={`/album/${id}`}>
            <Artist title={name} image={picture_big} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default TrendingArtists;
