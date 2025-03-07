import { useCallback, useState } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Configure le worker pour Vite
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/", // URL des Character Maps (facultatif, pour les langues complexes)
  standardFontDataUrl: "/standard_fonts/", // URL des polices standard (facultatif)
};

const maxWidth = 800; // Limite la largeur d'affichage des pages PDF

export default function PDFViewer() {
  const [file, setFile] = useState("./livretV5.pdf"); // Chemin ou fichier PDF par défaut
  const [numPages, setNumPages] = useState(null);
  const [containerRef, setContainerRef] = useState(null);
  const [containerWidth, setContainerWidth] = useState(null);

  // Gère la mise à jour des dimensions pour adapter la taille des pages PDF
  const onResize = useCallback((entries) => {
    const [entry] = entries;
    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, {}, onResize);

  // Charge un fichier PDF via un input
  function onFileChange(event) {
    const { files } = event.target;
    const nextFile = files?.[0];
    if (nextFile) {
      setFile(nextFile);
    }
  }

  // Met à jour le nombre total de pages du document PDF
  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1>Visionneuse de PDF</h1>
      </header>
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="file">Charger un fichier PDF :</label>{" "}
        <input type="file" id="file" onChange={onFileChange} />
      </div>
      <div
        style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "8px" }}
        ref={setContainerRef}
      >
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
          {numPages &&
            Array.from(new Array(numPages), (_el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth}
              />
            ))}
        </Document>
      </div>
    </div>
  );
}
