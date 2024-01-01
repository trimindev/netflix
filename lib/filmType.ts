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

  episodeUrls?: EpisodeUrl[];

  sessionEpisodeUrls?: {
    [sessionNumber: string]: EpisodeUrl[];
  };

  videoUrl?: string;
};

type EpisodeUrl = {
  [episodeNumber: string]: string;
};

export type MostWatchData = {
  mostWatchTVShows: string[];
  mostWatchMovies: string[];
};
