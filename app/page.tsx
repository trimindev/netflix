import Billboard from "@/components/Billboard";
import ListGenreCard from "@/components/ListGenreCard";
import LolomoRow from "@/components/LolomoRow";
import Navbar from "@/components/Navbar";

export default function Home() {
  const koreanFilmImage = [
    "/11.jpg",
    "/11.jpg",
    "/11.jpg",
    "/11.jpg",
    "/11.jpg",
  ];

  return (
    <main className="max-w-screen-sm min-h-screen mx-auto">
      <div className="pb-80 bg-gradient-to-b from-purple-500 to-[#141414]">
        <Navbar />
        <div className="px-4">
          <Billboard image={"/11.jpg"} />
        </div>
      </div>
      <section className="-mt-72 pb-40 flex flex-col gap-5">
        <LolomoRow title={"Phim truyền hình chính kịch Hàn Quốc"}>
          <ListGenreCard images={koreanFilmImage} />
        </LolomoRow>
      </section>
    </main>
  );
}
