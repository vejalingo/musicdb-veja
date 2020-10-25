import React from "react";

interface AlbumI {
  title: string;
  image: string;
  year?: string;
}

const Album = ({ title, image, year }: AlbumI) => (
  <div className="album">
    <img className="album__cover" src={image} alt={title} />
    <p className="album__title">{title}</p>
    {year && <p className="album__title">{year}</p>}
  </div>
);

export default Album;
