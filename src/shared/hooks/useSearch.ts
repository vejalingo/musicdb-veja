import { useState, useCallback } from "react";

export const useSearch = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const updateSearchInput = useCallback((text) => {
    setSearchInput(text);
  }, []);

  return { searchInput, updateSearchInput };
};
