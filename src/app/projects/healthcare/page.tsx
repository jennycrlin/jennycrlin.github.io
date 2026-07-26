import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Collapsible } from "@/components/Collapsible";
import { Carousel } from "@/components/Carousel";
import { ShowcaseReveal } from "@/components/ShowcaseReveal";

export const metadata: Metadata = {
  title: "Healthcare Mobile App — Jenny Lin",
};

const TOC_SECTIONS = [
  {
    title: "Context",
    href: "#sec-context",
    children: [{ label: "Problem Space", href: "#sec-context" }],
  },
  {
    title: "Impact",
    href: "#sec-impact",
    children: [{ label: "Key Metrics", href: "#sec-impact" }],
  },
  {
    title: "Research",
    href: "#sec-research",
    children: [
      { label: "User Interviews", href: "#sec-research" },
      { label: "Persona", href: "#sec-persona" },
      { label: "Methods", href: "#sec-methods" },
    ],
  },
  {
    title: "Design",
    href: "#sec-design",
    children: [
      { label: "Design System", href: "#sec-system" },
      { label: "Biological Aging", href: "#sec-aging" },
      { label: "Multilingual", href: "#sec-multilingual" },
      { label: "Interactive Reports", href: "#sec-interactive" },
    ],
  },
  {
    title: "Iterations",
    href: "#sec-iterations",
    children: [{ label: "Design Explorations", href: "#sec-iterations" }],
  },
];

