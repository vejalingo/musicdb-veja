import React from "react";

interface ArtistI {
  title: string;
  image: string;
}

const TrendingArtists = ({ title, image }: ArtistI) => (
  <div className="artist">
    <img className="artist__cover" src={image} alt={title} />
    <p className="artist__title">{title}</p>
  </div>
);

export default TrendingArtists;
