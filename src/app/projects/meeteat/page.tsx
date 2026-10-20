import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Carousel } from "@/components/Carousel";
import { SectionProgress } from "@/components/SectionProgress";
import { PasswordGate } from "@/components/PasswordGate";

export const metadata: Metadata = {
  title: "Meet & Eat — Jenny Lin",
};

const NAV_SECTIONS = [
  { label: "Context", href: "#sec-context", childIds: ["sec-problem", "sec-solution"] },
  { label: "Research", href: "#sec-methodology" },
  { label: "Design", href: "#sec-design", childIds: ["sec-design-1", "sec-design-2", "sec-design-3"] },
  { label: "Takeaway", href: "#sec-takeaway" },
];

export default function MeetEatPage() {
  const isVercel = process.env.VERCEL === "1";

  return (
    <>
      <div className="proj-hero">
        <h1>Meet &amp; Eat</h1>
        <p className="desc">
          A social dining app building community and creating connections.
        </p>
        <div className="meta-grid">
          <div className="meta-item">
            <label>Role</label>
            <span>UX Researcher, UI Designer, Accessibility Auditor</span>
          </div>
          <div className="meta-item">
            <label>Team</label>
            <span>4 Members</span>
          </div>
          <div className="meta-item">
            <label>Timeline</label>
            <span>12 Weeks Sprint</span>
          </div>
        </div>

        <div className="proj-hero-image--compact">
          <Image
            src="/images/projects/meeteat/meeteatcover.png"
            alt="Meet & Eat app overview"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 720px"
            priority
          />
        </div>
      </div>

      <div className="proj-content-full">
        <SectionProgress sections={NAV_SECTIONS} />
          {/* Context */}
          <ScrollReveal>
            <div className="section" id="sec-context">
              <h2>Context</h2>
            </div>
          </ScrollReveal>

          {/* Problem */}
          <ScrollReveal>
            <div className="section section--child" id="sec-problem">
              <p className="cs-label">Problem</p>
              <p>
                Food has become a way to connect, but no platform exists for food
                lovers to befriend others through shared dining and restaurant
                recommendations. A market survey revealed demand for a platform
                enabling meaningful conversations with like-minded individuals.
              </p>
              <blockquote>
                <p>How might we help food lovers discover personalized recommendations and connect with like-minded people?</p>
              </blockquote>
            </div>
          </ScrollReveal>

          {/* Solution */}
          <ScrollReveal>
            <div className="section section--child" id="sec-solution">
              <p className="cs-label">Solution</p>
              <h2 className="cs-heading">
                Prioritize Customized Features &amp; Enhance User Engagement
              </h2>
              <p>
                Based on surveys, story mapping, and user testing, the app
                tailors content to individual preferences and behaviors while
                gathering user feedback for iterative refinement.
              </p>
            </div>
          </ScrollReveal>

          <PasswordGate active={isVercel} code="we1come" popup={isVercel}>

          {/* Methodology — tabs */}
          <ScrollReveal>
            <div className="section" id="sec-methodology">
              <h2>Methodology</h2>
              <Carousel
                labels={[
                  "Affinity Diagrams",
                  "Story Mapping",
                  "Wireframe",
                  "Usability Testing",
                ]}
              >
                {[
                  <div key="affinity" className="carousel-content-panel">
                    <h3>01 Affinity Diagrams</h3>
                    <p>
                      I led brainstorming using an affinity diagram to understand
                      user needs. Items were organized into four categories:
                      restaurant interactions, groups, hosts, and personal.
                    </p>
                    <div className="cs-image-full">
                      <Image
                        src="/images/projects/meeteat/affinity diagram.png"
                        alt="Affinity diagram"
                        width={1872}
                        height={1584}
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </div>,

                  <div key="storymap" className="carousel-content-panel">
                    <h3>02 Story Mapping</h3>
                    <p>
                      User journeys and feature interactions were visualized to
                      support planning, prioritization, and organization of features
                      along a timeline.
                    </p>
                    <div className="cs-image-full cs-image-light-bg">
                      <Image
                        src="/images/projects/meeteat/StoryMap.png"
                        alt="User story map"
                        width={3000}
                        height={2348}
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </div>,

                  <div key="wireframe" className="carousel-content-panel">
                    <h3>03 Wireframe</h3>
                    <div className="cs-image-full cs-image-light-bg">
                      <Image
                        src="/images/projects/meeteat/low-fi.png"
                        alt="Low-fidelity wireframes"
                        width={3000}
                        height={1913}
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </div>,

                  <div key="usability" className="carousel-content-panel">
                    <h3>04 Usability Testing</h3>
                    <p>
                      We interviewed 10 users in person. I conducted 3 interviews
                      to assess usability and navigation across 7 tasks.
                    </p>
                    <div className="cs-image-full cs-image-blend cs-image-light-bg" style={{ maxWidth: 640, margin: "0 auto" }}>
                      <Image
                        src="/images/projects/meeteat/SuS.png"
                        alt="SUS Score: 82.3% — Grade A, Excellent"
                        width={1759}
                        height={945}
                        sizes="(max-width: 768px) 100vw, 640px"
                      />
                    </div>
                    <div className="cs-info-cards">
                      <div className="cs-info-card">
                        <h4>Method</h4>
                        <ul>
                          <li>Moderated</li>
                          <li>In-person</li>
                        </ul>
                      </div>
                      <div className="cs-info-card">
                        <h4>Measured</h4>
                        <ul>
                          <li>Test success rate</li>
                          <li>Time on task</li>
                          <li>System Usability Scale</li>
                        </ul>
                      </div>
                    </div>
                  </div>,
                ]}
              </Carousel>
            </div>
          </ScrollReveal>

          {/* Design */}
          <ScrollReveal>
            <div className="section" id="sec-design">
              <h2>Design</h2>
              <p>
                A Heuristic Evaluation and WCAG assessment were conducted,
                with iterative improvements. Key issues included unclear icons
                and descriptions, redundant content, a cluttered layout, and
                color and size choices that didn&rsquo;t meet WCAG standards.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section section--child" id="sec-design-1">
              <h3>01 Navigation Clarity</h3>
              <p>
                Navigation bar icons lacked clarity. Using the heuristic
                &ldquo;Match between system and the real world,&rdquo; the
                profile and group icons were adjusted. The map was removed
                from the homepage and relocated to a dedicated page.
              </p>
              <div className="cs-image-full">
                <Image
                  src="/images/projects/meeteat/DESIGN1.png"
                  alt="Before & After: Navigation clarity improvements"
                  width={3000}
                  height={1687}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section section--child" id="sec-design-2">
              <h3>02 Add CTA (Call-To-Action) Feature</h3>
              <p>
                Two buttons were added to the calendar page: one to invite a
                friend and one to cancel the event. This aligned with
                &ldquo;Flexibility and Efficiency of Use&rdquo; and
                &ldquo;Visibility of Status System.&rdquo;
              </p>
              <div className="cs-image-full">
                <Image
                  src="/images/projects/meeteat/DESIGN2.png"
                  alt="Before & After: CTA buttons on calendar page"
                  width={3000}
                  height={1687}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section section--child" id="sec-design-3">
              <h3>03 Accessibility Issues</h3>
              <p>
                The original design failed the WCAG 4.5:1 contrast standard.
                The profile&rsquo;s color scheme was adjusted, spacing was
                increased, and the principle of &ldquo;Aesthetic and Minimalist
                Design&rdquo; was followed.
              </p>
              <div className="cs-image-full">
                <Image
                  src="/images/projects/meeteat/DESIGN3.png"
                  alt="Before & After: Accessibility improvements"
                  width={3000}
                  height={1687}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Takeaway */}
          <ScrollReveal>
            <div className="section" id="sec-takeaway">
              <h2>Takeaway</h2>
              <h3>Small details make social experiences easier</h3>
              <p>
                This project taught me that helping people connect
                isn&apos;t just about adding social features.
              </p>
              <p>
                Clear navigation, visible event actions, and
                accessible layouts also matter. When those basics
                work well, people can focus more on making plans and
                connecting with others.
              </p>
            </div>
          </ScrollReveal>

          </PasswordGate>

          <div className="proj-nav-bar">
            <Link href="/projects/apple-books">&larr; Apple Books</Link>
            <Link href="/">All Projects &rarr;</Link>
          </div>
      </div>
    </>
  );
}
