const endpoint = "https://cors-anywhere.herokuapp.com/https://api.deezer.com";

export const _fetchCharts = async () => {
  return await fetch(`${endpoint}/chart?index=0&limit=10`);
};
