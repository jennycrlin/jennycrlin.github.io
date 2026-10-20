"use client";

import { usePathname } from "next/navigation";
import { NavRevealText } from "./NavRevealText";

export function ProjectsLink() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      document
        .getElementById("projectsSection")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href="/#projects" onClick={handleClick}>
      <NavRevealText>Projects</NavRevealText>
    </a>
  );
}
