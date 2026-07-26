import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ProjectSidebar } from "@/components/ProjectSidebar";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Collapsible } from "@/components/Collapsible";
import { Carousel } from "@/components/Carousel";
import { ShowcaseReveal } from "@/components/ShowcaseReveal";

export const metadata: Metadata = {
  title: "Teaching AI Agent — Jenny Lin",
};

const TOC_SECTIONS = [
  {
    title: "Overview",
    href: "#sec-overview",
    children: [{ label: "Context", href: "#sec-overview" }],
  },
  {
    title: "Impact",
    href: "#sec-impact",
    children: [{ label: "Key Metrics", href: "#sec-impact" }],
  },
  {
    title: "Design",
    href: "#sec-design",
    children: [
      { label: "Conversation Flow", href: "#sec-flow" },
      { label: "Key Redesigns", href: "#sec-redesign" },
    ],
  },
  {
    title: "Research",
    href: "#sec-research",
    children: [
      { label: "Process", href: "#sec-research" },
      { label: "Findings", href: "#sec-findings" },
    ],
  },
];

export default function AIAgentPage() {
  return (
    <>
      <div className="proj-hero">
        <h1>EchoLearn — Teaching AI Agent</h1>
        <p className="desc">
          Integrating AI feedback, visualization, and tone optimization
          to support active learning through conversational interaction.
        </p>
        <div className="meta-grid">
          <div className="meta-item">
            <label>My Role</label>
            <span>UX Research Designer</span>
          </div>
          <div className="meta-item">
            <label>Team</label>
            <span>3 Designers, 2 Developers</span>
          </div>
          <div className="meta-item">
            <label>Timeline</label>
            <span>4 Months</span>
          </div>
          <div className="meta-item">
            <label>Platform</label>
            <span>Web &middot; Chatbot</span>
          </div>
        </div>

        <div className="cs-video-embed">
          <video autoPlay loop muted playsInline>
            <source
              src="/images/projects/ai-agent/video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="proj-body-wrap">
        <ProjectSidebar sections={TOC_SECTIONS} />

        <main className="proj-content">
          {/* Overview */}
          <ScrollReveal>
            <div className="section" id="sec-overview">
              <h2>Overview</h2>
              <p>
                Research shows that teaching a concept to others is one of the
                most effective learning strategies. EchoLearn applies this
                principle through a conversational AI agent — students teach
                concepts to the chatbot, which asks follow-up questions,
                provides feedback, and generates summaries to reinforce
                understanding.
              </p>
              <p>
                Built on VoiceFlow, the chatbot supports active learning
                through adaptive conversation flow, self-evaluation quizzes,
                and tone-optimized responses that balance professor-like
                authority with student-friendly approachability.
              </p>
            </div>
          </ScrollReveal>

          {/* Impact */}
          <ScrollReveal>
            <div className="section" id="sec-impact">
              <h2>Impact</h2>
            </div>
          </ScrollReveal>
          <div className="cs-stats cs-stats--four">
            <ScrollReveal delay={0}>
              <div className="cs-stat-card">
                <div className="cs-stat-number">4.83/5</div>
                <div className="cs-stat-title">Chatbot Usefulness</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="cs-stat-card">
                <div className="cs-stat-number">4.2/5</div>
                <div className="cs-stat-title">Interface Design</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="cs-stat-card">
                <div className="cs-stat-number">66%</div>
                <div className="cs-stat-title">Professor Tone Increase</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="cs-stat-card">
                <div className="cs-stat-number">4 &rarr; 4.5</div>
                <div className="cs-stat-title">Overall Understanding</div>
              </div>
            </ScrollReveal>
          </div>

          {/* Design */}
          <ScrollReveal>
            <div className="section" id="sec-design">
              <h2>Design</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section" id="sec-flow">
              <h3>Adaptive Conversation Flow</h3>
              <p>
                The chatbot asks a main question, evaluates whether the student
                covered the key point, and either moves to a summary or prompts
                based on their answer — with a maximum of three attempts before
                advancing.
              </p>
              <div className="cs-image-full">
                <Image
                  src="/images/projects/ai-agent/redesignFlow.png"
                  alt="Conversation flow: Ask question → Cover main point? → 3 attempts → Summary → Next concept"
                  width={4784}
                  height={1414}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </ScrollReveal>

          <ShowcaseReveal>
            <div className="cs-showcase" id="sec-redesign">
              <div className="cs-showcase-sticky">
                <h3>Key Redesigns</h3>
                <p>
                  Streamlining the interface to focus on
                  the core learning interaction.
                </p>
              </div>

              <div className="cs-showcase-scroll">
                <div className="cs-showcase-item">
                  <div className="cs-showcase-num">01</div>
                  <h4>Simplified Home Experience</h4>
                  <p>
                    Replaced the cluttered conversation list with a focused
                    input — &ldquo;Learn a concept better by teaching it to
                    our AI chatbot!&rdquo; — with file upload and streamlined
                    past conversation access.
                  </p>
                  <div className="cs-design-pair">
                    <Image
                      src="/images/projects/ai-agent/before.png"
                      alt="Before: cluttered home with rigid categories"
                      width={3243}
                      height={4479}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <Image
                      src="/images/projects/ai-agent/after.png"
                      alt="After: focused input with sidebar navigation"
                      width={3227}
                      height={4462}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                </div>

                <div className="cs-showcase-item">
                  <div className="cs-showcase-num">02</div>
                  <h4>Self-Evaluation &amp; Assessment</h4>
                  <p>
                    Added pre-test self-evaluation and quick quizzes to measure
                    learning outcomes before and after each teaching session.
                  </p>
                  <div className="cs-image-full cs-image-full--medium">
                    <Image
                      src="/images/projects/ai-agent/result.png"
                      alt="Results dashboard with self-evaluation and quick quiz"
                      width={4008}
                      height={2703}
                      sizes="(max-width: 768px) 100vw, 700px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ShowcaseReveal>

          {/* Research — collapsible */}
          <div className="section" id="sec-research">
            <Collapsible title="Research &amp; Process">
              <ScrollReveal>
                <h3>Research Process</h3>
                <div className="cs-image-full">
                  <Image
                    src="/images/projects/ai-agent/method.png"
                    alt="Literature Review → Competitor Analysis → User Interview → Wireframe → Prototype → Usability Testing"
                    width={6524}
                    height={1536}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </ScrollReveal>

              <div className="collapsible-section" id="sec-findings">
                <ScrollReveal>
                  <h3>User Findings</h3>
                  <p>
                    Users appreciated the confidence-building flow and
                    comfortable tone, but flagged repetitive questioning
                    and overly lengthy responses.
                  </p>
                  <div className="cs-image-full cs-image-full--medium">
                    <Image
                      src="/images/projects/ai-agent/findings.png"
                      alt="Positive: user confidence, smooth flow. Negative: repetitive questioning, lengthy responses"
                      width={6588}
                      height={3552}
                      sizes="(max-width: 768px) 100vw, 700px"
                    />
                  </div>
                </ScrollReveal>
              </div>

              <div className="collapsible-section">
                <ScrollReveal>
                  <h3>Methods</h3>
                  <Carousel
                    labels={[
                      "Competitor Analysis",
                      "Storyboard",
                      "VoiceFlow",
                    ]}
                  >
                    {[
                      <div key="ca">
                        <Image
                          src="/images/projects/ai-agent/ca.png"
                          alt="Competitor analysis of AI learning tools"
                          width={12948}
                          height={9108}
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>,
                      <div key="storyboard">
                        <Image
                          src="/images/projects/ai-agent/storyboard.png"
                          alt="Hand-drawn storyboards"
                          width={4012}
                          height={2929}
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>,
                      <div key="voiceflow">
                        <Image
                          src="/images/projects/ai-agent/voiceflow2.png"
                          alt="VoiceFlow conversation design"
                          width={16672}
                          height={2992}
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      </div>,
                    ]}
                  </Carousel>
                </ScrollReveal>
              </div>
            </Collapsible>
          </div>

          <div className="proj-nav-bar">
            <Link href="/projects/healthcare">&larr; Healthcare App</Link>
            <Link href="/projects/apple-books">Next: Apple Books &rarr;</Link>
          </div>
        </main>
      </div>
    </>
  );
}
