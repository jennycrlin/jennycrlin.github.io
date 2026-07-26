import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Collapsible } from "@/components/Collapsible";
import { Carousel } from "@/components/Carousel";
import { ShowcaseReveal } from "@/components/ShowcaseReveal";

export const metadata: Metadata = {
  title: "MeetEat — Jenny Lin",
};

const TOC_SECTIONS = [
  {
    title: "Overview",
    href: "#sec-overview",
    children: [{ label: "Context", href: "#sec-overview" }],
  },
  {
    title: "Impact",
    href: "#sec-impact",
    children: [{ label: "Key Metrics", href: "#sec-impact" }],
  },
  {
    title: "Design",
    href: "#sec-design",
    children: [
      { label: "Profile & Groups", href: "#sec-profile" },
      { label: "Events", href: "#sec-events" },
      { label: "Home & Nav", href: "#sec-home" },
    ],
  },
  {
    title: "Prototype",
    href: "#sec-prototype",
    children: [{ label: "Interactive Demo", href: "#sec-prototype" }],
  },
  {
    title: "Research",
    href: "#sec-research",
    children: [{ label: "Methods", href: "#sec-research" }],
  },
];

export default function MeetEatPage() {
  return (
    <>
      <div className="proj-hero">
        <h1>MeetEat — Social Dining App</h1>
        <p className="desc">
          Accessibility-driven redesign of a social dining app, reducing
          cognitive load and improving usability across core interactions.
        </p>
        <div className="meta-grid">
          <div className="meta-item">
            <label>My Role</label>
            <span>UX Research Designer</span>
          </div>
          <div className="meta-item">
            <label>Type</label>
            <span>Class Project</span>
          </div>
          <div className="meta-item">
            <label>Timeline</label>
            <span>4 Months</span>
          </div>
          <div className="meta-item">
            <label>Platform</label>
            <span>iOS Mobile</span>
          </div>
        </div>

        <div className="proj-hero-image">
          <Image
            src="/images/projects/meeteat/DESIGN3.png"
            alt="MeetEat redesign — simplified home with clearer navigation"
            width={7680}
            height={4320}
            sizes="(max-width: 768px) 100vw, 1100px"
            priority
          />
        </div>
      </div>

      <div className="proj-body-wrap">
        <ProjectSidebar sections={TOC_SECTIONS} />

        <main className="proj-content">
          {/* Overview */}
          <ScrollReveal>
            <div className="section" id="sec-overview">
              <h2>Overview</h2>
              <p>
                MeetEat helps people connect through shared meals. The original
                design suffered from cluttered interfaces, confusing icons, and
                high cognitive load. Through accessibility auditing and
                iterative usability testing, I redesigned the core experience
                to simplify workflows and reduce confusion.
              </p>
            </div>
          </ScrollReveal>

          {/* Impact */}
          <ScrollReveal>
            <div className="section" id="sec-impact">
              <h2>Impact</h2>
            </div>
          </ScrollReveal>
          <div className="cs-stats cs-stats--two">
            <ScrollReveal delay={0}>
              <div className="cs-stat-card">
                <div className="cs-stat-number">12%</div>
                <div className="cs-stat-title">User Satisfaction</div>
                <p>Increase after redesign.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="cs-stat-card">
                <div className="cs-stat-number">26%</div>
                <div className="cs-stat-title">Error Rate Reduction</div>
                <p>Decrease across key tasks.</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="cs-image-full cs-image-full--medium">
              <Image
                src="/images/projects/meeteat/SuS.png"
                alt="SUS Score: 82.3% — Grade A, Excellent"
                width={2697}
                height={1577}
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>
          </ScrollReveal>

          {/* Design */}
          <ScrollReveal>
            <div className="section" id="sec-design">
              <h2>Design</h2>
            </div>
          </ScrollReveal>

          <ShowcaseReveal>
            <div className="cs-showcase" id="sec-profile">
              <div className="cs-showcase-sticky">
                <h3>
                  Reducing Cognitive Load
                </h3>
                <p>
                  Three before-and-after redesigns across
                  the core user experience.
                </p>
              </div>

              <div className="cs-showcase-scroll">
                <div className="cs-showcase-item">
                  <div className="cs-showcase-num">01</div>
                  <h4>Reduce Cognitive Load</h4>
                  <p>
                    Streamlined profile and groups with improved chip
                    readability and clearer separation between personal
                    and identity group browsing.
                  </p>
                  <div className="cs-image-full">
                    <Image
                      src="/images/projects/meeteat/DESIGN1.png"
                      alt="Before & After: Profile and groups"
                      width={7680}
                      height={4320}
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>
                </div>

                <div className="cs-showcase-item" id="sec-events">
                  <div className="cs-showcase-num">02</div>
                  <h4>Reduce Confusion</h4>
                  <p>
                    Clearer event cards with Invite/Cancel actions, better
                    date highlighting, and improved information density.
                  </p>
                  <div className="cs-image-full">
                    <Image
                      src="/images/projects/meeteat/DESIGN2.png"
                      alt="Before & After: Events calendar"
                      width={7680}
                      height={4320}
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>
                </div>

                <div className="cs-showcase-item" id="sec-home">
                  <div className="cs-showcase-num">03</div>
                  <h4>Simplify Wording &amp; Clarify Icons</h4>
                  <p>
                    Simplified wording, removed redundant map, added
                    location details, and redesigned navigation icons.
                  </p>
                  <div className="cs-image-full">
                    <Image
                      src="/images/projects/meeteat/DESIGN3.png"
                      alt="Before & After: Home with clearer nav"
                      width={7680}
                      height={4320}
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ShowcaseReveal>

          {/* Prototype */}
          <ScrollReveal>
            <div className="section" id="sec-prototype">
              <h2>Prototype</h2>
              <div className="cs-figma-embed">
                <iframe
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FglR1w4rkGGYasJDkaY46Z2%2FPrototype%3Fcontent-scaling%3Dfixed%26kind%3Dproto%26node-id%3D1251-59535%26page-id%3D1251%253A49790%26scaling%3Dmin-zoom%26starting-point-node-id%3D1251%253A59535"
                  allowFullScreen
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Research — collapsible */}
          <div className="section" id="sec-research">
            <Collapsible title="Research &amp; Process">
              <ScrollReveal>
                <h3>Affinity Diagram</h3>
                <div className="cs-image-full">
                  <Image
                    src="/images/projects/meeteat/affinity diagram.png"
                    alt="Affinity diagram"
                    width={1872}
                    height={1584}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </ScrollReveal>

              <div className="collapsible-section">
                <ScrollReveal>
                  <h3>Methods</h3>
                  <Carousel
                    labels={[
                      "Story Map",
                      "Low-Fi Wireframes",
                    ]}
                  >
                    {[
                      <div key="storymap">
                        <Image
                          src="/images/projects/meeteat/StoryMap.png"
                          alt="User story map"
                          width={16900}
                          height={13228}
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>,
                      <div key="lowfi">
                        <Image
                          src="/images/projects/meeteat/low-fi.png"
                          alt="Low-fidelity wireframes"
                          width={21184}
                          height={13512}
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>,
                    ]}
                  </Carousel>
                </ScrollReveal>
              </div>
            </Collapsible>
          </div>

          <div className="proj-nav-bar">
            <Link href="/projects/apple-books">&larr; Apple Books</Link>
            <Link href="/">All Projects &rarr;</Link>
          </div>
        </main>
      </div>
    </>
  );
}
