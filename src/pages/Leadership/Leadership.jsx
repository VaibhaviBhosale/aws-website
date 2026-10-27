import React from "react";
import "./Leadership.css";
import ceoImage from "../../assets/images/leadership/best ceo in pune world india maharashtra (2).jpg";
import academicDirectorImage from "../../assets/images/leadership/best acadmic director 1.jpeg";
import cooImage from "../../assets/images/leadership/best coo in pune world india maharashtra.jpg";
import auditDirectorImage from "../../assets/images/leadership/academic_audit_director.jpeg";
import primaryDirectorImage from "../../assets/images/leadership/primary_section_director.jpeg";
import prePrimaryDirectorImage from "../../assets/images/leadership/pre_primary_section_director.jpeg";

export default function Leadership() {
  return (
    <main className="leadership-page">
      <section className="leader-section">
        <div className="leader-container">
          <div className="leader-grid">

            {/* CEO Profile Card */}
            <div className="leader-profile-column">
              <div className="leader-profile-card">
                <div className="leader-profile-image">
                  <img src={ceoImage} alt="Mr. Pratik Ladge" />
                </div>

                <div className="leader-profile-caption">
                  <span className="leader-role-badge">Aaryans CEO</span>

                  <h3>Mr. Pratik Ladge</h3>
                </div>
              </div>
            </div>

            {/* CEO Message */}
            <div className="leader-message-column">
              <div className="leader-message-content">

                <span className="leader-section-subtitle">Leadership Message</span>

                <h2>Aaryans Chief Executive Officer Message</h2>

                <p>
                  At Aaryans World School, we believe in nurturing young minds
                  in a warm, caring, and inspiring environment that encourages
                  academic excellence, creativity, and character building.
                </p>

                <p>
                  Our approach to education goes beyond textbooks. We focus on
                  developing each child’s intellectual, emotional, physical,
                  and moral potential through a balanced blend of academics,
                  sports, co-curricular activities, and values-based learning.
                  We aim to empower students with knowledge, confidence,
                  compassion, and a strong sense of responsibility.
                </p>

                <p>
                  As we move ahead into a new academic year, we remain
                  committed to shaping individuals who are not only successful
                  learners but also responsible and humane citizens of
                  tomorrow.
                </p>

                <p className="leader-bold-text">
                  We look forward to a rewarding and enriching journey together.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================================
            2. ACADEMIC DIRECTOR
        ================================ */}

        <section className="leader-section leader-section-academic">
        <div className="leader-container">
            <div className="leader-grid leader-grid-reverse">

            {/* Academic Director Message */}
            <div className="leader-message-column">
                <div className="leader-message-content">

                <span className="leader-section-subtitle">Governance</span>

                <h2>Academic Director's Message</h2>

                <div className="leader-highlight-quote">
                    <span className="leader-quote-decoration">”</span>
                    <p>
                    ” EDUCATION IS NOT MERELY ABOUT ACADEMIC
                    ACHIEVEMENT, BUT ABOUT SHAPING YOUNG
                    MINDS FOR LIFE.”
                    </p>
                </div>

                <p>
                    At our CBSE-affiliated school, we are committed to
                    delivering quality education that nurtures academic
                    excellence, critical thinking, and strong values. In
                    alignment with the CBSE curriculum and the National
                    Education Policy (NEP) 2020, our academic practices
                    focus on competency-based learning, experiential
                    teaching, and continuous assessment.
                </p>

                <p>
                    We strive to create a supportive and inclusive learning
                    environment where students are encouraged to explore
                    concepts deeply, apply knowledge meaningfully, and
                    develop essential life skills. Our dedicated faculty
                    members engage in continuous professional development
                    to ensure effective classroom practices and
                    student-centric pedagogy.
                </p>

                <p>
                    We strongly believe that education is a collaborative
                    journey. With the combined efforts of students,
                    teachers, and parents. We aim to shape confident
                    learners, responsible citizens, and future-ready
                    individuals.
                </p>

                <p>
                    Together, let us continue to inspire excellence and lifelong learning.
                </p>

                </div>
            </div>

            {/* Academic Director Profile Card */}
            <div className="leader-profile-column">
                <div className="leader-profile-card">

                <div className="leader-profile-image">
                    <img src={academicDirectorImage} alt="Vaishali Kulkarni - Academic Director" loading="lazy" />
                </div>

                <div className="leader-profile-caption">
                    <span className="leader-role-badge leader-role-academic">Academic Director</span>

                    <h3>Vaishali Kulkarni</h3>
                </div>

                </div>
            </div>

            </div>
        </div>
        </section>

        {/* ================================
            3. CHIEF OPERATING OFFICER
        ================================ */}

        <section className="leader-section leader-section-coo">
          <div className="leader-container">
            <div className="leader-grid">

              {/* COO Profile Card */}
              <div className="leader-profile-column">
                <div className="leader-profile-card">

                  <div className="leader-profile-image">
                    <img src={cooImage} alt="Mr. Pranav Ladge" loading="lazy" />
                  </div>

                  <div className="leader-profile-caption">
                    <span className="leader-role-badge leader-role-coo">Aaryans COO</span>

                    <h3>Mr. Pranav Ladge</h3>
                  </div>

                </div>
              </div>

              {/* COO Message */}
              <div className="leader-message-column">
                <div className="leader-message-content">

                  <span className="leader-section-subtitle">
                    Operations &amp; Vision
                  </span>

                  <h2>
                    Aaryans Chief Operating Officer Message
                  </h2>

                  <p>
                    As we proudly complete another academic year at Aaryans World
                    School, we look forward with renewed enthusiasm to the journey
                    ahead.
                  </p>

                  <p>
                    At Aaryans, we are committed to providing a warm, caring, and
                    stimulating environment that encourages excellence in academics,
                    sports, and co-curricular activities. Our aim is to nurture each
                    child’s innate potential and help it flourish through meaningful
                    learning experiences. We focus on the all-round development of our
                    students by enriching their intellectual, emotional, physical, and
                    moral growth in a joyful and supportive atmosphere.
                  </p>

                  <p>
                    Beyond academic achievement, we strive to instil strong human
                    values such as wisdom, compassion, and a spirit of service,
                    empowering our students to grow into responsible and empathetic
                    individuals.
                  </p>

                  <p>
                    We look forward to partnering with you in creating a rewarding and
                    successful learning experience for every child at Aaryans World
                    School.
                  </p>

                  <p className="leader-bold-text">
                    We wish you all a very rewarding and successful experience at Aaryans.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ================================
            4. ACADEMIC AUDIT DIRECTOR
        ================================ */}

        <section className="leader-section leader-section-audit">
          <div className="leader-container">
            <div className="leader-grid leader-grid-reverse">

              {/* Academic Audit Director Message */}
              <div className="leader-message-column">
                <div className="leader-message-content">

                  <span className="leader-section-subtitle"> Academic Excellence </span>

                  <h2>Academic Audit Director's Message</h2>

                  <div className="leader-highlight-quote">
                    <span className="leader-quote-decoration">”</span>
                    <p>"Quality Education Begins with Quality Processes."</p>
                  </div>

                  <p>
                    At Aaryans World School, we believe that strong classrooms are
                    built on reflection, support, and continuous improvement.
                  </p>

                  <p>
                    As the Academic Audit Director, I oversee our internal academic
                    audit framework across all grades. Our process is guided by NEP
                    2020 and draws from best practices in early childhood education
                    and foundational literacy &amp; numeracy.
                  </p>

                  <p>
                    We look closely at:<br />
                    Planning &amp; Documentation, Learning Environment,
                    Teaching-Learning Practices, Assessment Methods, and Child
                    Engagement.
                  </p>

                  <p>
                    But our audits are not about inspection. They are about
                    partnership. Every classroom visit ends with meaningful
                    feedback — celebrating what’s working well and identifying
                    one focused area for growth, along with the support needed
                    to achieve it.
                  </p>

                  <p>
                    My goal is simple: to ensure that every teacher feels empowered,
                    and every child experiences a joyful, safe, and outcome-driven
                    learning environment.
                  </p>

                  <p className="leader-bold-text">
                    Together, we are committed to building classrooms where
                    curiosity is nurtured and potential is unlocked.
                  </p>

                </div>
              </div>

              {/* Academic Audit Director Profile Card */}
              <div className="leader-profile-column">
                <div className="leader-profile-card">

                  <div className="leader-profile-image">
                    <img src={auditDirectorImage} alt="Mrs. Sonal Band" loading="lazy" />
                  </div>

                  <div className="leader-profile-caption">
                    <span className="leader-role-badge leader-role-audit"> Academic Audit Director </span>

                    <h3>Mrs. Sonal Band</h3>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =====================================
            5. PRIMARY SECTION DIRECTOR
        ===================================== */}

        <section className="leader-section leader-section-primary">
          <div className="leader-container">
            <div className="leader-grid">

              {/* Primary Director Profile Card */}
              <div className="leader-profile-column">
                <div className="leader-profile-card">

                  <div className="leader-profile-image">
                    <img
                      src={primaryDirectorImage}
                      alt="Mrs. Ananya Shandilya"
                      loading="lazy"
                    />
                  </div>

                  <div className="leader-profile-caption">
                    <span className="leader-role-badge leader-role-primary">
                      Quality Analysis &amp; Section Director - Primary
                    </span>

                    <h3>Mrs. Ananya Shandilya</h3>
                  </div>

                </div>
              </div>

              {/* Primary Director Message */}
              <div className="leader-message-column">
                <div className="leader-message-content">

                  <span className="leader-section-subtitle">
                    Primary Leadership
                  </span>

                  <h2>
                    Quality Analysis &amp; Section Director - Primary's Message
                  </h2>

                  <div className="leader-highlight-quote">
                    <span className="leader-quote-decoration">”</span>
                    <p>
                      "The mind is not a vessel to be filled, but a fire to be
                      ignited." – Plutarch
                    </p>
                  </div>

                  <p>
                    At Aaryans World School, we believe that every child is unique
                    and deserves an environment where learning is joyful, meaningful,
                    and inspiring. The primary years are the foundation of a child's
                    future, and we are committed to making these years enriching
                    through love, care, and purposeful learning.
                  </p>

                  <p>
                    Aligned with the <strong>National Education Policy (NEP) 2020</strong>,
                    our classrooms promote activity-based, experiential, and
                    child-centred learning. We encourage children to explore,
                    question, create, and collaborate, helping them build strong
                    foundations in literacy, numeracy, critical thinking,
                    communication, and problem-solving.
                  </p>

                  <p>
                    Along with academic excellence, we place equal importance on
                    values, creativity, physical well-being, and life skills.
                    Through projects, art, music, sports, storytelling, and
                    hands-on activities, we nurture confident, compassionate,
                    and responsible learners who are prepared for the future.
                  </p>

                  <p>
                    Together, let us inspire our children to dream big, learn with
                    curiosity, and grow with confidence.
                  </p>

                  <p className="leader-bold-text">
                    Regards,
                  </p>

                  <div className="leader-primary-signoff">
                    <strong>Mrs. Ananya Shandilya</strong>
                    <span>
                      Quality Analysis &amp; Section Director - Primary
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================
    6. PRE-PRIMARY SECTION DIRECTOR
