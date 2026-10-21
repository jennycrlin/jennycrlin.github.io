import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PasswordGate } from "@/components/PasswordGate";
import { SectionProgress } from "@/components/SectionProgress";

export const metadata: Metadata = {
  title: "Pocket Worlds Gifting — Jenny Lin",
};

const NAV_SECTIONS = [
  { label: "Overview", href: "#sec-overview" },
  { label: "Interaction Design", href: "#sec-interaction", childIds: ["sec-exploration", "sec-initial-design"] },
  { label: "Design System & AI", href: "#sec-design", childIds: ["sec-components", "sec-ai-workflow"] },
  { label: "Motion Design", href: "#sec-motion", childIds: ["sec-storytelling", "sec-principles", "sec-prototype"] },
  { label: "Iteration", href: "#sec-iteration" },
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
            <label>Company</label>
            <span>Pocket Worlds</span>
          </div>
          <div className="meta-item">
            <label>Project</label>
            <span>Product Design Exercise</span>
          </div>
        </div>

        <a
          href={PROTOTYPE_URL}
          className="cs-cta-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Try the Interactive Prototype &rarr;
        </a>
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
          {/* Interaction Design */}
          <ScrollReveal>
            <div className="section" id="sec-interaction">
              <h2>Interaction Design</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section section--child" id="sec-exploration">
              <p className="cs-label">01 &middot; Exploration</p>
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
              <p className="cs-label">02 &middot; Initial Design</p>
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

          {/* Design System & AI */}
          <ScrollReveal>
            <div className="section" id="sec-design">
              <h2>Design System &amp; AI</h2>
              <h3>Building within the game&apos;s visual language</h3>
              <p>
                The Gift Shop and reception screen were already designed. I
                audited their existing components, colors, typography, and
                spacing before extending the system to the new gifting
                screens.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section section--child" id="sec-components">
              <p className="cs-label">01 &middot; Component Library</p>
              <h2 className="cs-heading">Making the design reusable</h2>
              <p>
                I reused the provided components and defined additional
                patterns needed for gifting.
              </p>
              <ul className="cs-list">
                <li>
                  <strong>Design tokens:</strong> Colors, typography,
                  spacing, and corner radius.
                </li>
                <li>
                  <strong>Reusable components:</strong> Buttons, wallet,
                  gift cards, topping options, and navigation.
                </li>
                <li>
                  <strong>Component states:</strong> Selected, unselected,
                  and relevant interaction states.
                </li>
                <li>
                  <strong>Layout rules:</strong> Consistent padding,
                  alignment, and container structure.
                </li>
              </ul>
              <p>
                This kept the new screens visually consistent and made
                future changes easier to manage.
              </p>
              <div className="cs-image-full">
                <Image
                  src="/images/projects/pocket-world/component.png"
                  alt="Component library showing design tokens, variants, and component anatomy"
                  width={9964}
                  height={5840}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section section--child" id="sec-ai-workflow">
              <p className="cs-label">02 &middot; AI Workflow</p>
              <h2 className="cs-heading">Giving Claude clear design rules</h2>
              <p>
                I documented the game&apos;s existing design language in{" "}
                <code>CLAUDE.md</code> before generating new screens.
              </p>
              <p>
                Rather than asking AI to invent a visual style, I defined the
                components, tokens, and layout rules it needed to follow.
              </p>
              <ul className="cs-list">
                <li>
                  <strong>
                    <code>CLAUDE.md</code>:
                  </strong>{" "}
                  Colors, typography, spacing, components, and Figma
                  references.
                </li>
                <li>
                  <strong>Workflow documentation:</strong> Design directions,
                  build order, and iteration notes.
                </li>
                <li>
                  <strong>Motion specifications:</strong> Animation states,
                  timing, easing, and interaction behavior.
                </li>
              </ul>
              <p>
                Claude Code and Figma MCP helped build the screens and
                prototype. I reviewed the output, corrected component usage
                and spacing, and made the final design decisions.
              </p>
            </div>
          </ScrollReveal>

          {/* Motion Design */}
          <ScrollReveal>
            <div className="section" id="sec-motion">
              <h2>Motion Design</h2>
              <h3>Making the gift-opening moment feel special</h3>
              <p>
                I wanted receiving a gift to feel like a small moment
                between friends, not just another reward notification.
              </p>
              <p>
                I spoke with three friends who regularly play games. Two
                preferred seeing the gift quickly, while one usually
                skipped animations. That feedback helped me balance the
                personal message with a short, skippable opening sequence.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section section--child" id="sec-storytelling">
              <p className="cs-label">01 &middot; Storytelling</p>
              <h2 className="cs-heading">The note comes before the gift</h2>
              <p>
                The opening starts with two objects: a note and a wrapped
                present.
              </p>
              <p>
                When players tap Open, the objects separate. The note
                reveals the sender&apos;s message, then the gift moves into
                focus and opens to reveal the reward. Afterward, players
                can send a thank-you or visit the sender&apos;s garden. I
                chose this order to give the personal message its own
                moment before the reward reveal.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section section--child" id="sec-principles">
              <p className="cs-label">02 &middot; Motion Principles</p>
              <h2 className="cs-heading">Designing movement with a purpose</h2>
              <p>
                Before building the prototype, I defined how each object
                should move and respond.
              </p>
              <ul className="cs-list">
                <li>
                  <strong>Spatial Continuity:</strong> The same gift moves
                  across states instead of disappearing and reappearing.
                </li>
                <li>
                  <strong>Timing &amp; Easing:</strong> Slower movement
                  builds anticipation; quicker transitions keep the
                  experience responsive.
                </li>
                <li>
                  <strong>Interaction Feedback:</strong> Subtle motion and
                  contextual hints make the gift&apos;s next action
                  discoverable.
                </li>
                <li>
                  <strong>Player Control:</strong> Skip lets players reach
                  the reward without watching the entire sequence.
                </li>
                <li>
                  <strong>Emotional Pacing:</strong> The note comes first to
                  preserve the personal message before the reward reveal.
                </li>
              </ul>

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
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section section--child" id="sec-prototype">
              <p className="cs-label">03 &middot; Interactive Prototype</p>
              <h2 className="cs-heading">
                From static frames to continuous motion
              </h2>
              <p>
                I mapped the animation states in Figma, then used Claude
                Code to build an interactive prototype.
              </p>
              <p>
                The biggest challenge was keeping the motion connected. The
                note needed to move off-screen while the gift moved into
                the corner, then return to the center without jumping
                between screens.
              </p>
              <p>
                I refined the position, scale, opacity, and timing to make
                the sequence feel like one continuous interaction.
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
            </div>
          </ScrollReveal>

          {/* Iteration */}
          <ScrollReveal>
            <div className="section" id="sec-iteration">
              <h2>Iteration</h2>
              <h3>Giving players more room to explore</h3>
              <p>
                Feedback showed that the pop-up made customization feel
                cramped, hid add-ons behind extra swipes, and gave players
                little sense of progress.
              </p>
              <p>
                I revisited the gift-focused direction with a full-screen
                layout, scrollable options, clearer progress, and more
                descriptive actions.
              </p>
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
          <Link href="/projects/eli-lilly">&larr; Eli Lilly</Link>
          <Link href="/projects/dashboard">Next: AT&amp;T Dashboard &rarr;</Link>
        </div>
      </div>
    </>
  );
}
