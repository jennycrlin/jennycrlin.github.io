import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PasswordGate } from "@/components/PasswordGate";
import { SectionProgress } from "@/components/SectionProgress";
import { Accordion, AccordionItem } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Dashboard Redesign — Jenny Lin",
};

const NAV_SECTIONS = [
  { label: "Overview", href: "#sec-context" },
  { label: "Impact", href: "#sec-impact" },
  { label: "Research", href: "#sec-research" },
  { label: "Design", href: "#sec-design", childIds: ["sec-before", "sec-solution"] },
  { label: "Iterations", href: "#sec-iterations", childIds: ["sec-iter-search", "sec-iter-nav", "sec-iter-ui", "sec-iter-ds", "sec-iter-ai"] },
  { label: "Takeaway", href: "#sec-takeaway" },
];

export default function DashboardPage() {
  const isVercel = process.env.VERCEL === "1";

  return (
    <>
      <div className="proj-hero">
        <h1>AT&T Dashboard Redesign</h1>
        <p className="desc">
          Redesigned search, navigation, and everyday workflows to help
          engineers find test cases faster and complete tasks with fewer
          steps.
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
            <h2>Overview</h2>
            <h3>Too many pages for everyday tasks</h3>
            <p>
              AT&amp;T&apos;s internal testing portal supported over 500
              engineers, but its navigation had become difficult to use
              as more tools were added. Engineers had to move between
              multiple pages to find test cases, check statuses, and
              manage tickets. I redesigned the dashboard to make
              frequently used tools easier to find and reduce repetitive
              work.
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
              <div className="cs-stat-title">Less Navigation Time</div>
              <p>
                Faster access to test cases and frequently used tools.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="cs-stat-card">
              <div className="cs-stat-number">12%</div>
              <div className="cs-stat-title">Better Task Efficiency</div>
              <p>
                Fewer steps to complete everyday tasks.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="cs-stat-card">
              <div className="cs-stat-number">25%</div>
              <div className="cs-stat-title">Higher User Satisfaction</div>
              <p>
                Improvement reported in post-redesign surveys.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <PasswordGate code="we1come" popup={isVercel}>
        {/* Research */}
        <ScrollReveal>
          <div className="section" id="sec-research">
            <h2>Research</h2>
            <h3>Different roles, shared frustrations</h3>
            <p>
              I interviewed engineers across four roles to understand how
              they used the portal. While their daily tasks differed, the
              same problems kept coming up: scattered navigation, limited
              search, and repetitive manual work.
            </p>
            <p>
              These findings helped me prioritize three improvements:
              easier search, faster navigation, and batch actions.
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

        {/* Design */}
        <ScrollReveal>
          <div className="section" id="sec-design">
            <h2>Design</h2>
          </div>
        </ScrollReveal>

        {/* Before */}
        <ScrollReveal>
          <div className="section section--child" id="sec-before">
            <p className="cs-label">Before</p>
            <h2 className="cs-heading">
              Too many clicks to find what you need
            </h2>
            <p>
              The original dashboard relied on cards and nested pages.
              With more than 10,000 test case IDs and no unified search,
              engineers often had to navigate through several screens to
              find information.
            </p>
            <div className="cs-image-full cs-image-full--medium">
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
          <div className="section section--child" id="sec-solution">
            <p className="cs-label">After</p>
            <h2 className="cs-heading">
              Search, navigation, and actions in one place
            </h2>
            <p>I redesigned the dashboard around three everyday needs:</p>
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
            <div className="cs-image-full cs-image-full--medium">
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
            <Accordion>
              <AccordionItem id="sec-iter-search" num="01" title="SEARCH - Making 10,000+ test cases easier to find">
                <p>
                  Engineers needed to search a large collection of test
                  case IDs. I added &ldquo;Contains&rdquo; and
                  &ldquo;Starts with&rdquo; search options so users could
                  choose how to narrow their results, instead of relying
                  on a single search behavior.
                </p>
                <div className="cs-image-full cs-image-full--medium">
                  <Image
                    src="/images/projects/dashboard/iteration2.png"
                    alt="Before and after: search redesign"
                    width={2000}
                    height={1200}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </AccordionItem>
              <AccordionItem id="sec-iter-nav" num="02" title="NAVIGATION - From three clicks to one">
                <p>
                  Frequently used tools were buried in nested menus. I
                  introduced an expandable sidebar so engineers could
                  access these pages directly from anywhere in the
                  portal.
                </p>
                <div className="cs-image-full cs-image-full--medium">
                  <Image
                    src="/images/projects/dashboard/iteration3.png"
                    alt="Before and after: navigation from 3 steps to 1"
                    width={2000}
                    height={1200}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </AccordionItem>
              <AccordionItem id="sec-iter-ui" num="03" title="UI CONSISTENCY - Making familiar actions feel familiar">
                <p>
                  Modals, forms, and dialogs followed different patterns
                  across the portal. I standardized these components and
                  added onboarding tooltips to help new engineers
                  understand the interface.
                </p>
                <div className="cs-image-full cs-image-full--medium">
                  <Image
                    src="/images/projects/dashboard/iteration4.png"
                    alt="Before and after: UI consistency improvements"
                    width={2000}
                    height={1200}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </AccordionItem>
              <AccordionItem id="sec-iter-ds" num="04" title="DESIGN SYSTEM - One visual language across the portal">
                <p>
                  I created a shared color palette and button system
                  based on AT&amp;T&apos;s brand guidelines. This gave
                  engineers consistent status colors, interaction states,
                  and component styles across pages.
                </p>
                <div className="cs-image-row" style={{ maxWidth: 860, margin: "0 auto" }}>
                  <div className="cs-image-half cs-image-half--square">
                    <Image
                      src="/images/projects/dashboard/palette.png"
                      alt="AT&T color palette — Core, CTA, and Status colors"
                      width={1200}
                      height={800}
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                  </div>
                  <div className="cs-image-half cs-image-half--square">
                    <Image
                      src="/images/projects/dashboard/iteration5.png"
                      alt="Button design system — Primary, Secondary, Tertiary states"
                      width={1200}
                      height={800}
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                  </div>
                </div>
              </AccordionItem>
              <AccordionItem id="sec-iter-ai" num="05" title="AI ASSISTANT - Finding test case details without switching pages">
                <p>
                  Engineers often had to look up tokens and related test
                  data across different screens. I worked with engineers
                  to propose an AI assistant that could retrieve related
                  information from a test case ID and show it in one
                  place.
                </p>
                <div className="cs-image-full cs-image-full--medium">
                  <Image
                    src="/images/projects/dashboard/iteration6.png"
                    alt="Test case detail page with AI chatbot"
                    width={2000}
                    height={1400}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </ScrollReveal>

        {/* Takeaway */}
        <ScrollReveal>
          <div className="section" id="sec-takeaway">
            <h2>Takeaway</h2>
            <h3>Small changes made everyday work easier</h3>
            <p>
              This project reminded me that improving an internal tool
              doesn&apos;t always require a complete redesign.
            </p>
            <p>
              Making search easier to use, reducing navigation steps,
              and removing repetitive actions can make a meaningful
              difference for people who use the same tools every day.
            </p>
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
