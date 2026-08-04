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
  { label: "Design", href: "#sec-design", childIds: ["sec-ia", "sec-ai"] },
];

export default function ApexPage() {
  return (
    <>
      <div className="proj-hero">
        <h1>3 Fintech Platforms, One Unified System</h1>
        <p className="desc">
          Architecting Ascend OS (advisor-facing), Enterprise
          (internal ops), and Investor (client-facing) from scratch
          &mdash; with AI-augmented workflows that compressed
          concept-to-prototype from 60 days to 1, delivering $1.2M+
          in annual savings.
        </p>
        <div className="meta-grid">
          <div className="meta-item">
            <label>My Role</label>
            <span>Product Design Engineer</span>
          </div>
          <div className="meta-item">
            <label>Team</label>
            <span>PMs, Engineers, Compliance</span>
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
            Three platforms, two component libraries, zero
            shared architecture
          </h2>
          <p>
            Apex Fintech Solutions is one of the largest clearing
            and custody firms in the US. When I joined, each
            platform &mdash; Ascend OS, Enterprise, and Investor
            &mdash; was designed and built in isolation. Enterprise
            used one component library; Advisor and Investor shared
            another. There was no unified information architecture,
            no cross-platform design patterns, and no scalable way
            to maintain consistency as features shipped.
          </p>
          <blockquote>
            <p>
              How do you unify 3 platforms with different users,
              different component libraries, and different business
              logic &mdash; without slowing any of them down?
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
            <div className="cs-stat-number">98%</div>
            <div className="cs-stat-title">Faster Handoff</div>
            <p>60-day cycles compressed to 1-day turnaround.</p>
          </div>
          <div className="cs-stat-card">
            <div className="cs-stat-number">40%</div>
            <div className="cs-stat-title">Task Completion</div>
            <p>Faster completion time across platforms.</p>
          </div>
          <div className="cs-stat-card">
            <div className="cs-stat-number">2,300+</div>
            <div className="cs-stat-title">Iterations</div>
            <p>Governed component library across 3 platforms.</p>
          </div>
        </div>

        <PasswordGate code="5600">

        {/* Design */}
        <div className="section" id="sec-design">
          <h2>Design</h2>
        </div>

        {/* 01 Convergence Strategy */}
        <div className="section" id="sec-ia">
          <p className="cs-label">01 Convergence Strategy</p>
          <h2 className="cs-heading">
            Unifying without rewriting &mdash; three
            incremental layers
          </h2>
          <p>
            Enterprise runs on Chakra UI with atomic design.
            Advisor and Investor run on shadcn with
            feature-based components. Rewriting either side
            would take months and break a stable product.
            Instead, I&apos;m driving convergence through
            three additive layers &mdash; each is an
            independent PR that doesn&apos;t break existing
            features:
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
          <figure className="cs-grid-fig" style={{ marginTop: 12 }}>
            <Image
              src="/images/projects/apex/shared.png"
              alt="Unified platform — shared design tokens and chassis"
              width={1200}
              height={700}
              sizes="(max-width: 768px) 100vw, 800px"
              style={{ borderRadius: 8, border: '1px solid var(--border)' }}
            />
            <figcaption>Unified &mdash; shared tokens, chassis, and features</figcaption>
          </figure>
        </div>

        {/* 03 AI-Augmented Workflow */}
        <div className="section" id="sec-ai">
          <p className="cs-label">02 AI Workflow</p>
          <h2 className="cs-heading">
            I didn&apos;t use AI to generate UI &mdash; I
            built the systems that get me to validated
            directions faster
          </h2>
          <p>
            I built a small design team inside Claude Code: a
            Design Researcher that audits real patterns from
            Mobbin and the web, then hands off to a Design
            Principal that turns it into interactive mockups.
          </p>

          <div className="cs-solutions-row" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="cs-solution-card">
              <span className="cs-solution-num">1</span>
              <h3>Design Researcher</h3>
              <p>
                Pulls real app screenshots via MCP. Returns
                patterns to adopt, anti-patterns to avoid, and
                where the gap is.
              </p>
            </div>
            <div className="cs-solution-card">
              <span className="cs-solution-num">2</span>
              <h3>Design Principal</h3>
              <p>
                Generates design directions as mid-fidelity
                HTML wireframes grounded in usability
                heuristics.
              </p>
            </div>
          </div>

          <p>
            I prototype directly in React and TypeScript,
            shipping production-quality UI that engineers
            integrate &mdash; compressing 60-day handoff cycles
            to 1-day turnarounds across 2,300+ iterations.
          </p>

          <LaptopScroll
            src="/images/projects/apex/ai-research.png"
            alt="AI Design Researcher output — modal vs side sheet competitive analysis with Mobbin screenshots"
            startPercent={35}
            endPercent={70}
          />
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
