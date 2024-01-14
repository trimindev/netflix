export type FilmInfo = {
  id: string;
  tags: string[];
  name: string;
  genre: string[];
  content: string;
  cast: string;

  poster1Url: string;
  poster2Url?: string;
  poster3Url?: string;

  trailerUrl: string;

  movieUrl?: string;

  sessionList?: SessionList;
};

export type SessionList = {
  [session: string]: EpisodeUrlList;
};

export type EpisodeUrlList = {
  [episodeNumber: string]: string;
};

export type MostWatchData = {
  mostWatchTVShows: string[];
  mostWatchMovies: string[];
};
