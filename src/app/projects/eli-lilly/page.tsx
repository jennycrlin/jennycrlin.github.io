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
  { label: "Research", href: "#sec-research", childIds: ["sec-challenge", "sec-workshop", "sec-personas"] },
  { label: "Design", href: "#sec-design", childIds: ["sec-source", "sec-ai", "sec-collab"] },
];

export default function EliLillyPage() {
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

        <div className="proj-hero-video--desktop">
          <div className="monitor-bezel">
            <video autoPlay loop muted playsInline>
              <source
                src="/images/projects/eli-lilly/overview.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="monitor-chin" />
          <div className="monitor-neck" />
          <div className="monitor-base" />
        </div>
      </div>

      <div className="proj-content-full">
        <SectionProgress sections={NAV_SECTIONS} />
        <ScrollReveal>
          <div className="section" id="sec-overview">
            <p className="cs-label">Overview</p>
            <h2 className="cs-heading">
              Three roles, one broken handoff loop
            </h2>
            <p>
              Clinical trial documentation at Lilly was fragmented across
              Design Studio, Excel exports, and Word documents &mdash;
              forcing manual, line-by-line reconciliation every revision
              cycle. I led the design of Collab Studio, an AI-enabled
              platform establishing a single source of truth for protocol
              authoring and cross-functional collaboration.
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
            {/* Design Challenge */}
            <ScrollReveal>
              <div className="section" id="sec-challenge">
                <p className="cs-label">Design Challenge</p>
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

            {/* Research — The Problem */}
            <ScrollReveal>
              <div className="section" id="sec-research">
                <p className="cs-label">Context</p>
                <h2 className="cs-heading">
                  Excel exports broke the design-to-authoring loop
                </h2>
                <p>
                  Designers authored in Design Studio and exported to
                  Excel, but writers rebuilt everything in Word with no
                  way to re-import &mdash; every revision meant manual
                  reconciliation across 7+ handoff points.
                </p>
                <div className="cs-image-full">
                  <Image
                    src="/images/projects/eli-lilly/swimlane.svg"
                    alt="Current-state process flow showing fragmented handoffs: Design Studio to Excel export (manual) to Word rebuild (manual) to line-by-line cross-check"
                    width={1200}
                    height={520}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Research */}
            <ScrollReveal>
              <div className="section" id="sec-workshop">
                <p className="cs-label">Research</p>
                <h2 className="cs-heading">
                  2-day workshop with 6 stakeholder groups
                </h2>
                <p>
                  Facilitated cross-functional design thinking sessions with
                  clinical designers, medical writers, data standards, regulatory,
                  clinical ops, and change management teams.
                </p>
                <div className="figjam-board">
                  <div className="figjam-sticky figjam-sticky--purple" style={{ ["--rotate" as string]: "-0.6deg" }}>
                    <strong>Key pain point</strong><br />
                    Excel exports break structure &mdash; medical writers recreate SoA from scratch every cycle
                  </div>
                  <div className="figjam-sticky figjam-sticky--blue" style={{ ["--rotate" as string]: "0.4deg" }}>
                    <strong>Consensus</strong><br />
                    Design Studio should be improved, not replaced &mdash; teams value it but use it inconsistently
                  </div>
                  <div className="figjam-sticky figjam-sticky--pink" style={{ ["--rotate" as string]: "0.5deg" }}>
                    <strong>Vision</strong><br />
                    Digitally-driven, structured authoring aligned with USDM &mdash; Design Studio as the single source of truth
                  </div>
                  <div className="figjam-sticky figjam-sticky--orange" style={{ ["--rotate" as string]: "-0.3deg" }}>
                    <strong>Strategic goals</strong><br />
                    Reduce cycle time &bull; minimize rework &bull; enable API-ready automation &bull; ensure ICH M11 compliance &bull; lay groundwork for AI
                  </div>
                </div>
                <p className="cs-label" style={{ marginTop: 32 }}>Workshop Output &mdash; Future-State Workflow</p>
                <div className="cs-image-full">
                  <Image
                    src="/images/projects/eli-lilly/art-of-possible.svg"
                    alt="Future-state collaborative workflow synthesized from workshop: Writer Studio dashboard through SOA editing, design review, and study team approval to auto-sync with Design Studio"
                    width={1200}
                    height={920}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* User Personas */}
            <ScrollReveal>
              <div className="section" id="sec-personas">
                <h3>User Personas</h3>
                <Carousel
                  labels={[
                    "Clinical Designer",
                    "Medical Writer",
                    "Study Lead",
                  ]}
                >
                  {[
                    <div key="designer" style={{ maxWidth: 750, margin: "0 auto", overflow: "hidden", borderRadius: 12 }}>
                      <Image
                        src="/images/projects/eli-lilly/Clinical Designer.png"
                        alt="Persona: Clinical Designer — translates scientific intent into structured, operational trial definitions"
                        width={1591}
                        height={1194}
                        sizes="(max-width: 768px) 100vw, 700px"
                        style={{ clipPath: "inset(6px)" }}
                      />
                    </div>,
                    <div key="writer" style={{ maxWidth: 750, margin: "0 auto", overflow: "hidden", borderRadius: 12 }}>
                      <Image
                        src="/images/projects/eli-lilly/Medical Writer.png"
                        alt="Persona: Medical Writer — translates complex scientific inputs into regulatory-ready protocol narratives"
                        width={1591}
                        height={1194}
                        sizes="(max-width: 768px) 100vw, 700px"
                        style={{ clipPath: "inset(6px)" }}
                      />
                    </div>,
                    <div key="lead" style={{ maxWidth: 750, margin: "0 auto", overflow: "hidden", borderRadius: 12 }}>
                      <Image
                        src="/images/projects/eli-lilly/Study Lead.png"
                        alt="Persona: Study Lead — responsible for final approval, expects clarity and traceability"
                        width={1591}
                        height={1194}
                        sizes="(max-width: 768px) 100vw, 700px"
                        style={{ clipPath: "inset(6px)" }}
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

            {/* 01 Single Source of Truth */}
            <ScrollReveal>
              <div className="section" id="sec-source">
                <p className="cs-label">01 Architecture</p>
                <h2 className="cs-heading">
                  Single Source of Truth &mdash; Structured data flows
                  eliminate Excel exports
                </h2>
                <p>
                  Data flows from Lilly Ontology through Design Studio
                  to the Study Data Repository &mdash; eliminating
                  Excel exports and keeping every change versioned
                  and traceable.
                </p>
                <div className="cs-image-full">
                  <Image
                    src="/images/projects/eli-lilly/future-state.svg"
                    alt="Future state architecture"
                    width={1200}
                    height={480}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* 02 AI-Assisted Workflows */}
            <ScrollReveal>
              <div className="section" id="sec-ai">
                <p className="cs-label">02 Intelligence</p>
                <h2 className="cs-heading">
                  AI-Assisted Workflows &mdash; Human-in-the-loop
                  compliance and auto-crop
                </h2>
                <p>
                  AI validates compliance, flags misalignment, and
                  suggests split points &mdash; but never auto-corrects.
                  Human-in-the-loop by design.
                </p>
                <div className="cs-solutions-row">
                  <div className="cs-solution-card">
                    <span className="cs-solution-num">1</span>
                    <h3>AI Auto-Crop</h3>
                    <p>Suggests optimal document split points.</p>
                  </div>
                  <div className="cs-solution-card">
                    <span className="cs-solution-num">2</span>
                    <h3>Compliance Validation</h3>
                    <p>Flags ICH M11 and regulatory gaps in real time.</p>
                  </div>
                  <div className="cs-solution-card">
                    <span className="cs-solution-num">3</span>
                    <h3>Inline Protocol View</h3>
                    <p>Preview formatted protocol directly in the platform.</p>
                  </div>
                </div>
                <div className="cs-image-grid-2x2">
                  <figure className="cs-grid-fig">
                    <Image
                      src="/images/projects/eli-lilly/ai-suggest.png"
                      alt="AI Auto-Crop — suggested split points"
                      width={6048}
                      height={4120}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <figcaption>AI Auto-Crop &mdash; split point suggestions</figcaption>
                  </figure>
                  <figure className="cs-grid-fig">
                    <Image
                      src="/images/projects/eli-lilly/ai-suggest2.png"
                      alt="AI Auto-Crop — suggestion detail"
                      width={6048}
                      height={4120}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <figcaption>AI Auto-Crop &mdash; accepted suggestion</figcaption>
                  </figure>
                  <figure className="cs-grid-fig">
                    <Image
                      src="/images/projects/eli-lilly/inline-protocol.png"
                      alt="Inline Protocol View — formatted preview"
                      width={6048}
                      height={4120}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <figcaption>Inline Protocol View &mdash; formatted preview</figcaption>
                  </figure>
                  <figure className="cs-grid-fig">
                    <Image
                      src="/images/projects/eli-lilly/inline-protocol2.png"
                      alt="Inline Protocol View — detail"
                      width={6048}
                      height={4120}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <figcaption>Inline Protocol View &mdash; section detail</figcaption>
                  </figure>
                </div>
              </div>
            </ScrollReveal>

            {/* 03 Collaborative Authoring */}
            <ScrollReveal>
              <div className="section" id="sec-collab">
                <p className="cs-label">03 Collaboration</p>
                <h2 className="cs-heading">
                  Collaborative Authoring &mdash; Role-based permissions
                  with contextual comments
                </h2>
                <p>
                  Role-based permissions let teams collaborate directly
                  in the workspace. Contextual comments anchor to
                  specific SoA sections &mdash; keeping decisions
                  traceable and visible to the full team.
                </p>
                <div className="proj-hero-video--desktop">
                  <div className="monitor-bezel">
                    <video autoPlay loop muted playsInline>
                      <source
                        src="/images/projects/eli-lilly/collab.mov"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className="monitor-chin" />
                  <div className="monitor-neck" />
                  <div className="monitor-base" />
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
