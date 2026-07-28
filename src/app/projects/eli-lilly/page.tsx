import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PasswordGate } from "@/components/PasswordGate";
import { Carousel } from "@/components/Carousel";
import { ShowcaseReveal } from "@/components/ShowcaseReveal";

export const metadata: Metadata = {
  title: "Eli Lilly — Jenny Lin",
};

const TOC_SECTIONS = [
  {
    title: "Research",
    href: "#sec-research",
    children: [
      { label: "Workshop", href: "#sec-workshop" },
      { label: "Insights", href: "#sec-insights" },
    ],
  },
  {
    title: "Design",
    href: "#sec-design",
    children: [
      { label: "Source of Truth", href: "#sec-source" },
      { label: "AI Workflows", href: "#sec-ai" },
      { label: "Collab Studio", href: "#sec-collab" },
    ],
  },
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
      </div>

      {/* Public content */}
      <div className="proj-public">
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
      </div>

      {/* Password-protected content with sidebar */}
      <PasswordGate code="5600">
        <div className="proj-body-wrap">
          <ProjectSidebar sections={TOC_SECTIONS} />
          <main className="proj-content">
            {/* Product Demo — confidential */}
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

            {/* Research — The Problem */}
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
                    alt="Current-state process flow showing fragmented handoffs: Design Studio to Excel export (manual) to Word rebuild (manual) to line-by-line cross-check"
                    width={1200}
                    height={520}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Workshop Discovery */}
            <ScrollReveal>
              <div className="section" id="sec-workshop">
                <p className="cs-label">Research</p>
                <h2 className="cs-heading">
                  Cross-functional workshop surfaced 6 stakeholder
                  groups with competing needs
                </h2>
                <p>
                  I facilitated a 2-day design thinking workshop with
                  clinical designers, medical writers, data standards
                  teams, and compliance stakeholders. The workshop moved
                  the initiative from awareness to activation &mdash;
                  turning current-state pain points into a clear,
                  prioritized vision for future-state workflows.
                </p>

                {/* Workshop Pillars — replaces workshop.png */}
                <div className="cs-info-cards" style={{ marginTop: 24 }}>
                  <div className="cs-info-card">
                    <h4>01 &middot; Ideas to Action</h4>
                    <ul>
                      <li>Translate big concepts into tangible outputs, roadmaps, and next steps</li>
                    </ul>
                  </div>
                  <div className="cs-info-card">
                    <h4>02 &middot; Strategic Alignment</h4>
                    <ul>
                      <li>Create shared understanding of goals, challenges, and community needs</li>
                    </ul>
                  </div>
                </div>
                <div className="cs-info-cards" style={{ marginTop: 12 }}>
                  <div className="cs-info-card">
                    <h4>03 &middot; Identify Gaps</h4>
                    <ul>
                      <li>Uncover blind spots, overlaps, and areas for improvement in the current process</li>
                    </ul>
                  </div>
                  <div className="cs-info-card">
                    <h4>04 &middot; Surface Perspectives</h4>
                    <ul>
                      <li>Elevate voices from different roles, backgrounds, and geographies</li>
                    </ul>
                  </div>
                </div>

                {/* 5W1H Analysis — replaces 5w1h.png */}
                <h3>5W1H Analysis</h3>
                <p>
                  Established shared understanding across 6 stakeholder
                  groups by mapping the who, what, why, when, and where
                  of the USDM &amp; Design Studio transformation.
                </p>
                <div className="cs-lilly-5w1h">
                  <div className="cs-5w1h-item">
                    <div className="cs-5w1h-label">Who?</div>
                    <div className="cs-5w1h-content">
                      Protocol Design &amp; Clinical Designers, Medical
                      Writers, Data Standards &amp; Tech Teams,
                      Regulatory &amp; Compliance, Clinical Operations,
                      UX &amp; Change Management
                    </div>
                  </div>
                  <div className="cs-5w1h-item">
                    <div className="cs-5w1h-label">What?</div>
                    <div className="cs-5w1h-content">
                      Establish a digitally-driven, standardized
                      authoring process for study design (SoA + Protocol)
                      that aligns with USDM &mdash; reducing rework,
                      improving traceability, and enabling automation
                      through Design Studio as the single source of truth
                    </div>
                  </div>
                  <div className="cs-5w1h-item">
                    <div className="cs-5w1h-label">Why?</div>
                    <div className="cs-5w1h-content">
                      Reduce cycle time between design, protocol, and
                      system setup. Minimize rework from late-stage edits.
                      Enable automation via clean, API-ready study
                      definitions. Ensure ICH M11 and FDA compliance.
                    </div>
                  </div>
                  <div className="cs-5w1h-item">
                    <div className="cs-5w1h-label">When?</div>
                    <div className="cs-5w1h-content">
                      Current: hybrid workflows, Excel still prevalent.
                      Future (Release 2+): fully integrated PI process,
                      SoA comparison tool, structured comments natively
                      supported.
                    </div>
                  </div>
                  <div className="cs-5w1h-item">
                    <div className="cs-5w1h-label">Where?</div>
                    <div className="cs-5w1h-content">
                      Design Studio, SDR Database, downstream systems
                      (EDC, CTMS, RTSM), workshops &amp; pilots for
                      collaborative testing.
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Stakeholder Insights */}
            <ScrollReveal>
              <div className="section" id="sec-insights">
                <p className="cs-label">Insights</p>
                <h2 className="cs-heading">
                  Trust in the tool was high &mdash; trust in the
                  workflow was not
                </h2>
                <p>
                  Tool exploration revealed stakeholders valued Design
                  Studio but couldn&apos;t rely on it as a single source
                  of truth. Key pain points: exporting to Excel caused
                  structure loss, manual review had no change tracking,
                  and medical writers recreated SoA from scratch in
                  Word every cycle.
                </p>

                {/* Stakeholder quotes — replaces sentiment.png */}
                <div className="cs-quotes-grid cs-quotes-grid--inline">
                  <div className="cs-quote-card">
                    <p className="cs-quote-text">
                      <strong>Design Studio has a lot of features that
                      people use inconsistently</strong> based upon what
                      their teams and leadership want. It&apos;s easy to
                      use and teams like the feel of it during design.
                    </p>
                    <p className="cs-quote-role">Stakeholder Feedback</p>
                  </div>
                  <div className="cs-quote-card">
                    <p className="cs-quote-text">
                      I think DS is <strong>not appreciated and
                      optimised enough</strong> &mdash; retaining
                      control over such an instrumental &amp; proprietary
                      process is not to be underestimated. I would invest
                      significantly in V2+.
                    </p>
                    <p className="cs-quote-role">Stakeholder Feedback</p>
                  </div>
                  <div className="cs-quote-card">
                    <p className="cs-quote-text">
                      I don&apos;t know of another tool that would work
                      for our purposes, but I do think <strong>Design
                      Studio could be greatly improved</strong> &mdash;
                      usability and the background data could be
                      optimized.
                    </p>
                    <p className="cs-quote-role">Stakeholder Feedback</p>
                  </div>
                  <div className="cs-quote-card">
                    <p className="cs-quote-text">
                      <strong>Exporting to Excel</strong> (behavior)
                      &mdash; structure loss &mdash; versioning.
                      <strong> Manual review process</strong> for those
                      changes. MRs recreating SoA. No design complete
                      gate.
                    </p>
                    <p className="cs-quote-role">Problem Hypothesis</p>
                  </div>
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
                    <div key="designer">
                      <Image
                        src="/images/projects/eli-lilly/Clinical Designer.png"
                        alt="Persona: Clinical Designer — translates scientific intent into structured, operational trial definitions"
                        width={1591}
                        height={1194}
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>,
                    <div key="writer">
                      <Image
                        src="/images/projects/eli-lilly/Medical Writer.png"
                        alt="Persona: Medical Writer — translates complex scientific inputs into regulatory-ready protocol narratives"
                        width={1591}
                        height={1194}
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>,
                    <div key="lead">
                      <Image
                        src="/images/projects/eli-lilly/Study Lead.png"
                        alt="Persona: Study Lead — responsible for final approval, expects clarity and traceability"
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

            <ShowcaseReveal>
              <div className="cs-showcase" id="sec-showcase">
                <div className="cs-showcase-sticky">
                  <h3>
                    Collab Studio &mdash; Governed Digital Authoring
                  </h3>
                  <p>
                    Replacing fragmented handoffs with a structured,
                    AI-enabled workspace for protocol design and
                    execution.
                  </p>
                </div>

                <div className="cs-showcase-scroll">
                  <div className="cs-showcase-item" id="sec-source">
                    <div className="cs-showcase-num">01</div>
                    <h4>Single Source of Truth</h4>
                    <p>
                      Structured data flows from Lilly Ontology through
                      Design Studio to the Study Data Repository &mdash;
                      eliminating Excel exports and ensuring every
                      change is versioned, aligned, and traceable
                      across the full protocol lifecycle.
                    </p>
                    <div className="cs-image-full">
                      <Image
                        src="/images/projects/eli-lilly/future-state.svg"
                        alt="Future state architecture: Lilly Ontology and USDM feed into Design Studio, which submits aligned SoA data to SDR as Single Source of Truth, then outputs formatted SoA tables and protocol narratives"
                        width={1200}
                        height={480}
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </div>

                  <div className="cs-showcase-item" id="sec-ai">
                    <div className="cs-showcase-num">02</div>
                    <h4>AI-Assisted Workflows</h4>
                    <p>
                      AI validates protocol compliance with ICH M11,
                      auto-generates formatted SoA tables, and flags
                      misalignment between design and narrative &mdash;
                      reducing rework from late-stage edits and
                      version drift.
                    </p>
                    {/* Key benefits — replaces writers-studio.png */}
                    <div className="cs-lilly-benefits">
                      <div className="cs-benefit-card">
                        <div className="cs-benefit-num">1</div>
                        <h5>Reduced Rework</h5>
                        <p>
                          Real-time visibility and structured editing
                          eliminate the manual reconciliation cycles
                          that plagued the old workflow.
                        </p>
                      </div>
                      <div className="cs-benefit-card">
                        <div className="cs-benefit-num">2</div>
                        <h5>Preserved Structure</h5>
                        <p>
                          Guided editing within the platform maintains
                          SoA structure and formatting, preventing the
                          structural breaks from Word.
                        </p>
                      </div>
                      <div className="cs-benefit-card">
                        <div className="cs-benefit-num">3</div>
                        <h5>Auditable Governance</h5>
                        <p>
                          Every edit, comment, and alignment decision
                          is captured and traceable, providing
                          compliance teams with a clear audit trail.
                        </p>
                      </div>
                      <div className="cs-benefit-card">
                        <div className="cs-benefit-num">4</div>
                        <h5>True Collaboration</h5>
                        <p>
                          Contextual comments, shared visibility, and
                          explicit alignment stages transform isolated
                          document editing into cohesive,
                          cross-functional collaboration.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="cs-showcase-item" id="sec-collab">
                    <div className="cs-showcase-num">03</div>
                    <h4>Collaborative Authoring</h4>
                    <p>
                      Medical writers, clinical designers, and study
                      leads work in the same governed workspace with
                      role-based permissions, contextual comments, and
                      real-time visibility into changes &mdash;
                      eliminating offline Word-and-email review cycles.
                    </p>
                    <div className="cs-lilly-collab-flow">
                      <div className="cs-collab-step">
                        <div className="cs-collab-role">Clinical Designer</div>
                        <div className="cs-collab-action">Authors structured SoA data in Design Studio</div>
                      </div>
                      <div className="cs-collab-arrow">&rarr;</div>
                      <div className="cs-collab-step">
                        <div className="cs-collab-role">Medical Writer</div>
                        <div className="cs-collab-action">Reviews and annotates inline with contextual comments</div>
                      </div>
                      <div className="cs-collab-arrow">&rarr;</div>
                      <div className="cs-collab-step">
                        <div className="cs-collab-role">Study Lead</div>
                        <div className="cs-collab-action">Approves with full visibility into discussion threads</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ShowcaseReveal>

            <div className="proj-nav-bar">
              <Link href="/projects/apex">&larr; Apex Fintech</Link>
              <Link href="/projects/healthcare">
                Next: Healthcare &rarr;
              </Link>
            </div>
          </main>
        </div>
      </PasswordGate>
    </>
  );
}
