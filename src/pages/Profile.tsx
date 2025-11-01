import { useState } from "react";
import ProfilePic from "../assets/images/profile.jpg";
import EditProfile from "../assets/images/edit-profile.svg";
import UploadComic from "../components/UploadComic";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useComicContext } from "../context/comicContext";

const Profile = () => {
  const [index, setIndex] = useState(1);
  const { comics } = useComicContext();
  const navigate = useNavigate();

  return (
    <div className="font-inter max-w-[1120px] mx-auto mt-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex gap-3">
          <img
            src={ProfilePic}
            alt="profile-pic"
            className="w-30 h-30 rounded-full"
          />
          <div className="text-left">
            <p className="text-3xl md:text-4xl text-neutral font-bold mb-2">
              Anya Sketcher
            </p>
            <p className="text-sm md:text-base font-normal text-author md:w-lg">
              Passionate comic artist and storyteller. I love bringing vibrant
              worlds and compelling characters to life through my art. Explore
              my latest series!
            </p>
          </div>
        </div>
        <div className="relative">
          <button className="w-[130px] h-10 px-3 text-sm font-medium text-neutral border border-input rounded-md">
            Edit Profile
          </button>
          <img
            src={EditProfile}
            alt="edit-profile"
            className="absolute bottom-3 left-1 w-4 h-4"
          />
        </div>
      </div>
      <div className="flex items-center mt-6">
        <button
          onClick={() => setIndex(1)}
          className={`w-[556px] h-11 text-[12px] md:text-sm font-medium px-3 rounded-sm flex items-center justify-center cursor-pointer ${
            index === 2
              ? "text-author bg-gray-100"
              : "text-neutral bg-white shadow-[0_0_1px_#171a1f12,_0_0_2px_#171a1f1F]"
          }`}
        >
          My Uploaded Comics
        </button>
        <button
          onClick={() => setIndex(2)}
          className={`w-[556px] h-11 px-3 text-[12px] md:text-sm font-medium rounded-sm cursor-pointer ${
            index === 2
              ? "bg-white shadow-[0_0_1px_#171a1f12,_0_0_2px_#171a1f1F] text-neutral"
              : "text-author bg-gray-100"
          }`}
        >
          Upload New Comic
        </button>
      </div>
      {index === 1 && (
        <div>
          <h1 className="text-3xl mt-6 text-neutral font-bold flex justify-start">
            Your Creations
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-6">
            {comics.map((comic) => (
              <div className="w-full aspect-3/4" key={comic.id}>
                <img
                  src={comic.image}
                  alt={comic.title}
                  className="w-3xs h-64 rounded-t-[10px]"
                />
                <p className="text-neutral text-[20px] font-semibold text-left">
                  {comic.title}
                </p>
                <p className="text-author text-sm font-medium text-left mb-2">
                  By Anya Sketcher
                </p>
                <div className="bg-[#E8618CFF] w-[67px] h-[22px] rounded-full flex items-center justify-center">
                  <p className="text-white font-semibold text-[12px] px-[6px]">
                    {comic.tag}
                  </p>
                </div>
                <div className="flex justify-start mt-2">
                  <button
                    className="w-56 h-10 px-3 text-white bg-nav rounded-md cursor-pointer"
                    onClick={() =>
                      navigate(
                        `/reader?cbzPath=${encodeURIComponent(
                          comic.cbzPath
                        )}&title=${encodeURIComponent(comic.title)}`
                      )
                    }
                  >
                    Read Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {index === 2 && <UploadComic onUploaded={() => setIndex(1)} />}
      <Footer />
    </div>
  );
};

export default Profile;
