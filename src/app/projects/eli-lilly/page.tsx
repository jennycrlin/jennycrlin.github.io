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
      { label: "Personas", href: "#sec-personas" },
    ],
  },
  {
    title: "Design",
    href: "#sec-design",
    children: [
      { label: "Collab Studio", href: "#sec-studio" },
      { label: "Inline Review", href: "#sec-review" },
      { label: "Data Editing", href: "#sec-data" },
    ],
  },
];

export default function EliLillyPage() {
  return (
    <>
      <div className="proj-hero">
        <h1>Clinical Trial Protocol Digitalization</h1>
        <p className="desc">
          Designing an AI-enabled digital platform that transforms
          paper-based clinical trial workflows into governed, real-time
          collaboration for protocol authoring and regulatory compliance.
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

      {/* Public content — aligned with hero */}
      <div className="proj-public">
        <ScrollReveal>
          <div className="section" id="sec-overview">
            <h2>Overview</h2>
            <p>
              Clinical trial documentation workflows were fragmented,
              paper-heavy, and heavily dependent on manual coordination
              across writers, designers, and clinical teams. This resulted
              in inconsistent updates, low visibility, and high risk in
              regulated environments.
            </p>
            <p>
              I designed Writer&apos;s Studio, an internal FDA-regulated
              platform that transforms static document-based workflows into
              a real-time, structured, and auditable digital system for
              clinical trial design and execution.
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

            <ScrollReveal>
              <div className="section" id="sec-research">
                <h2>Research</h2>
                <p>
                  Conducted moderated usability testing with internal
                  stakeholders across three distinct roles. Each persona
                  represents a key user in the clinical trial protocol
                  workflow — from designing the study structure to writing
                  regulatory narratives to final approval.
                </p>
              </div>
            </ScrollReveal>

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
                        alt="Persona: Dezi Designer — translates scientific intent into structured, operational trial definitions"
                        width={1591}
                        height={1194}
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>,
                    <div key="writer">
                      <Image
                        src="/images/projects/eli-lilly/Medical Writer.png"
                        alt="Persona: Winona Writer — translates complex scientific inputs into regulatory-ready protocol narratives"
                        width={1591}
                        height={1194}
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>,
                    <div key="lead">
                      <Image
                        src="/images/projects/eli-lilly/Study Lead.png"
                        alt="Persona: Sam Study Lead — responsible for final approval, expects clarity and traceability"
                        width={1591}
                        height={1194}
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>,
                  ]}
                </Carousel>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="section" id="sec-design">
                <h2>Design</h2>
              </div>
            </ScrollReveal>

            <ShowcaseReveal>
              <div className="cs-showcase" id="sec-studio">
                <div className="cs-showcase-sticky">
                  <h3>
                    Writer&apos;s Studio — Collaborative Authoring
                  </h3>
                  <p>
                    Replacing fragmented Word-and-email workflows
                    with a unified digital workspace.
                  </p>
                </div>

                <div className="cs-showcase-scroll">
                  <div className="cs-showcase-item">
                    <div className="cs-showcase-num">01</div>
                    <h4>Collaborative Studio</h4>
                    <p>
                      Medical writers previously downloaded Word documents,
                      made edits offline, and re-uploaded revised files to
                      the design team — creating version conflicts, lost
                      comments, and weeks of back-and-forth. Writer&apos;s
                      Studio provides a shared digital workspace where
                      writers, designers, and study leads work on the same
                      document simultaneously with role-based permissions.
                    </p>
                    <div className="img-placeholder" style={{ height: 280 }}>
                      Collaborative Studio — Real-time Editing
                    </div>
                  </div>

                  <div className="cs-showcase-item" id="sec-review">
                    <div className="cs-showcase-num">02</div>
                    <h4>Inline Review &amp; Commenting</h4>
                    <p>
                      Instead of scattered feedback across emails, PDFs, and
                      Excel trackers, all review happens inline. Writers
                      annotate directly on protocol sections, designers
                      respond with structured data changes, and study leads
                      approve with full visibility into the discussion
                      thread — ensuring nothing gets lost between review
                      cycles.
                    </p>
                    <div className="img-placeholder" style={{ height: 280 }}>
                      Inline Review — Comment Threads &amp; Approvals
                    </div>
                  </div>

                  <div className="cs-showcase-item" id="sec-data">
                    <div className="cs-showcase-num">03</div>
                    <h4>Structured Data Editing</h4>
                    <p>
                      Clinical designers can edit structured data fields —
                      visit schedules, procedures, assessments — directly
                      within the platform. Changes propagate automatically
                      to the protocol narrative, maintaining alignment
                      between the Schedule of Activities (SoA) and the
                      written protocol without manual re-entry.
                    </p>
                    <div className="img-placeholder" style={{ height: 280 }}>
                      Data Table — Edit &amp; Auto-Sync to Narrative
                    </div>
                  </div>
                </div>
              </div>
            </ShowcaseReveal>

            <div className="proj-nav-bar">
              <Link href="/projects/apex">&larr; Apex Fintech</Link>
              <Link href="/projects/healthcare">Next: Healthcare &rarr;</Link>
            </div>
          </main>
        </div>
      </PasswordGate>
    </>
  );
}
