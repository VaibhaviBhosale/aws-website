import { useEffect, useState } from "react";
import "../styles/Home.css";
import heroVideo from "../assets/videos/slider.MP4";
import historyButton from "../assets/images/Buttons.jpg";

const campusImages = [
  {
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=2000&q=85",
    title: "Welcome to Aaryans World School",
    subtitle: "Nurturing minds, building character, and shaping tomorrow.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=85",
    title: "Learning Beyond Classrooms",
    subtitle: "Discover a world of knowledge, creativity, and opportunities.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=85",
    title: "Building Bright Futures",
    subtitle: "Inspiring every student to learn, grow, and achieve.",
  },
];

const campusVideos = [
  {
    title: "Aaryans World School",
    category: "School Activities",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=700&q=80",
    videoUrl: "https://www.youtube.com/",
  },
  {
    title: "Celebrating Our Students",
    category: "Student Achievements",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=700&q=80",
    videoUrl: "https://www.youtube.com/",
  },
  {
    title: "Our Beautiful Campus",
    category: "Campus Life",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=80",
    videoUrl: "https://www.youtube.com/",
  },
  {
    title: "Learning Through Activities",
    category: "Learning",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80",
    videoUrl: "https://www.youtube.com/",
  },
  {
    title: "Creative Minds",
    category: "Arts and Culture",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=80",
    videoUrl: "https://www.youtube.com/",
  },
  {
    title: "Growing Together",
    category: "School Events",
    image:
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=700&q=80",
    videoUrl: "https://www.youtube.com/",
  },
];

const ventures = [
  {
    name: "Aaryans Manomilan",
    image:
      "https://placehold.co/300x180/ffffff/273449?text=Aaryans+Manomilan",
  },
  {
    name: "Aaryans Commando",
    image:
      "https://placehold.co/300x180/ffffff/273449?text=Aaryans+Commando",
  },
  {
    name: "Aaryans Farm",
    image:
      "https://placehold.co/300x180/ffffff/273449?text=Aaryans+Farm",
  },
  {
    name: "Aaryans Preschool",
    image:
      "https://placehold.co/300x180/ffffff/273449?text=Aaryans+Preschool",
  },
  {
    name: "Aaryans Learning",
    image:
      "https://placehold.co/300x180/ffffff/273449?text=Aaryans+Learning",
  },
  {
    name: "Riverwood Resort",
    image:
      "https://placehold.co/300x180/ffffff/273449?text=Riverwood+Resort",
  },
  {
    name: "Akshara Food Court",
    image:
      "https://placehold.co/300x180/ffffff/273449?text=Akshara+Food+Court",
  },
  {
    name: "Aaryans Development Park",
    image:
      "https://placehold.co/300x180/ffffff/273449?text=Development+Park",
  },
  {
    name: "Aaryans Dog Kennel",
    image:
      "https://placehold.co/300x180/ffffff/273449?text=Dog+Kennel",
  },
  {
    name: "Aaryans Day Care",
    image:
      "https://placehold.co/300x180/ffffff/273449?text=Day+Care",
  },
  {
    name: "Aaryans Dairy",
    image:
      "https://placehold.co/300x180/ffffff/273449?text=Aaryans+Dairy",
  },
];

const statistics = [
  { number: "12,000+", label: "Students" },
  { number: "15+", label: "Branches" },
  { number: "40,000+", label: "Happy Parents" },
  { number: "20+", label: "Years of Experience" },
];

