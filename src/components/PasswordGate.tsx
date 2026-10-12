"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";

const STORAGE_KEY = "cs-unlocked";

export function PasswordGate({
  children,
  code,
  popup = false,
  active = true,
}: {
  children: ReactNode;
  code?: string;
  popup?: boolean;
  active?: boolean;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(STORAGE_KEY) === "1") {
      setUnlocked(true);
    }
  }, []);

  const handleUnlock = () => {
    if (!code || password === code) {
      setUnlocked(true);
      setError(false);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(STORAGE_KEY, "1");
      }
    } else {
      setError(true);
    }
  };

  if (!active || unlocked) {
    return <>{children}</>;
  }

  const gate = (
    <div className="password-gate">
      {popup && (
        <Link href="/" className="pw-close" aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </Link>
      )}
      <div className="lock-icon-large">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>
      <h3>Please enter the password to unlock all case studies.</h3>
      <div className="pw-form">
        <input
          type="password"
          className="pw-input"
          placeholder="Enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
          autoFocus={popup}
        />
        <button className="pw-submit" onClick={handleUnlock}>
          Unlock
        </button>
      </div>
      {error && <p className="pw-error">Incorrect password. Please try again.</p>}
    </div>
  );

  if (popup) {
    return <div className="password-modal-overlay">{gate}</div>;
  }

  return gate;
}
