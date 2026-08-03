import type { Metadata } from "next";
import Link from "next/link";
import { PasswordGate } from "@/components/PasswordGate";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ShowcaseReveal } from "@/components/ShowcaseReveal";
import { Collapsible } from "@/components/Collapsible";
import { SectionProgress } from "@/components/SectionProgress";

export const metadata: Metadata = {
  title: "Fintech Platform Design — Jenny Lin",
};

const NAV_SECTIONS = [
  { label: "Overview", href: "#sec-overview" },
  { label: "Impact", href: "#sec-impact" },
  { label: "Design", href: "#sec-design", childIds: ["sec-account", "sec-bulk", "sec-ai"] },
  { label: "Design System", href: "#sec-system" },
  { label: "Outcomes", href: "#sec-outcomes" },
];

export default function ApexPage() {
  return (
    <>
      <div className="proj-hero">
        <h1>Fintech Platform Design</h1>
        <p className="desc">
          Architecting 3 fintech platforms across billing, trading, and account
          onboarding — shaping complex financial workflows into intuitive,
          production-ready interfaces with AI-driven automation.
        </p>
        <div className="meta-grid">
          <div className="meta-item">
            <label>My Role</label>
            <span>Product Design Engineer</span>
          </div>
          <div className="meta-item">
            <label>Duration</label>
            <span>Feb 2024 &ndash; Present</span>
          </div>
          <div className="meta-item">
            <label>Scope</label>
            <span>Web, Mobile, Internal Tools</span>
          </div>
          <div className="meta-item">
            <label>Industry</label>
            <span>Fintech / Wealth Management</span>
          </div>
        </div>
      </div>

      <div className="proj-content-full">
        <SectionProgress sections={NAV_SECTIONS} />
        <ScrollReveal>
          <div className="section" id="sec-overview">
            <h2>Overview</h2>
            <p>
              I architected 3 fintech platforms at Apex &mdash; Ascend OS
              (advisor-facing), Enterprise (internal operations), and
              Investor (client-facing) &mdash; serving one of the largest
              clearing and custody firms in the US. By delivering
              code-ready UI in React and TypeScript, I reduced
              design-to-dev handoff by 98%.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="section" id="sec-impact">
            <h2>Impact</h2>
          </div>
        </ScrollReveal>
        <div className="cs-stats cs-stats--four">
          <ScrollReveal delay={0}>
            <div className="cs-stat-card">
              <div className="cs-stat-number">98%</div>
              <div className="cs-stat-title">Engineering Effort</div>
              <p>Compressed weeks of handoff into a single-day turnaround.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="cs-stat-card">
              <div className="cs-stat-number">40%</div>
              <div className="cs-stat-title">Task Completion</div>
              <p>Faster task completion time.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="cs-stat-card">
              <div className="cs-stat-number">$1.2M+</div>
              <div className="cs-stat-title">Annual Savings</div>
              <p>Through AI-driven workflow automation.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="cs-stat-card">
              <div className="cs-stat-number">2,300+</div>
              <div className="cs-stat-title">Component Iterations</div>
              <p>Governed design system across 3 platforms.</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Password-protected content */}
        <PasswordGate code="5600">
            <ScrollReveal>
              <div className="section" id="sec-design">
                <h2>Design</h2>
              </div>
            </ScrollReveal>

            <ShowcaseReveal>
              <div className="cs-showcase" id="sec-account">
                <div className="cs-showcase-sticky">
                  <h3>Open Account v2 — Multi-Step Wizard</h3>
                  <p>
                    Redesigning the account opening flow from a monolithic
                    form into a progressive, people-first wizard that
                    reduced errors and improved completion rates.
                  </p>
                </div>

                <div className="cs-showcase-scroll">
                  <div className="cs-showcase-item">
                    <div className="cs-showcase-num">01</div>
                    <h4>People-First Architecture</h4>
                    <p>
                      Restructured a 40+ field form (35% abandonment) into
                      a 3-step wizard: Investors &rarr; Accounts &rarr;
                      Review &mdash; eliminating redundant data entry.
                    </p>
                    <div className="img-placeholder" style={{ height: 280 }}>
                      Open Account v2 — Step 1: Add Investors
                    </div>
                  </div>

                  <div className="cs-showcase-item">
                    <div className="cs-showcase-num">02</div>
                    <h4>Progressive Disclosure</h4>
                    <p>
                      Steps unlock sequentially with a persistent sidebar
                      stepper, inline validation, and contextual help
                      tooltips to reduce cognitive load.
                    </p>
                    <div className="img-placeholder" style={{ height: 280 }}>
                      Wizard Stepper — Progressive Unlock
                    </div>
                  </div>

                  <div className="cs-showcase-item">
                    <div className="cs-showcase-num">03</div>
                    <h4>Review &amp; ACAT Transfer</h4>
                    <p>
                      Scannable review tables with edit-in-place and
                      integrated ACAT/DWAC transfer sheets &mdash; advisors
                      initiate asset transfers directly during setup.
                    </p>
                    <div className="img-placeholder" style={{ height: 280 }}>
                      Review Step — ACAT Transfer Sheets
                    </div>
                  </div>
                </div>
              </div>
            </ShowcaseReveal>

            <ShowcaseReveal>
              <div className="cs-showcase" id="sec-bulk">
                <div className="cs-showcase-sticky">
                  <h3>Bulk Actions &amp; Data Operations</h3>
                  <p>
                    Scaling enterprise operations through batch processing,
                    table-level actions, and smart filtering across
                    thousands of records.
                  </p>
                </div>

                <div className="cs-showcase-scroll">
                  <div className="cs-showcase-item">
                    <div className="cs-showcase-num">01</div>
                    <h4>Bulk Upload &amp; Validation</h4>
                    <p>
                      CSV upload with real-time business-rule validation
                      and row-level inline correction &mdash; reducing
                      batch processing from hours to minutes.
                    </p>
                    <div className="img-placeholder" style={{ height: 280 }}>
                      Bulk Upload — CSV Validation &amp; Error Handling
                    </div>
                  </div>

                  <div className="cs-showcase-item">
                    <div className="cs-showcase-num">02</div>
                    <h4>Table Bulk Actions</h4>
                    <p>
                      Consistent select-rows &rarr; action-bar pattern
                      across all three platforms with role-based visibility
                      for approve, reject, export, and reassign operations.
                    </p>
                    <div className="img-placeholder" style={{ height: 280 }}>
                      Bulk Action Toolbar — Row Selection Pattern
                    </div>
                  </div>
                </div>
              </div>
            </ShowcaseReveal>

            <ShowcaseReveal>
              <div className="cs-showcase" id="sec-ai">
                <div className="cs-showcase-sticky">
                  <h3>AI Integration</h3>
                  <p>
                    Embedding AI capabilities into the platform to
                    accelerate advisor workflows and reduce manual
                    decision-making in complex financial operations.
                  </p>
                </div>

                <div className="cs-showcase-scroll">
                  <div className="cs-showcase-item">
                    <div className="cs-showcase-num">01</div>
                    <h4>Ask Ascend — AI Assistant</h4>
                    <p>
                      AI-powered assistant panel providing contextual
                      answers to API queries and suggesting next actions
                      &mdash; reducing support ticket volume by 25%.
                    </p>
                    <div className="img-placeholder" style={{ height: 280 }}>
                      Ask Ascend — AI Assistant Panel
                    </div>
                  </div>

                  <div className="cs-showcase-item">
                    <div className="cs-showcase-num">02</div>
                    <h4>Model Marketplace</h4>
                    <p>
                      Marketplace for browsing and subscribing to model
                      portfolios, with AI recommendations based on client
                      demographics and risk profiles.
                    </p>
                    <div className="img-placeholder" style={{ height: 280 }}>
                      Model Marketplace — AI-Driven Recommendations
                    </div>
                  </div>
                </div>
              </div>
            </ShowcaseReveal>

            <ScrollReveal>
              <div className="section" id="sec-system">
                <h2>Design System</h2>
                <p>
                  100+ component library built on atomic design principles
                  with WCAG AA accessibility, governing visual and
                  behavioral consistency across all three platforms.
                </p>
                <div className="img-row">
                  <div className="img-placeholder" style={{ height: 200 }}>
                    Component Library — Atomic Design Hierarchy
                  </div>
                  <div className="img-placeholder" style={{ height: 200 }}>
                    Color System &amp; Token Architecture
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <Collapsible title="AI-Augmented Design Process">
              <div className="section">
                <p>
                  I integrated Claude Code to prototype complex interaction
                  patterns directly in React &mdash; reducing design-to-dev
                  handoff turnaround by 98%. AI also accelerated design
                  planning, synthesizing research into structured briefs
                  and generating component specifications alongside code.
                </p>
              </div>
            </Collapsible>

            <ScrollReveal>
              <div className="section" id="sec-outcomes">
                <h2>Outcomes</h2>
                <p>
                  Launched across 2,000+ users &mdash; Open Account v2
                  cut form abandonment by 35%, task completion sped up
                  40%, and AI-driven automation delivered $1.2M+ in
                  annual savings.
                </p>
                <h3>Reflections</h3>
                <p>
                  The most impactful decisions were human &mdash;
                  restructuring flows around people, not forms. AI
                  amplified execution speed, but the design strategy
                  came from research.
                </p>
              </div>
            </ScrollReveal>

          <div className="proj-nav-bar">
            <Link href="/">&larr; All Projects</Link>
            <Link href="/projects/eli-lilly">Next: Eli Lilly &rarr;</Link>
          </div>
        </PasswordGate>
      </div>
    </>
  );
}
