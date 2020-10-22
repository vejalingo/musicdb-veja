import React from "react";

const SearchInput = () => <input type="search" />;

const Navigation = () => (
  <nav className="navigation">
    <img
      className="navigation__image"
      src="https://lh3.googleusercontent.com/r55K1eQcji3QMHRKERq6zE1-csoh_MTOHiKyHTuTOblhFi_rIz06_8GN5-DHUGJOpn79"
      alt="Logo"
    />

    <SearchInput />
  </nav>
);

export default Navigation;
