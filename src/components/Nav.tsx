import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { ProjectsLink } from "./ProjectsLink";
import { MobileMenuButton } from "./MobileMenuButton";
import { NavRevealText } from "./NavRevealText";

export function Nav() {
  return (
    <nav className="site-nav">
      <Link href="/" className="logo">
        Jenny Lin
      </Link>
      <div className="nav-links">
        <ProjectsLink />
        <Link href="/about">
          <NavRevealText>About</NavRevealText>
        </Link>
        <a href="/images/resume/chiehru-resume.pdf" target="_blank" rel="noopener noreferrer">
          <NavRevealText>Resume</NavRevealText>
        </a>
      </div>
      <div className="nav-right">
        <ThemeToggle />
        <MobileMenuButton />
      </div>
    </nav>
  );
}
