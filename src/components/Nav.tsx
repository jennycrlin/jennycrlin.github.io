import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { ProjectsLink } from "./ProjectsLink";

export function Nav() {
  return (
    <nav className="site-nav">
      <Link href="/" className="logo">
        Jenny Lin
      </Link>
      <div className="nav-links">
        <ProjectsLink />
        <Link href="/about">About</Link>
        <a href="/images/resume/Jenny_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
      <div className="nav-right">
        <ThemeToggle />
      </div>
    </nav>
  );
}
