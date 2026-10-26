import { motion } from "motion/react";
import { Award, Quote, Sparkles } from "lucide-react";
import "./ManagingDirector.css";

import directorMain from "../../assets/images/managing-director/World best MD 1.jpg";
import directorDesk from "../../assets/images/managing-director/World best MD.jpg";
import directorBackground from "../../assets/images/backgrounds/best in aaryans world school.jpg";

function ManagingDirector() {
  return (
    <section
      className="md-page"
      style={{ "--md-background": `url("${directorBackground}")` }}
    >
      <div className="md-overlay" />

      <div className="md-container">
        <div className="md-layout">
          {/* LEFT: DIRECTOR IMAGES */}
          <motion.div
            className="md-visual-column"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="md-image-composition">
              <div className="md-image-accent" />

              <div className="md-main-image-frame">
                <img
                  src={directorMain}
                  alt="Managing Director of Aaryans World School"
                  className="md-main-image"
                />
              </div>

              <div className="md-secondary-image-frame">
                <img
                  src={directorDesk}
                  alt="Managing Director at his desk"
                  className="md-secondary-image"
                />
              </div>

              <div className="md-experience-badge">
                <Award size={24} strokeWidth={1.8} />
                <strong>25+</strong>
                <span>YEARS OF</span>
                <span>EXCELLENCE</span>
              </div>
            </div>

            <div className="md-image-caption">
              <span className="md-caption-line" />
              <span>LEADERSHIP • VISION • EXCELLENCE</span>
            </div>
          </motion.div>

          {/* RIGHT: LEADERSHIP MESSAGE */}
          <motion.div
            className="md-content-column"
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="md-section-label">
              <Sparkles size={16} />
              <span>LEADERSHIP MESSAGE</span>
            </div>

            <h1 className="md-title">Message from MD's Desk</h1>

            <div className="md-title-decoration">
              <span />
              <span />
              <span />
            </div>

<div className="md-quote-box">
  <div className="md-quote-top">
    <Quote className="md-quote-icon" size={38} strokeWidth={1.5} />
    <span className="md-quote-label">WORDS TO LIVE BY</span>
  </div>

  <p className="md-quote-text">
    Excellence is a continuous process and not an accident.
  </p>

  <div className="md-quote-bottom">
    <span className="md-quote-line" />
    <div className="md-quote-attribution">
      <span className="md-quote-by">A THOUGHT BY</span>
      <span className="md-quote-author">Dr. A. P. J. Abdul Kalam</span>
    </div>
  </div>
</div>


            <div className="md-message">
              <p>
                At our school, education is a transformative journey—one that
                goes beyond textbooks to shape minds, character, and purpose.
                Our vision is to create a learning community that empowers
                students to think independently, act responsibly, and lead with
                compassion in an ever-evolving global landscape.
              </p>

              <p>
                We recognize that every child carries within them limitless
                potential. Guided by this belief, we foster an environment
                that inspires curiosity, innovation, and excellence. Through
                a balanced focus on academic rigour, values-based education,
                and experiential learning, we prepare our students to face
                future challenges with confidence, resilience, and integrity.
              </p>

              <p>
                Our educators play a pivotal role in translating this vision
                into reality by nurturing creativity, critical thinking, and
                ethical leadership. In strong partnership with parents, we
                strive to instil enduring values, discipline, and a lifelong
                love for learning—qualities essential for building not just
                successful careers, but good human beings.
              </p>
            </div>

            <div className="md-signature">
              <div className="md-signature-mark">ML</div>

              <div className="md-signature-details">
                <h2>Mr. Milind Ladge</h2>
                <p>Founder, MD & Chairman</p>
                <span>Aaryans Group</span>
              </div>

              <div className="md-signature-decoration">
                <Award size={35} strokeWidth={1.3} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ManagingDirector;