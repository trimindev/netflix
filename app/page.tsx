import Billboard from "@/components/Billboard";
import GenreFilmCardList from "@/components/GenreFilmCardList";
import Navbar from "@/components/Navbar";
import { FilmInfo, MostWatchData } from "@/lib/filmType";
import { fetchMostWatchData, fetchTVShowInfoList } from "@/lib/filmUtils";

export default async function Home(): Promise<JSX.Element> {
  const TVShowInfoList: FilmInfo[] = await fetchTVShowInfoList();
  const MovieInfoList: FilmInfo[] = await fetchTVShowInfoList();

  const MostWatchData: MostWatchData | null = await fetchMostWatchData();
  if (!MostWatchData) return <p>Error fetching most watched data.</p>;

  const { mostWatchMovies, mostWatchTVShows } = MostWatchData;

  return (
    <main className="max-w-screen-sm min-h-screen mx-auto">
      <div className="pb-80 bg-gradient-to-b from-purple-500 to-[#0f0f0f]">
        <Navbar />
        <div className="px-4">
          <Billboard films={TVShowInfoList} mostWatchData={mostWatchTVShows} />
        </div>
      </div>
      <section className="-mt-72 pb-40 flex flex-col gap-5">
        <GenreFilmCardList
          title={"Phim truyền hình chính kịch Hàn Quốc"}
          films={TVShowInfoList}
          targetTag="han-quoc"
        />
      </section>
    </main>
  );
}
