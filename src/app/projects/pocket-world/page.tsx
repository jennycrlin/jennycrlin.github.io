import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PasswordGate } from "@/components/PasswordGate";
import { SectionProgress } from "@/components/SectionProgress";
import { Accordion, AccordionItem } from "@/components/Accordion";

export const metadata: Metadata = {
  title: "Pocket Worlds Gifting — Jenny Lin",
};

const NAV_SECTIONS = [
  { label: "Overview", href: "#sec-overview" },
  { label: "Wireframe & Prototype", href: "#sec-interaction", childIds: ["sec-exploration", "sec-initial-design"] },
  { label: "Motion Design", href: "#sec-motion" },
  { label: "Takeaway", href: "#sec-takeaway" },
];

const PROTOTYPE_URL = "https://receiver-opening-prototype.vercel.app/";

export default function PocketWorldPage() {
  const isVercel = process.env.VERCEL === "1";

  return (
    <>
      <div className="proj-hero">
        <h1>Designing a Playful Gifting Experience</h1>
        <p className="desc">
          Designed a gifting flow for a social gardening game, combining
          reusable UI components, thoughtful interactions, and an animated
          gift-opening experience.
        </p>
        <div className="meta-grid">
          <div className="meta-item">
            <label>Role</label>
            <span>UX Designer</span>
          </div>
          <div className="meta-item">
            <label>Project Type</label>
            <span>Design Exercise</span>
          </div>
          <div className="meta-item">
            <label>Timeline</label>
            <span>4 days</span>
          </div>
        </div>

        <div className="pocket-hero-stage">
          <svg className="pocket-lines" viewBox="0 0 860 600" width="860" height="600" aria-hidden="true">
            <polyline className="pocket-line" points="300,130 175,105 95,75" />
            <polyline className="pocket-line-shimmer pocket-line--gift" points="300,130 175,105 95,75" />
            <circle className="pocket-line-dot" cx="175" cy="105" r="4" />
            <circle className="pocket-line-dot" cx="95" cy="75" r="4" />

            <polyline className="pocket-line" points="560,150 685,120 765,95" />
            <polyline className="pocket-line-shimmer pocket-line--boba" points="560,150 685,120 765,95" />
            <circle className="pocket-line-dot" cx="685" cy="120" r="4" />
            <circle className="pocket-line-dot" cx="765" cy="95" r="4" />

            <polyline className="pocket-line" points="300,460 175,485 85,510" />
            <polyline className="pocket-line-shimmer pocket-line--flower" points="300,460 175,485 85,510" />
            <circle className="pocket-line-dot" cx="175" cy="485" r="4" />
            <circle className="pocket-line-dot" cx="85" cy="510" r="4" />

            <polyline className="pocket-line" points="560,480 685,505 775,530" />
            <polyline className="pocket-line-shimmer pocket-line--note" points="560,480 685,505 775,530" />
            <circle className="pocket-line-dot" cx="685" cy="505" r="4" />
            <circle className="pocket-line-dot" cx="775" cy="530" r="4" />
          </svg>
          <span className="pocket-float pocket-float--gift" aria-hidden="true">
            <span className="pocket-bubble">🎁</span>
          </span>
          <span className="pocket-float pocket-float--boba" aria-hidden="true">
            <span className="pocket-bubble pocket-bubble--sm">🧋</span>
          </span>
          <span className="pocket-float pocket-float--flower" aria-hidden="true">
            <span className="pocket-bubble pocket-bubble--xs">🌸</span>
          </span>
          <span className="pocket-float pocket-float--note" aria-hidden="true">
            <span className="pocket-bubble pocket-bubble--sm">💌</span>
          </span>
          <div className="pocket-prototype-embed">
            <iframe
              src={PROTOTYPE_URL}
              title="Interactive gift-opening prototype — tap to open the gift"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="proj-content-full">
        <SectionProgress sections={NAV_SECTIONS} />

        {/* Overview */}
        <ScrollReveal>
          <div className="section" id="sec-overview">
            <h2>Overview</h2>
            <h3>Making gifting feel personal</h3>
            <p>
              Garden Together is a fictional social gardening game where
              players decorate their gardens, visit friends, and exchange
              gifts. I designed the customization, recipient, and checkout
              flow, then built an interactive prototype showing how a
              friend receives and opens the gift. The challenge was to
              make gifting feel playful and personal while staying
              consistent with the game&apos;s existing visual style.
            </p>
          </div>
        </ScrollReveal>

        <PasswordGate active={isVercel} code="we1come" popup={isVercel}>
          {/* Wireframe & Prototype */}
          <ScrollReveal>
            <div className="section" id="sec-interaction">
              <h2>Wireframe &amp; Prototype</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section section--child" id="sec-exploration">
              <p className="cs-label">01 &middot; Wireframe</p>
              <h2 className="cs-heading">Finding the right flow for gifting</h2>
              <p>
                I explored three approaches: a single scrolling screen, a
                gift-focused layout, and a step-by-step pop-up.
              </p>
              <p>
                I initially chose the pop-up because it kept each decision
                focused and visually connected to the shop.
              </p>
              <div className="cs-image-full cs-image-full--medium">
                <Image
                  src="/images/projects/pocket-world/wireframe.png"
                  alt="Three low-fidelity wireframe approaches — single scroll, gift-focused, and pop-up — with the pop-up marked as the initial direction"
                  width={5116}
                  height={3444}
                  sizes="(max-width: 768px) 100vw, 860px"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section section--child" id="sec-initial-design">
              <p className="cs-label">02 &middot; High-Fi Prototype</p>
              <h2 className="cs-heading">From customization to checkout</h2>
              <p>I designed three connected steps:</p>
              <ul className="cs-list">
                <li>
                  <strong>Customize:</strong> Preview the gift, choose
                  toppings, and see the cost.
                </li>
                <li>
                  <strong>Recipient:</strong> Choose a friend and leave a
                  message.
                </li>
                <li>
                  <strong>Checkout:</strong> Review the gift, recipient, and
                  total before sending.
                </li>
              </ul>
              <p>
                Each step followed the same visual and component rules,
                keeping the experience consistent with the existing game.
              </p>
              <div className="cs-image-full">
                <Image
                  src="/images/projects/pocket-world/final-design.png"
                  alt="Initial Customization, Recipient, and Checkout screens"
                  width={3000}
                  height={1500}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Motion Design */}
          <ScrollReveal>
            <div className="section" id="sec-motion">
              <h2>Motion Design</h2>
              <h3>Making the gift-opening moment feel special</h3>
              <p>
                I wanted receiving a gift to feel personal, not just
                another reward notification. Feedback from three regular
                players &mdash; some wanted it fast, one always skipped
                animations &mdash; shaped a short, skippable sequence that
                still gives the personal message room.
              </p>
              <p>
                The biggest challenge was keeping the motion connected
                &mdash; the note moves off-screen as the gift shifts into
                the corner, then both return to center without jumping
                between screens. I refined position, scale, opacity, and
                timing until it read as one continuous interaction.
              </p>
              <div className="cs-image-full">
                <Image
                  src="/images/projects/pocket-world/prototype-flow.png"
                  alt="Interactive prototype preview — gift-opening motion sequence"
                  width={3000}
                  height={1500}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              <a
                href={PROTOTYPE_URL}
                className="cs-cta-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try the Interactive Prototype &rarr;
              </a>

              <h2 style={{ marginTop: 48 }}>How I Use AI</h2>
              <Accordion>
                <AccordionItem num="01" title="CLAUDE.md">
                  <p>
                    I documented the game&apos;s existing design language in{" "}
                    <code>CLAUDE.md</code> before generating new screens,
                    rather than asking AI to invent its own visual style. I
                    reused the provided components and defined additional
                    patterns needed for gifting.
                  </p>
                  <ul className="cs-list">
                    <li>
                      <strong>Design tokens:</strong> Colors, typography,
                      spacing, radius.
                    </li>
                    <li>
                      <strong>Components:</strong> Buttons, wallet, gift
                      cards, toppings, navigation.
                    </li>
                    <li>
                      <strong>States:</strong> Selected, unselected,
                      interaction.
                    </li>
                    <li>
                      <strong>Layout:</strong> Consistent padding, alignment,
                      structure.
                    </li>
                  </ul>
                  <p>
                    This kept the new screens visually consistent and made
                    future changes easier to manage.
                  </p>
                  <div className="cs-component-grid">
                    <div className="cs-component-grid-palette">
                      <Image
                        src="/images/projects/pocket-world/Color Palette.png"
                        alt="Color palette — Nighttime Garden"
                        width={2590}
                        height={3000}
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                    <div className="cs-component-grid-right">
                      <Image
                        src="/images/projects/pocket-world/Components-icon.png"
                        alt="Shared components and icon set used across the gifting flow"
                        width={3000}
                        height={2734}
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem num="02" title="Workflow & Motion Specs">
                  <p>
                    Motion only earns its place if it&apos;s telling a
                    story, not just moving for its own sake. The note and
                    gift separate on open &mdash; the note reveals the
                    message first, then the gift reveals the reward.
                  </p>
                  <table className="cs-specs-table">
                    <thead>
                      <tr>
                        <th>Transition</th>
                        <th>Duration</th>
                        <th>Design Intention</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Note and gift separate</td>
                        <td>~1,200ms</td>
                        <td>Let players follow both objects</td>
                      </tr>
                      <tr>
                        <td>Message appears</td>
                        <td>~750ms</td>
                        <td>Gentle entrance</td>
                      </tr>
                      <tr>
                        <td>Gift moves to center</td>
                        <td>~900ms</td>
                        <td>Maintain spatial continuity</td>
                      </tr>
                      <tr>
                        <td>Gift squash &amp; twist</td>
                        <td>~600ms</td>
                        <td>Build anticipation</td>
                      </tr>
                      <tr>
                        <td>Reward reveal</td>
                        <td>~700ms</td>
                        <td>Make the reveal feel rewarding</td>
                      </tr>
                      <tr>
                        <td>Skip transition</td>
                        <td>~300ms</td>
                        <td>Respect player control</td>
                      </tr>
                    </tbody>
                  </table>
                </AccordionItem>
                <AccordionItem num="03" title="Build & Review">
                  <p>
                    Claude Code and Figma MCP helped build the screens and
                    prototype. I reviewed the output, corrected component
                    usage and spacing, and made the final design decisions.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </ScrollReveal>

          {/* Takeaway */}
          <ScrollReveal>
            <div className="section" id="sec-takeaway">
              <h2>Takeaway</h2>
              <h3>Good motion needs good interaction design</h3>
              <p>
                This project showed me how closely motion, visual design,
                and usability are connected.
              </p>
              <p>
                A playful animation can make a moment memorable, but
                players still need clear actions, visible options, and
                control over the experience.
              </p>
              <p>
                AI helped me prototype faster, while feedback and design
                judgment helped me decide what was worth changing.
              </p>
            </div>
          </ScrollReveal>
        </PasswordGate>

        <div className="proj-nav-bar">
          <Link href="/projects/healthcare">&larr; Healthcare</Link>
          <Link href="/projects/ai-agent">Next: Echo Learn &rarr;</Link>
        </div>
      </div>
    </>
  );
}
