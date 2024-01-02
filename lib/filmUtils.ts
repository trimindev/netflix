import { promises as fs } from "fs";
import { MostWatchData, FilmInfo, EpisodeUrl } from "./filmType";

export const getMostWatchData = async () => {
  try {
    const mostWatchData: MostWatchData = await readJsonFile(
      "/app/data/MostWatchData.json"
    );
    return mostWatchData;
  } catch (error) {
    console.error("Error fetching most watched data:", error);
    return null;
  }
};

export const getTVShowInfoList = async () => {
  try {
    const TVShowInfoList: FilmInfo[] = await readJsonFile(
      "/app/data/TVShowInfoList.json"
    );
    return TVShowInfoList;
  } catch (error) {
    console.error("Error fetching TV show info list:", error);
    return [];
  }
};

export const getMovieInfoList = async () => {
  try {
    const MovieInfoList: FilmInfo[] = await readJsonFile(
      "/app/data/MovieInfoList.json"
    );
    return MovieInfoList;
  } catch (error) {
    console.error("Error fetching TV show info list:", error);
    return [];
  }
};

export const readJsonFile = async (path: string) => {
  const file = await fs.readFile(process.cwd() + path, "utf8");
  const data = JSON.parse(file);
  return data;
};

export const getRandomItemFromArray = (array: string[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const getRandomFilmFromList = (filmList: FilmInfo[]) => {
  const randomIndex = Math.floor(Math.random() * filmList.length);
  return filmList[randomIndex];
};

export function findFilmById(filmList: FilmInfo[], targetId: string) {
  return filmList.find((film) => film.id === targetId) || null;
}

export function findFilmByTag(
  films: FilmInfo[],
  targetTag: string
): FilmInfo[] {
  return films.filter((film) => film.tags.includes(targetTag));
}

export const extractEpisodeNumbers = (episodeUrls: EpisodeUrl[]): string[] => {
  return episodeUrls.map((episode) => Object.keys(episode)[0]);
};
