type Comic = {
  title: string;
  author: string;
  image: string;
};

type ComicsProps = {
  comics: Comic[];
  pageTitle: string;
};

const PopularComics = ({ pageTitle, comics }: ComicsProps) => {
  return (
    <div className="mt-40">
      <h1 className="text-4xl font-bold text-neutral">{pageTitle}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {comics.map((comic) => (
          <div
            className="relative w-full aspect-[3/4] overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105 shadow-md"
            key={comic.title}
          >
            <img
              src={comic.image}
              alt={comic.title}
              className="rounded-t-[10px] w-[262px] h-[288px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-white to-white/0 rounded-t-[10px]">
              <div className="absolute bottom-7 left-0 flex flex-col p-3 z-10">
                <p className="text-lg text-left text-neutral font-semibold">
                  {comic.title}
                </p>
                <p className="text-sm text-author text-left">{comic.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularComics;
