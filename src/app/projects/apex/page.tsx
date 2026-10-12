import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PasswordGate } from "@/components/PasswordGate";
import { SectionProgress } from "@/components/SectionProgress";
import { LaptopScroll } from "@/components/LaptopScroll";
import { TerminalDemo } from "@/components/TerminalDemo";
import { Accordion, AccordionItem } from "@/components/Accordion";
import { LoopingVideo } from "@/components/LoopingVideo";

export const metadata: Metadata = {
  title: "Apex Fintech — Jenny Lin",
};

const NAV_SECTIONS = [
  { label: "Overview", href: "#sec-context" },
  { label: "Impact", href: "#sec-impact" },
  { label: "The System", href: "#sec-design", childIds: ["sec-navigation", "sec-interaction", "sec-engineering"] },
  { label: "Takeaway", href: "#sec-takeaway" },
];

export default function ApexPage() {
  const isVercel = process.env.VERCEL === "1";

  return (
    <>
      <div className="proj-hero">
        <h1>Unifying Three Fintech Platforms</h1>
        <p className="desc">
          Creating a shared design system for different users,
          workflows, and technologies — without rebuilding
          everything from scratch.
        </p>
        <div className="meta-grid">
          <div className="meta-item">
            <label>My Role</label>
            <span>Product Design Engineer</span>
          </div>
          <div className="meta-item">
            <label>Team</label>
            <span>Led design; partnered with PMs, Engineers, Compliance</span>
          </div>
          <div className="meta-item">
            <label>Timeline</label>
            <span>Feb 2026 &ndash; Present</span>
          </div>
        </div>

        <div className="hero-blurred hero-blurred--layered" style={{ marginTop: 32, padding: 10 }}>
          <Image
            src="/images/projects/apex/apex_cover.png"
            alt="Apex platform overview — account dashboard"
            width={2900}
            height={1582}
            sizes="(max-width: 768px) 100vw, 900px"
            className="hero-blurred-bg"
            style={{ filter: 'none' }}
            priority
          />
        </div>
      </div>

      <div className="proj-content-full">
        <SectionProgress sections={NAV_SECTIONS} />

        {/* Context */}
        <ScrollReveal>
        <div className="section" id="sec-context">
          <h2>Overview</h2>
          <h3>Three platforms, overlapping workflows</h3>
          <p>
            Apex was consolidating Wealth and Enterprise, two
            platforms financial advisors often used for
            overlapping tasks like cash transfers, billing, and
            account opening. But they had different navigation,
            components, and visual styles. Enterprise used Chakra
            UI, while Wealth and Investor used shadcn.
          </p>
          <p>
            I audited both platforms and built a shared design
            system that unified navigation, components, and visual
            style, without rebuilding the platforms or removing
            features advisors relied on.
          </p>
        </div>
        </ScrollReveal>

        {/* Impact */}
        <ScrollReveal>
        <div className="section" id="sec-impact">
          <h2>Impact</h2>
        </div>
        </ScrollReveal>
        <div className="cs-stats cs-stats--three">
          <ScrollReveal delay={0}>
          <div className="cs-stat-card">
            <div className="cs-stat-number">30+</div>
            <div className="cs-stat-title">Apps Migrated</div>
            <p>Into the shared design system.</p>
          </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
          <div className="cs-stat-card">
            <div className="cs-stat-number">&lt;1 Month</div>
            <div className="cs-stat-title">To Complete the Integration</div>
            <p>That had been stalled for roughly four months.</p>
          </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
          <div className="cs-stat-card">
            <div className="cs-stat-number">~25 hrs/mo</div>
            <div className="cs-stat-title">PM Setup Time Saved</div>
            <p>Estimated savings from automated PR previews.</p>
          </div>
          </ScrollReveal>
        </div>

        <PasswordGate code="we1come" popup={isVercel}>

        {/* Design */}
        <ScrollReveal>
        <div className="section" id="sec-design">
          <h2>The System</h2>
        </div>
        </ScrollReveal>

        {/* 01 Shared Navigation */}
        <ScrollReveal>
        <div className="section section--child" id="sec-navigation">
          <p className="cs-label">01 &middot; Navigation Audit</p>
          <h2 className="cs-heading">
            One foundation, different needs
          </h2>
          <p>
            I audited Wealth and Enterprise&apos;s navigation and
            identified five shared controls: Global Search, Access
            Management, App Menu, Rep Code Toggle, and Account
            Context. But their users worked differently. Wealth
            needed better readability and customization, while
            existing Enterprise feedback favored dense layouts for
            monitoring multiple tables.
          </p>
          <p>
            I standardized the shared navigation while preserving
            features like favorite apps and adjustable text
            sizes.
          </p>

          <figure className="cs-grid-fig cs-annotate-wrap" style={{ marginTop: 32 }}>
            <Image
              src="/images/projects/apex/Chassis.png"
              alt="Shared chassis — Global Search, Access Management, App Menu, Rep Code Toggle, and Account Context"
              width={1600}
              height={870}
              sizes="(max-width: 768px) 100vw, 1100px"
              style={{ borderRadius: 8, border: '1px solid var(--border)' }}
            />

            {/* 1 — Global Search */}
            <div className="cs-annotate-box" style={{ left: '41%', top: '0.7%', width: '18%', height: '4.6%' }} />
            <div className="cs-annotate-label" style={{ left: '41%', top: '6%' }}>
              <span className="cs-annotate-label-num">1</span>
              <span className="cs-annotate-label-text">Global Search</span>
            </div>

            {/* 2 — Access Management */}
            <div className="cs-annotate-box" style={{ left: '0%', top: '6.6%', width: '11.5%', height: '5.8%' }} />
            <div className="cs-annotate-label" style={{ left: '13%', top: '7.3%' }}>
              <span className="cs-annotate-label-num">2</span>
              <span className="cs-annotate-label-text">Access Management</span>
            </div>

            {/* 3 — App Menu */}
            <div className="cs-annotate-box" style={{ left: '0.3%', top: '16.6%', width: '11%', height: '40%' }} />
            <div className="cs-annotate-label" style={{ left: '13%', top: '35%' }}>
              <span className="cs-annotate-label-num">3</span>
              <span className="cs-annotate-label-text">App Menu</span>
            </div>

            {/* 4 — Rep Code Toggle */}
            <div className="cs-annotate-box" style={{ left: '89.3%', top: '0.9%', width: '9.8%', height: '4.5%' }} />
            <div className="cs-annotate-label" style={{ left: '75%', top: '1.3%' }}>
              <span className="cs-annotate-label-num">4</span>
              <span className="cs-annotate-label-text">Rep Code Toggle</span>
            </div>

            {/* 5 — Account Context */}
            <div className="cs-annotate-box" style={{ left: '86.5%', top: '5.5%', width: '13%', height: '41.5%' }} />
            <div className="cs-annotate-label" style={{ left: '72%', top: '25%' }}>
              <span className="cs-annotate-label-num">5</span>
              <span className="cs-annotate-label-text">Account Context</span>
            </div>

            <figcaption>
              Shared chassis &mdash; the five controls common to every
              platform
            </figcaption>
          </figure>
        </div>
        </ScrollReveal>

        {/* 02 Interaction Design */}
        <ScrollReveal>
        <div className="section section--child" id="sec-interaction">
          <p className="cs-label">02 &middot; Interaction Design</p>

          <div className="cs-step-intro" style={{ marginTop: 28 }}>
            <h2 className="cs-heading">Side sheet &rarr; Full-page form</h2>
            <p>
              The side sheet was too narrow for a multi-step
              form, crowding fields and forcing extra scrolling
              between steps. A full page gave each step room to
              lay out clearly.
            </p>
          </div>

          <p className="cs-label" style={{ marginTop: 24 }}>Before</p>
          <figure className="cs-grid-fig" style={{ marginTop: 12, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            <div className="cs-video-embed" style={{ margin: 0, position: 'relative', aspectRatio: '2038 / 1370' }}>
              <LoopingVideo
                src="/images/projects/apex/sheet_video.mov"
                mp4Src="/images/projects/apex/sheet_video.mp4"
                poster="/images/projects/apex/sheet_video_poster.png"
                pauseMs={1800}
                style={{ position: 'absolute', top: 0, right: 0, width: '118%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <figcaption>Side sheet &mdash; too narrow for a multi-step form</figcaption>
          </figure>

          <p className="cs-label" style={{ marginTop: 24 }}>After</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 12 }}>
            <figure className="cs-grid-fig">
              <Image
                src="/images/projects/apex/fullpage_after1.png"
                alt="Initiate Cash Transfer as a full page, step 2 of 3: Transfer Details"
                width={1600}
                height={1113}
                sizes="(max-width: 768px) 100vw, 550px"
                style={{ borderRadius: 8, border: '1px solid var(--border)' }}
              />
              <figcaption>Full page &mdash; step 2: Transfer Details</figcaption>
            </figure>
            <figure className="cs-grid-fig">
              <Image
                src="/images/projects/apex/fullpage_after2.png"
                alt="Initiate Cash Transfer as a full page, step 3 of 3: Review"
                width={1600}
                height={1113}
                sizes="(max-width: 768px) 100vw, 550px"
                style={{ borderRadius: 8, border: '1px solid var(--border)' }}
              />
              <figcaption>Full page &mdash; step 3: Review</figcaption>
            </figure>
          </div>

          <div className="cs-step-intro" style={{ marginTop: 40 }}>
            <h2 className="cs-heading">Separate tabs &rarr; Unified search</h2>
            <p>
              Activity and Consent Requests shared similar data.
              I combined them into one searchable table with
              status filters.
            </p>
          </div>

          <p className="cs-label" style={{ marginTop: 24 }}>Before</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 12 }}>
            <figure className="cs-grid-fig">
              <Image
                src="/images/projects/apex/seperatetab_before1.png"
                alt="Cash Transfers — separate Transfer Activity tab"
                width={1600}
                height={1079}
                sizes="(max-width: 768px) 100vw, 550px"
                style={{ borderRadius: 8, border: '1px solid var(--border)' }}
              />
              <figcaption>Transfer Activity tab</figcaption>
            </figure>
            <figure className="cs-grid-fig">
              <Image
                src="/images/projects/apex/seperatetab_before2.png"
                alt="Cash Transfers — separate Consent Requests tab"
                width={1600}
                height={1079}
                sizes="(max-width: 768px) 100vw, 550px"
                style={{ borderRadius: 8, border: '1px solid var(--border)' }}
              />
              <figcaption>Consent Requests tab</figcaption>
            </figure>
          </div>

          <p className="cs-label" style={{ marginTop: 24 }}>After</p>
          <figure className="cs-grid-fig" style={{ marginTop: 12 }}>
            <Image
              src="/images/projects/apex/seperatetab_after.png"
              alt="Search Transfers — unified table combining activity and consent data, with status filters"
              width={1600}
              height={1079}
              sizes="(max-width: 768px) 100vw, 1100px"
              style={{ borderRadius: 8, border: '1px solid var(--border)' }}
            />
            <figcaption>Unified search &mdash; one table, status filters replace the tabs</figcaption>
          </figure>

          <div className="cs-step-intro" style={{ marginTop: 40 }}>
            <h2 className="cs-heading">Inconsistent styles &rarr; Shared standards</h2>
            <p>
              I unified colors, component styling, and semantic
              statuses, validating light and dark mode contrast
              against WCAG 2.2.
            </p>
          </div>

          <p>
            Status was black-and-white before a shared contract
            existed &mdash; no semantic system, styled ad hoc. I
            defined a 5-state cascade, audited every component
            against <b>WCAG 2.2</b> with WAVE, and reconciled two
            color models (Tailwind vs. OKLCH) into one scale.
          </p>

          <table className="cs-color-table">
            <thead>
              <tr><th></th><th>State</th><th>Light</th><th>Dark</th></tr>
            </thead>
            <tbody>
              <tr>
                <td className="cs-color-table-num">1</td>
                <td className="cs-color-table-name">Needs action right now, and urgent</td>
                <td><span className="cs-swatch" style={{ background: "#DC2626", color: "#fff" }}>Urgent</span><span className="cs-pass">AA</span></td>
                <td><span className="cs-swatch" style={{ background: "#fff", color: "#DC2626", border: "1px solid #FCA5A5" }}>Urgent</span><span className="cs-pass">AA</span></td>
              </tr>
              <tr>
                <td className="cs-color-table-num">2</td>
                <td className="cs-color-table-name">Money didn&apos;t move, negative</td>
                <td><span className="cs-swatch" style={{ background: "#FEE2E2", color: "#B91C1C" }}>Failed</span><span className="cs-pass">AA</span></td>
                <td><span className="cs-swatch" style={{ background: "#450A0A", color: "#FCA5A5" }}>Failed</span><span className="cs-pass">AAA</span></td>
              </tr>
              <tr>
                <td className="cs-color-table-num">3</td>
                <td className="cs-color-table-name">Worth a second look</td>
                <td><span className="cs-swatch" style={{ background: "#FFEDD5", color: "#9A3412" }}>Warning</span><span className="cs-pass">AA</span></td>
                <td><span className="cs-swatch" style={{ background: "#431407", color: "#FDBA74" }}>Warning</span><span className="cs-pass">AAA</span></td>
              </tr>
              <tr>
                <td className="cs-color-table-num">4</td>
                <td className="cs-color-table-name">Completed, posted</td>
                <td><span className="cs-swatch" style={{ background: "#DCFCE7", color: "#15803D" }}>Approve</span><span className="cs-pass">AA</span></td>
                <td><span className="cs-swatch" style={{ background: "#052E16", color: "#86EFAC" }}>Approve</span><span className="cs-pass">AAA</span></td>
              </tr>
              <tr>
                <td className="cs-color-table-num" rowSpan={2}>5</td>
                <td className="cs-color-table-name">Informational - need action</td>
                <td><span className="cs-swatch" style={{ background: "#111111", color: "#fff" }}>Action Needed</span><span className="cs-pass">AAA</span></td>
                <td><span className="cs-swatch" style={{ background: "#D4D4D8", color: "#111111", border: "1px solid #A1A1AA" }}>Action Needed</span><span className="cs-pass">AAA</span></td>
              </tr>
              <tr>
                <td className="cs-color-table-name">Informational - no action needed</td>
                <td><span className="cs-swatch" style={{ background: "transparent", color: "#111111", border: "1.5px solid #111111" }}>Completed</span><span className="cs-pass">AAA</span></td>
                <td>
                  <span style={{ display: "inline-block", background: "#1E1D1B", borderRadius: 6, padding: 2 }}>
                    <span className="cs-swatch" style={{ background: "transparent", color: "#fff", border: "1.5px solid #fff" }}>Completed</span>
                  </span>
                  <span className="cs-pass">AAA</span>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="cs-color-cascade-note">Checked in order &mdash; first match wins</p>
        </div>
        </ScrollReveal>

        {/* 03 Design Engineering */}
        <ScrollReveal>
        <div className="section section--child" id="sec-engineering">
          <p className="cs-label">03 &middot; Design Engineering</p>
          <h2 className="cs-heading">
            One system, two frameworks
          </h2>
          <p>
            Enterprise couldn&apos;t replace Chakra UI, so I built
            three shared layers without rewriting the existing
            frameworks.
          </p>

          <div className="cs-solutions-row">
            <div className="cs-solution-card">
              <span className="cs-solution-num">1</span>
              <h3>Shared Tokens</h3>
              <p>
                One source for colors, spacing, typography, and
                radius &mdash; Chakra&apos;s theme and
                shadcn&apos;s CSS variables both consume it.
              </p>
            </div>
            <div className="cs-solution-card">
              <span className="cs-solution-num">2</span>
              <h3>Shared Chassis</h3>
              <p>
                Five common navigation controls, extracted into a
                framework-agnostic layer used by all 3 apps.
              </p>
            </div>
            <div className="cs-solution-card">
              <span className="cs-solution-num">3</span>
              <h3>Shared Features</h3>
              <p>
                Reusable business logic across platforms &mdash;
                UI stays local, both import the same hooks.
              </p>
            </div>
          </div>

          <p style={{ marginTop: 24 }}>
            On top of those shared layers, I built the governance
            that lets AI generate UI across all 3 platforms
            without inventing its own rules.
          </p>

          <div className="cs-image-full" style={{ marginTop: 32 }}>
            <Image
              src="/images/projects/apex/architecture-target.svg"
              alt="Target architecture — tokens, chassis, features layers feeding into shadcn and Chakra UI"
              width={900}
              height={360}
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          <p className="cs-color-cascade-note">Target architecture &mdash; three new shared layers</p>

          <h2 style={{ marginTop: 48 }}>How I Use AI</h2>
          <Accordion>
            <AccordionItem num="01" title="CLAUDE.md">
              <p>
                <code>CLAUDE.md</code> is the project&apos;s
                root contract &mdash; read on every single run,
                no matter which command triggers it. It
                governs:
              </p>
              <ul className="cs-list">
                <li>
                  Color, spacing, typography, and radius tokens
                  &mdash; one source every mockup pulls from.
                </li>
                <li>
                  Auto-layout rules &mdash; the same Figma
                  spacing, light/dark mode, color, and pattern
                  conventions on every screen.
                </li>
                <li>
                  Security &mdash; every agent is scoped to the
                  internal GraphQL API serving synthetic mock
                  data, never production financial or customer
                  records.
                </li>
              </ul>
            </AccordionItem>
            <AccordionItem num="02" title="Agent">
              <p>
                <code>/design-researcher</code> and{" "}
                <code>/design-principal</code> handle
                exploration and standardization &mdash;
                researcher pulls real screenshots and flows
                from Mobbin to audit patterns and gaps, and
                principal turns that research into interactive,
                mid-fidelity mockups reasoned through
                Nielsen&apos;s heuristics, the Laws of UX, and
                Gestalt principles, each one bound to the{" "}
                <code>CLAUDE.md</code> contract.
              </p>
              <LaptopScroll
                src="/images/projects/apex/ai-research.png"
                alt="AI Design Researcher output — modal vs side sheet competitive analysis with Mobbin screenshots"
                startPercent={35}
                endPercent={70}
              />
              <p className="cs-media-caption">Design Researcher agent output</p>
            </AccordionItem>
            <AccordionItem num="03" title="Skills">
              <p>
                <code>/design-start</code> and{" "}
                <code>/design-commit</code> give the design
                team a standardized workflow &mdash; designers
                who don&apos;t write code go from an approved
                mockup to a PR with an auto-deployed preview
                link, no local setup, building consistent,
                reusable, scalable patterns.
              </p>
              <TerminalDemo />
            </AccordionItem>
          </Accordion>
        </div>
        </ScrollReveal>

        {/* Takeaway */}
        <ScrollReveal>
        <div className="section" id="sec-takeaway">
          <h2>Takeaway</h2>
          <h3>Consistency doesn&apos;t mean identical</h3>
          <p>
            This project taught me that a shared design system
            isn&apos;t about making every product look the same.
          </p>
          <p>
            It&apos;s about knowing what to standardize, what to
            keep flexible, and building a foundation that helps
            teams maintain both.
          </p>
        </div>
        </ScrollReveal>

        <div className="proj-nav-bar">
          <Link href="/">&larr; All Projects</Link>
          <Link href="/projects/eli-lilly">
            Next: Eli Lilly &rarr;
          </Link>
        </div>
        </PasswordGate>
      </div>
    </>
  );
}
