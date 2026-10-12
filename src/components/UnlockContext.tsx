"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

const UnlockContext = createContext<{ unlocked: boolean; unlock: () => void }>({
  unlocked: false,
  unlock: () => {},
});

export function UnlockProvider({ children }: { children: ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  return (
    <UnlockContext.Provider value={{ unlocked, unlock: () => setUnlocked(true) }}>
      {children}
    </UnlockContext.Provider>
  );
}

export function useUnlock() {
  return useContext(UnlockContext);
}
