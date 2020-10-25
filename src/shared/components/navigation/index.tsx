import React, { useContext, useRef } from "react";
import { Input } from "antd";
import SearchContext from "shared/context";

const { Search } = Input;

const Navigation = () => {
  const ref = useRef(null);
  const { searchInput, updateSearchInput } = useContext(SearchContext);

  const onSearch = (e: any) => {
    const { value } = e.target;

    updateSearchInput(value);
  };

  return (
    <nav className="navigation">
      <img
        className="navigation__image"
        src="https://lh3.googleusercontent.com/r55K1eQcji3QMHRKERq6zE1-csoh_MTOHiKyHTuTOblhFi_rIz06_8GN5-DHUGJOpn79"
        alt="Logo"
      />

      <Search
        ref={ref}
        value={searchInput}
        placeholder="search artist"
        onChange={onSearch}
        style={{ width: 600 }}
      />
    </nav>
  );
};

export default Navigation;
