import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface PaperContextValue {
  isOpen: boolean;
  openPaper: () => void;
  closePaper: () => void;
}

const PaperContext = createContext<PaperContextValue | undefined>(undefined);

export function PaperProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const openPaper = useCallback(() => setOpen(true), []);
  const closePaper = useCallback(() => setOpen(false), []);
  const value = useMemo(
    () => ({ isOpen, openPaper, closePaper }),
    [isOpen, openPaper, closePaper]
  );
  return (
    <PaperContext.Provider value={value}>{children}</PaperContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePaper() {
  const ctx = useContext(PaperContext);
  if (!ctx) throw new Error("usePaper must be used within PaperProvider");
  return ctx;
}
