import Upload from "../assets/images/upload.svg";

const UploadComic = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white px-4 py-4 shadow-md w-[450px] rounded-[10px] border border-input mt-6">
        <h1 className="text-xl text-neutral font-semibold flex justify-start">
          Upload New Comic
        </h1>
        <form>
          <div className="flex flex-col items-start gap-2 mt-4">
            <label
              htmlFor="comic-title"
              className="text-sm text-neutral font-medium"
            >
              Comic Title
            </label>
            <input
              name="comic-title"
              className="border border-input rounded-md px-3 w-100 h-12 text-author focus:outline-none"
              placeholder="Enter comic title"
            />
          </div>
          <div className="flex flex-col items-start gap-2 mt-4">
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
          </div>
          <div className="flex flex-col items-start gap-2 mt-4">
            <label htmlFor="genre" className="text-sm text-neutral font-medium">
              Genre
            </label>
            <select
              name="genre"
              className="border border-input rounded-md px-3 w-100 h-12 text-author focus:outline-none"
            >
              <option>Action</option>
              <option>Fantasy</option>
              <option>Mystery</option>
              <option>Comedy</option>
              <option>Sci-Fi</option>
            </select>
          </div>
          <div className="flex flex-col items-start gap-2 mt-4">
            <label
              htmlFor="comic-upload"
              className="text-sm text-neutral font-medium"
            >
              Comic Pages (PDF, CBR, CBZ)
            </label>
            <div className="bg-gray-100 border border-input rounded-md w-100 h-[130px] px-3 py-3 flex flex-col items-center gap-3">
              <img src={Upload} alt="image-upload" className="w-8 h-8" />
              <p className="text-author text-sm font-normal">
                Drag and drop your comic file here, or click to browse
              </p>
            </div>
          </div>
          <button className="w-100 h-10 text-white bg-nav rounded-md px-3 text-sm font-medium mt-2">
            Upload Comic
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadComic;
