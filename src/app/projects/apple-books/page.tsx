import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Collapsible } from "@/components/Collapsible";
import { Carousel } from "@/components/Carousel";
import { ShowcaseReveal } from "@/components/ShowcaseReveal";

export const metadata: Metadata = {
  title: "Apple Books Redesign — Jenny Lin",
};

const TOC_SECTIONS = [
  {
    title: "Overview",
    href: "#sec-overview",
    children: [{ label: "Context", href: "#sec-overview" }],
  },
  {
    title: "Design",
    href: "#sec-design",
    children: [
      { label: "Home & Goals", href: "#sec-home" },
      { label: "Book Store", href: "#sec-store" },
      { label: "Community", href: "#sec-community" },
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
    children: [
      { label: "Persona", href: "#sec-research" },
      { label: "Methods", href: "#sec-methods" },
    ],
  },
];

export default function AppleBooksPage() {
  return (
    <>
      <div className="proj-hero">
        <h1>Apple Books Redesign</h1>
        <p className="desc">
          Reimagining the reading experience with social features,
          reading goals, and personalized recommendations.
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
            <span>3 Months</span>
          </div>
          <div className="meta-item">
            <label>Platform</label>
            <span>iOS Mobile</span>
          </div>
        </div>

        <div className="proj-hero-image">
          <Image
            src="/images/projects/apple-books/design3.png"
            alt="Apple Books Community — book clubs, friend activity, and social reading features"
            width={1749}
            height={984}
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
                Apple Books offers a solid reading experience, but users face
                decision fatigue when selecting books, struggle to track reading
                progress, and lack social features to connect with fellow readers.
                Through user research and information architecture analysis,
                I identified five key opportunity areas: social media integration,
                goal setting, reviews, recommendations, and book tracking.
              </p>
              <div className="cs-image-full cs-image-full--medium">
                <Image
                  src="/images/projects/apple-books/survey.png"
                  alt="Five areas: Social Media, Goal Setting, Reviews, Recommendation, Book Track"
                  width={1968}
                  height={578}
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Design */}
          <ScrollReveal>
            <div className="section" id="sec-design">
              <h2>Design</h2>
            </div>
          </ScrollReveal>

          <ShowcaseReveal>
            <div className="cs-showcase" id="sec-home">
              <div className="cs-showcase-sticky">
                <h3>
                  Discovery, Tracking, and Community
                </h3>
                <p>
                  Three redesigns transforming Apple Books into
                  a complete reading companion.
                </p>
              </div>

              <div className="cs-showcase-scroll">
                <div className="cs-showcase-item">
                  <div className="cs-showcase-num">01</div>
                  <h4>Home &amp; Reading Goals</h4>
                  <p>
                    Redesigned from &ldquo;Reading Now&rdquo; to a
                    goal-oriented dashboard with daily progress,
                    streak tracking, and focused &ldquo;Continue Reading.&rdquo;
                  </p>
                  <div className="cs-image-full">
                    <Image
                      src="/images/projects/apple-books/design1.png"
                      alt="Before & After: Reading Now → Home with Reading Goals"
                      width={3760}
                      height={2116}
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>
                </div>

                <div className="cs-showcase-item" id="sec-store">
                  <div className="cs-showcase-num">02</div>
                  <h4>Personalized Book Store</h4>
                  <p>
                    Added &ldquo;Recommended for you&rdquo; suggestions,
                    genre-based browsing, and a prominent search bar to
                    reduce decision fatigue.
                  </p>
                  <div className="cs-image-full">
                    <Image
                      src="/images/projects/apple-books/design2.png"
                      alt="Before & After: Book Store with personalized recommendations"
                      width={3760}
                      height={2115}
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>
                </div>

                <div className="cs-showcase-item" id="sec-community">
                  <div className="cs-showcase-num">03</div>
                  <h4>Social Community</h4>
                  <p>
                    Introduced a Community tab with book clubs, friend
                    recommendations, activity feeds, and group
                    discussions.
                  </p>
                  <div className="cs-image-full">
                    <Image
                      src="/images/projects/apple-books/design3.png"
                      alt="Community: book clubs, friend activity, group discussions"
                      width={1749}
                      height={984}
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
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FglR1w4rkGGYasJDkaY46Z2%2FPrototype%3Fcontent-scaling%3Dfixed%26kind%3Dproto%26node-id%3D1157-4723%26page-id%3D1157%253A2769%26scaling%3Dscale-down"
                  allowFullScreen
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Research — collapsible */}
          <div className="section" id="sec-research">
            <Collapsible title="Research &amp; Process">
              <ScrollReveal>
                <h3>User Persona</h3>
                <p>
                  Amanda, 28, a business analyst who relies on book tracking
                  apps but struggles with decision fatigue and irrelevant
                  recommendations.
                </p>
                <div className="cs-image-full">
                  <Image
                    src="/images/projects/apple-books/persona.png"
                    alt="Persona: Amanda, 28, Business Analyst"
                    width={1794}
                    height={1077}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </ScrollReveal>

              <div className="collapsible-section" id="sec-methods">
                <ScrollReveal>
                  <h3>Methods</h3>
                  <Carousel
                    labels={[
                      "Competitor Analysis",
                      "Content Inventory",
                      "Card Sorting",
                      "Journey Map",
                    ]}
                  >
                    {[
                      <div key="ca">
                        <Image
                          src="/images/projects/apple-books/ca.png"
                          alt="Competitor analysis"
                          width={1800}
                          height={1089}
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>,
                      <div key="ci">
                        <Image
                          src="/images/projects/apple-books/ci.png"
                          alt="Content inventory"
                          width={1320}
                          height={840}
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>,
                      <div key="cs">
                        <Image
                          src="/images/projects/apple-books/cs.png"
                          alt="Card sorting results"
                          width={1904}
                          height={1329}
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>,
                      <div key="journey">
                        <Image
                          src="/images/projects/apple-books/Journey map.png"
                          alt="User journey map"
                          width={26368}
                          height={13268}
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
            <Link href="/projects/ai-agent">&larr; Teaching AI</Link>
            <Link href="/projects/meeteat">Next: MeetEat &rarr;</Link>
          </div>
        </main>
      </div>
    </>
  );
}
