import { promises as fs } from "fs";
import { MostWatchData, FilmInfo, EpisodeUrlList } from "./filmType";

const FILM_DATA_HOST = "https://film-data.vercel.app";

const constructFilmDataUrl = (path: string) => `${FILM_DATA_HOST}/${path}`;

const MOST_WATCH_DATA_URL = constructFilmDataUrl("MostWatchData.json");
const TV_SHOW_INFO_LIST_URL = constructFilmDataUrl("TVShowInfoList.json");
const MOVIE_INFO_LIST_URL = constructFilmDataUrl("MovieInfoList.json");
const GENRE_LIST_URL = constructFilmDataUrl("GenreList.json");

export const fetchMostWatchData = async () => {
  try {
    const mostWatchData: MostWatchData = await fetchDataFromUrl(
      MOST_WATCH_DATA_URL
    );
    return mostWatchData;
  } catch (error) {
    console.error(
      `Error fetching most watched data from ${MOST_WATCH_DATA_URL}:`,
      error
    );
    return null;
  }
};

export const fetchTVShowInfoList = async () => {
  try {
    const TVShowInfoList: FilmInfo[] = await fetchDataFromUrl(
      TV_SHOW_INFO_LIST_URL
    );
    return TVShowInfoList;
  } catch (error) {
    console.error(
      `Error fetching TV show info list from ${TV_SHOW_INFO_LIST_URL}:`,
      error
    );
    return [];
  }
};

export const fetchMovieInfoList = async () => {
  try {
    const MovieInfoList: FilmInfo[] = await fetchDataFromUrl(
      MOVIE_INFO_LIST_URL
    );
    return MovieInfoList;
  } catch (error) {
    console.error(
      `Error fetching Movie info list from ${MOVIE_INFO_LIST_URL}:`,
      error
    );
    return [];
  }
};

export const fetchGenreList = async () => {
  try {
    const genreList = await fetchDataFromUrl(GENRE_LIST_URL);
    return genreList;
  } catch (error) {
    console.error(`Error fetching Genre list from ${GENRE_LIST_URL}:`, error);
    return [];
  }
};

export const fetchDataFromUrl = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch data from ${url}:`, error);
    throw error;
  }
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
  return films.filter((film) => film.tags?.includes(targetTag));
}
