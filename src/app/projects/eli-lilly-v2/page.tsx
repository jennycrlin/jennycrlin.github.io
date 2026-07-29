import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PasswordGate } from "@/components/PasswordGate";
import { Carousel } from "@/components/Carousel";
import { SectionProgress } from "@/components/SectionProgress";

export const metadata: Metadata = {
  title: "Eli Lilly — Jenny Lin",
};

const NAV_SECTIONS = [
  { label: "Overview", href: "#sec-overview" },
  { label: "Impact", href: "#sec-impact" },
  { label: "Research", href: "#sec-research", childIds: ["sec-challenge", "sec-workshop", "sec-insights", "sec-personas"] },
  { label: "Design", href: "#sec-design", childIds: ["sec-source", "sec-ai", "sec-collab"] },
];

export default function EliLillyV2Page() {
  return (
    <>
      <div className="proj-hero">
        <h1>Clinical Trial Protocol Digitalization</h1>
        <p className="desc">
          Transforming paper-based clinical workflows into a governed,
          AI-enabled system &mdash; reducing manual data entry by 38%
          and improving protocol adherence by 43%.
        </p>
        <div className="meta-grid">
          <div className="meta-item">
            <label>My Role</label>
            <span>UX Researcher, UX Designer</span>
          </div>
          <div className="meta-item">
            <label>Team</label>
            <span>1 PM, 2 Clinical Stakeholders</span>
          </div>
          <div className="meta-item">
            <label>Timeline</label>
            <span>3 Months</span>
          </div>
          <div className="meta-item">
            <label>Industry</label>
            <span>Healthcare / Pharma</span>
          </div>
        </div>
      </div>

      <div className="proj-content-full">
        <SectionProgress sections={NAV_SECTIONS} />
        {/* Public content */}
        <ScrollReveal>
          <div className="section" id="sec-overview">
            <p className="cs-label">Overview</p>
            <h2 className="cs-heading">
              Three roles, one broken handoff loop
            </h2>
            <p>
              Clinical trial documentation at Lilly was fragmented across
              Design Studio, Excel exports, and Word documents. Clinical
              designers authored structured data but had no way to
              re-import changes &mdash; forcing manual, line-by-line
              reconciliation across every revision cycle.
            </p>
            <p>
              I led the design of Collab Studio, an AI-enabled digital
              platform that establishes Design Studio as the single source
              of truth for protocol authoring, SoA management, and
              cross-functional collaboration.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="section" id="sec-impact">
            <h2>Impact</h2>
          </div>
        </ScrollReveal>
        <div className="cs-stats cs-stats--three">
          <ScrollReveal delay={0}>
            <div className="cs-stat-card">
              <div className="cs-stat-number">38%</div>
              <div className="cs-stat-title">Manual Data Entry</div>
              <p>Reduction through automated workflows.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="cs-stat-card">
              <div className="cs-stat-number">43%</div>
              <div className="cs-stat-title">Protocol Adherence</div>
              <p>Improvement in compliance rates.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="cs-stat-card">
              <div className="cs-stat-number">70%</div>
              <div className="cs-stat-title">Workflow Speed</div>
              <p>Faster completion across teams.</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Password-protected content */}
        <PasswordGate code="5600">
          {/* Product Demo */}
          <ScrollReveal>
            <div className="section" id="sec-demo">
              <h2>Product Demo</h2>
              <div className="cs-video-embed">
                <video autoPlay loop muted playsInline>
                  <source
                    src="/images/projects/eli-lilly/overview.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </ScrollReveal>

          {/* Design Challenge */}
          <ScrollReveal>
            <div className="section" id="sec-challenge">
              <blockquote>
                <p>
                  How Might We transform trial design from a static
                  document exercise into a living, structured, and
                  intelligent system that empowers writers, designers,
                  and clinical teams to create studies with
                  single-source of truth?
                </p>
              </blockquote>
            </div>
          </ScrollReveal>

          {/* Context */}
          <ScrollReveal>
            <div className="section" id="sec-research">
              <p className="cs-label">Context</p>
              <h2 className="cs-heading">
                Excel exports broke the design-to-authoring loop
              </h2>
              <p>
                Clinical designers authored in Design Studio and
                exported to Excel for SoA review &mdash; but medical
                writers rebuilt everything in Word, with no path to
                re-import changes. Every revision meant manual
                line-by-line reconciliation across 7+ handoff points.
              </p>
              <div className="cs-image-full">
                <Image
                  src="/images/projects/eli-lilly/swimlane.svg"
                  alt="Current-state process flow showing fragmented handoffs"
                  width={1200}
                  height={520}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Workshop */}
          <ScrollReveal>
            <div className="section" id="sec-workshop">
              <p className="cs-label">Research</p>
              <h2 className="cs-heading">
                A 2-day workshop turned pain points into a
                prioritized vision
              </h2>
              <p>
                I facilitated a cross-functional design thinking
                workshop with clinical designers, medical writers,
                data standards teams, and compliance stakeholders
                &mdash; six groups with competing needs. The workshop
                established shared understanding through 5W1H analysis
                and moved the initiative from awareness to activation.
              </p>
            </div>
          </ScrollReveal>

          {/* Insights */}
          <ScrollReveal>
            <div className="section" id="sec-insights">
              <p className="cs-label">Insights</p>
              <h2 className="cs-heading">
                Trust in the tool was high &mdash; trust in the
                workflow was not
              </h2>
              <p>
                Stakeholders valued Design Studio but couldn&apos;t
                rely on it as a single source of truth. The root
                cause wasn&apos;t the tool &mdash; it was the
                workflow: Excel exports lost structure, manual
                review had no change tracking, and medical writers
                recreated SoA from scratch every cycle.
              </p>
              <div className="cs-quotes-grid cs-quotes-grid--inline">
                <div className="cs-quote-card">
                  <p className="cs-quote-text">
                    I think DS is <strong>not appreciated and
                    optimised enough</strong> &mdash; retaining
                    control over such an instrumental &amp; proprietary
                    process is not to be underestimated.
                  </p>
                  <p className="cs-quote-role">Stakeholder Feedback</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Personas */}
          <ScrollReveal>
            <div className="section" id="sec-personas">
              <p className="cs-label">Users</p>
              <h2 className="cs-heading">
                Three roles, different pain points, same gap
              </h2>
              <Carousel
                labels={[
                  "Clinical Designer",
                  "Medical Writer",
                  "Study Lead",
                ]}
              >
                {[
                  <div key="designer">
                    <Image
                      src="/images/projects/eli-lilly/Clinical Designer.png"
                      alt="Persona: Clinical Designer"
                      width={1591}
                      height={1194}
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>,
                  <div key="writer">
                    <Image
                      src="/images/projects/eli-lilly/Medical Writer.png"
                      alt="Persona: Medical Writer"
                      width={1591}
                      height={1194}
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>,
                  <div key="lead">
                    <Image
                      src="/images/projects/eli-lilly/Study Lead.png"
                      alt="Persona: Study Lead"
                      width={1591}
                      height={1194}
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

          <ScrollReveal>
            <div className="section" id="sec-source">
              <p className="cs-label">01 &middot; Architecture</p>
              <h2 className="cs-heading">
                One source of truth replaces seven handoff points
              </h2>
              <p>
                Structured data flows from Lilly Ontology through
                Design Studio to the Study Data Repository. View
                History gives every stakeholder a full audit trail
                &mdash; no one has to ask &ldquo;which version is
                correct&rdquo; because the answer is always the
                current state.
              </p>
              <div className="cs-image-full">
                <Image
                  src="/images/projects/eli-lilly/future-state.svg"
                  alt="Future state architecture: data sources flow through Design Studio to SDR as Single Source of Truth"
                  width={1200}
                  height={480}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section" id="sec-ai">
              <p className="cs-label">02 &middot; Intelligence</p>
              <h2 className="cs-heading">
                AI assists at key moments &mdash; but never
                auto-corrects
              </h2>
              <p>
                AI validates ICH M11 compliance, suggests where to
                split documents with auto-crop, and lets teams
                preview formatted protocols inline &mdash; no
                download, no context-switching. Every suggestion
                surfaces with context so the user decides whether
                to accept. Human-in-the-loop by design.
              </p>
              <div className="cs-image-full cs-image-placeholder">
                <div style={{
                  background: "var(--surface2)",
                  borderRadius: 12,
                  padding: "80px 40px",
                  textAlign: "center",
                  color: "var(--text3)",
                  fontSize: 14,
                }}>
                  Product screenshot coming soon
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section" id="sec-collab">
              <p className="cs-label">03 &middot; Collaboration</p>
              <h2 className="cs-heading">
                Invite, comment, approve &mdash; all in one
                governed workspace
              </h2>
              <p>
                Invite people directly with role-based permissions.
                Leave contextual comments anchored to specific SoA
                sections. Every discussion is visible to the full
                team, so decisions are traceable and no feedback
                gets lost between email threads.
              </p>
              <div className="cs-image-full cs-image-placeholder">
                <div style={{
                  background: "var(--surface2)",
                  borderRadius: 12,
                  padding: "80px 40px",
                  textAlign: "center",
                  color: "var(--text3)",
                  fontSize: 14,
                }}>
                  Product screenshot coming soon
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="proj-nav-bar">
            <Link href="/projects/apex">&larr; Apex Fintech</Link>
            <Link href="/projects/healthcare">
              Next: Healthcare &rarr;
            </Link>
          </div>
        </PasswordGate>
      </div>
    </>
  );
}
