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

  videoUrl?: string;

  episodeUrlList?: EpisodeUrlList;

  sessionTotal?: number;
  episodeUrlListSession2?: EpisodeUrlList;
  episodeUrlListSession3?: EpisodeUrlList;
  episodeUrlListSession4?: EpisodeUrlList;
  episodeUrlListSession5?: EpisodeUrlList;
};

export type EpisodeUrlList = {
  [episodeNumber: string]: string;
};

export type MostWatchData = {
  mostWatchTVShows: string[];
  mostWatchMovies: string[];
};
