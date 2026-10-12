import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Carousel } from "@/components/Carousel";
import { SectionProgress } from "@/components/SectionProgress";
import { PasswordGate } from "@/components/PasswordGate";

export const metadata: Metadata = {
  title: "Teaching AI Agent — Jenny Lin",
};

const NAV_SECTIONS = [
  { label: "Overview", href: "#sec-overview" },
  { label: "Research", href: "#sec-methodology" },
  { label: "Design", href: "#sec-design", childIds: ["sec-design-1", "sec-design-2"] },
  { label: "Testing", href: "#sec-testing", childIds: ["sec-finding"] },
  { label: "Redesign", href: "#sec-redesign", childIds: ["sec-redesign-1", "sec-redesign-2"] },
  { label: "Takeaway", href: "#sec-takeaway" },
];

export default function AIAgentPage() {
  const isVercel = process.env.VERCEL === "1";

  return (
    <>
      <div className="proj-hero">
        <h1>Teaching AI Agent</h1>
        <p className="desc">
          Designed an AI learning companion that helps students explain
          concepts, identify gaps in their understanding, and learn
          through conversation.
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
              <h3>Learning by explaining, not just reading</h3>
              <p>
                Teaching someone else is one way to test how well you
                understand a topic.
              </p>
              <p>
                I worked with the UT Austin HCI Lab to design an AI
                chatbot that lets students explain what they&apos;ve
                learned, respond to follow-up questions, and reflect
                on gaps in their understanding. The chatbot needed to
                encourage students to think through concepts
                themselves, without giving away answers or
                overwhelming them with questions.
              </p>
            </div>
          </ScrollReveal>

          <PasswordGate active={isVercel} code="we1come" popup={isVercel}>

          {/* Methodology */}
          <ScrollReveal>
            <div className="section" id="sec-methodology">
              <h2>Research</h2>
              <Carousel
                labels={[
                  "Competitor Analysis",
                  "User Interview",
                  "Storyboard",
                ]}
              >
                {[
                  <div key="ca" className="carousel-content-panel">
                    <h3>Learning from existing AI study tools</h3>
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
                    <h3>Understanding how students prefer to learn</h3>
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
                    <h3>Explore how students might explain concepts to an AI chatbot</h3>
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
            <div className="section section--child" id="sec-design-1">
              <p className="cs-label">01 &middot; Conversation Flow</p>
              <h2 className="cs-heading">
                Helping students think through their answers
              </h2>
              <p>
                I designed a conversation flow where students choose a
                topic, teach the AI what they know, and respond to
                follow-up questions.
              </p>
              <p>
                The AI can take on a Professor or Student tone, giving
                learners different ways to practice explaining
                concepts. At the end, students receive a short
                wrap-up with follow-up questions and resources to
                continue learning.
              </p>
              <div className="cs-image-full cs-image-light-bg">
                <Image
                  src="/images/projects/ai-agent/voiceflow2.png"
                  alt="Detailed conversation flow: Select the topic, Teaching AI with Professor/Student personas, Warp Up"
                  width={16672}
                  height={2992}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
              <div className="cs-image-full cs-image-light-bg" style={{ marginTop: 48 }}>
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
            <div className="section section--child" id="sec-design-2">
              <p className="cs-label">02 &middot; Interface Design</p>
              <h2 className="cs-heading">
                Keeping the conversation easy to follow
              </h2>
              <p>
                I used Voiceflow to prototype the chatbot&apos;s
                responses and Figma to design the interface around it.
              </p>
              <p>
                The home page lets students start a conversation or
                return to previous sessions. The conversation page
                keeps the chat, progress, and summary in one place.
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
              <h2>Testing</h2>
              <h3>Testing two ways the AI could respond</h3>
              <p>
                I conducted usability testing with six participants:
                three tested the Professor tone and three tested the
                Student tone.
              </p>
              <p>
                Participants rated the chatbot&apos;s usefulness,
                interface design, and their understanding of the
                topic before and after the conversation.
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
            <div className="section section--child" id="sec-finding">
              <p className="cs-label">What I Learned</p>
              <h2 className="cs-heading">
                Encouraging feedback helped, but repetition got in
                the way
              </h2>
              <p>
                Participants liked the supportive tone and found the
                conversation easy to follow. However, repeated
                questions and multiple messages sent too quickly
                sometimes made the experience confusing.
              </p>
              <p>
                These findings guided the next round of design
                changes.
              </p>
              <div className="cs-image-full cs-image-light-bg cs-image-full--medium">
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
            <div className="section section--child" id="sec-redesign-1">
              <p className="cs-label">01 &middot; Conversation Flow</p>
              <h2 className="cs-heading">
                Less repetition, more control
              </h2>
              <p>
                I updated the conversation flow to limit repeated AI
                prompts to three attempts before moving forward.
              </p>
              <p>
                This helped avoid endless questioning and gave
                students a clearer way to continue or end the
                conversation.
              </p>
              <div className="cs-image-full cs-image-light-bg cs-image-full--medium">
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
            <div className="section section--child" id="sec-redesign-2">
              <p className="cs-label">02 &middot; Navigation</p>
              <h2 className="cs-heading">
                Making it easier to start and find conversations
              </h2>
              <p>
                Testing showed that the new conversation entry point
                was easy to miss, and users weren&apos;t sure how
                folders worked.
              </p>
              <p>
                I redesigned the home page with a more prominent chat
                input and familiar sidebar navigation, making it
                easier to start a conversation and find previous
                sessions.
              </p>
              <div className="cs-design-pair">
                <figure className="cs-grid-fig">
                  <p className="cs-label">Before</p>
                  <Image
                    src="/images/projects/ai-agent/before.png"
                    alt="Before: cluttered home with rigid categories"
                    width={3243}
                    height={4479}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </figure>
                <figure className="cs-grid-fig">
                  <p className="cs-label">After</p>
                  <Image
                    src="/images/projects/ai-agent/after.png"
                    alt="After: focused input with sidebar navigation"
                    width={3227}
                    height={4462}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </figure>
              </div>
            </div>
          </ScrollReveal>

          {/* Takeaway */}
          <ScrollReveal>
            <div className="section" id="sec-takeaway">
              <h2>Takeaway</h2>
              <h3>Good AI conversations need boundaries</h3>
              <p>
                This project taught me that a helpful chatbot
                isn&apos;t just about asking good questions. It also
                needs to know when to stop, how much information to
                show, and how to keep users oriented. Designing with
                Voiceflow also showed me how much small changes in
                prompts and conversation logic can affect the overall
                experience.
              </p>
              <p>
                The biggest lesson was to give students room to
                think, rather than filling every moment with another
                AI response.
              </p>
            </div>
          </ScrollReveal>

          </PasswordGate>

          <div className="proj-nav-bar">
            <Link href="/projects/healthcare">&larr; Healthcare App</Link>
            <Link href="/projects/apple-books">Next: Apple Books &rarr;</Link>
          </div>
      </div>
    </>
  );
}
