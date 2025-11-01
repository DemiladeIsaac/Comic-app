import { openDB } from "idb";

const DB_NAME = "ComicDB";
const STORE_NAME = "comics";

export async function initDB() {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
        store.createIndex("title", "title");
      }
    },
  });
}

async function fileToBlob(file: File): Promise<Blob> {
  return new Blob([await file.arrayBuffer()], { type: file.type });
}

// Save a comic
export async function saveComic(comic: {
  title: string;
  cover: File;
  comicFile: File;
  tag: string;
}) {
  const db = await initDB();

  const coverBlob = await fileToBlob(comic.cover);
  const comicBlob = await fileToBlob(comic.comicFile);

  const id = await db.add(STORE_NAME, {
    title: comic.title,
    cover: coverBlob,
    comicFile: comicBlob,
    tag: comic.tag,
  });

  return id as number;
}

// Get all comics
export async function getAllComics() {
  const db = await initDB();
  return db.getAll(STORE_NAME);
}
