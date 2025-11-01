import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  type ReactNode,
} from "react";
import Echoes from "../assets/images/Echoes.png";
import Cybernetic from "../assets/images/CyberHeartbreak.png";
import Drifter from "../assets/images/drifter.png";
import Whisper from "../assets/images/old-gods.png";
import { getAllComics } from "../utils/db";

export type Comic = {
  id: number;
  title: string;
  image: string;
  cbzPath: string;
  tag: string;
};

type ComicState = {
  comics: Comic[];
};

const initialComics: Comic[] = [
  {
    id: 1,
    title: "Echoes of Lumina: Part 1",
    image: Echoes,
    cbzPath:
      "/comic/Unbreakable X-Men 001 (2025) (Digital) (Kileko-Empire).cbz",
    tag: "Mystery",
  },
  {
    id: 2,
    title: "Cybernetic Heartbreak",
    image: Cybernetic,
    cbzPath:
      "/comic/Unbreakable X-Men 001 (2025) (Digital) (Kileko-Empire).cbz",
    tag: "Mystery",
  },
  {
    id: 3,
    title: "The Stellar Drifter",
    image: Drifter,
    cbzPath:
      "/comic/Unbreakable X-Men 001 (2025) (Digital) (Kileko-Empire).cbz",
    tag: "Mystery",
  },
  {
    id: 4,
    title: "Whispers of the Old Gods",
    image: Whisper,
    cbzPath:
      "/comic/Unbreakable X-Men 001 (2025) (Digital) (Kileko-Empire).cbz",
    tag: "Mystery",
  },
];

const initialState: ComicState = {
  comics: initialComics,
};

type ComicContextValue = ComicState & {
  addComic: (comicData: Comic) => void;
};

export const ComicsContext = createContext<ComicContextValue | null>(null);

export function useComicContext() {
  const comicCtx = useContext(ComicsContext);

  if (comicCtx === null) {
    throw new Error("ComicsContext is null");
  }

  return comicCtx;
}

type ComicContextProviderProps = {
  children: ReactNode;
};

type AddComicsAction = {
  type: "ADD_COMIC";
  payload: Comic;
};

type SetComicsAction = { type: "SET_COMICS"; payload: Comic[] };

type Action = AddComicsAction | SetComicsAction;

function comicReducer(state: ComicState, action: Action): ComicState {
  if (action.type === "SET_COMICS") {
    return { comics: action.payload };
  }
  if (action.type === "ADD_COMIC") {
    const exists = state.comics.some((comic) => comic.id === action.payload.id);

    if (exists) {
      return state; // Don’t add duplicates
    }

    return {
      ...state,
      comics: [...state.comics, action.payload],
    };
  }

  return state;
}

export default function ComicContextProvider({
  children,
}: ComicContextProviderProps) {
  const [comicState, dispatch] = useReducer(comicReducer, initialState);
  // const ctx: ComicContextValue = {
  //   comics: comicState.comics,
  //   addComic(comicData) {
  //     dispatch({ type: "ADD_COMIC", payload: comicData });
  //   },
  // };
  const addComic = useCallback((comicData: Comic) => {
    dispatch({ type: "ADD_COMIC", payload: comicData });
  }, []);
  useEffect(() => {
    (async () => {
      const savedComics = await getAllComics();
      const dbComics = savedComics.map((comic: any) => ({
        id: comic.id + 1000, // prevent ID collision with initial ones
        title: comic.title,
        image: URL.createObjectURL(comic.cover),
        cbzPath: URL.createObjectURL(comic.comicFile),
        tag: comic.tag,
      }));
      dispatch({
        type: "SET_COMICS",
        payload: [...initialComics, ...dbComics],
      });
    })();
  }, []);

  return (
    <ComicsContext.Provider value={{ comics: comicState.comics, addComic }}>
      {children}
    </ComicsContext.Provider>
  );
}
