import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Carousel } from "@/components/Carousel";
import { SectionProgress } from "@/components/SectionProgress";

export const metadata: Metadata = {
  title: "Teaching AI Agent — Jenny Lin",
};

const NAV_SECTIONS = [
  { label: "Overview", href: "#sec-overview", childIds: ["sec-solution", "sec-challenge"] },
  { label: "Research", href: "#sec-methodology" },
  { label: "Design", href: "#sec-design", childIds: ["sec-design-1", "sec-design-2"] },
  { label: "Testing", href: "#sec-testing", childIds: ["sec-finding"] },
  { label: "Redesign", href: "#sec-redesign", childIds: ["sec-redesign-1", "sec-redesign-2"] },
  { label: "Reflection", href: "#sec-reflection", childIds: ["sec-reflection-1", "sec-reflection-2", "sec-reflection-3"] },
];

export default function AIAgentPage() {
  return (
    <>
      <div className="proj-hero">
        <h1>Teaching AI Agent</h1>
        <p className="desc">
          Integrating AI feedback, visualization, and tone optimization
          to support active learning, where students can deepen their
          understanding by explaining concepts to an AI assistant.
        </p>
        <div className="meta-grid">
          <div className="meta-item">
            <label>Role</label>
            <span>UX Researcher, Conversational Designer</span>
          </div>
          <div className="meta-item">
            <label>Team</label>
            <span>1 UX Designer, 1 Engineer</span>
          </div>
          <div className="meta-item">
            <label>Timeline</label>
            <span>5 Months</span>
          </div>
        </div>

        <div className="proj-hero-video--desktop">
          <div className="monitor-bezel monitor-bezel--flush-ai">
            <div className="monitor-screen">
              <video autoPlay loop muted playsInline>
                <source
                  src="/images/projects/ai-agent/video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="monitor-chin" />
          <div className="monitor-neck" />
          <div className="monitor-base" />
        </div>
      </div>

      <div className="proj-content-full">
        <SectionProgress sections={NAV_SECTIONS} />
          {/* Overview */}
          <ScrollReveal>
            <div className="section" id="sec-overview">
              <h2>Overview</h2>
              <p>
                Research supports <em>Learning by Teaching</em> as a method
                helping students find knowledge gaps and strengthen
                understanding. I collaborated with the{" "}
                <strong>UT Austin HCI Lab</strong> to design an AI-powered
                learning experience that supports students in teaching and
                reinforcing what they learn.
              </p>
            </div>
          </ScrollReveal>

          {/* Solution */}
          <ScrollReveal>
            <div className="section" id="sec-solution">
              <h2>Solution</h2>
              <p>
                I created a smoother learning experience by refining
                conversation flow, reducing repetition, and streamlining
                interactions. The redesigned layout simplified navigation and
                reduced cognitive load, achieving a{" "}
                <strong>12.5% improvement in user understanding</strong>.
              </p>
            </div>
          </ScrollReveal>

          {/* Design Challenge */}
          <ScrollReveal>
            <div className="section" id="sec-challenge">
              <h2>Design Challenge</h2>
              <blockquote>
                <p>
                  How might we leverage AI conversation design to make the
                  &ldquo;Learning by Teaching&rdquo; process more engaging
                  and intuitive for students?
                </p>
              </blockquote>
            </div>
          </ScrollReveal>

          {/* Methodology */}
          <ScrollReveal>
            <div className="section" id="sec-methodology">
              <h2>Methodology</h2>
              <Carousel
                labels={[
                  "Competitor Analysis",
                  "User Interview",
                  "Storyboard",
                ]}
              >
                {[
                  <div key="ca" className="carousel-content-panel">
                    <h3>01 Competitor Analysis</h3>
                    <p>
                      The competitive analysis revealed that effective platforms
                      let users upload materials, offer structured summaries,
                      and provide personalized AI support for different learning
                      styles.
                    </p>
                    <div className="cs-image-full">
                      <Image
                        src="/images/projects/ai-agent/ca.png"
                        alt="Competitor analysis of AI learning tools"
                        width={12948}
                        height={9108}
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </div>,

                  <div key="interview" className="carousel-content-panel">
                    <h3>02 User Interview</h3>
                    <p>
                      Users rely on structured summaries and want better ways to
                      visualize learning progress. They struggle to search
                      conversation history and express concerns about using
                      voice-based AI.
                    </p>
                    <div className="cs-info-cards">
                      <div className="cs-info-card">
                        <h4>Participants</h4>
                        <ul>
                          <li>6 individuals</li>
                          <li>Graduate students &amp; active learners</li>
                          <li>Uses AI in their learning process</li>
                          <li>Experienced with learning platforms</li>
                        </ul>
                      </div>
                      <div className="cs-info-card">
                        <h4>Key Concerns</h4>
                        <ul>
                          <li>Difficulty searching conversation history</li>
                          <li>Need for progress visualization</li>
                          <li>Concerns about voice-based AI</li>
                          <li>Want structured learning summaries</li>
                        </ul>
                      </div>
                    </div>
                  </div>,

                  <div key="storyboard" className="carousel-content-panel">
                    <h3>03 Storyboard</h3>
                    <p>
                      Storyboards helped visualize the end-to-end learning
                      experience, mapping how students interact with the AI
                      teaching assistant across different scenarios.
                    </p>
                    <div className="cs-image-full cs-image-crop-bottom">
                      <Image
                        src="/images/projects/ai-agent/storyboard.png"
                        alt="Storyboard showing user scenarios with the AI teaching assistant"
                        width={4012}
                        height={2929}
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </div>,
                ]}
              </Carousel>
            </div>
          </ScrollReveal>

          {/* Design */}
          <ScrollReveal>
            <div className="section" id="sec-design">
              <h2>Design</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section" id="sec-design-1">
              <h3>01 Conversation Flow</h3>
              <div className="cs-image-full">
                <Image
                  src="/images/projects/ai-agent/voiceflow2.png"
                  alt="Detailed conversation flow: Select the topic, Teaching AI with Professor/Student personas, Warp Up"
                  width={16672}
                  height={2992}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              <div className="cs-image-full">
                <Image
                  src="/images/projects/ai-agent/flow2.png"
                  alt="Annotated chat interface showing brief wrap-up messages, additional resources, follow-up questions, and prompts for personal experiences"
                  width={6786}
                  height={2339}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section" id="sec-design-2">
              <h3>02 Interface Design</h3>
              <p>
                I combined Voiceflow and Figma for the prototype — Voiceflow
                for realistic chatbot interaction, Figma for a visual interface
                supporting reflection and content organization.
              </p>
              <div className="cs-interface-pair">
                <div className="cs-image-full">
                  <Image
                    src="/images/projects/ai-agent/flow.png"
                    alt="Interface architecture showing Home Page and Conversation Page with VoiceFlow chatbot integration"
                    width={1490}
                    height={1692}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="cs-interface-screens">
                  <div>
                    <div className="cs-image-full">
                      <Image
                        src="/images/projects/ai-agent/homepage.png"
                        alt="Home page design with chat input and past conversations"
                        width={936}
                        height={604}
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                    </div>
                    <p className="cs-screen-label">Home Page</p>
                  </div>
                  <div>
                    <div className="cs-image-full">
                      <Image
                        src="/images/projects/ai-agent/conversationpage.png"
                        alt="Conversation page with AI chatbot, progress tracking, and summary"
                        width={1280}
                        height={832}
                        sizes="(max-width: 768px) 100vw, 500px"
                      />
                    </div>
                    <p className="cs-screen-label">Conversation Page</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Usability Testing */}
          <ScrollReveal>
            <div className="section" id="sec-testing">
              <h2>Usability Testing</h2>
              <p>
                I conducted <strong>6 user interviews</strong> — 3 participants
                tested the <strong>Professor tone</strong>, and 3 tested the{" "}
                <strong>Student tone</strong>. Users rated chatbot usefulness,
                interface design, and their concept understanding before and
                after interacting with the chatbot.
              </p>
              <div className="cs-testing-layout">
                <div className="cs-metric-cards">
                  <div className="cs-metric-card">
                    <div className="cs-metric-value">4.83 / 5</div>
                    <div className="cs-metric-label">Chatbot Usefulness</div>
                  </div>
                  <div className="cs-metric-card">
                    <div className="cs-metric-value">4.2 / 5</div>
                    <div className="cs-metric-label">Interface Design</div>
                  </div>
                  <div className="cs-metric-card">
                    <div className="cs-metric-value">4 / 5 → 4.5 / 5</div>
                    <div className="cs-metric-label">Overall Understanding</div>
                  </div>
                  <div className="cs-metric-card">
                    <div className="cs-metric-value">66% ↑ &nbsp; 33% ↑</div>
                    <div className="cs-metric-label">Professor Tone &amp; Student Tone</div>
                  </div>
                </div>
                <div className="cs-image-full">
                  <Image
                    src="/images/projects/ai-agent/result.png"
                    alt="EchoLearn PreTest: Self Evaluation and Quick Quiz"
                    width={4008}
                    height={2703}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Finding */}
          <ScrollReveal>
            <div className="section" id="sec-finding">
              <h3>
                Encouraging Tone Increases Confidence &amp; Reduces Cognitive
                Load
              </h3>
              <p>
                Participants appreciated the AI&rsquo;s comfortable and
                encouraging tone and found the conversation flow smooth.
                However, repetitive questioning and rapid back-to-back messages
                sometimes left users feeling confused.
              </p>
              <div className="cs-image-full">
                <Image
                  src="/images/projects/ai-agent/findings.png"
                  alt="Positive: user confidence, smooth flow. Negative: repetitive questioning, lengthy responses"
                  width={6588}
                  height={3552}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Redesign */}
          <ScrollReveal>
            <div className="section" id="sec-redesign">
              <h2>Redesign</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section" id="sec-redesign-1">
              <h3>01 Limit AI Attempts to Reduce Repetition</h3>
              <p>
                By prompting the AI to respond only up to three times, the
                conversation moves forward naturally, reducing repetitive
                questioning and giving users more control to stop or continue.
              </p>
              <div className="cs-image-full">
                <Image
                  src="/images/projects/ai-agent/redesignFlow.png"
                  alt="Redesigned conversation flow with 3-attempt limit"
                  width={4784}
                  height={1414}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section" id="sec-redesign-2">
              <h3>02 Improve Clarity and Intuitive Navigation</h3>
              <p>
                The original layout had discoverability issues — the
                &ldquo;Start a new conversation&rdquo; area was difficult to
                notice, users were unsure how to use folders, and they worried
                the page might look cluttered as conversations increased.
              </p>
              <p>
                The layout was reorganized using{" "}
                <strong>familiar design patterns</strong>, such as ChatGPT,
                improving discoverability and reducing cognitive effort with a
                cleaner, less overwhelming layout.
              </p>
              <div className="cs-design-pair">
                <div className="cs-image-full">
                  <Image
                    src="/images/projects/ai-agent/before.png"
                    alt="Before: cluttered home with rigid categories"
                    width={3243}
                    height={4479}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="cs-image-full">
                  <Image
                    src="/images/projects/ai-agent/after.png"
                    alt="After: focused input with sidebar navigation"
                    width={3227}
                    height={4462}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Reflection */}
          <ScrollReveal>
            <div className="section" id="sec-reflection">
              <h2>Reflection</h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section" id="sec-reflection-1">
              <h3>01 Importance of Clear Communication</h3>
              <p>
                Clear communication is critical across all touchpoints.
                Otherwise, users may interact with the product with different
                assumptions, resulting in confusion and frustration.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section" id="sec-reflection-2">
              <h3>02 Challenges of Prompt Design in AI Chatbot Development</h3>
              <p>
                When designing an AI chatbot using VoiceFlow, providing precise
                and structured prompts at each logic component is crucial. The
                process involves a lot of trial and error.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section" id="sec-reflection-3">
              <h3>03 Leveraging Familiar UI Patterns for Better Usability</h3>
              <p>
                When designing commonly used interfaces like folder systems,
                designers should follow common user flows and layouts to enhance
                usability and familiarity.
              </p>
            </div>
          </ScrollReveal>

          <div className="proj-nav-bar">
            <Link href="/projects/healthcare">&larr; Healthcare App</Link>
            <Link href="/projects/apple-books">Next: Apple Books &rarr;</Link>
          </div>
      </div>
    </>
  );
}
