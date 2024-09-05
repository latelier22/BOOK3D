import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
  "page_1",
  "page_2",
  "page_3",
  "page_4",
  "page_5",
  "page_6",
  "page_7",
  "page_8",
  "page_9",
  "page_10",
  "page_11",
  "page_12",
  "page_13",
  "page_14",
  "page_15",
  "page_16",
  
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const audio = new Audio("/audios/page-flip-01a.mp3");
    audio.play();
  }, [page]);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        <a
          className="pointer-events-auto mt-10 ml-10"
          href="https://marcel-de-myotte.fr"
        >
          <img className="w-20" src="/images/Signature-marcel.png" alt="Marcel" />
        </a>
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
        <div className="relative">
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-yellow-700 text-10xl font-black ">
             Catalogue
            </h1>
            <h2 className="shrink-0 text-yellow-700 text-8xl italic font-light">
              Marcel Séjour
            </h2>
            <h2 className="shrink-0 text-yellow-700 text-12xl font-bold">
              Noir et Blanc
            </h2>
            <h2 className="shrink-0 outline-yellow-700 text-transparent text-12xl font-bold italic outline-text">
              Couleur
            </h2>
            <h2 className="shrink-0 text-yellow-700 text-9xl font-medium">
              D'Anjou et d&apos;ailleurs
            </h2>
            <h2 className="shrink-0 text-yellow-700 text-9xl font-extralight italic">
              Mayotte
            </h2>
            <h2 className="shrink-0 outline-yellow-700 outline-text text-transparent text-13xl font-bold  italic">
              Comores
            </h2>
            <h2 className="shrink-0 outline-yellow-700 text-transparent text-12xl font-bold italic outline-text">
              Anjou
            </h2>
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-yellow-700 text-10xl font-black ">
            Catalogue
            </h1>
            <h2 className="shrink-0 text-yellow-700 text-8xl italic font-light">
            Marcel Séjour
            </h2>
            <h2 className="shrink-0 text-yellow-700 text-12xl font-bold">
            Noir et Blanc
            </h2>
            <h2 className="shrink-0 outline-yellow-700 text-transparent text-12xl font-bold italic outline-text">
            Couleur
            </h2>
            <h2 className="shrink-0 text-yellow-700 text-9xl font-medium">
            D'Anjou et d&apos;ailleurs
            </h2>
            <h2 className="shrink-0 text-yellow-700 text-9xl font-extralight italic">
            Mayotte
            </h2>
            <h2 className="shrink-0 text-yellow-700 text-13xl font-bold">
              Comores
            </h2>
            <h2 className="shrink-0 outline-yellow-700 text-transparent text-12xl font-bold italic outline-text">
              Anjou
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
