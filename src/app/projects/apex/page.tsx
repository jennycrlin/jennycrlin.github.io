import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PasswordGate } from "@/components/PasswordGate";
import { SectionProgress } from "@/components/SectionProgress";
import { LaptopScroll } from "@/components/LaptopScroll";
import { TerminalDemo } from "@/components/TerminalDemo";

export const metadata: Metadata = {
  title: "Apex Fintech — Jenny Lin",
};

const NAV_SECTIONS = [
  { label: "Context", href: "#sec-context" },
  { label: "Impact", href: "#sec-impact" },
  { label: "System", href: "#sec-design", childIds: ["sec-system", "sec-governance"] },
  { label: "Takeaway", href: "#sec-takeaway" },
];

export default function ApexPage() {
  return (
    <>
      <div className="proj-hero">
        <h1>Governing AI-Generated UI Across 3 Fintech Platforms</h1>
        <p className="desc">
          Architecting Wealth (advisor-facing), Enterprise
          (internal ops), and Investor (client-facing) onto one
          single source of truth &mdash; then building the
          constraints that let AI agents ship consistent, secure
          UI on top of it, delivering $1.2M+ in annual savings.
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

        <div className="hero-blurred hero-blurred--layered" style={{ marginTop: 32 }}>
          <Image
            src="/images/projects/apex/cover.png"
            alt="Apex platform overview — desktop"
            width={2900}
            height={1738}
            sizes="(max-width: 768px) 100vw, 900px"
            className="hero-blurred-bg"
            priority
          />
<Image
            src="/images/projects/apex/cover4.png"
            alt="Enterprise integration toggle"
            width={552}
            height={1138}
            className="hero-blurred-float hero-blurred-float--right-top"
          />
        </div>
      </div>

      <div className="proj-content-full">
        <SectionProgress sections={NAV_SECTIONS} />

        {/* Context */}
        <div className="section" id="sec-context">
          <p className="cs-label">Problem</p>
          <h2 className="cs-heading">
            No shared system, no rules for AI
          </h2>
          <p>
            Apex Fintech Solutions is one of the largest clearing
            and custody firms in the US. Wealth and Investor
            already shared shadcn; my goal was to bring
            Enterprise&apos;s 30+ apps into that same system too.
            An API dependency meant Enterprise couldn&apos;t drop
            Chakra UI, so unification had to happen above the
            framework, not by rewriting it &mdash; right as the
            team was reaching for AI to move faster, which
            without constraints would only fragment things more.
          </p>
          <blockquote>
            <p>
              How do you let AI move fast across 3 platforms with
              different users and different business logic &mdash;
              without it inventing its own rules, or touching data
              it shouldn&apos;t?
            </p>
          </blockquote>
        </div>

        {/* Impact */}
        <div className="section" id="sec-impact">
          <h2>Impact</h2>
        </div>
        <div className="cs-stats cs-stats--four">
          <div className="cs-stat-card">
            <div className="cs-stat-number">$1.2M+</div>
            <div className="cs-stat-title">Annual Savings</div>
            <p>Through AI-driven workflow automation.</p>
          </div>
          <div className="cs-stat-card">
            <div className="cs-stat-number">&lt;1 Month</div>
            <div className="cs-stat-title">Build Time</div>
            <p>Down from ~4 months, via GraphQL-powered prototyping.</p>
          </div>
          <div className="cs-stat-card">
            <div className="cs-stat-number">~25 hrs</div>
            <div className="cs-stat-title">PM Time Reclaimed / Month</div>
            <p>By eliminating local dev setup for prototype review.</p>
          </div>
          <div className="cs-stat-card">
            <div className="cs-stat-number">30+</div>
            <div className="cs-stat-title">Apps Unified</div>
            <p>Enterprise&apos;s apps, brought into the shared system.</p>
          </div>
        </div>

        <PasswordGate code="5600">

        {/* Design */}
        <div className="section" id="sec-design">
          <h2>The System</h2>
        </div>

        {/* 01 Single Source of Truth */}
        <div className="section" id="sec-system">
          <p className="cs-label">01 Single Source of Truth</p>
          <h2 className="cs-heading">
            Three layers, zero rewrites
          </h2>
          <p>
            With the framework question settled &mdash; Chakra
            stays, shadcn stays &mdash; I led design and
            engineering through working sessions to decide,
            element by element, which components become the
            shared standard &mdash; balancing each platform&apos;s
            needs so the system could still support customization
            later. That became three additive layers, each
            shipped as an independent PR:
          </p>

          <div className="cs-solutions-row">
            <div className="cs-solution-card">
              <span className="cs-solution-num">1</span>
              <h3>Shared Tokens</h3>
              <p>
                Color, spacing, typography, and radius defined
                once in <code>tokens/</code>. Chakra&apos;s
                theme and shadcn&apos;s CSS variables both
                consume the same source &mdash; visual
                consistency without framework parity.
              </p>
            </div>
            <div className="cs-solution-card">
              <span className="cs-solution-num">2</span>
              <h3>Shared Chassis</h3>
              <p>
                Extract the 5 common controls (Global Search,
                Access Management, App Menu, Rep Code Toggle,
                Account Context) into <code>chassis/</code>
                &mdash; framework-agnostic, used by all 3 apps.
              </p>
            </div>
            <div className="cs-solution-card">
              <span className="cs-solution-num">3</span>
              <h3>Shared Features</h3>
              <p>
                Business logic (hooks, contexts, types) moves
                to <code>features/</code> by domain. UI stays
                in each platform&apos;s component directory
                &mdash; both import the same{" "}
                <code>useAccountList</code>.
              </p>
            </div>
          </div>

          <div className="cs-image-full" style={{ marginTop: 32 }}>
            <Image
              src="/images/projects/apex/architecture-target.svg"
              alt="Target architecture — tokens, chassis, features layers feeding into shadcn and Chakra UI"
              width={900}
              height={388}
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <p className="cs-label" style={{ marginTop: 40 }}>Before</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 12 }}>
            <figure className="cs-grid-fig">
              <Image
                src="/images/projects/apex/enterprise-current.png"
                alt="Enterprise — Chakra UI"
                width={800}
                height={500}
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ borderRadius: 8, border: '1px solid var(--border)' }}
              />
              <figcaption>Enterprise &mdash; Chakra UI</figcaption>
            </figure>
            <figure className="cs-grid-fig">
              <Image
                src="/images/projects/apex/wealth-current.png"
                alt="Wealth — shadcn"
                width={800}
                height={500}
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ borderRadius: 8, border: '1px solid var(--border)' }}
              />
              <figcaption>Wealth &mdash; shadcn</figcaption>
            </figure>
          </div>

          <p className="cs-label" style={{ marginTop: 40 }}>After</p>
          <figure className="cs-grid-fig cs-annotate-wrap" style={{ marginTop: 12 }}>
            <Image
              src="/images/projects/apex/shared.png"
              alt="Unified platform — shared design tokens and chassis"
              width={1200}
              height={700}
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ borderRadius: 8, border: '1px solid var(--border)' }}
            />

            {/* A — Initiate Cash Transfer: was a standalone button, now a tab */}
            <div className="cs-annotate-box" style={{ left: '13.0%', top: '6.5%', width: '9.5%', height: '7%' }} />
            <div className="cs-annotate-tag" style={{ left: '23.5%', top: '7.7%' }}>
              A: was a button &rarr; now a tab
            </div>

            {/* B — Expanded filter panel replaces separate Consent/Activity tabs */}
            <div className="cs-annotate-box" style={{ left: '0.7%', top: '18.5%', width: '99%', height: '15.5%' }} />
            <div className="cs-annotate-tag" style={{ left: '0.7%', top: '36%' }}>
              B: filters do more, so old Consent/Activity tabs aren&apos;t needed
            </div>

            {/* C — Buttons unified to brand blue */}
            <div className="cs-annotate-box" style={{ left: '87.5%', top: '1.0%', width: '6.2%', height: '4.5%' }} />
            <div className="cs-annotate-tag" style={{ left: '83%', top: '6.6%' }}>
              C: unified to blue
            </div>

            <figcaption>Unified &mdash; shared tokens, chassis, and features</figcaption>
          </figure>
        </div>

        {/* 02 AI Governance */}
        <div className="section" id="sec-governance">
          <p className="cs-label">02 Governing the Machine</p>
          <h2 className="cs-heading">
            One file governs every command
          </h2>
          <p>
            Once the system existed, the risk shifted: AI could
            generate UI fast, but unconstrained speed is just a
            new kind of fragmentation &mdash; and a new kind of
            exposure. I anchored governance in a root{" "}
            <code>CLAUDE.md</code> &mdash; read on every single
            run, no matter which command triggers it &mdash; then
            built a set of <code>/commands</code> on top of it so
            the whole design team, not just me, works inside the
            same guardrails.
          </p>

          <div className="cs-step-intro" style={{ marginTop: 28 }}>
            <h3><code>CLAUDE.md</code></h3>
            <p>
              Security and the component contract live here, not
              inside any single command, so neither can be
              skipped. Every agent is scoped to synthetic mock
              data &mdash; never production financial or customer
              records. Every mockup is bound to the same Figma
              auto-layout rules: spacing, typography, radius,
              light/dark mode, color, pattern.
            </p>
          </div>

          <p style={{ marginTop: 20 }}>
            Status was black-and-white before the contract existed
            &mdash; no semantic system, styled ad hoc. I defined a
            5-state cascade, audited every component against{" "}
            <b>WCAG 2.2</b> with WAVE, and reconciled two color
            models (Tailwind vs. OKLCH) into one scale.
          </p>

          <p className="cs-color-cascade-note">Checked in order &mdash; first match wins</p>
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

          <p style={{ marginTop: 24 }}>
            With the guardrails set, the commands build on top of them:
          </p>

          <div className="cs-step-intro">
            <h3><code>/design-researcher</code></h3>
            <p>
              Explores the problem through competitive analysis
              &mdash; pulls real app screenshots and full user
              flows from Mobbin via MCP and the web, and returns
              a structured audit: patterns to adopt, anti-patterns
              to avoid, and where the gap is. Any designer on the
              team can run it, not just me, so research stays
              consistent across the whole team.
            </p>
          </div>
          <LaptopScroll
            src="/images/projects/apex/ai-research.png"
            alt="AI Design Researcher output — modal vs side sheet competitive analysis with Mobbin screenshots"
            startPercent={35}
            endPercent={70}
          />
          <p className="cs-media-caption">Design Researcher agent output</p>

          <div className="cs-step-intro">
            <h3><code>/design-principal</code></h3>
            <p>
              Turns that research into design directions &mdash;
              reasoning through Nielsen&apos;s heuristics, the
              Laws of UX, and Gestalt principles &mdash; and
              generates interactive, mid-fidelity HTML mockups
              bound to the contract defined in{" "}
              <code>CLAUDE.md</code>, each one tagged with a
              confidence level instead of faking certainty.
            </p>
          </div>

          <div className="cs-step-intro">
            <h3><code>/design-start</code></h3>
            <p>Creates a branch from the approved mockup.</p>
          </div>

          <div className="cs-step-intro">
            <h3><code>/design-commit</code></h3>
            <p>
              Commits the code-ready UI and opens the PR
              &mdash; auto-deploy posts a preview link so the
              PM can review in one click, no local setup.
            </p>
          </div>

          <TerminalDemo />
        </div>

        {/* Takeaway */}
        <div className="section" id="sec-takeaway">
          <h2>Takeaway</h2>
          <p>
            AI is an efficiency tool, not a design decision-maker.
            The speed only helps if the contract behind it is
            well-defined &mdash; and if the team actually adopts
            it. That&apos;s what I built: a root{" "}
            <code>CLAUDE.md</code> and the{" "}
            <code>/commands</code>{" "}on top of it, so faster AI
            generation meant faster consistency, not faster
            chaos. Getting the team there took leading the
            cross-functional sessions where we agreed what
            to standardize, mentoring designers and PMs into a
            workflow they&apos;d actually use, and making the
            case to engineering and product leadership for why
            it mattered.
          </p>
        </div>

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
