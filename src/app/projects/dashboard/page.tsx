import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Collapsible } from "@/components/Collapsible";

export const metadata: Metadata = {
  title: "Dashboard Redesign — Jenny Lin",
};

const TOC_SECTIONS = [
  {
    title: "Context",
    href: "#sec-context",
    children: [
      { label: "Problem Space", href: "#sec-context" },
      { label: "Overview Video", href: "#sec-context" },
    ],
  },
  {
    title: "Impact",
    href: "#sec-impact",
    children: [
      { label: "Key Metrics", href: "#sec-impact" },
    ],
  },
  {
    title: "Research",
    href: "#sec-research",
    children: [
      { label: "User Interviews", href: "#sec-research" },
      { label: "Key Quotes", href: "#sec-research" },
    ],
  },
  {
    title: "Before & After",
    href: "#sec-before",
    children: [
      { label: "Existing Portal", href: "#sec-before" },
      { label: "Solution", href: "#sec-solution" },
    ],
  },
  {
    title: "Iterations",
    href: "#sec-iterations",
    children: [
      { label: "Search", href: "#sec-iter-search" },
      { label: "Navigation", href: "#sec-iter-nav" },
      { label: "UI Consistency", href: "#sec-iter-ui" },
      { label: "Design System", href: "#sec-iter-ds" },
      { label: "AI Innovation", href: "#sec-iter-ai" },
    ],
  },
];

