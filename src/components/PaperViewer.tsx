import { useState } from "react";
import { Lightbox } from "./ui/Lightbox";
import { usePaper } from "../providers/PaperProvider";
import { useLanguage } from "../providers/LanguageProvider";
import { useT, ASSETS } from "../content/site";

export function PaperViewer() {
  const { isOpen, closePaper } = usePaper();
  const { lang } = useLanguage();
  const t = useT(lang);
  const [failed, setFailed] = useState<Record<number, boolean>>({});

  return (
    <Lightbox
      open={isOpen}
      onClose={closePaper}
      label={t.research.paperTitle}
      closeLabel={t.nurai.close}
      size="full"
    >
      <div className="flex h-[min(92dvh,1080px)] min-h-[70dvh] flex-col">
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 pe-14 sm:px-6">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-text">
              {t.research.paperTitle}
            </p>
            <p className="truncate text-xs text-muted">{t.research.title}</p>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-auto bg-[#5c5f64] p-2 sm:p-4">
          <div className="mx-auto flex w-full max-w-[900px] flex-col gap-3 sm:gap-4">
            {ASSETS.paperPages.map((src, i) => (
              <figure
                key={src}
                className="overflow-hidden rounded-md bg-white shadow-[0_8px_28px_rgba(0,0,0,0.28)]"
              >
                {failed[i] ? (
                  <div className="flex min-h-[40vh] items-center justify-center p-6 text-center text-sm text-neutral-500">
                    {t.research.paperError}
                  </div>
                ) : (
                  <img
                    src={src}
                    alt={`${t.research.paperTitle} — ${i + 1} / ${ASSETS.paperPages.length}`}
                    width={800}
                    height={1024}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={i === 0 ? "high" : "low"}
                    draggable={false}
                    onError={() => setFailed((prev) => ({ ...prev, [i]: true }))}
                    className="block h-auto w-full bg-white"
                  />
                )}
                <figcaption className="sr-only">
                  {t.research.paperTitle} ({i + 1}/{ASSETS.paperPages.length})
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </Lightbox>
  );
}
