import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Carousel } from "@/components/Carousel";

export const metadata: Metadata = {
  title: "Apple Books Redesign — Jenny Lin",
};

export default function AppleBooksPage() {
  return (
    <>
      <div className="proj-hero">
        <h1>Apple Books</h1>
        <p className="desc">
          Redesigned Apple Books to improve intuitiveness and streamline user flow.
        </p>
        <div className="meta-grid">
          <div className="meta-item">
            <label>Role</label>
            <span>UX Researcher, UI Designer</span>
          </div>
          <div className="meta-item">
            <label>Team</label>
            <span>4 Members</span>
          </div>
          <div className="meta-item">
            <label>Timeline</label>
            <span>12 Weeks Sprint</span>
          </div>
        </div>
      </div>

      <div className="proj-body-wrap">
        <main className="proj-content">
          {/* Problem */}
          <ScrollReveal>
            <div className="section" id="sec-problem">
              <h2>Problem</h2>
              <blockquote>
                <p>How might we enhance the functionality and make it more intuitive for users?</p>
              </blockquote>
              <p>
                The original Apple Books app had confusing navigation due to
                overly complex categories and disorganized content. Unnecessary
                components further complicated things, hurting user satisfaction
                and ease of use.
              </p>
            </div>
          </ScrollReveal>

          {/* Solution */}
          <ScrollReveal>
            <div className="section" id="sec-solution">
              <h2>Solution</h2>
              <h3>Clear Navigation Structure &amp; Remove Unnecessary Pages</h3>
              <p>
                I led the team in removing redundant content, reorganizing the
                layout, and building a more intuitive information architecture.
                A new global navigation structure was introduced, yielding
                a 42% increase in task success rate.
              </p>
            </div>
          </ScrollReveal>

          {/* Methodology — tabs */}
          <ScrollReveal>
            <div className="section" id="sec-methodology">
              <h2>Methodology</h2>
              <Carousel
                labels={[
                  "Survey & Interview",
                  "Competitor Analysis",
                  "Content Inventory",
                  "Card Sorting",
                  "Personas",
                  "Journey Map",
                ]}
              >
                {[
                  <div key="survey" className="carousel-content-panel">
                    <h3>01 Survey &amp; Interview</h3>
                    <p>
                      We conducted 20 surveys to gather user feedback.
                      I oversaw 3 interviewees during 11 interviews and recommended
                      emphasizing integration based on findings.
                    </p>
                    <div className="survey-grid-wrap">
                      <div className="survey-grid">
                        <div className="survey-box">01 Social Media</div>
                        <div className="survey-box">04 Recommendation</div>
                        <div className="survey-box">02 Goal Setting</div>
                        <div className="survey-box">05 Book Track</div>
                        <div className="survey-box">03 Reviews</div>
                      </div>
                    </div>
                  </div>,

                  <div key="ca" className="carousel-content-panel">
                    <h3>02 Competitor Analysis</h3>
                    <p>
                      A key insight was to leverage a combination of global, local,
                      and contextual navigation systems to improve the information
                      architecture&rsquo;s functionality.
                    </p>
                    <div className="cs-image-full cs-image-blend">
                      <Image
                        src="/images/projects/apple-books/ca.png"
                        alt="Competitor analysis"
                        width={1800}
                        height={1089}
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </div>,

                  <div key="ci" className="carousel-content-panel">
                    <h3>03 Content Inventory</h3>
                    <p>
                      After reviewing over 700 pages of content within Apple Books,
                      labels of &ldquo;keep,&rdquo; &ldquo;remove,&rdquo; and
                      &ldquo;edit&rdquo; were used. This identified numerous
                      unnecessary or repetitive components that should be removed.
                    </p>
                    <div className="cs-image-full">
                      <Image
                        src="/images/projects/apple-books/ci.png"
                        alt="Content inventory"
                        width={1320}
                        height={840}
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </div>,

                  <div key="cs" className="carousel-content-panel">
                    <h3>04 Card Sorting</h3>
                    <p>
                      Card sorting showed how users perceived the redesign.
                      I identified popular placements for the page hierarchy,
                      such as including the search function on the home page from
                      user feedback.
                    </p>
                    <div className="cs-image-full">
                      <Image
                        src="/images/projects/apple-books/cs.png"
                        alt="Card sorting results"
                        width={1904}
                        height={1329}
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </div>,

                  <div key="persona" className="carousel-content-panel">
                    <h3>05 Personas</h3>
                    <p>
                      A persona was created for Amanda, a business analyst who relies
                      on book tracking to stay updated on industry trends.
                    </p>
                    <div className="cs-image-full cs-image-crop-edge">
                      <Image
                        src="/images/projects/apple-books/persona.png"
                        alt="Persona: Amanda, 28, Business Analyst"
                        width={1794}
                        height={1077}
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  </div>,

                  <div key="journey" className="carousel-content-panel">
                    <h3>06 Journey Map</h3>
                    <p>
                      A journey map was created to visualize and analyze the complete
                      user experience with reading and tracking apps.
                    </p>
                    <div className="cs-image-full cs-image-crop-edge">
                      <Image
                        src="/images/projects/apple-books/Journey map.png"
                        alt="User journey map"
                        width={26368}
                        height={13268}
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
              <h3>01 Simplify Navigation and Clarify Labels</h3>
              <p>
                Based on survey responses and competitor features, the
                architecture was reorganized to help users navigate more easily
                and find what they need efficiently.
              </p>
              <div className="cs-image-full">
                <Image
                  src="/images/projects/apple-books/design1.png"
                  alt="Before & After: Reading Now → Home with Reading Goals"
                  width={3760}
                  height={2116}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section" id="sec-design-2">
              <h3>02 Eliminate Redundant Content</h3>
              <p>
                The search page was streamlined by removing redundant categories
                like &ldquo;Best Seller&rdquo; and &ldquo;Top Charts&rdquo;
                with enhanced search functionality added.
              </p>
              <div className="cs-image-full">
                <Image
                  src="/images/projects/apple-books/design2.png"
                  alt="Before & After: Book Store with personalized recommendations"
                  width={3760}
                  height={2115}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section" id="sec-design-3">
              <h3>03 Prioritize Features and Enhance Engagement</h3>
              <p>
                The Community page is a new addition. Card sorting helped
                prioritize features like adding and searching for friends,
                viewing friends&rsquo; activities, and joining book clubs.
                The &ldquo;My Friends&rdquo; page includes feeds and posts
                for interaction.
              </p>
              <div className="cs-image-full cs-image-blue-outline">
                <Image
                  src="/images/projects/apple-books/design3.png"
                  alt="Community: book clubs, friend activity, group discussions"
                  width={1749}
                  height={984}
                  sizes="(max-width: 768px) 100vw, 800px"
                />
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
              <h3>01 Leverage Information Architecture Structure</h3>
              <p>
                Intuitive interfaces reduce cognitive effort, making it easier
                for users to find information and navigate the interface.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section" id="sec-reflection-2">
              <h3>02 Enhance Visual Design Consistency and Scalability</h3>
              <p>
                A comprehensive design system and style guide ensured
                consistency across various screens and interactions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="section" id="sec-reflection-3">
              <h3>03 Improve Collaboration Efficiency</h3>
              <p>
                Consistent font styles and alignment hierarchy enhanced
                communication and collaboration with designers.
              </p>
            </div>
          </ScrollReveal>

          <div className="proj-nav-bar">
            <Link href="/projects/ai-agent">&larr; Teaching AI</Link>
            <Link href="/projects/meeteat">Next: MeetEat &rarr;</Link>
          </div>
        </main>
      </div>
    </>
  );
}