export default function DashboardPage() {
  return (
    <>
      <div className="proj-hero">
        <h1>AT&T Dashboard Redesign</h1>
        <p className="desc">
          End-to-end redesign of AT&amp;T&apos;s internal portal with
          AI-powered automation and accessible data visualization,
          serving 500+ engineers.
        </p>
        <div className="meta-grid">
          <div className="meta-item">
            <label>My Role</label>
            <span>UX Researcher, UI Designer, Front-End Engineer</span>
          </div>
          <div className="meta-item">
            <label>Team</label>
            <span>1 PM, 3 Engineers</span>
          </div>
          <div className="meta-item">
            <label>Timeline</label>
            <span>10-Week Internship</span>
          </div>
          <div className="meta-item">
            <label>Platform</label>
            <span>Web (Internal Portal)</span>
          </div>
        </div>
        <div className="proj-hero-video">
          <video autoPlay loop muted playsInline>
            <source
              src="/images/projects/dashboard/att-overview.mp4"
              type="video/mp4"
            />
          </video>
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
                How might we streamline task efficiency and reduce the reliance
                on support teams?
              </h3>
              <p>
                I led the redesign of an internal dashboard used daily by 500+
                engineers. As the platform scaled, entry points multiplied and
                the UI became cluttered, hurting productivity and increasing
                support requests. The solution combined AI automation, UI
                standardization, and improved information architecture.
              </p>
            </div>
          </ScrollReveal>

          {/* Impact */}
          <ScrollReveal>
            <div className="section" id="sec-impact">
              <h2>Impact</h2>
            </div>
          </ScrollReveal>
          <div className="cs-stats">
            <ScrollReveal delay={0}>
              <div className="cs-stat-card">
                <div className="cs-stat-number">30%</div>
                <div className="cs-stat-title">Reduced Navigation Time</div>
                <p>
                  Task navigation time decreased after search optimization.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="cs-stat-card">
                <div className="cs-stat-number">12%</div>
                <div className="cs-stat-title">Improved User Efficiency</div>
                <p>
                  Task completion efficiency increased as users could perform
                  actions without page switching.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="cs-stat-card">
                <div className="cs-stat-number">25%</div>
                <div className="cs-stat-title">Higher User Satisfaction</div>
                <p>
                  Post-redesign survey showed increased satisfaction with
                  workflow clarity and ease of use.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Research */}
          <ScrollReveal>
            <div className="section" id="sec-research">
              <h2>Research</h2>
              <p>
                Through stakeholder interviews across four user roles, I mapped
                divergent frustrations to shared root causes. While specific
                tasks varied, the underlying problems were consistent.
              </p>

              <div className="cs-quotes-grid cs-quotes-grid--inline">
                <ScrollReveal delay={0}>
                  <div className="cs-quote-card">
                    <div className="cs-quote-text">
                      &ldquo;I&apos;ve been working for five years, and every
                      day I have to log into the portal and{" "}
                      <strong>manually edit the task type</strong> for each
                      ticket.&rdquo;
                    </div>
                    <div className="cs-quote-role">Dispatcher</div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <div className="cs-quote-card">
                    <div className="cs-quote-text">
                      &ldquo;I have to{" "}
                      <strong>switch between different entrances</strong> to
                      check my test status, and it takes a lot of time and
                      effort.&rdquo;
                    </div>
                    <div className="cs-quote-role">Performance Engineer</div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="cs-quote-card">
                    <div className="cs-quote-text">
                      &ldquo;I log into the portal every day and{" "}
                      <strong>
                        I don&apos;t think there is any problem.
                      </strong>
                      &rdquo;
                    </div>
                    <div className="cs-quote-role">Testing Engineer</div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={300}>
                  <div className="cs-quote-card">
                    <div className="cs-quote-text">
                      &ldquo;I wish there were a{" "}
                      <strong>&ldquo;Delete All&rdquo; button</strong> so I
                      could remove all tickets after completing each
                      task.&rdquo;
                    </div>
                    <div className="cs-quote-role">Executive Engineer</div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>

          {/* Before */}
          <ScrollReveal>
            <div className="section" id="sec-before">
              <h2>Before &amp; After</h2>
              <h3>The Existing Portal</h3>
              <p>
                The original interface relied on scattered card-based navigation
                with no unified search, requiring users to navigate through
                multiple pages to complete basic tasks.
              </p>
              <div className="cs-image-full">
                <Image
                  src="/images/projects/dashboard/demo1.png"
                  alt="Existing AT&T portal dashboard"
                  width={2000}
                  height={1200}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Solution */}
          <ScrollReveal>
            <div className="section" id="sec-solution">
              <h3>From Multi-Entries to Single-Surface</h3>
              <p>
                Through multiple rounds of design iterations, interviews, and
                usability testing, I arrived at three key improvements:
              </p>
              <div className="cs-solutions-list">
                <ScrollReveal delay={0}>
                  <div className="cs-solution-item">
                    <div className="cs-solution-number">01</div>
                    <div>
                      <h3>Enhanced Search</h3>
                      <p>
                        Redesigned search on the landing page for immediate test
                        case access upon login.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={100}>
                  <div className="cs-solution-item">
                    <div className="cs-solution-number">02</div>
                    <div>
                      <h3>Streamlined Navigation</h3>
                      <p>
                        Expandable sidebar menu providing direct access to
                        frequent pages — reducing 3 steps to 1.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <div className="cs-solution-item">
                    <div className="cs-solution-number">03</div>
                    <div>
                      <h3>Batch Actions</h3>
                      <p>
                        Multi-selection for managing multiple items
                        simultaneously, eliminating repetitive one-by-one edits.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="cs-image-full">
                <Image
                  src="/images/projects/dashboard/solution.png"
                  alt="Redesigned AT&T portal — single-surface solution"
                  width={2000}
                  height={2340}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Iterations — collapsible */}
          <div className="section" id="sec-iterations">
            <Collapsible title="Design Iterations">
              <div className="collapsible-section" id="sec-iter-search">
                <ScrollReveal>
                  <h3>SEO Optimization</h3>
                  <p>
                    Added &ldquo;contains&rdquo; and &ldquo;starts with&rdquo;
                    options to let users choose their search preference, making
                    search more effective across 10,000+ test case IDs.
                  </p>
                  <div className="cs-image-full">
                    <Image
                      src="/images/projects/dashboard/iteration2.png"
                      alt="Before and after: search redesign"
                      width={2000}
                      height={1200}
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                </ScrollReveal>
              </div>

              <div className="collapsible-section" id="sec-iter-nav">
                <ScrollReveal>
                  <h3>Multi-Steps to One-Click</h3>
                  <p>
                    Replaced the 3-step deep navigation tree with an expandable
                    sidebar that gives direct access from any page.
                  </p>
                  <div className="cs-image-full">
                    <Image
                      src="/images/projects/dashboard/iteration3.png"
                      alt="Before and after: navigation from 3 steps to 1"
                      width={2000}
                      height={1200}
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                </ScrollReveal>
              </div>

              <div className="collapsible-section" id="sec-iter-ui">
                <ScrollReveal>
                  <h3>Consistent UI Improves Productivity</h3>
                  <p>
                    Standardized modals, dialogs, and form patterns across the
                    portal. Added onboarding tooltips to help new engineers
                    learn the system faster.
                  </p>
                  <div className="cs-image-full">
                    <Image
                      src="/images/projects/dashboard/iteration4.png"
                      alt="Before and after: UI consistency improvements"
                      width={2000}
                      height={1200}
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                </ScrollReveal>
              </div>

              <div className="collapsible-section" id="sec-iter-ds">
                <ScrollReveal>
                  <h3>Design System with Brand Alignment</h3>
                  <p>
                    Defined a color palette and button system aligned with
                    AT&amp;T brand guidelines, ensuring visual consistency
                    across all portal components.
                  </p>
                  <div className="cs-image-row">
                    <div className="cs-image-half">
                      <Image
                        src="/images/projects/dashboard/palette.png"
                        alt="AT&T color palette — Core, CTA, and Status colors"
                        width={1200}
                        height={800}
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    </div>
                    <div className="cs-image-half">
                      <Image
                        src="/images/projects/dashboard/iteration5.png"
                        alt="Button design system — Primary, Secondary, Tertiary states"
                        width={1200}
                        height={800}
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <div className="collapsible-section" id="sec-iter-ai">
                <ScrollReveal>
                  <h3>Innovating with AI</h3>
                  <p>
                    Collaborated with engineering to propose an AI chatbot to
                    leadership. Users enter a test case ID, the system
                    auto-retrieves the token, and surfaces all related data in
                    one interface — eliminating manual lookup across multiple
                    pages.
                  </p>
                  <div className="cs-image-full">
                    <Image
                      src="/images/projects/dashboard/iteration6.png"
                      alt="Test case detail page with AI chatbot"
                      width={2000}
                      height={1400}
                      sizes="(max-width: 768px) 100vw, 800px"
                    />
                  </div>
                </ScrollReveal>
              </div>
            </Collapsible>
          </div>

          <div className="proj-nav-bar">
            <Link href="/">← All Projects</Link>
            <Link href="/projects/healthcare">Next: Healthcare →</Link>
          </div>
        </main>
      </div>
    </>
  );
}
