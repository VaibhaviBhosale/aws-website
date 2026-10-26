import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Eye,
  Target,
  Crosshair,
  BookOpen,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import "./VisionMission.css";
import schoolLogo from "../../assets/images/logo_aws.png";

const pages = [
  {
    icon: Eye,
    label: "OUR VISION",
    title: "Our Vision",
    content:
      "To shape the individual for a better tomorrow and to make not just learned individuals but a better human being capable of leading distinctively.",
    note: "Inspiring excellence. Shaping tomorrow.",
  },
  {
    icon: Crosshair,
    label: "OUR AIM",
    title: "Our Aim",
    content:
      "To create a supportive and inclusive environment where students are encouraged to explore their personal best in all aspects of school life.",
    note: "Every child deserves the opportunity to shine.",
  },
  {
    icon: Target,
    label: "OUR GOAL",
    title: "Our Goal",
    content:
      "We are passionate about creating a dynamic learning institution. It is our commitment to mould children to be open to thinking globally.",
    note: "Think globally. Grow confidently.",
  },
  {
    icon: BookOpen,
    label: "OUR SCHOOL",
    title: "Aaryans World School",
    content: "Together We Build the Future",
    isBrandPage: true,
  },
];

function VisionMission() {
  const [current, setCurrent] = useState(0);
  const [turningPage, setTurningPage] = useState(null);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const activePage = pages[current];
  const ActiveIcon = activePage.icon;

  const changePage = (step) => {
    if (isAnimating) return;

    const nextIndex = (current + step + pages.length) % pages.length;

    setDirection(step);
    setTurningPage({
      page: pages[current],
      step,
    });
    setCurrent(nextIndex);
    setIsAnimating(true);
  };

  const finishTurning = () => {
    setTurningPage(null);
    setIsAnimating(false);
  };

  return (
    <section className="philosophy-section">
      <div className="vision-container">
        <motion.div
          className="vision-intro"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="vision-subtitle">OUR PHILOSOPHY</span>

          <h1>Guiding Principles</h1>

          <p>
            Every child writes a new chapter of success at Aaryans World
            School.
          </p>
        </motion.div>

        <div className="journal-wrapper">
          <div className="journal-caption">
            <BookOpen size={17} />
            <span>THE AARYANS JOURNAL</span>
          </div>

          <div className="journal-scene">
            <div className="journal-book">
              {/* LEFT PAGE */}
              <div className="journal-left-page">
                <div className="journal-page-top">
                  <span>AARYANS WORLD SCHOOL</span>
                  <span>EST. WITH PURPOSE</span>
                </div>

                <div className="journal-left-content">
                  <div className="journal-icon">
                    <ActiveIcon size={35} strokeWidth={1.6} />
                  </div>

                  <span className="journal-small-label">
                    {activePage.label}
                  </span>

                  <h2>
                    {current === 0
                      ? "Dream"
                      : current === 1
                        ? "Discover"
                        : current === 2
                          ? "Achieve"
                          : "Inspire"}
                  </h2>

                  <div className="journal-divider" />

                  <p>
                    {current === 0
                      ? "A vision for every learner"
                      : current === 1
                        ? "An opportunity for everyone"
                        : current === 2
                          ? "A future without limits"
                          : "Together we build the future"}
                  </p>
                </div>

                <div className="journal-page-footer">
                  <span>OUR PHILOSOPHY</span>
                  <span>{String(current * 2 + 1).padStart(2, "0")}</span>
                </div>
              </div>

              {/* CENTRAL BINDING */}
              <div className="journal-binding" aria-hidden="true">
                <div className="journal-binding-shadow" />
              </div>

              {/* RIGHT PAGE */}
              <div className="journal-right-page">
                <div className="journal-page-top">
                  <span>GUIDING PRINCIPLES</span>
                  <span>{String(current + 1).padStart(2, "0")}</span>
                </div>

                <div className="journal-content-area">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current}
                      className="journal-content"
                      initial={{
                        opacity: 0,
                        x: direction > 0 ? 18 : -18,
                      }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{
                        opacity: 0,
                        x: direction > 0 ? -12 : 12,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {activePage.isBrandPage ? (
                        <div className="journal-brand-content">
                          <img
                            src={schoolLogo}
                            alt="Aaryans World School"
                          />

                          <div className="journal-divider" />

                          <h2>{activePage.title}</h2>

                          <p>{activePage.content}</p>
                        </div>
                      ) : (
                        <>
                          <span className="journal-section-label">
                            CHAPTER {current + 1}
                          </span>

                          <h2>{activePage.title}</h2>

                          <div className="journal-heading-line" />

                          <p className="journal-main-text">
                            {activePage.content}
                          </p>

                          <p className="journal-note">
                            {activePage.note}
                          </p>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="journal-page-footer">
                  <span>VISION • AIM • GOAL</span>
                  <span>{String(current * 2 + 2).padStart(2, "0")}</span>
                </div>

                {/* ANIMATED TURNING SHEET */}
                <AnimatePresence>
                  {turningPage && (
                    <motion.div
                      key={`turn-${current}-${turningPage.step}`}
                      className={`journal-turning-sheet ${
                        turningPage.step > 0
                          ? "journal-turn-next"
                          : "journal-turn-prev"
                      }`}
                      initial={{
                        rotateY: 0,
                      }}
                      animate={{
                        rotateY: turningPage.step > 0 ? -180 : 180,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.645, 0.045, 0.355, 1],
                      }}
                      onAnimationComplete={finishTurning}
                    >
                      <div className="journal-turn-front">
                        <div className="journal-turn-content">
                          <span className="journal-section-label">
                            {turningPage.page.label}
                          </span>

                          <h2>{turningPage.page.title}</h2>

                          <p>{turningPage.page.content}</p>
                        </div>
                      </div>

                      <div className="journal-turn-back">
                        <div className="journal-turn-content">
                          <BookOpen size={30} />
                          <span>THE AARYANS JOURNAL</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="journal-navigation">
            <button
              type="button"
              className="journal-nav-button"
              onClick={() => changePage(-1)}
              disabled={isAnimating}
              aria-label="Previous page"
            >
              <ArrowLeft size={18} />
              <span>Previous</span>
            </button>

            <div className="journal-page-counter" aria-live="polite">
              <span>{String(current + 1).padStart(2, "0")}</span>
              <div className="journal-counter-line" />
              <span>{String(pages.length).padStart(2, "0")}</span>
            </div>

            <button
              type="button"
              className="journal-nav-button"
              onClick={() => changePage(1)}
              disabled={isAnimating}
              aria-label="Next page"
            >
              <span>Next</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <p className="journal-hint">
            Turn the pages to discover what guides us
          </p>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;