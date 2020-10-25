const apiUrl = "https://cors-anywhere.herokuapp.com/https://api.deezer.com";

export const _fetchCharts = async () => {
  return await fetch(`${apiUrl}/chart?index=0&limit=10`);
};

export const _performSearch = async (term: string) => {
  return await fetch(`${apiUrl}/search?q=${term}`);
};

export const _fetchArtist = async (artistId: string) => {
  return await fetch(`${apiUrl}/artist/${artistId}`);
};

export const _fetchTop5Tracks = async (artistId: string) => {
  return await fetch(`${apiUrl}/artist/${artistId}/top`);
};

export const _fetchArtistAlbums = async (artistId: string) => {
  return await fetch(`${apiUrl}/artist/${artistId}/albums`);
};