export default function HealthcarePage() {
  return (
    <>
      <div className="proj-hero">
        <h1>WCWH Healthcare Mobile App</h1>
        <p className="desc">
          0-to-1 design transforming complex health research data into an
          intuitive mobile experience for study participants to track, understand,
          and act on their personal health metrics.
        </p>
        <div className="meta-grid">
          <div className="meta-item">
            <label>My Role</label>
            <span>UX Research Designer</span>
          </div>
          <div className="meta-item">
            <label>Team</label>
            <span>2 Designers, 3 Researchers, 4 Engineers</span>
          </div>
          <div className="meta-item">
            <label>Timeline</label>
            <span>8 Months</span>
          </div>
          <div className="meta-item">
            <label>Platform</label>
            <span>iOS &amp; Android</span>
          </div>
        </div>

        <div className="proj-hero-image">
          <Image
            src="/images/projects/healthcare/overview.png"
            alt="App overview — onboarding, temperature, activity, heart rate, air quality, mood, and sleep dashboards"
            width={5112}
            height={1300}
            sizes="(max-width: 768px) 100vw, 1100px"
            priority
          />
        </div>
      </div>

      <div className="proj-body-wrap">
        <ProjectSidebar sections={TOC_SECTIONS} />

        <main className="proj-content">
          {/* Context */}
          <ScrollReveal>
            <div className="section" id="sec-context">
              <h2>Context</h2>
              <div className="cs-label">Problem Space</div>
              <h3 className="cs-heading">
                How might we make complex health research data accessible and
                actionable for everyday users?
              </h3>
              <p>
                The Williamson County and Cities Health District (WCWH)
                conducts longitudinal health research, collecting biometric
                data from participants through Fitbit sensors, environmental
                monitors, and self-reported surveys. Participants received
                dense PDF reports that were difficult to interpret, leading to
                low engagement and missed health insights.
              </p>
              <p>
                I designed a mobile app that transforms this raw research data
                into a personal health dashboard — giving participants clear,
                visual access to their temperature, physical activity, heart
                rate, air quality, mood, and sleep data.
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
                <div className="cs-stat-number">28%</div>
                <div className="cs-stat-title">Report Readability</div>
                <p>
                  Increase in report readability by flexible layered
                  information design.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="cs-stat-card">
                <div className="cs-stat-number">40%</div>
                <div className="cs-stat-title">User Satisfaction</div>
                <p>
                  Increase in user satisfaction by supporting video content
                  and visual data presentation.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Research — collapsible */}
          <div className="section" id="sec-research">
            <Collapsible title="Research">
              <p>
                Through interviews with study participants across diverse
                backgrounds, I uncovered shared frustrations around report
                comprehension. Users wanted simpler language, visual context,
                and more control over how they consumed health data.
              </p>

              <div className="cs-people-quotes">
                <ScrollReveal delay={0}>
                  <div className="cs-people-card">
                    <div className="cs-people-avatar">
                      <Image
                        src="/images/projects/healthcare/people1.png"
                        alt="User quote about scientific reports"
                        width={1356}
                        height={390}
                        sizes="600px"
                      />
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <div className="cs-people-card">
                    <div className="cs-people-avatar">
                      <Image
                        src="/images/projects/healthcare/people2.png"
                        alt="User quote about wanting more information"
                        width={1356}
                        height={389}
                        sizes="600px"
                      />
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="cs-people-card">
                    <div className="cs-people-avatar">
                      <Image
                        src="/images/projects/healthcare/people3.png"
                        alt="User quote about visual learning"
                        width={1356}
                        height={390}
                        sizes="600px"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="collapsible-section" id="sec-persona">
                <ScrollReveal>
                  <h3>User Persona</h3>
                  <div className="cs-image-full">
                    <Image
                      src="/images/projects/healthcare/persona.png"
                      alt="Primary user persona"
                      width={4803}
                      height={2603}
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                </ScrollReveal>
              </div>

              <div className="collapsible-section" id="sec-methods">
                <ScrollReveal>
                  <h3>Research Methods</h3>
                  <Carousel
                    labels={[
                      "Competitor Analysis",
                      "Content Inventory",
                      "Information Architecture",
                    ]}
                  >
                    {[
                      <div key="competitor">
                        <Image
                          src="/images/projects/healthcare/method1.png"
                          alt="Competitor analysis matrix"
                          width={2520}
                          height={1620}
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>,
                      <div key="inventory">
                        <Image
                          src="/images/projects/healthcare/method2.png"
                          alt="Content inventory spreadsheet"
                          width={2520}
                          height={1620}
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>,
                      <div key="ia">
                        <Image
                          src="/images/projects/healthcare/method3.png"
                          alt="Information architecture diagram"
                          width={2520}
                          height={1620}
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>,
                    ]}
                  </Carousel>
                </ScrollReveal>
              </div>
            </Collapsible>
          </div>

          {/* Design */}
          <ScrollReveal>
            <div className="section" id="sec-design">
              <h2>Design</h2>
            </div>
          </ScrollReveal>

          {/* Design System */}
          <ScrollReveal>
            <div className="section" id="sec-system">
              <h3>Design System</h3>
              <p>
                Established a comprehensive design system with consistent
                color palette, typography, component patterns, and
                interaction states — ensuring visual coherence across all
                health dashboards and report screens.
              </p>
              <div className="cs-iteration-crop">
                <Image
                  src="/images/projects/healthcare/design system.png"
                  alt="WCWH app design system — colors, typography, components"
                  width={13443}
                  height={9701}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* ── Sticky Scroll Showcase: 3 Key Redesigns ── */}
          <ShowcaseReveal>
            <div className="cs-showcase" id="sec-aging">
              <div className="cs-showcase-sticky">
                <h3>
                  Designing for Comfort, Clarity, and Choice —
                  creating inclusive experiences
                </h3>
                <p>
                  Three core redesigns that transformed how participants
                  interact with their health data.
                </p>
              </div>

              <div className="cs-showcase-scroll">
                {/* 01 — Biological Aging Report */}
                <div className="cs-showcase-item">
                  <div className="cs-showcase-num">01</div>
                  <h4>Simplifying Complex Health Data</h4>
                  <p>
                    Redesigned the biological aging report to present complex
                    data through clear visual explanations — showing actual
                    age vs. biological age range with intuitive graphs and
                    plain-language interpretations.
                  </p>
                  <div className="cs-image-full">
                    <Image
                      src="/images/projects/healthcare/design1.png"
                      alt="Biological Aging Report — interpreting results and age comparison"
                      width={3352}
                      height={3376}
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>
                </div>

                {/* 02 — Multilingual Support */}
                <div className="cs-showcase-item" id="sec-multilingual">
                  <div className="cs-showcase-num">02</div>
                  <h4>Accessible Design for Diverse User Needs</h4>
                  <p>
                    To support both English and Spanish readers, I collaborated
                    with a translator to adapt content and reframe language to
                    reflect cultural values — ensuring clarity and inclusivity
                    for the primarily Hispanic audience.
                  </p>
                  <div className="cs-image-full">
                    <Image
                      src="/images/projects/healthcare/design2.png"
                      alt="Healthy aging tips in English and Spanish side by side"
                      width={2460}
                      height={2532}
                      sizes="(max-width: 1024px) 100vw, 500px"
                    />
                  </div>
                </div>

                {/* 03 — Interactive Reports */}
                <div className="cs-showcase-item" id="sec-interactive">
                  <div className="cs-showcase-num">03</div>
                  <h4>Interactive Reports with Video Guides</h4>
                  <p>
                    Introduced clickable reports with embedded video guides,
                    allowing participants to tap links for deeper context —
                    replacing the static PDF experience with an interactive,
                    guided format.
                  </p>
                  <div className="cs-video-embed">
                    <video autoPlay loop muted playsInline>
                      <source
                        src="/images/projects/healthcare/video.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </ShowcaseReveal>

          {/* Iterations — collapsible */}
          <div className="section" id="sec-iterations">
            <Collapsible title="Design Iterations">
              <ScrollReveal>
                <p>
                  Through multiple rounds of design explorations, I refined
                  the visual language, information hierarchy, and interaction
                  patterns — testing variations of data visualization, layout
                  density, and content structure with users at each stage.
                </p>
                <div className="cs-iteration-crop">
                  <Image
                    src="/images/projects/healthcare/design3-cropped.png"
                    alt="Design iteration explorations across multiple screens"
                    width={12500}
                    height={8400}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </ScrollReveal>
            </Collapsible>
          </div>

          <div className="proj-nav-bar">
            <Link href="/">← All Projects</Link>
            <Link href="/projects/ai-agent">Next: Teaching AI →</Link>
          </div>
        </main>
      </div>
    </>
  );
}
