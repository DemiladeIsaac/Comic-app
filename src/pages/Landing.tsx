import FireGirl from "../assets/images/fire-girl.png";
import Space from "../assets/images/space.png";
import SandHouse from "../assets/images/undying-city.png";
import Flowers from "../assets/images/flowers.png";
import Mermaid from "../assets/images/mermaid.png";
import Warrior from "../assets/images/warrior.png";
import Relics from "../assets/images/relics.png";
import Quantum from "../assets/images/quantum-web.png";
import Pirates from "../assets/images/skypirates.png";
import SpaceShip from "../assets/images/spaceship.png";
import Jedi from "../assets/images/jedi.png";
import CyberPunk from "../assets/images/cyberpunk.png";
import Mystic from "../assets/images/mystic-forest.png";
import ShadowRealm from "../assets/images/shadow-realm.png";
import Drifters from "../assets/images/sandy-mountains.png";
import Clockwork from "../assets/images/clockwork.png";
import Dragon from "../assets/images/dragon.png";
import Footer from "../components/Footer";
import PopularComics from "../components/PopularComics";

const Landing = () => {
  const comics = [
    {
      title: "Starbound Saga: Echoes of Andromed",
      author: "Lena Khan",
      image: SpaceShip,
    },
    {
      title: "The Last Guardian: Prophecy's Call",
      author: "Markus Thorne",
      image: Jedi,
    },
    {
      title: "Cyberpunk City: Neon Dreams",
      author: "Akira Sato",
      image: CyberPunk,
    },
    {
      title: "Mystic Forest: Whispering Willows",
      author: "Elara Vance",
      image: Mystic,
    },
    {
      title: "Shadows of the Forgotten Realm",
      author: "Darius Blackwood",
      image: ShadowRealm,
    },
    {
      title: "Galactic Drifters: Rogue Planet",
      author: "Zoe Bell",
      image: Drifters,
    },
    {
      title: "Clockwork Conspiracy: The Gilded Cage",
      author: "Arthur Penhaligon",
      image: Clockwork,
    },
    {
      title: "Dragonheart Chronicles: Flame's Embrace",
      author: "Seraphina Dawn",
      image: Dragon,
    },
  ];

  const recentComics = [
    {
      title: "Aetheria Ascendant: Crystal Prophecy",
      author: "Lysandra Moon",
      image: Space,
    },
    {
      title: "The Undying City: Beneath the Sands",
      author: "Kaijin Solara",
      image: SandHouse,
    },
    {
      title: "Cosmic Bloom: Sentient Gardens",
      author: "Flora Nova",
      image: Flowers,
    },
    {
      title: "Whispers of the Deep: Siren's Song",
      author: "Marina Azure",
      image: Mermaid,
    },
    {
      title: "The Ironclad Saga: Steel Hearts",
      author: "Hector Forge",
      image: Warrior,
    },
    {
      title: "Lost Relics of Xylos",
      author: "Professor Eldridge",
      image: Relics,
    },
    {
      title: "The Quantum Web: Paradox Protocol",
      author: "Dr. Evelyn Reed",
      image: Quantum,
    },
    {
      title: "Chronicles of the Sky Pirates",
      author: "Captain Zephyr",
      image: Pirates,
    },
  ];
  return (
    <div className="font-inter max-w-[1120px] mx-auto px-8 mt-12">
      <div className="bg-hero w-full p-12 h-[600px] rounded-2xl shadow-md flex items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl leading-tight text-hero-text font-bold mb-4">
            Embark on an Epic Adventure: 'Chronicles of Eldoria'
          </h1>
          <p className="text-lg text-hero-text font-normal mb-6 leading-relaxed">
            Dive into a vibrant world of magic and mystery. Follow Elara, a
            young mage, as she uncovers ancient secrets and battles formidable
            foes to save her kingdom from impending doom. A tale of courage,
            friendship, and destiny awaits!
          </p>
          <button className="bg-nav hover:bg-blue-700 text-white px-3 rounded-full text-sm font-medium h-[44px] w-[132px] flex items-center justify-center cursor-pointer">
            Read Now
          </button>
        </div>
        <div className="flex-1">
          <img
            src={FireGirl}
            alt="hero-banner"
            className="w-full rounded-2xl"
          />
        </div>
      </div>
      <PopularComics comics={comics} pageTitle="Popular Comics" />
      <PopularComics comics={recentComics} pageTitle="Recently added Comics" />
      <Footer />
    </div>
  );
};

export default Landing;
