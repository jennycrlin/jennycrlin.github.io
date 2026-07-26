"use client";

import { usePathname } from "next/navigation";

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
      Projects
    </a>
  );
}
