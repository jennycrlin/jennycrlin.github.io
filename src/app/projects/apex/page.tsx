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
            <label>Impact</label>
            <span>$1.2M+ annual savings</span>
          </div>
        </div>
      </div>

      <div className="proj-content-full">
        <SectionProgress sections={NAV_SECTIONS} />
        <ScrollReveal>
          <div className="section" id="sec-overview">
            <h2>Overview</h2>
            <p>
              As a Product Design Engineer at Apex Fintech Solutions, I
              architected 3 fintech platforms — Ascend OS (advisor-facing),
              Enterprise (internal operations), and Investor (client-facing) —
              transforming complex financial workflows into intuitive,
              production-ready interfaces. The platforms serve one of the
              largest clearing and custody firms in the US, handling trading,
              billing, transfers, and account onboarding at scale.
            </p>
            <p>
              I designed front-end applications and prototypes using React,
              TypeScript, and HTML/CSS with Claude Code and GitHub, reducing
              engineering effort by 98% — from 60 days to 1 day — through
              code-ready UI delivery. I also established AI-augmented design
              documentation and reusable interaction patterns, governing a
              component library across 2,300+ iterations.
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
              <p>Reduced from 60 days to 1 day via code-ready UI.</p>
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
                <p>
                  I led the end-to-end design of key product areas across
                  all three platforms, focusing on reducing complexity in
                  regulated financial workflows. Each solution was validated
                  through usability testing and iterated through multiple
                  design rounds before production handoff.
                </p>
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
                      The original account opening flow required users to
                      fill 40+ fields on a single page — leading to a 35%
                      abandonment rate. I restructured the flow into a
                      3-step wizard: Investors → Accounts → Review. Users
                      first add people (account holders, authorized traders),
                      then configure accounts linked to those people,
                      eliminating redundant data entry.
                    </p>
                    <div className="img-placeholder" style={{ height: 280 }}>
                      Open Account v2 — Step 1: Add Investors
                    </div>
                  </div>

                  <div className="cs-showcase-item">
                    <div className="cs-showcase-num">02</div>
                    <h4>Progressive Disclosure</h4>
                    <p>
                      Each step unlocks only after the previous one is
                      validated. A persistent sidebar stepper shows progress,
                      and inline validation catches errors before submission.
                      Complex fields like SSN, citizenship, and employment
                      use contextual help tooltips and smart defaults to
                      reduce cognitive load.
                    </p>
                    <div className="img-placeholder" style={{ height: 280 }}>
                      Wizard Stepper — Progressive Unlock
                    </div>
                  </div>

                  <div className="cs-showcase-item">
                    <div className="cs-showcase-num">03</div>
                    <h4>Review &amp; ACAT Transfer</h4>
                    <p>
                      The final review step presents all data in scannable
                      tables with edit-in-place capability. I designed
                      transfer sheet integration for ACAT (Automated
                      Customer Account Transfer) and DWAC (Deposit/Withdrawal
                      at Custodian) workflows — allowing advisors to initiate
                      asset transfers directly during account setup.
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
                      Operations teams previously processed account updates
                      one at a time. I designed a bulk upload interface that
                      accepts CSV files, validates data against business
                      rules in real-time, and surfaces row-level errors with
                      inline correction — reducing batch processing time
                      from hours to minutes.
                    </p>
                    <div className="img-placeholder" style={{ height: 280 }}>
                      Bulk Upload — CSV Validation &amp; Error Handling
                    </div>
                  </div>

                  <div className="cs-showcase-item">
                    <div className="cs-showcase-num">02</div>
                    <h4>Table Bulk Actions</h4>
                    <p>
                      For trading blotters, billing groups, and performance
                      data tables, I designed a consistent bulk-action
                      toolbar pattern: select rows → contextual action bar
                      appears with relevant operations (approve, reject,
                      export, reassign). This pattern is shared across all
                      three platforms with role-based visibility.
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
                      I designed &ldquo;Ask Ascend,&rdquo; an AI-powered
                      assistant panel integrated into the Dev Portal and
                      advisor workflows. It provides contextual answers to
                      API documentation queries, surfaces relevant help
                      articles, and suggests next actions based on the
                      user&apos;s current task — reducing support ticket
                      volume by 25%.
                    </p>
                    <div className="img-placeholder" style={{ height: 280 }}>
                      Ask Ascend — AI Assistant Panel
                    </div>
                  </div>

                  <div className="cs-showcase-item">
                    <div className="cs-showcase-num">02</div>
                    <h4>Model Marketplace</h4>
                    <p>
                      Designed a marketplace for advisors to browse, compare,
                      and subscribe to investment model portfolios from
                      third-party providers. AI-driven recommendations
                      surface relevant models based on the advisor&apos;s
                      client demographics, risk profiles, and existing
                      allocations.
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
                  I built and governed a cross-platform component library
                  using atomic design principles (atoms → molecules →
                  organisms → templates), ensuring visual and behavioral
                  consistency across Ascend OS, Enterprise, and Investor.
                  The system includes 100+ components with WCAG AA
                  accessibility, keyboard navigation, and screen reader
                  support built in.
                </p>
                <div className="img-row">
                  <div className="img-placeholder" style={{ height: 200 }}>
                    Component Library — Atomic Design Hierarchy
                  </div>
                  <div className="img-placeholder" style={{ height: 200 }}>
                    Color System &amp; Token Architecture
                  </div>
                </div>
                <p>
                  Key patterns include a standardized badge color system
                  (color by actionability, not sentiment), panel edit
                  patterns with view/edit modes and destructive action
                  styling, and a sheet format specification with consistent
                  typography, shadows, and responsive breakpoints.
                </p>
              </div>
            </ScrollReveal>

            <Collapsible title="AI-Augmented Design Process">
              <div className="section">
                <h3>Claude Code as a Design Tool</h3>
                <p>
                  I integrated Claude Code into my design workflow to bridge
                  the gap between design intent and production code. By
                  writing design specifications in natural language and
                  iterating through code-ready prototypes, I reduced the
                  typical design-to-development handoff from 60 days to 1
                  day — a 98% reduction in engineering effort.
                </p>
                <p>
                  This AI-augmented workflow enabled rapid prototyping of
                  complex interaction patterns (wizard flows, data tables,
                  bulk operations) directly in React and TypeScript,
                  eliminating the translation gap between static mockups
                  and functional code. The approach also accelerated design
                  system documentation, generating component specifications
                  and usage guidelines alongside the code.
                </p>
                <h3>Collaborative Design Planning</h3>
                <p>
                  Beyond code generation, I used AI to facilitate design
                  planning sessions — synthesizing research findings into
                  structured design briefs, generating user flow
                  alternatives for stakeholder review, and maintaining a
                  living design rationale document that evolves with the
                  product. This shifted my role from pixel-pushing to
                  strategic design leadership.
                </p>
              </div>
            </Collapsible>

            <ScrollReveal>
              <div className="section" id="sec-outcomes">
                <h2>Outcomes</h2>
                <p>
                  The redesigned platforms launched across 2,000+ users
                  with a phased rollout. The Open Account v2 wizard reduced
                  form abandonment by 35%, and task completion time dropped
                  40% in the first month. Support ticket volume decreased
                  25% within the first quarter, and the AI-driven workflow
                  automation delivered $1.2M+ in annual operational savings.
                </p>
                <h3>Reflections</h3>
                <p>
                  This project demonstrated that AI isn&apos;t a replacement
                  for design thinking — it&apos;s an accelerator. The most
                  impactful decisions were still human: restructuring the
                  account flow around people instead of forms, choosing
                  progressive disclosure over comprehensive display, and
                  designing for trust in regulated environments. AI amplified
                  execution speed, but the design strategy came from research.
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
