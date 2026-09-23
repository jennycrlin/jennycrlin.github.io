import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PasswordGate } from "@/components/PasswordGate";
import { SectionProgress } from "@/components/SectionProgress";
import { LaptopScroll } from "@/components/LaptopScroll";

export const metadata: Metadata = {
  title: "Apex Fintech — Jenny Lin",
};

const NAV_SECTIONS = [
  { label: "Context", href: "#sec-context" },
  { label: "Impact", href: "#sec-impact" },
  { label: "System", href: "#sec-design", childIds: ["sec-system", "sec-governance"] },
  { label: "Leadership", href: "#sec-leadership" },
];

export default function ApexPage() {
  return (
    <>
      <div className="proj-hero">
        <h1>Governing AI-Generated UI Across 3 Fintech Platforms</h1>
        <p className="desc">
          Architecting Ascend OS (advisor-facing), Enterprise
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
            and custody firms in the US. Ascend OS, Enterprise,
            and Investor were each built in isolation &mdash; two
            different component libraries, no shared architecture,
            no way to stay consistent as features shipped. And the
            team was reaching for AI to move faster, which
            without constraints would only fragment things more:
            inventing its own spacing, colors, and assumptions
            about data it shouldn&apos;t touch.
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
            <p>Onto one design system across 3 platforms.</p>
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
            Enterprise runs on Chakra UI; Wealth and Investor
            run on shadcn. Rewriting either would take months
            and break a stable product. Instead, I led design
            and engineering through working sessions to decide,
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
              height={480}
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
            Constraints, not prompts
          </h2>
          <p>
            Once the system existed, the risk shifted: AI could
            generate UI fast, but unconstrained speed is just a
            new kind of fragmentation &mdash; and a new kind of
            exposure. I built a small design team inside Claude
            Code with hard limits on both: pattern research,
            mockups bound to a strict component contract, and
            automation that ships straight to a PR without ever
            touching production data.
          </p>

          <div className="cs-solutions-row cs-solutions-row--four">
            <div className="cs-solution-card">
              <span className="cs-solution-num">1</span>
              <h3>Design Researcher</h3>
              <p>
                Audits real app screenshots via MCP &mdash;
                patterns to adopt, anti-patterns to avoid.
              </p>
            </div>
            <div className="cs-solution-card">
              <span className="cs-solution-num">2</span>
              <h3>Design Principal</h3>
              <p>
                Generates mockups bound to one component
                contract &mdash; spacing, typography, radius,
                light/dark, color, pattern &mdash; from our Figma
                auto-layout rules. The AI can&apos;t improvise, so
                trading, cash, and billing stay consistent by
                construction.
              </p>
            </div>
            <div className="cs-solution-card">
              <span className="cs-solution-num">3</span>
              <h3>Security Governance</h3>
              <p>
                Every agent runs on synthetic mock data &mdash;
                never production records. Real data never enters
                the prompt, the output, or the PR.
              </p>
            </div>
            <div className="cs-solution-card">
              <span className="cs-solution-num">4</span>
              <h3>PR Automation</h3>
              <p>
                Two commands take a validated mockup to a
                deployed PR preview link &mdash; no code
                knowledge required.
              </p>
            </div>
          </div>

          <div className="cs-cmd-flow">
            <div className="cs-cmd-step">
              <code>/design-start</code>
              <p>Creates a branch from the mockup a designer just approved.</p>
            </div>
            <span className="cs-cmd-arrow">&darr;</span>
            <div className="cs-cmd-step">
              <code>/design-commit</code>
              <p>Commits the code-ready UI and opens the PR.</p>
            </div>
            <span className="cs-cmd-arrow">&darr;</span>
            <div className="cs-cmd-step">
              Auto-deploy
              <p>Builds a temporary preview link, posted on the PR.</p>
            </div>
            <span className="cs-cmd-arrow">&darr;</span>
            <div className="cs-cmd-step">
              PM review
              <p>One click on the preview link &mdash; no local setup, no waiting on engineering.</p>
            </div>
          </div>

          <p>
            The result: page-build timelines dropped from
            roughly 4 months to under 1 month, and any designer
            on the team can ship a reviewable prototype without
            writing a line of code.
          </p>

          <LaptopScroll
            src="/images/projects/apex/ai-research.png"
            alt="AI Design Researcher output — modal vs side sheet competitive analysis with Mobbin screenshots"
            startPercent={35}
            endPercent={70}
          />
          <p className="cs-media-caption">Design Researcher agent output</p>
        </div>

        {/* 03 Leadership */}
        <div className="section" id="sec-leadership">
          <p className="cs-label">03 From Practice to Standard</p>
          <h2 className="cs-heading">
            From my workflow to the team&apos;s standard
          </h2>
          <p>
            None of this stayed a solo habit. I led and mentored
            a cross-functional team of designers, PMs, and
            engineers adopting the component contract and the
            AI-assisted workflow templates, and ran the sessions
            deciding which shadcn/Chakra elements to standardize
            per platform. I presented the rationale and roadmap
            trade-offs to engineering and product leadership
            within our Agile cadence &mdash; a shared decision,
            not a mandate handed down after the fact.
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
