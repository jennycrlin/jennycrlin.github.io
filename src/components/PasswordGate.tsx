"use client";

import { useState, type ReactNode } from "react";

export function PasswordGate({
  children,
  code,
}: {
  children: ReactNode;
  code?: string;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleUnlock = () => {
    if (!code || password === code) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="password-gate">
      <div className="lock-icon-large">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </div>
      <h3>This project is under NDA</h3>
      <p>Enter the password to view the full case study.</p>
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
        />
        <button className="pw-submit" onClick={handleUnlock}>
          Unlock
        </button>
      </div>
      {error && <p className="pw-error">Incorrect password. Please try again.</p>}
    </div>
  );
}
