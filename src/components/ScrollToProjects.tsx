"use client";

import { useEffect } from "react";

export function ScrollToProjects() {
  useEffect(() => {
    if (window.location.hash === "#projects") {
      setTimeout(() => {
        document
          .getElementById("projectsSection")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return null;
}
