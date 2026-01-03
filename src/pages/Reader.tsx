// Reader.tsx
import React, { useRef, useEffect, useState } from "react";
import { View, makeBook } from "@xincmm/foliate-js";
import { useNavigate, useSearchParams } from "react-router-dom";

// interface LocationState {
//   comicTitle: string;
//   cbzPath: string;
// }

const Reader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  //const location = useLocation();
  // const state = location.state as LocationState | null;

  const cbzPath = searchParams.get("cbzPath");
  const comicTitle = searchParams.get("title");

  useEffect(() => {
    if (!cbzPath) {
      alert("No comic path provided.");
      navigate("/");
      return;
    }

    const loadComic = async () => {
      try {
        const response = await fetch(cbzPath);
        console.log("Status:", response.status);
        console.log("Content-Type:", response.headers.get("content-type"));
        if (!response.ok) throw new Error("Failed to fetch comic file");
        // const blob = await response.blob();

        // // foliate-js needs the name property to determine file type
        // const file = new File([blob], "comic.cbz", { type: "application/zip" });

        // Use arrayBuffer instead of blob
        const buffer = await response.arrayBuffer();

        // Preserve the real filename
        const filename = cbzPath.split("/").pop() || "comic.cbz";

        // Force ZIP MIME type
        const file = new File([buffer], filename, {
          type: "application/zip",
        });

        const book = await makeBook(file, { format: "cbz" });
        const view = new View();

        view.setAttribute("animated", "true");
        view.setAttribute("flow", "paginated");
        view.style.width = "100%";
        view.style.height = "100%";

        if (containerRef.current) {
          containerRef.current.innerHTML = "";
          containerRef.current.appendChild(view);
        }

        await view.open(book);

        viewRef.current = view;
        setIsReady(true);
      } catch (error) {
        console.error("Error loading comic:", error);
        alert("Failed to load the comic.");
      }
    };

    loadComic();

    return () => {
      viewRef.current?.remove();
      viewRef.current = null;
    };
  }, [cbzPath, navigate]);

  const goNext = () => viewRef.current?.next();
  const goPrev = () => viewRef.current?.prev();

  return (
    <div className="w-full h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-xl font-bold mt-4">{comicTitle || "Comic Reader"}</h1>

      <div
        ref={containerRef}
        className="w-full h-full mt-4"
        style={{ maxHeight: "80vh" }}
      />

      {isReady && (
        <div className="flex gap-4 my-4">
          <button
            onClick={goPrev}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Previous
          </button>
          <button
            onClick={goNext}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Reader;
