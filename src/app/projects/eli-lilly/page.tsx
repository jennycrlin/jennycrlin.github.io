import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PasswordGate } from "@/components/PasswordGate";
import { SectionProgress } from "@/components/SectionProgress";
import { Carousel } from "@/components/Carousel";

export const metadata: Metadata = {
  title: "Eli Lilly — Jenny Lin",
};

const NAV_SECTIONS = [
  { label: "Overview", href: "#sec-overview" },
  { label: "Impact", href: "#sec-impact" },
  { label: "Research", href: "#sec-research" },
  { label: "Design", href: "#sec-design", childIds: ["sec-source", "sec-ai", "sec-collab"] },
  { label: "Takeaway", href: "#sec-takeaway" },
];

export default function EliLillyPage() {
  const isVercel = process.env.VERCEL === "1";

  return (
    <>
      <div className="proj-hero">
        <h1>Clinical Trial Protocol Digitalization</h1>
        <p className="desc">
          A shared workspace for medical writers, designers, and study
          teams to edit, review, and approve clinical protocols &mdash;
          without constantly moving files between tools.
        </p>
        <div className="meta-grid">
          <div className="meta-item">
            <label>My Role</label>
            <span>UX Researcher, UX Designer</span>
          </div>
          <div className="meta-item">
            <label>Team</label>
            <span>1 Product Manager, 2 Clinical Stakeholders</span>
          </div>
          <div className="meta-item">
            <label>Timeline</label>
            <span>3 Months</span>
          </div>
        </div>

        <div className="hero-showcase-desktop">
          <div className="hero-showcase-monitor">
            <div className="monitor-bezel">
              <Image
                src="/images/projects/eli-lilly/soa.png"
                alt="Collab Studio dashboard — My SoAs list view with status tracking and team assignments"
                width={6048}
                height={5132}
                sizes="(max-width: 768px) 100vw, 680px"
                priority
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '2px 2px 0 0' }}
              />
            </div>
            <div className="monitor-chin" />
            <div className="monitor-neck" />
            <div className="monitor-base" />
          </div>
          <div className="hero-showcase-cards">
            <div className="hero-showcase-float">
              <Image
                src="/images/projects/eli-lilly/soa-comment2.png"
                alt="SoA commenting — threaded discussions anchored to specific protocol sections"
                width={6048}
                height={4120}
                sizes="(max-width: 768px) 100vw, 280px"
              />
            </div>
            <div className="hero-showcase-float">
              <Image
                src="/images/projects/eli-lilly/soa-history.png"
                alt="SoA version history — audit trail of all changes by team members"
                width={6048}
                height={4120}
                sizes="(max-width: 768px) 100vw, 280px"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="proj-content-full">
        <SectionProgress sections={NAV_SECTIONS} />
        <ScrollReveal>
          <div className="section" id="sec-overview">
            <h2>Overview</h2>
            <h3>Too many tools, too many handoffs</h3>
            <p>
              Clinical designers worked in Design Studio, while medical
              writers relied on Excel exports and Word documents. Every
              revision meant downloading files, making changes, and
              manually checking that everything still matched.
            </p>
            <p>
              I helped design Collab Studio, a shared workspace where
              teams could edit, comment, and review protocols in one
              place, with AI suggestions to reduce repetitive work.
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
        <PasswordGate code="we1come" popup={isVercel}>
            {/* Research — tabbed */}
            <ScrollReveal>
              <div className="section" id="sec-research">
                <h2>Research</h2>
                <Carousel
                  labels={[
                    "Discovery",
                    "Stakeholder Workshop",
                    "User Personas",
                    "Usability Testing",
                  ]}
                >
                  {[
                    <div key="discovery" className="carousel-content-panel">
                      <h3>Every revision risked outdated information</h3>
                      <p>
                        Writers had to move content between Design
                        Studio, Excel, Word, and the SoA system.
                        Updates didn&apos;t automatically carry across
                        tools, leaving teams to catch mismatches
                        manually. We needed a way to keep protocol
                        content aligned without disrupting the
                        workflows teams already knew.
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
                    </div>,

                    <div key="workshop" className="carousel-content-panel">
                      <h3>Finding where the workflow broke down</h3>
                      <p>
                        I facilitated a two-day workshop with six
                        stakeholder groups, including medical writers,
                        clinical designers, regulatory, and operations
                        teams. We found that Excel exports and Word
                        edits created repeated work, while teams still
                        wanted to keep the familiar Design Studio
                        experience.
                      </p>
                      <p>
                        Design direction: Keep familiar workflows,
                        remove unnecessary handoffs, and make updates
                        easier to track.
                      </p>
                      <div className="cs-image-full">
                        <Image
                          src="/images/projects/eli-lilly/art-of-possible.svg"
                          alt="Future-state collaborative workflow: writer opens dashboard, edits SoA, designer reviews, study team approves, auto-sync to Design Studio"
                          width={1200}
                          height={920}
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>
                    </div>,

                    <div key="personas" className="carousel-content-panel">
                      <h3>Two roles, different needs</h3>
                      <p>
                        From the stakeholder workshop, I developed two
                        personas to capture the different needs of
                        medical writers and clinical designers. Writers
                        needed an easier way to edit and format
                        protocols without moving between tools.
                        Designers needed to review changes, leave
                        feedback, and keep study information aligned.
                      </p>
                      <p>
                        These differences helped shape the role-specific
                        editing and review experiences in Collab Studio.
                      </p>
                      <div className="cs-image-row">
                        <div className="cs-image-full">
                          <Image
                            src="/images/projects/eli-lilly/designer.png"
                            alt="Persona: Clinical Designer"
                            width={1591}
                            height={1194}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <div className="cs-image-full">
                          <Image
                            src="/images/projects/eli-lilly/writer.png"
                            alt="Persona: Medical Writer"
                            width={1591}
                            height={1194}
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    </div>,

                    <div key="usability" className="carousel-content-panel">
                      <h3>Testing the workflow from start to finish</h3>
                      <p>
                        I ran moderated usability tests with internal
                        participants across five tasks, comparing the
                        existing and redesigned workflows. I tracked
                        task completion, time on task, and content
                        accuracy to evaluate the end-to-end experience.
                      </p>
                      <div className="figjam-board figjam-board--steps">
                        <div className="figjam-sticky figjam-sticky--purple" style={{ ["--rotate" as string]: "-0.6deg" }}>
                          <strong>01 &middot; Edit SoA</strong><br />
                          Update protocol content and submit changes.
                        </div>
                        <div className="figjam-sticky figjam-sticky--blue" style={{ ["--rotate" as string]: "0.4deg" }}>
                          <strong>02 &middot; Review Feedback</strong><br />
                          Read comments and approve or reject changes.
                        </div>
                        <div className="figjam-sticky figjam-sticky--pink" style={{ ["--rotate" as string]: "-0.3deg" }}>
                          <strong>03 &middot; Use AI Suggestions</strong><br />
                          Review pagination suggestions and adjust table splits.
                        </div>
                        <div className="figjam-sticky figjam-sticky--orange" style={{ ["--rotate" as string]: "0.5deg" }}>
                          <strong>04 &middot; Designer Review</strong><br />
                          Review the updated SoA and leave comments.
                        </div>
                        <div className="figjam-sticky figjam-sticky--salmon" style={{ ["--rotate" as string]: "-0.4deg" }}>
                          <strong>05 &middot; Finalize &amp; Submit</strong><br />
                          Confirm changes and send to the study team.
                        </div>
                      </div>
                      <div className="cs-info-cards">
                        <div className="cs-info-card">
                          <h4>Method</h4>
                          <ul>
                            <li>Moderated</li>
                            <li>Before / After</li>
                          </ul>
                        </div>
                        <div className="cs-info-card">
                          <h4>Measured</h4>
                          <ul>
                            <li>Task completion</li>
                            <li>Time on task</li>
                            <li>Accuracy</li>
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
              </div>
            </ScrollReveal>

            {/* 01 One Platform, Role-Adapted Interfaces */}
            <ScrollReveal>
              <div className="section section--child" id="sec-source">
                <p className="cs-label">01 Collaboration</p>
                <h2 className="cs-heading">
                  One place to edit, review, and approve
                </h2>
                <p>
                  Instead of moving files between Word, Excel, and
                  Design Studio, writers could edit protocols directly
                  in Collab Studio.
                </p>
                <p>
                  Designers could review changes in a familiar
                  interface, while study teams could comment and
                  approve without losing context.
                </p>

                <div className="cs-collab-flow-grid">
                  {/* Row 1 */}
                  <div className="cs-flow-card">
                    <div className="cs-flow-card-img">
                      <Image src="/images/projects/eli-lilly/soa-email.png" alt="Writer receives email notification for assigned protocol" width={6048} height={3780} sizes="(max-width: 768px) 50vw, 420px" />
                    </div>
                    <div className="cs-flow-card-caption">
                      <span className="cs-flow-card-num">1</span>
                      <div className="cs-flow-card-text">
                        <p className="cs-step-role">Writer</p>
                        <h4>Email notification &mdash; protocol assigned</h4>
                      </div>
                    </div>
                  </div>
                  <div className="cs-flow-card">
                    <div className="cs-flow-card-img">
                      <Image src="/images/projects/eli-lilly/soa-edit.png" alt="Writer edits SoA directly in platform — no Word or Excel" width={6048} height={4120} sizes="(max-width: 768px) 50vw, 420px" />
                    </div>
                    <div className="cs-flow-card-caption">
                      <span className="cs-flow-card-num">2</span>
                      <div className="cs-flow-card-text">
                        <p className="cs-step-role">Writer</p>
                        <h4>Edit directly &mdash; no Word/Excel export</h4>
                      </div>
                    </div>
                  </div>

                  <div className="cs-flow-arrow-row">&darr;</div>

                  {/* Row 2 */}
                  <div className="cs-flow-card">
                    <div className="cs-flow-card-img">
                      <Image src="/images/projects/eli-lilly/teams.png" alt="Writer and designer coordinate on Teams" width={5760} height={3240} sizes="(max-width: 768px) 50vw, 420px" />
                    </div>
                    <div className="cs-flow-card-caption">
                      <span className="cs-flow-card-num">3</span>
                      <div className="cs-flow-card-text">
                        <p className="cs-step-role">Writer &amp; Designer</p>
                        <h4>Quick sync on Teams</h4>
                      </div>
                    </div>
                  </div>
                  <div className="cs-flow-card">
                    <div className="cs-flow-card-img">
                      <Image src="/images/projects/eli-lilly/soa-designer-reply.png" alt="Designer reviews SoA using familiar Design Studio interface" width={6048} height={4120} sizes="(max-width: 768px) 50vw, 420px" />
                    </div>
                    <div className="cs-flow-card-caption">
                      <span className="cs-flow-card-num">4</span>
                      <div className="cs-flow-card-text">
                        <p className="cs-step-role">Designer</p>
                        <h4>Review in Design Studio</h4>
                      </div>
                    </div>
                  </div>

                  <div className="cs-flow-arrow-row">&darr;</div>

                  {/* Row 3 */}
                  <div className="cs-flow-card">
                    <div className="cs-flow-card-img">
                      <Image src="/images/projects/eli-lilly/soa-studyteam-approve.png" alt="Study team approves or replies inline" width={6048} height={4120} sizes="(max-width: 768px) 50vw, 420px" />
                    </div>
                    <div className="cs-flow-card-caption">
                      <span className="cs-flow-card-num">5</span>
                      <div className="cs-flow-card-text">
                        <p className="cs-step-role">Study Team</p>
                        <h4>Approve or reply</h4>
                      </div>
                    </div>
                  </div>
                  <div className="cs-flow-card">
                    <div className="cs-flow-card-img">
                      <Image src="/images/projects/eli-lilly/soa-aligned.png" alt="Design aligned — all comments resolved, SoA finalized" width={6048} height={4120} sizes="(max-width: 768px) 50vw, 420px" />
                    </div>
                    <div className="cs-flow-card-caption">
                      <span className="cs-flow-card-num">6</span>
                      <div className="cs-flow-card-text">
                        <p className="cs-step-role">All Roles</p>
                        <h4>Design aligned</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 02 AI-Assisted Workflows */}
            <ScrollReveal>
              <div className="section section--child" id="sec-ai">
                <p className="cs-label">02 AI &amp; Trust</p>
                <h2 className="cs-heading">
                  AI suggests. Writers decide.
                </h2>
                <p>
                  Long SoA tables were difficult to format in Word,
                  especially when content split across pages. I
                  designed AI-assisted pagination to suggest where
                  tables should break, while letting writers review
                  and accept suggestions themselves. An inline protocol
                  preview also allowed writers to check the layout
                  without exporting the document.
                </p>
                <div className="cs-solutions-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div className="cs-solution-card">
                    <span className="cs-solution-num">1</span>
                    <h3>AI Auto-Crop</h3>
                    <p>Suggests optimal split points and validates formatting constraints &mdash; flagging where rows would leak across pages.</p>
                  </div>
                  <div className="cs-solution-card">
                    <span className="cs-solution-num">2</span>
                    <h3>Inline Protocol View</h3>
                    <p>Preview formatted protocol directly in the platform &mdash; no export needed to check layout.</p>
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

            {/* 03 Real-Time Co-Authoring */}
            <ScrollReveal>
              <div className="section section--child" id="sec-collab">
                <p className="cs-label">03 Transparency</p>
                <h2 className="cs-heading">
                  Every change has a history
                </h2>
                <p>
                  When multiple people review the same protocol, it&apos;s
                  important to know what changed and who approved it. I
                  designed threaded comments, version history, and
                  role-based permissions so teams could discuss
                  specific SoA sections, track edits, and review
                  decisions in one place.
                </p>
                <div className="proj-hero-video--desktop">
                  <div className="monitor-bezel">
                    <div className="monitor-slideshow">
                      <Image
                        src="/images/projects/eli-lilly/soa-comment.png"
                        alt="SoA commenting — threaded discussions anchored to specific cells"
                        width={6048}
                        height={4120}
                        sizes="(max-width: 768px) 100vw, 680px"
                      />
                      <Image
                        src="/images/projects/eli-lilly/soa-comment2.png"
                        alt="SoA commenting — reply threads with designer and writer discussion"
                        width={6048}
                        height={4120}
                        sizes="(max-width: 768px) 100vw, 680px"
                      />
                      <Image
                        src="/images/projects/eli-lilly/soa-history.png"
                        alt="SoA version history — audit trail of all changes by team members"
                        width={6048}
                        height={4120}
                        sizes="(max-width: 768px) 100vw, 680px"
                      />
                    </div>
                  </div>
                  <div className="monitor-chin" />
                  <div className="monitor-neck" />
                  <div className="monitor-base" />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="section" id="sec-takeaway">
                <h2>Takeaway</h2>
                <h3>Trust comes from keeping people in control</h3>
                <p>
                  This project changed how I think about AI in
                  regulated workflows. The goal wasn&apos;t to
                  automate every decision. It was to reduce repetitive
                  work while making suggestions, edits, and approvals
                  easy to review and trace. Good AI design should help
                  people work faster without asking them to give up
                  control.
                </p>
              </div>
            </ScrollReveal>

          <div className="proj-nav-bar">
            <Link href="/projects/apex">&larr; Apex Fintech</Link>
            <Link href="/projects/dashboard">
              Next: AT&amp;T Dashboard &rarr;
            </Link>
          </div>
        </PasswordGate>
      </div>
    </>
  );
}
