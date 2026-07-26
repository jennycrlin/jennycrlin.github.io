import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Jenny Lin",
};

const landscapePhotos = [
  { src: "/images/about/IMG_7547.JPG", alt: "Machu Picchu", w: 6000, h: 4000 },
  { src: "/images/about/IMG_7819.JPG", alt: "Rainbow Mountain in Peru", w: 6000, h: 4000 },
];

const portraitPhotos = [
  { src: "/images/about/IMG_9206.jpg", alt: "Jumping at the Pyramids of Giza", w: 3024, h: 4032 },
  { src: "/images/about/DSCF4733.JPG", alt: "Salt flats with mountains", w: 1824, h: 2736 },
  { src: "/images/about/IMG_2605.jpg", alt: "Northern lights in Iceland", w: 3024, h: 4032 },
  { src: "/images/about/IMG_0609.JPG", alt: "Grand Canyon vista", w: 4000, h: 6000 },
  { src: "/images/about/DSCF6088.JPG", alt: "Mountains in Banff", w: 1824, h: 2736 },
  { src: "/images/about/IMG_1945.JPG", alt: "Graduation at UT Austin", w: 3072, h: 4608 },
];

type Photo = { src: string; alt: string; w: number; h: number };

function PhotoRow({ photos, direction, orient }: {
  photos: Photo[];
  direction: "left" | "right";
  orient: "landscape" | "portrait";
}) {
  const doubled = [...photos, ...photos];
  return (
    <div className={`about-photo-track about-photo-track--${direction}`}>
      {doubled.map((photo, i) => (
        <div
          key={`${photo.src}-${i}`}
          className={`about-photo-slide about-photo-slide--${orient}`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.w}
            height={photo.h}
            sizes={orient === "landscape" ? "420px" : "240px"}
          />
        </div>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-text">
          <p className="about-greeting">Hi, I am</p>
          <h1>Jenny Lin</h1>
          <p className="about-subtitle">
            A UX Research Designer passionate about creating inclusive,
            human-centered digital experiences. With over five years of
            research-driven work spanning B2B services, I focus on accessibility,
            AI integration, and design that truly works for people.
          </p>
        </div>
        <div className="about-hero-photo">
          <Image
            src="/images/about/me.JPG"
            alt="Jenny Lin"
            width={560}
            height={373}
            priority
          />
        </div>
      </section>

      <section className="about-journey">
        <div className="about-journey-inner">
          <h2>Accessibility Sparked My Passion</h2>
          <div className="about-journey-content">
            <p>
              My journey into UX began at a medical library, where I watched
              elderly patients struggle with newly introduced technology
              &mdash; they couldn&apos;t complete basic tasks because the
              tools weren&apos;t designed with them in mind.
            </p>
            <div className="about-journey-col2">
              <p>
                That experience taught me something I carry into every project:
                no matter how advanced or innovative a design is, if people
                can&apos;t use it, that&apos;s a major problem. It shaped my
                commitment to inclusive design and drives every decision I make.
              </p>
              <div className="about-journey-decoration">
                <div className="orbit-ring">
                  <div className="inner" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-travel">
        <div className="about-travel-header">
          <h2>Beyond the Screen</h2>
          <p className="about-travel-stat">
            <span className="stat-number">40+</span> countries and counting
          </p>
        </div>
        <p className="about-travel-desc">
          Each country has deepened my understanding of how differently people
          interact with technology, information, and each other. Travel
          isn&apos;t just a hobby &mdash; it&apos;s cross-cultural UX research
          that shapes how I approach inclusive design.
        </p>
        <div className="about-photo-carousel">
          <PhotoRow photos={portraitPhotos} direction="left" orient="portrait" />
          <PhotoRow photos={landscapePhotos} direction="right" orient="landscape" />
        </div>
      </section>

      <section className="about-resume">
        <a
          href="https://drive.google.com/file/d/10brzKZLYGmxjmsqCTo2dTDlT-JusIe7o/view"
          className="about-resume-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume &rarr;
        </a>
      </section>
    </>
  );
}
