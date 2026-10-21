import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { ProjectsLink } from "./ProjectsLink";
import { MobileMenuButton } from "./MobileMenuButton";
import { NavRevealText } from "./NavRevealText";

export function Nav() {
  const isVercel = process.env.VERCEL === "1";
  const resumeHref = isVercel
    ? "/images/resume/chiehru_resume_vercel.pdf"
    : "/images/resume/chiehru-resume.pdf";

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
        <a href={resumeHref} target="_blank" rel="noopener noreferrer">
          <NavRevealText>Resume</NavRevealText>
        </a>
      </div>
      <div className="nav-right">
        <ThemeToggle />
        <MobileMenuButton resumeHref={resumeHref} />
      </div>
    </nav>
  );
}
