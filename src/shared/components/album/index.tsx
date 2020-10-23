import React from "react";

interface AlbumI {
  title: string;
  image: string;
}

const Album = ({ title, image }: AlbumI) => (
  <div className="album">
    <img className="album__cover" src={image} alt={title} />
    <p className="album__title">{title}</p>
  </div>
);

export default Album;
