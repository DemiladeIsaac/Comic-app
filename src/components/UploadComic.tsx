import { useState } from "react";
import Upload from "../assets/images/upload.svg";
import { useComicContext } from "../context/comicContext";
import { saveComic } from "../utils/db";

type UploadComicProps = {
  onUploaded?: () => void;
};

const UploadComic = ({ onUploaded }: UploadComicProps) => {
  const { addComic } = useComicContext();
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("Action");
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [comicFile, setComicFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validate files
    if (!coverFile || !comicFile) {
      alert("Please upload both a cover image and a .cbz comic file.");
      return;
    }

    if (!["image/jpeg", "image/png"].includes(coverFile.type)) {
      alert("Cover image must be a JPG or PNG file.");
      return;
    }

    if (!comicFile.name.endsWith(".cbz")) {
      alert("Only .cbz files are allowed for the comic.");
      return;
    }

    try {
      // 🪶 Construct file paths
      // const imagePath = `/assets/images/${coverFile.name}`;
      // const cbzPath = `/comic/${comicFile.name}`;
      const coverUrl = URL.createObjectURL(coverFile);
      const comicUrl = URL.createObjectURL(comicFile);

      const newId = await saveComic({
        title,
        cover: coverFile,
        comicFile: comicFile,
        tag: genre,
      });

      // Create new comic object
      const newComic = {
        id: newId,
        title,
        image: coverUrl,
        cbzPath: comicUrl,
        tag: genre,
      };

      addComic(newComic);

      alert("Comic uploaded successfully!");
      onUploaded?.();
      setTitle("");
      setGenre("Action");
      setCoverFile(null);
      setComicFile(null);
      setLoading(false);
    } catch (error) {
      alert("Error uploading comic.");
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white px-4 py-4 shadow-md w-full md:w-[450px] rounded-[10px] border border-input mt-6">
        <h1 className="text-xl text-neutral font-semibold flex justify-start">
          Upload New Comic
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-start gap-2 mt-4">
            <label
              htmlFor="comic-title"
              className="text-sm text-neutral font-medium"
            >
              Comic Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              name="comic-title"
              className="border border-input rounded-md px-3 w-full md:w-100 h-12 text-author focus:outline-none"
              placeholder="Enter comic title"
            />
          </div>
          <div className="flex flex-col items-start gap-2 mt-4">
            <label
              htmlFor="cover-upload"
              className="text-sm text-neutral font-medium"
            >
              Comic Cover (JPG,PNG)
            </label>
            <label
              htmlFor="cover-upload"
              className="bg-gray-100 cursor-pointer border border-input rounded-md w-full md:w-100 h-[130px] px-3 py-3 flex flex-col items-center gap-3"
            >
              <img src={Upload} alt="image-upload" className="w-8 h-8" />
              <p className="text-author text-sm font-normal">
                Drag and drop your comic file cover here, or click to browse
              </p>
              <input
                id="cover-upload"
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={(e) => setCoverFile(e.target.files?.[0] || null)}
                className="hidden"
              />
            </label>
            {coverFile && (
              <p className="text-xs text-gray-600 mt-2">
                Selected file:{" "}
                <span className="font-medium">{coverFile.name}</span>
              </p>
            )}
          </div>
          {/* <div className="flex flex-col items-start gap-2 mt-4">
            <label
              htmlFor="comic-description"
              className="text-sm text-neutral font-medium"
            >
              Description
            </label>
            <textarea
              name="comic-description"
              rows={4}
              cols={40}
              className="border border-input rounded-md px-3 text-author focus:outline-none"
              placeholder="Provide a brief description of your comic"
            />
          </div> */}
          <div className="flex flex-col items-start gap-2 mt-4">
            <label htmlFor="genre" className="text-sm text-neutral font-medium">
              Genre
            </label>
            <select
              name="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="border border-input rounded-md px-3 w-full md:w-100 h-12 text-author focus:outline-none"
            >
              <option value="Action">Action</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Mystery">Mystery</option>
              <option value="Comedy">Comedy</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>
          <div className="flex flex-col items-start gap-2 mt-4">
            <label
              htmlFor="comic-upload"
              className="text-sm text-neutral font-medium"
            >
              Comic Pages (CBZ)
            </label>
            <label
              htmlFor="comic-upload"
              className="bg-gray-100 cursor-pointer border border-input rounded-md w-full md:w-100 h-[130px] px-3 py-3 flex flex-col items-center gap-3"
            >
              <img src={Upload} alt="image-upload" className="w-8 h-8" />
              <p className="text-author text-sm font-normal">
                Drag and drop your comic file here, or click to browse
              </p>
              <input
                id="comic-upload"
                type="file"
                accept=".cbz"
                onChange={(e) => setComicFile(e.target.files?.[0] || null)}
                className="hidden"
              />
            </label>
            {comicFile && (
              <p className="text-xs text-gray-600 mt-2">
                Selected file:{" "}
                <span className="font-medium">{comicFile.name}</span>
              </p>
            )}
          </div>
          <button className="w-full md:w-100 h-10 text-white bg-nav rounded-md px-3 text-sm font-medium mt-2">
            {loading ? "Uploading..." : "Upload Comic"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadComic;
