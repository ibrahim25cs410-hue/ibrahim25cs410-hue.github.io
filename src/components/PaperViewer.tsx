import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { Lightbox } from "./ui/Lightbox";
import { usePaper } from "../providers/PaperProvider";
import { useLanguage } from "../providers/LanguageProvider";
import { useT, ASSETS } from "../content/site";

export function PaperViewer() {
  const { isOpen, closePaper } = usePaper();
  const { lang } = useLanguage();
  const t = useT(lang);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setStatus("loading");
      if (hostRef.current) hostRef.current.innerHTML = "";
      return;
    }

    let cancelled = false;

    const render = async () => {
      setStatus("loading");
      try {
        const pdfjs = await import("pdfjs-dist");
        const worker = await import("pdfjs-dist/build/pdf.worker.min.mjs?url");
        pdfjs.GlobalWorkerOptions.workerSrc = worker.default;

        const url = new URL(ASSETS.researchPaper, window.location.href).href;
        const data = await fetch(url, { cache: "force-cache" }).then((res) => {
          if (!res.ok) throw new Error("fetch failed");
          return res.arrayBuffer();
        });
        if (cancelled) return;

        const pdf = await pdfjs.getDocument({ data }).promise;
        if (cancelled) return;

        const host = hostRef.current;
        if (!host) return;
        host.innerHTML = "";

        const width = Math.max(host.clientWidth || 320, 280);

        for (let n = 1; n <= pdf.numPages; n++) {
          const page = await pdf.getPage(n);
          if (cancelled) return;
          const unscaled = page.getViewport({ scale: 1 });
          const scale = Math.min(2.2, (width - 16) / unscaled.width);
          const viewport = page.getViewport({ scale });
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (!ctx) continue;
          const outputScale = Math.min(window.devicePixelRatio || 1, 2);
          canvas.width = Math.floor(viewport.width * outputScale);
          canvas.height = Math.floor(viewport.height * outputScale);
          canvas.style.width = `${Math.floor(viewport.width)}px`;
          canvas.style.height = `${Math.floor(viewport.height)}px`;
          canvas.className = "mx-auto mb-3 max-w-full rounded-md bg-white shadow-md last:mb-0";
          canvas.setAttribute("aria-label", `${t.research.paperTitle} — ${n}`);
          host.appendChild(canvas);
          await page.render({
            canvas,
            viewport,
            transform: outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : undefined,
          }).promise;
        }

        if (!cancelled) setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    };

    void render();
    return () => {
      cancelled = true;
    };
  }, [isOpen, t.research.paperTitle]);

  return (
    <Lightbox
      open={isOpen}
      onClose={closePaper}
      label={t.research.paperTitle}
      closeLabel={t.nurai.close}
      size="full"
    >
      <div className="flex h-[min(90dvh,960px)] min-h-[68dvh] flex-col">
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 pe-14 sm:px-6">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-text">
              {t.research.paperTitle}
            </p>
            <p className="truncate text-xs text-muted">{t.research.title}</p>
          </div>
        </div>

        <div className="relative min-h-0 flex-1 overflow-auto bg-[#5c5f64] p-3 sm:p-5">
          {status !== "ready" && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-6 text-center">
              {status === "loading" ? (
                <>
                  <Loader2 className="h-7 w-7 animate-spin text-white/80" />
                  <p className="text-sm text-white/80">{t.research.paperLoading}</p>
                </>
              ) : (
                <p className="max-w-sm text-sm text-white/90">{t.research.paperError}</p>
              )}
            </div>
          )}
          <div ref={hostRef} className="mx-auto w-full max-w-4xl" />
        </div>
      </div>
    </Lightbox>
  );
}