===================================== */}

<section className="leader-section leader-section-preprimary">
  <div className="leader-container">
    <div className="leader-grid leader-grid-reverse">

      {/* Pre-Primary Director Message */}
      <div className="leader-message-column">
        <div className="leader-message-content">

          <span className="leader-section-subtitle">
            Pre-Primary Leadership
          </span>

          <h2>
            From the Desk of the Section Director – Pre-Primary
          </h2>

          <div className="leader-highlight-quote">
            <span className="leader-quote-decoration">”</span>
            <p>
              “The early years are not merely a preparation for school;
              they are the foundation for a lifelong love of learning.”
            </p>
          </div>

          <p>
            Being associated with Aaryans World School as a Founder Member
            and leading its Pre-Primary Section for the past 20 years has
            been a deeply fulfilling journey. Throughout these years, my
            endeavour has been to provide quality early childhood education,
            while earning the trust and satisfaction of our parents.
          </p>

          <p>
            At Aaryans, we believe that preschool education should respect
            childhood, not rush it. Our curriculum is thoughtfully aligned
            with <strong>Activity-Based Learning, Skill-Based Education,
            Learning by Doing and Classroom Beyond Four Walls.</strong>
            Rather than offering children a downward extension of Grade 1,
            we focus on their age-appropriate developmental needs, interests
            and individual potential.
          </p>

          <p>
            A young child has an innately curious mind. We therefore create
            opportunities that encourage every child to:
          </p>

          <p className="leader-preprimary-highlight">
            ENGAGE&nbsp; • &nbsp;ENJOY&nbsp; • &nbsp;EXPLORE&nbsp; •
            &nbsp;EXPERIMENT&nbsp; • &nbsp;EXPERIENCE
          </p>

          <p>
            Through hands-on activities, play, stories, nature, sensory
            experiences, celebrations and real-life learning opportunities,
            children develop curiosity, creativity, communication,
            confidence, independence and essential life skills.
          </p>

          <p>
            Our various events and activities also provide children with
            meaningful platforms to confidently showcase their talents
            before their peers, teachers and parents. Every experience
            is designed to make learning joyful and every school day
            memorable.
          </p>

          <p>
            For me, the true success of preschool education is reflected
            in a child who comes to school happily, explores fearlessly,
            expresses confidently and develops a genuine love for learning.
          </p>

          <p>
            As we move forward, my vision remains to create an environment
            where childhood is respected, curiosity is celebrated,
            individuality is valued and every child experiences the joy
            of learning.
          </p>

          <p>
            We don't just prepare children for the next grade; we prepare
            them to confidently take their next step in life.
          </p>

          <p className="leader-bold-text">
            Regards,
          </p>

          <div className="leader-preprimary-signoff">
            <strong>Mrs. Mrunalini Jadhav</strong>
            <span>
              Section Director – Pre-Primary | Founder Member
            </span>
          </div>

        </div>
      </div>

      {/* Pre-Primary Director Profile Card */}
      <div className="leader-profile-column">
        <div className="leader-profile-card">

          <div className="leader-profile-image">
            <img
              src={prePrimaryDirectorImage}
              alt="Mrs. Mrunalini Jadhav"
              loading="lazy"
            />
          </div>

          <div className="leader-profile-caption">
            <span className="leader-role-badge leader-role-preprimary">
              Section Director – Pre-Primary
            </span>

            <h3>Mrs. Mrunalini Jadhav</h3>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
    </main>
  );
}   