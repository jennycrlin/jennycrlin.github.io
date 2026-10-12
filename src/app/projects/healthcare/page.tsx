import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Carousel } from "@/components/Carousel";
import { SectionProgress } from "@/components/SectionProgress";

export const metadata: Metadata = {
  title: "Healthcare Mobile App — Jenny Lin",
};

const NAV_SECTIONS = [
  { label: "Overview", href: "#sec-context" },
  { label: "Impact", href: "#sec-impact" },
  { label: "Research", href: "#sec-research" },
  { label: "Design", href: "#sec-design", childIds: ["sec-system", "sec-aging", "sec-multilingual", "sec-interactive"] },
  { label: "Iterations", href: "#sec-iterations" },
  { label: "Takeaway", href: "#sec-takeaway" },
];

export default function HealthcarePage() {
  return (
    <>
      <div className="proj-hero">
        <h1>WCWH Healthcare Mobile App</h1>
        <p className="desc">
          Designed a mobile app that helps research participants understand
          their health data through clearer visuals, simpler language, and
          flexible ways to explore their results.
        </p>
        <div className="meta-grid">
          <div className="meta-item">
            <label>My Role</label>
            <span>UX Researcher, UI Designer, Content Designer</span>
          </div>
          <div className="meta-item">
            <label>Team</label>
            <span>5 Research Scientists, 1 Product Manager, 2 Engineers, 2 Translators</span>
          </div>
          <div className="meta-item">
            <label>Timeline</label>
            <span>8 Months</span>
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

      <div className="proj-content-full">
        <SectionProgress sections={NAV_SECTIONS} />

        {/* Context */}
        <ScrollReveal>
          <div className="section" id="sec-context">
            <h2>Overview</h2>
            <h3>Health reports were hard to read</h3>
            <p>
              Whole Communities Whole Health (WCWH) is a research
              initiative working with underserved communities in
              eastern Travis County, Texas. Participants received
              detailed PDF reports about their health, but scientific
              language and dense layouts made the information
              difficult to understand. I helped design a mobile app
              that presents personal health data in a clearer, more
              approachable format.
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
              <div className="cs-stat-number">25%</div>
              <div className="cs-stat-title">Report Readability</div>
              <p>
                Increase through flexible layered information design.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="cs-stat-card">
              <div className="cs-stat-number">40%</div>
              <div className="cs-stat-title">User Satisfaction</div>
              <p>
                Increase by supporting video content and visual data
                presentation.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Research */}
        <ScrollReveal>
          <div className="section" id="sec-research">
            <h2>Research</h2>
            <Carousel
              labels={[
                "User Interviews",
                "Persona",
                "Competitor Analysis",
                "Content Inventory",
                "Information Architecture",
              ]}
            >
              {[
                <div key="interviews" className="carousel-content-panel">
                  <h3>People wanted clearer explanations</h3>
                  <p>
                    I interviewed research participants to understand
                    how they read and used their health reports. Many
                    found the scientific language difficult to follow
                    and wanted visuals that helped explain their
                    results.
                  </p>
                  <p>
                    These findings shaped three priorities: simpler
                    content, clearer data visualization, and more
                    ways to learn.
                  </p>
                  <div className="cs-image-row cs-image-row--two">
                    <div className="cs-image-half">
                      <Image
                        src="/images/projects/healthcare/people1.png"
                        alt="User quote about scientific reports"
                        width={1316}
                        height={350}
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    </div>
                    <div className="cs-image-half">
                      <Image
                        src="/images/projects/healthcare/people3.png"
                        alt="User quote about visual learning"
                        width={1316}
                        height={349}
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    </div>
                  </div>
                </div>,

                <div key="persona" className="carousel-content-panel">
                  <h3>Understanding the people behind the data</h3>
                  <p>
                    I created a persona based on participant research
                    to capture common needs around readability,
                    health literacy, and confidence when interpreting
                    personal results.
                  </p>
                  <p>
                    The persona helped guide decisions about
                    language, information hierarchy, and how much
                    detail to show at once.
                  </p>
                  <div className="cs-image-full cs-image-light-bg" style={{ maxWidth: 900, margin: "0 auto" }}>
                    <Image
                      src="/images/projects/healthcare/persona.png"
                      alt="Primary user persona"
                      width={4803}
                      height={2603}
                      sizes="(max-width: 768px) 100vw, 900px"
                    />
                  </div>
                </div>,

                <div key="competitor" className="carousel-content-panel">
                  <h3>Learning from existing health apps</h3>
                  <p>
                    I reviewed similar health apps to understand
                    common patterns for presenting personal health
                    data.
                  </p>
                  <div className="cs-image-full cs-image-blend cs-image-no-card">
                    <Image
                      src="/images/projects/healthcare/method1.png"
                      alt="Competitor analysis matrix"
                      width={2211}
                      height={1300}
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                </div>,

                <div key="inventory" className="carousel-content-panel">
                  <h3>Auditing what the reports already covered</h3>
                  <p>
                    I audited the existing report content to see what
                    needed to stay, what could be simplified, and
                    what was repetitive or hard to navigate.
                  </p>
                  <div className="cs-image-full cs-image-blend cs-image-no-card">
                    <Image
                      src="/images/projects/healthcare/method2.png"
                      alt="Content inventory spreadsheet"
                      width={2252}
                      height={1382}
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                </div>,

                <div key="ia" className="carousel-content-panel">
                  <h3>Mapping a clearer structure</h3>
                  <p>
                    I mapped how different health metrics should be
                    organized, creating a structure participants
                    could navigate without reading a long PDF.
                  </p>
                  <div className="cs-image-full cs-image-blend">
                    <Image
                      src="/images/projects/healthcare/method3.png"
                      alt="Information architecture diagram"
                      width={2520}
                      height={1403}
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
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
          </div>
        </ScrollReveal>

        {/* Design System */}
        <ScrollReveal>
          <div className="section section--child" id="sec-system">
            <p className="cs-label">01 &middot; Design System</p>
            <h2 className="cs-heading">
              Keeping the app simple and consistent
            </h2>
            <p>
              I created a shared design system for colors, typography,
              and components so reports followed the same visual
              patterns.
            </p>
            <p>
              This made it easier to navigate between health metrics
              and recognize familiar actions across the app.
            </p>
            <div className="cs-image-full">
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

        {/* Biological Aging */}
        <ScrollReveal>
          <div className="section section--child" id="sec-aging">
            <p className="cs-label">02 &middot; Data Visualization</p>
            <h2 className="cs-heading">
              Showing the big picture before the details
            </h2>
            <p>
              Personal health results can be difficult to interpret,
              especially when they include unfamiliar medical terms.
            </p>
            <p>
              I organized reports to show a general explanation first,
              followed by personal results and more detailed
              information. This gave participants a clearer starting
              point without overwhelming them with data.
            </p>
            <div className="phone-frame-pair">
              <div className="phone-frame">
                <div className="phone-frame__notch" />
                <div className="phone-frame__screen">
                  <Image
                    src="/images/projects/healthcare/design1-left.png"
                    alt="Biological Aging Report — interpreting biological age"
                    width={1552}
                    height={3368}
                    sizes="280px"
                  />
                </div>
                <div className="phone-frame__bar" />
              </div>
              <div className="phone-frame">
                <div className="phone-frame__notch" />
                <div className="phone-frame__screen">
                  <Image
                    src="/images/projects/healthcare/design1-right.png"
                    alt="Biological Aging Report — age comparison results"
                    width={1552}
                    height={3368}
                    sizes="280px"
                  />
                </div>
                <div className="phone-frame__bar" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Multilingual */}
        <ScrollReveal>
          <div className="section section--child" id="sec-multilingual">
            <p className="cs-label">03 &middot; Inclusivity</p>
            <h2 className="cs-heading">
              Making health information easier to read in two languages
            </h2>
            <p>
              I worked with translators to adapt health content for
              English and Spanish readers.
            </p>
            <p>
              Beyond translation, we reviewed wording and tone to make
              explanations more approachable and relevant to the
              communities participating in the study.
            </p>
            <div className="phone-frame-pair">
              <div className="phone-frame">
                <div className="phone-frame__notch" />
                <div className="phone-frame__screen">
                  <Image
                    src="/images/projects/healthcare/design2-left.png"
                    alt="Healthy aging tips in English"
                    width={1164}
                    height={2526}
                    sizes="280px"
                  />
                </div>
                <div className="phone-frame__bar" />
              </div>
              <div className="phone-frame">
                <div className="phone-frame__notch" />
                <div className="phone-frame__screen">
                  <Image
                    src="/images/projects/healthcare/design2-right.png"
                    alt="Healthy aging tips in Spanish"
                    width={1164}
                    height={2526}
                    sizes="280px"
                  />
                </div>
                <div className="phone-frame__bar" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Reports */}
        <ScrollReveal>
          <div className="section section--child" id="sec-interactive">
            <p className="cs-label">04 &middot; Video Guides</p>
            <h2 className="cs-heading">
              Giving people another way to learn
            </h2>
            <p>
              Interviews showed that some participants preferred
              visual explanations over reading long reports.
            </p>
            <p>
              I added optional video guides so users could watch an
              explanation or continue reading at their own pace.
            </p>
            <div className="phone-frame-pair">
              <div className="phone-frame">
                <div className="phone-frame__notch" />
                <div className="phone-frame__screen" style={{ position: "relative" }}>
                  <Image
                    src="/images/projects/healthcare/Sleep.png"
                    alt="Clickable report with video guide — tap to play"
                    width={1560}
                    height={3376}
                    sizes="280px"
                  />
                  <div style={{
                    position: "absolute",
                    top: "56%",
                    left: "8%",
                    right: "8%",
                    display: "flex",
                    justifyContent: "center",
                  }}>
                    <video
                      autoPlay loop muted playsInline
                      style={{ width: "100%", borderRadius: 8, cursor: "pointer" }}
                    >
                      <source
                        src="/images/projects/healthcare/video.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <div className="phone-frame__bar" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Iterations */}
        <ScrollReveal>
          <div className="section" id="sec-iterations">
            <h2>Iterations</h2>
            <h3>Finding the right amount of information</h3>
            <p>
              I explored different chart styles, layouts, and levels
              of detail to make health reports easier to read.
            </p>
            <p>
              Through user feedback, I refined the information
              hierarchy and interactions to balance useful detail with
              readability.
            </p>
            <div className="cs-iteration-crop cs-iteration-crop--zoom">
              <Image
                src="/images/projects/healthcare/design3-cropped.png"
                alt="Design iteration explorations across multiple screens"
                width={11000}
                height={7200}
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Takeaway */}
        <ScrollReveal>
          <div className="section" id="sec-takeaway">
            <h2>Takeaway</h2>
            <h3>Clear information helps people make sense of their health</h3>
            <p>
              This project taught me that presenting accurate data
              isn&apos;t enough. People also need to understand what
              the information means.
            </p>
            <p>
              By combining clearer visuals, simpler language, and
              flexible content formats, I designed an experience that
              made personal health reports easier to explore.
            </p>
          </div>
        </ScrollReveal>

        <div className="proj-nav-bar">
          <Link href="/">← All Projects</Link>
          <Link href="/projects/ai-agent">Next: Teaching AI →</Link>
        </div>
      </div>
    </>
  );
}
