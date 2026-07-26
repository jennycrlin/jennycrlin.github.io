import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components/Marquee";
import { ScrollToProjects } from "@/components/ScrollToProjects";

const SKILLS = [
  "User Research",
  "Accessibility",
  "Design Systems",
  "AI × UX",
  "Data Visualization",
  "Inclusive Design",
  "B2B Enterprise",
  "Conversational AI",
  "AI Integration",
];

const CONTACT = [
  "Thanks for stopping by",
  "Let's connect",
  "jennycrlin.work@gmail.com",
  "Thanks for stopping by",
  "Let's connect",
  "jennycrlin.work@gmail.com",
];

export default function Home() {
  return (
    <>
      <ScrollToProjects />

      <section className="home-hero">
        <div className="left">
          <h1>
            I design for
            <br />
            <div className="rotate-wrap">
              <span>accessibility</span>
              <span>empathy</span>
              <span>clarity</span>
              <span>people</span>
            </div>
          </h1>
          <p className="subtitle">
            5+ years of <span className="highlight">research-driven UX</span> experience
            across <span className="highlight">B2B services</span>, creating inclusive
            designs and integrating <span className="highlight">AI into UX</span> to
            deliver data-driven, human-centered solutions.
          </p>
        </div>
      </section>

      <Marquee items={SKILLS} />

      <section className="home-featured" id="projectsSection">
        <div className="section-label">Featured Work</div>
        <Link href="/projects/apex" className="featured-card">
          <div className="card-cover">
            <Image src="/images/projects/apex/apex-cover.svg" alt="Apex Fintech Solutions" width={1200} height={600} sizes="(max-width: 768px) 100vw, 1100px" />
          </div>
          <div className="info">
            <h3>
              Apex Fintech Solutions{" "}
              <span className="lock-badge">🔒 NDA</span>
            </h3>
            <p>
              Designing scalable fintech platforms with AI-driven workflows,
              serving one of the largest clearing and custody firms in the US.
            </p>
            <div className="tags">
              <span className="tag">B2B</span>
              <span className="tag">Fintech</span>
              <span className="tag">AI Integration</span>
            </div>
            <div className="read-more">
              View case study <span>→</span>
            </div>
          </div>
        </Link>
        <div className="gradient-accent" />
      </section>

      <section className="home-projects">
        <div className="project-grid">
          <Link href="/projects/eli-lilly" className="proj-card">
            <div className="lock-icon">🔒</div>
            <div className="card-cover">
              <Image src="/images/projects/eli-lilly/lilly-cover.svg" alt="Eli Lilly Clinical Trial Platform" width={1200} height={600} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="card-info">
              <h4>Eli Lilly</h4>
              <p>
                AI-enabled clinical trial platform transforming regulated
                document workflows into real-time collaboration.
              </p>
              <div className="tags">
                <span className="tag">Healthcare</span>
                <span className="tag">AI Platform</span>
              </div>
            </div>
            <div className="card-arrow">
              <div className="arrow-circle">→</div>
            </div>
          </Link>

          <Link href="/projects/dashboard" className="proj-card">
            <div className="card-cover">
              <Image src="/images/projects/dashboard/att-cover.png" alt="AT&T Portal Dashboard" width={5760} height={2880} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="card-info">
              <h4>Dashboard Redesign</h4>
              <p>
                End-to-end redesign of AT&T&apos;s internal portal with
                AI-powered automation and accessible data visualization.
              </p>
              <div className="tags">
                <span className="tag">B2B</span>
                <span className="tag">AI Automation</span>
              </div>
            </div>
            <div className="card-arrow">
              <div className="arrow-circle">→</div>
            </div>
          </Link>

          <Link href="/projects/healthcare" className="proj-card">
            <div className="card-cover card-cover--top">
              <Image src="/images/projects/healthcare/wcwch-cover.png" alt="Healthcare Mobile App" width={1643} height={1691} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="card-info">
              <h4>Healthcare Mobile App</h4>
              <p>
                0-to-1 design transforming health data into an intuitive mobile
                app.
              </p>
              <div className="tags">
                <span className="tag">Mobile</span>
                <span className="tag">Data Viz</span>
              </div>
            </div>
            <div className="card-arrow">
              <div className="arrow-circle">→</div>
            </div>
          </Link>

          <Link href="/projects/ai-agent" className="proj-card">
            <div className="card-cover card-cover--contain">
              <Image src="/images/projects/ai-agent/teachingAI-cover.png" alt="Teaching AI Agent" width={1924} height={2000} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="card-info">
              <h4>Teaching AI Agent</h4>
              <p>AI-driven feedback and visualization for active learning.</p>
              <div className="tags">
                <span className="tag">Web</span>
                <span className="tag">Conversational AI</span>
              </div>
            </div>
            <div className="card-arrow">
              <div className="arrow-circle">→</div>
            </div>
          </Link>
        </div>
      </section>

      <section className="home-class">
        <div className="section-label">Class Projects</div>
        <div className="class-grid">
          <Link href="/projects/apple-books" className="class-card">
            <div className="img-placeholder">Books</div>
            <div className="info">
              <h4>Apple Books Redesign</h4>
              <span>Mobile · User Research · IA</span>
            </div>
          </Link>
          <Link href="/projects/meeteat" className="class-card">
            <div className="img-placeholder">Social</div>
            <div className="info">
              <h4>MeetEat</h4>
              <span>Mobile · Accessibility · Social</span>
            </div>
          </Link>
        </div>
      </section>

      <Marquee items={CONTACT} />
    </>
  );
}
