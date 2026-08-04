import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PasswordGate } from "@/components/PasswordGate";
import { SectionProgress } from "@/components/SectionProgress";

export const metadata: Metadata = {
  title: "Dashboard Redesign — Jenny Lin",
};

const NAV_SECTIONS = [
  { label: "Context", href: "#sec-context" },
  { label: "Impact", href: "#sec-impact" },
  { label: "Research", href: "#sec-research" },
  { label: "Before & After", href: "#sec-before", childIds: ["sec-solution"] },
  { label: "Iterations", href: "#sec-iterations", childIds: ["sec-iter-search", "sec-iter-nav", "sec-iter-ui", "sec-iter-ds", "sec-iter-ai"] },
];

export default function DashboardPage() {
  return (
    <>
      <div className="proj-hero">
        <h1>AT&T Dashboard Redesign</h1>
        <p className="desc">
          End-to-end redesign of AT&amp;T&apos;s internal portal &mdash;
          reducing navigation time by 30% and improving user efficiency
          by 12% for 500+ engineers.
        </p>
        <div className="meta-grid">
          <div className="meta-item">
            <label>My Role</label>
            <span>UX Researcher, UI Designer, Front-End Engineer</span>
          </div>
          <div className="meta-item">
            <label>Team</label>
            <span>1 Product Manager, 3 Engineers</span>
          </div>
          <div className="meta-item">
            <label>Timeline</label>
            <span>10-Week Internship</span>
          </div>
        </div>

        <div className="proj-hero-video--desktop" style={{ maxWidth: 840 }}>
          <div className="monitor-bezel monitor-bezel--flush">
            <video autoPlay loop muted playsInline>
              <source
                src="/images/projects/dashboard/att-overview.mp4"
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

        {/* Context */}
        <ScrollReveal>
          <div className="section" id="sec-context">
            <p className="cs-label">Context</p>
            <h2 className="cs-heading">
              500+ engineers navigated a cluttered portal that grew
              faster than its design
            </h2>
            <p>
              As AT&amp;T&apos;s internal testing platform scaled, entry
              points multiplied and the UI became cluttered. I led a
              redesign combining AI automation, UI standardization, and
              improved information architecture.
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
                Task completion efficiency increased without page
                switching.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="cs-stat-card">
              <div className="cs-stat-number">25%</div>
              <div className="cs-stat-title">Higher User Satisfaction</div>
              <p>
                Post-redesign survey showed increased satisfaction.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <PasswordGate code="5600">
        {/* Research */}
        <ScrollReveal>
          <div className="section" id="sec-research">
            <p className="cs-label">Research</p>
            <h2 className="cs-heading">
              Four roles, different tasks, same root frustrations
            </h2>
            <p>
              I interviewed four user roles and mapped their frustrations
              to shared root causes: too many entry points, no unified
              search, and repetitive manual operations.
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
            <p className="cs-label">Before</p>
            <h2 className="cs-heading">
              Scattered card-based navigation with no unified search
            </h2>
            <p>
              Users navigated through multiple pages to complete basic
              tasks, with no unified search across 10,000+ test case IDs.
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
            <p className="cs-label">After</p>
            <h2 className="cs-heading">
              Three interventions collapsed multi-step workflows into
              single surfaces
            </h2>
            <div className="cs-solutions-row">
                <div className="cs-solution-card">
                  <span className="cs-solution-num">01</span>
                  <h3>Enhanced Search</h3>
                  <p>
                    Redesigned search on the landing page for immediate
                    test case access upon login.
                  </p>
                </div>
                <div className="cs-solution-card">
                  <span className="cs-solution-num">02</span>
                  <h3>Streamlined Navigation</h3>
                  <p>
                    Expandable sidebar menu providing direct access to
                    frequent pages &mdash; reducing 3 steps to 1.
                  </p>
                </div>
                <div className="cs-solution-card">
                  <span className="cs-solution-num">03</span>
                  <h3>Batch Actions</h3>
                  <p>
                    Multi-selection for managing multiple items
                    simultaneously, eliminating repetitive edits.
                  </p>
                </div>
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

        {/* Iterations */}
        <ScrollReveal>
          <div className="section" id="sec-iterations">
            <h2>Iterations</h2>
            <div className="cs-accordion">
              <details id="sec-iter-search">
                <summary>
                  <span className="cs-accordion-num">01</span>
                  <span className="cs-accordion-title">Search — &ldquo;Contains&rdquo; vs &ldquo;starts with&rdquo; gave users control over 10,000+ test case IDs</span>
                  <span className="cs-accordion-icon" />
                </summary>
                <div className="cs-accordion-body">
                  <p>
                    Added search mode options to let users choose their
                    preference, making search more effective across the full
                    test case inventory.
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
                </div>
              </details>
              <details id="sec-iter-nav">
                <summary>
                  <span className="cs-accordion-num">02</span>
                  <span className="cs-accordion-title">Navigation — Three-step deep navigation replaced with expandable sidebar</span>
                  <span className="cs-accordion-icon" />
                </summary>
                <div className="cs-accordion-body">
                  <p>
                    An expandable sidebar gives direct access from any page,
                    eliminating the need to navigate through nested menus to
                    reach frequently used tools.
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
                </div>
              </details>
              <details id="sec-iter-ui">
                <summary>
                  <span className="cs-accordion-num">03</span>
                  <span className="cs-accordion-title">UI Consistency — Standardized modals and form patterns reduced learning curve</span>
                  <span className="cs-accordion-icon" />
                </summary>
                <div className="cs-accordion-body">
                  <p>
                    Unified modals, dialogs, and form patterns across the
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
                </div>
              </details>
              <details id="sec-iter-ds">
                <summary>
                  <span className="cs-accordion-num">04</span>
                  <span className="cs-accordion-title">Design System — Color palette and button system aligned with AT&amp;T brand guidelines</span>
                  <span className="cs-accordion-icon" />
                </summary>
                <div className="cs-accordion-body">
                  <p>
                    Defined a design system ensuring visual consistency
                    across all portal components &mdash; from status colors
                    to interaction states.
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
                </div>
              </details>
              <details id="sec-iter-ai">
                <summary>
                  <span className="cs-accordion-num">05</span>
                  <span className="cs-accordion-title">AI Innovation — An AI chatbot eliminated manual lookup across multiple pages</span>
                  <span className="cs-accordion-icon" />
                </summary>
                <div className="cs-accordion-body">
                  <p>
                    Collaborated with engineering to propose an AI chatbot
                    to leadership. Users enter a test case ID, the system
                    auto-retrieves the token, and surfaces all related data
                    in one interface.
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
                </div>
              </details>
            </div>
          </div>
        </ScrollReveal>

        <div className="proj-nav-bar">
          <Link href="/">← All Projects</Link>
          <Link href="/projects/healthcare">Next: Healthcare →</Link>
        </div>
        </PasswordGate>
      </div>
    </>
  );
}
