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

const BrowseComics = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const comicsPerPage = 4;
  const comics = [
    {
      title: "Cosmic Voyage: The Genesis",
      author: "AstroInk",
      image: Cosmic,
      tag: "Sci-Fi",
    },
    {
      title: "The Dragon's Ember",
      author: "MythWeavers",
      image: DragonEmber,
      tag: "Fantasy",
    },
    {
      title: "Neon Streets: Vigilante",
      author: "CityWatch Comics",
      image: Neon,
      tag: "Action",
    },
    {
      title: "Laughing Gas",
      author: "Chuckle Collective",
      image: Basketball,
      tag: "Comedy",
    },
    {
      title: "Whispers of Eldoria",
      author: "Arcane Arts",
      image: Eldoria,
      tag: "Fantasy",
    },
    {
      title: "Cybernetic Echoes",
      author: "Quantum Quill",
      image: CyberEchoes,
      tag: "Sci-Fi",
    },
    {
      title: "Nebula Raiders",
      author: "Starborn Tales",
      image: Raiders,
      tag: "Action",
    },
    {
      title: "The Case of the Emerald Eye",
      author: "Crimson Ink",
      image: Detective,
      tag: "Mystery",
    },
  ];
  const filterStyle =
    "text-[12px] border border-input px-[6px] rounded-full cursor-pointer";

  const indexOfLastComic = currentPage * comicsPerPage;
  const indexOfFirstComic = indexOfLastComic - comicsPerPage;
  const currentComics = comics.slice(indexOfFirstComic, indexOfLastComic);
  const totalPages = Math.ceil(comics.length / comicsPerPage);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };
  return (
    <div className="font-inter max-w-[1120px] mx-auto mt-12">
      <h1 className="text-4xl text-neutral font-bold flex justify-start">
        Browse Comics
      </h1>
      <div className="flex items-center justify-between mt-12">
        <div className="relative">
          <input
            placeholder="Search comics,authors..."
            className="pl-[34px] pr-3 text-sm font-normal bg-white rounded-md border border-input w-[384px] h-[40px] text-author focus:outline-none"
          />
          <img
            src={Search}
            alt="search"
            className="absolute left-1 bottom-3 w-4 h-4"
          />
        </div>
        <div className="flex items-center gap-3">
          <p className={filterStyle}>All</p>
          <p className={filterStyle}>Action</p>
          <p className={filterStyle}>Sci-Fi</p>
          <p className={filterStyle}>Fantasy</p>
          <p className={filterStyle}>Comedy</p>
          <p className={filterStyle}>Mystery</p>
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
      <div className="grid grid-cols-4 gap-6 mt-12">
        {currentComics.map((comic) => (
          <div key={comic.title} className="w-full aspect-[3/4]">
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
