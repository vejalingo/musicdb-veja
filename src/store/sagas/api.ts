const apiUrl = "https://cors-anywhere.herokuapp.com/https://api.deezer.com";

export const _fetchCharts = async () => {
  return await fetch(`${apiUrl}/chart?index=0&limit=10`);
};

export const _performSearch = async (term: string) => {
  return await fetch(`${apiUrl}/search?q=${term}`);
};
