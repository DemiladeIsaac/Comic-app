import { useState } from "react";
import { Pagination, Stack } from "@mui/material";
import Search from "../assets/images/search.svg";
import Cosmic from "../assets/images/cosmic.png";
import DragonEmber from "../assets/images/dragon-ember.png";
import Neon from "../assets/images/neon.png";
import Basketball from "../assets/images/basketball.png";
import Eldoria from "../assets/images/eldoria.png";
import CyberEchoes from "../assets/images/cyberechoes.png";
import Raiders from "../assets/images/nebula.png";
import Detective from "../assets/images/detective.png";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const BrowseComics = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const navigate = useNavigate();

  const comicsPerPage = 4;
  const genres = ["All", "Action", "Sci-Fi", "Fantasy", "Comedy", "Mystery"];
  const comics = [
    {
      title: "Cosmic Voyage: The Genesis",
      author: "AstroInk",
      image: Cosmic,
      tag: "Sci-Fi",
      cbzPath: "/comic/The Flash 026 (2025) (Digital) (Pyrate-DCP).cbz",
    },
    {
      title: "The Dragon's Ember",
      author: "MythWeavers",
      image: DragonEmber,
      tag: "Fantasy",
      cbzPath: "/comic/The Flash 026 (2025) (Digital) (Pyrate-DCP).cbz",
    },
    {
      title: "Neon Streets: Vigilante",
      author: "CityWatch Comics",
      image: Neon,
      tag: "Action",
      cbzPath: "/comic/The Flash 026 (2025) (Digital) (Pyrate-DCP).cbz",
    },
    {
      title: "Laughing Gas",
      author: "Chuckle Collective",
      image: Basketball,
      tag: "Comedy",
      cbzPath: "/comic/The Flash 026 (2025) (Digital) (Pyrate-DCP).cbz",
    },
    {
      title: "Whispers of Eldoria",
      author: "Arcane Arts",
      image: Eldoria,
      tag: "Fantasy",
      cbzPath: "/comic/The Flash 026 (2025) (Digital) (Pyrate-DCP).cbz",
    },
    {
      title: "Cybernetic Echoes",
      author: "Quantum Quill",
      image: CyberEchoes,
      tag: "Sci-Fi",
      cbzPath: "/comic/The Flash 026 (2025) (Digital) (Pyrate-DCP).cbz",
    },
    {
      title: "Nebula Raiders",
      author: "Starborn Tales",
      image: Raiders,
      tag: "Action",
      cbzPath: "/comic/The Flash 026 (2025) (Digital) (Pyrate-DCP).cbz",
    },
    {
      title: "The Case of the Emerald Eye",
      author: "Crimson Ink",
      image: Detective,
      tag: "Mystery",
      cbzPath: "/comic/The Flash 026 (2025) (Digital) (Pyrate-DCP).cbz",
    },
  ];
  const filterStyle =
    "text-[12px] border border-input px-[6px] rounded-full cursor-pointer";

  const filteredComics = comics.filter((comic) => {
    const matchesSearch =
      comic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comic.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesGenre = selectedGenre === "All" || comic.tag === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  const indexOfLastComic = currentPage * comicsPerPage;
  const indexOfFirstComic = indexOfLastComic - comicsPerPage;
  const currentComics = filteredComics.slice(
    indexOfFirstComic,
    indexOfLastComic
  );
  const totalPages = Math.ceil(filteredComics.length / comicsPerPage);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  return (
    <div className="font-inter max-w-[1120px] mx-auto mt-12">
      <h1 className="text-4xl text-neutral font-bold flex justify-start">
        Browse Comics
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between mt-12">
        <div className="relative">
          <input
            placeholder="Search comics,authors..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
            className="pl-[34px] pr-3 text-sm font-normal bg-white rounded-md border border-input w-[384px] h-[40px] text-author focus:outline-none"
          />
          <img
            src={Search}
            alt="search"
            className="absolute left-1 bottom-3 w-4 h-4"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-2 md:mt-0">
          {genres.map((genre) => (
            <p
              key={genre}
              className={`${filterStyle} ${
                selectedGenre === genre ? "bg-neutral text-white" : ""
              }`}
              onClick={() => {
                setSelectedGenre(genre);
                setCurrentPage(1); // Reset to first page on genre change
              }}
            >
              {genre}
            </p>
          ))}
        </div>
        <div className="relative">
          <input
            placeholder="Sort By"
            className="border border-input rounded-md text-neutral font-normal pl-3 pr-[34px] w-[120px] h-10"
          />
          <span>
            <svg
              className="absolute bottom-3 right-1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {currentComics.map((comic) => (
          <div
            key={comic.title}
            className="w-full cursor-pointer aspect-3/4"
            onClick={() =>
              navigate(
                `/reader?cbzPath=${encodeURIComponent(
                  comic.cbzPath
                )}&title=${encodeURIComponent(comic.title)}`
              )
            }
          >
            <img
              src={comic.image}
              alt={comic.title}
              className="w-3xs h-96 object-cover"
            />
            <p className="text-neutral text-lg font-semibold text-left">
              {comic.title}
            </p>
            <p className="text-sm font-normal text-author text-left mb-2">
              {comic.author}
            </p>
            <div className="bg-[#E8618CFF] w-[67px] h-[22px] rounded-full flex items-center justify-center">
              <p className="text-white font-semibold text-[12px] px-[6px]">
                {comic.tag}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </div>
      <Footer />
    </div>
  );
};

export default BrowseComics;
