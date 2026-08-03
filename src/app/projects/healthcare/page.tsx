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
  { label: "Context", href: "#sec-context" },
  { label: "Impact", href: "#sec-impact" },
  { label: "Research", href: "#sec-research", childIds: ["sec-persona", "sec-methods"] },
  { label: "Design", href: "#sec-design", childIds: ["sec-system", "sec-aging", "sec-multilingual", "sec-interactive"] },
  { label: "Iterations", href: "#sec-iterations" },
];

export default function HealthcarePage() {
  return (
    <>
      <div className="proj-hero">
        <h1>WCWH Healthcare Mobile App</h1>
        <p className="desc">
          0-to-1 design transforming complex health research data into an
          intuitive mobile experience &mdash; improving report readability
          by 28% and user satisfaction by 40%.
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

      <div className="proj-content-full">
        <SectionProgress sections={NAV_SECTIONS} />

        {/* Context */}
        <ScrollReveal>
          <div className="section" id="sec-context">
            <p className="cs-label">Context</p>
            <h2 className="cs-heading">
              Dense PDF reports left participants disengaged from their
              own health data
            </h2>
            <p>
              The Williamson County and Cities Health District conducts
              longitudinal health research, collecting biometric data
              from participants through Fitbit sensors, environmental
              monitors, and self-reported surveys. Participants received
              dense PDF reports they couldn&apos;t interpret &mdash;
              leading to low engagement and missed health insights. I
              designed a mobile app that transforms raw research data
              into a personal health dashboard covering temperature,
              activity, heart rate, air quality, mood, and sleep.
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
            <p className="cs-label">Research</p>
            <h2 className="cs-heading">
              Participants wanted simpler language, visual context,
              and control over how they consumed data
            </h2>
            <p>
              Through interviews with study participants across diverse
              backgrounds, I uncovered shared frustrations around report
              comprehension &mdash; scientific language felt alienating,
              and static layouts offered no way to explore or compare
              personal metrics over time.
            </p>
            <div className="cs-image-row">
              <ScrollReveal delay={0}>
                <div className="cs-image-half">
                  <Image
                    src="/images/projects/healthcare/people1.png"
                    alt="User quote about scientific reports"
                    width={1316}
                    height={350}
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <div className="cs-image-half">
                  <Image
                    src="/images/projects/healthcare/people2.png"
                    alt="User quote about wanting more information"
                    width={1316}
                    height={350}
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="cs-image-half">
                  <Image
                    src="/images/projects/healthcare/people3.png"
                    alt="User quote about visual learning"
                    width={1316}
                    height={349}
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </ScrollReveal>

        {/* Persona */}
        <ScrollReveal>
          <div className="section" id="sec-persona">
            <p className="cs-label">Persona</p>
            <h2 className="cs-heading">
              A retiree who values health data but struggles with
              medical jargon
            </h2>
            <div className="cs-image-full" style={{ maxWidth: 900, margin: "0 auto" }}>
              <Image
                src="/images/projects/healthcare/persona.png"
                alt="Primary user persona"
                width={4803}
                height={2603}
                sizes="(max-width: 768px) 100vw, 900px"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Methods */}
        <ScrollReveal>
          <div className="section" id="sec-methods">
            <p className="cs-label">Methods</p>
            <h2 className="cs-heading">
              Competitor analysis, content inventory, and IA revealed
              structural gaps
            </h2>
            <Carousel
              labels={[
                "Competitor Analysis",
                "Content Inventory",
                "Information Architecture",
              ]}
            >
              {[
                <div key="competitor" className="cs-image-blend">
                  <Image
                    src="/images/projects/healthcare/method1.png"
                    alt="Competitor analysis matrix"
                    width={2520}
                    height={1620}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>,
                <div key="inventory" className="cs-image-blend">
                  <Image
                    src="/images/projects/healthcare/method2.png"
                    alt="Content inventory spreadsheet"
                    width={2520}
                    height={1620}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>,
                <div key="ia" className="cs-image-blend">
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
          <div className="section" id="sec-system">
            <p className="cs-label">01 &middot; Foundation</p>
            <h2 className="cs-heading">
              A design system built for health data clarity
            </h2>
            <p>
              Established a comprehensive design system with consistent
              color palette, typography, and component patterns &mdash;
              ensuring visual coherence across all health dashboards and
              report screens.
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
          <div className="section" id="sec-aging">
            <p className="cs-label">02 &middot; Data Visualization</p>
            <h2 className="cs-heading">
              Complex biological aging data, simplified into plain
              language
            </h2>
            <p>
              Redesigned the biological aging report to present actual
              age vs. biological age range with intuitive graphs and
              plain-language interpretations &mdash; making results
              actionable without medical expertise.
            </p>
            <div className="phone-frame-pair">
              <div className="phone-frame">
                <div className="phone-frame__notch" />
                <div className="phone-frame__screen">
                  <Image
                    src="/images/projects/healthcare/design1.png"
                    alt="Biological Aging Report — interpreting biological age"
                    width={3352}
                    height={3376}
                    sizes="280px"
                    style={{ width: "200%", maxWidth: "none", marginLeft: "0" }}
                  />
                </div>
                <div className="phone-frame__bar" />
              </div>
              <div className="phone-frame">
                <div className="phone-frame__notch" />
                <div className="phone-frame__screen">
                  <Image
                    src="/images/projects/healthcare/design1.png"
                    alt="Biological Aging Report — age comparison results"
                    width={3352}
                    height={3376}
                    sizes="280px"
                    style={{ width: "200%", maxWidth: "none", marginLeft: "-100%" }}
                  />
                </div>
                <div className="phone-frame__bar" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Multilingual */}
        <ScrollReveal>
          <div className="section" id="sec-multilingual">
            <p className="cs-label">03 &middot; Inclusivity</p>
            <h2 className="cs-heading">
              Bilingual content adapted for cultural context, not just
              translated
            </h2>
            <p>
              Collaborated with a translator to adapt content for
              English and Spanish readers &mdash; reframing language to
              reflect cultural values and ensuring clarity for the
              primarily Hispanic participant population.
            </p>
            <div className="phone-frame-pair">
              <div className="phone-frame">
                <div className="phone-frame__notch" />
                <div className="phone-frame__screen">
                  <Image
                    src="/images/projects/healthcare/design2.png"
                    alt="Healthy aging tips in English"
                    width={2460}
                    height={2532}
                    sizes="280px"
                    style={{ width: "200%", maxWidth: "none", marginLeft: "0" }}
                  />
                </div>
                <div className="phone-frame__bar" />
              </div>
              <div className="phone-frame">
                <div className="phone-frame__notch" />
                <div className="phone-frame__screen">
                  <Image
                    src="/images/projects/healthcare/design2.png"
                    alt="Healthy aging tips in Spanish"
                    width={2460}
                    height={2532}
                    sizes="280px"
                    style={{ width: "200%", maxWidth: "none", marginLeft: "-100%" }}
                  />
                </div>
                <div className="phone-frame__bar" />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Reports */}
        <ScrollReveal>
          <div className="section" id="sec-interactive">
            <p className="cs-label">04 &middot; Engagement</p>
            <h2 className="cs-heading">
              Static PDFs replaced with interactive, video-guided
              reports
            </h2>
            <p>
              Introduced clickable reports with embedded video guides,
              allowing participants to tap links for deeper context
              &mdash; replacing the static PDF experience with an
              interactive, guided format.
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
            <p className="cs-label">Iterations</p>
            <h2 className="cs-heading">
              Multiple rounds refined visualization density and
              interaction patterns
            </h2>
            <p>
              Through design explorations, I tested variations of data
              visualization, layout density, and content structure with
              users at each stage &mdash; iterating toward the right
              balance of information richness and visual clarity.
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

        <div className="proj-nav-bar">
          <Link href="/">← All Projects</Link>
          <Link href="/projects/ai-agent">Next: Teaching AI →</Link>
        </div>
      </div>
    </>
  );
}