const highlights = [
  "Experienced and world-class faculty",
  "CBSE curriculum with experiential learning approach",
  "Smart classrooms and modern infrastructure",
  "Global exposure with value-based education",
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="home-section-heading">
      {eyebrow && <span className="home-eyebrow">{eyebrow}</span>}

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

function HeroSlider() {
  return (
    <section className="hero-slider hero-video-section">
      <video
        className="hero-background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support HTML video.
      </video>

      <div className="hero-overlay" />
    </section>
  );
}
function QuickNavigation() {
  const items = [
    { icon: "✎", label: "Quick Enquiry", href: "#quick-enquiry" },
    { icon: "◎", label: "Our Branches", href: "/branches" },
    { icon: "▣", label: "Online Admission", href: "/admission" },
    {
      icon: "♧",
      label: "Aaryans Shikshan Kranti",
      href: "/shikshan-kranti",
    },
  ];

  return (
    <section className="quick-navigation">
      <div className="quick-navigation-inner">
        {items.map((item) => (
          <a href={item.href} className="quick-navigation-item" key={item.label}>
            <span className="quick-navigation-icon">{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}



function WelcomeSection() {
  return (
    <section id="about" className="section-padding bg-light-section">
      <div className="about-container">
        <div className="about-video-column">
          <div className="about-video-container">
            <iframe
              src="https://www.youtube.com/embed/z-gXAAp_u80?si=5y5Bvp11HCa98Tmb"
              title="Aaryans World School - Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="about-content-column">
          <div className="school-intro">
            <h1 className="mb-4 h1-like-h2">
              Welcome to Aaryans World School
            </h1>

            <p>
              Established in 2005, Aaryans World School (AWS) is one of
              the best CBSE schools in Pune, with 16 campuses across Pune,
              Solapur, Belagavi, and Hubballi, educating over 12,000 students.
            </p>

            <p>
              <strong>Learning in Harmony with Nature</strong>
              <br />
              Our 28-acre Bhilarewadi Mother Branch, just 3 km from Katraj,
              blends eco-friendly design with modern infrastructure to create
              an inspiring, experiential learning environment.
            </p>

            <p>
              <strong>Why Aaryans World School?</strong>
            </p>

            <ul className="about-highlights">
              <li>
                <i className="fa-solid fa-check-circle" aria-hidden="true" />
                <span>Experienced and world-class faculty</span>
              </li>

              <li>
                <i className="fa-solid fa-check-circle" aria-hidden="true" />
                <span>CBSE curriculum with experiential learning approach</span>
              </li>

              <li>
                <i className="fa-solid fa-check-circle" aria-hidden="true" />
                <span>Smart classrooms and modern infrastructure</span>
              </li>

              <li>
                <i className="fa-solid fa-check-circle" aria-hidden="true" />
                <span>Global exposure with value-based education</span>
              </li>

              <li>
                <i className="fa-solid fa-check-circle" aria-hidden="true" />
                <span>
                  Focus on holistic and future-ready student development
                </span>
              </li>
            </ul>

            <p className="about-closing">
              At Aaryans World School, we go beyond textbooks to nurture
              confident, creative, and responsible global citizens.
            </p>

            <a href="#about" className="image-btn">
              <img src={historyButton} alt="Read Our History" /> 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}






function QuickEnquiry() {
  const [formData, setFormData] = useState({
    studentName: "",
    className: "",
    age: "",
    branch: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(
      "Your enquiry form is ready. Backend submission will be connected later."
    );
  };

  return (
    <section className="enquiry-section" id="quick-enquiry">
      <div className="enquiry-container">
        <div className="enquiry-promo">
          <span className="promo-top-label">AARYANS WORLD SCHOOL</span>

          <h2>
            Excellence
            <br />
            in Education
          </h2>

          <div className="promo-illustration">
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85"
              alt="Children learning and growing"
            />
          </div>

          <div className="promo-bottom">
            <span>LEARNING TODAY</span>
            <strong>LEADING TOMORROW</strong>
          </div>
        </div>

        <div className="enquiry-card">
          <div className="enquiry-card-heading">
            <span>➤</span>
            Quick Enquiry
          </div>

          <form className="enquiry-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="studentName">Student Full Name</label>
              <input
                id="studentName"
                name="studentName"
                type="text"
                placeholder="Enter Full Name"
                value={formData.studentName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="className">Select Class</label>

                <select
                  id="className"
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose...</option>

                  {[
                    "Playgroup",
                    "Nursery",
                    "Jr. KG",
                    "Sr. KG",
                    "1st",
                    "2nd",
                    "3rd",
                    "4th",
                    "5th",
                    "6th",
                    "7th",
                    "8th",
                    "9th",
                    "10th",
                    "11th",
                    "12th",
                  ].map((className) => (
                    <option key={className} value={className}>
                      {className}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="age">Enter Age</label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  min="2"
                  max="25"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="branch">Select Branch</label>

              <select
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                required
              >
                <option value="">Choose Branch...</option>
                <option value="Bhilarewadi">Bhilarewadi</option>
                <option value="Pune">Pune</option>
                <option value="Solapur">Solapur</option>
                <option value="Belagavi">Belagavi</option>
                <option value="Hubballi">Hubballi</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="mobile">Contact Number</label>

              <input
                id="mobile"
                name="mobile"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Enter your enquiry..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="enquiry-submit-button">
              Submit Enquiry
            </button>

            {message && (
              <p className="enquiry-status" role="status">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function CampusGallery() {
  return (
    <section className="campus-section">
      <div className="campus-container">
        <SectionHeading
          eyebrow="LIFE AT CAMPUS"
          title={
            <>
              Experience Aaryans <span>in Action</span>
            </>
          }
          description="Watch our students, events, and campus life unfold."
        />

        <div className="campus-video-grid">
          {campusVideos.map((video, index) => (
            <a
              href={video.videoUrl}
              target="_blank"
              rel="noreferrer"
              className="campus-video-card"
              key={video.title}
            >
              <div className="campus-video-image">
                <img src={video.image} alt={video.title} />

                <span
                  className={`campus-play-button ${
                    index === 2 ? "campus-play-yellow" : ""
                  }`}
                >
                  ▶
                </span>
              </div>

              <div className="campus-video-info">
                <span>{video.category}</span>
                <h3>{video.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function PremiumVentures() {
  return (
    <section className="ventures-section">
      <div className="ventures-container">
        <SectionHeading
          eyebrow="BEYOND ACADEMICS"
          title="Our Premium Ventures"
          description="Specialized divisions designed to nurture talent and leadership in every field."
        />

        <div className="ventures-grid">
          {ventures.map((venture) => (
            <a
              href="#ventures"
              className="venture-card"
              key={venture.name}
              title={venture.name}
            >
              <img src={venture.image} alt={venture.name} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SchoolStatistics() {
  return (
    <section className="statistics-section">
      <div className="statistics-container">
        {statistics.map((item) => (
          <div className="statistic-item" key={item.label}>
            <strong>{item.number}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FloatingActions() {
  return (
    <div className="floating-actions">
      <a
        href="https://play.google.com/store"
        className="floating-action play-store-action"
        target="_blank"
        rel="noreferrer"
        aria-label="Google Play Store"
        title="Google Play Store"
      >
        ▶
      </a>

      <a
        href="https://wa.me/"
        className="floating-action whatsapp-action"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        ☎
      </a>
    </div>
  );
}

function Home() {
  return (
    <>
      <HeroSlider />
      <QuickNavigation />
      <WelcomeSection />
      <QuickEnquiry />
      <CampusGallery />
      <PremiumVentures />
      <SchoolStatistics />
      <FloatingActions />
    </>
  );
}

export default Home;
