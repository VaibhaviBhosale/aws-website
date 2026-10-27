import { useEffect, useState } from "react";
import "../styles/Home.css";
import heroVideo from "../assets/videos/slider.MP4";
import historyButton from "../assets/images/Buttons.jpg";
import enquiryBackground from "../assets/images/background/best in aaryans world school.jpg";
import enquiryImage1 from "../assets/images/home/AARYANS WORLD SCHOOL-95.jpg";
import enquiryImage2 from "../assets/images/home/AARYANS WORLD SCHOOL-96.png";
import galleryBackground from "../assets/images/background/gallery-bg.jpg";
import campusBackground from "../assets/images/background/BG1.jpg";

import venturesBackground from "../assets/images/background/best in aaryans world school.jpg";

import venture1 from "../assets/images/ventures/Aaryans YO Bhajiwala.jpg";
import venture2 from "../assets/images/ventures/Aarayans Commando Training Camp.jpg";
import venture3 from "../assets/images/ventures/AFF.jpg";
import venture4 from "../assets/images/ventures/Aaryans Preschool- Best School in Pune.jpg";
import venture5 from "../assets/images/ventures/Aaryans Sarpner.jpg";
import venture6 from "../assets/images/ventures/Aaryans Riverwwod Resort.jpg";
import venture7 from "../assets/images/ventures/Akshara Food Court.jpeg";
import venture8 from "../assets/images/ventures/Aaryans Edutainment Park.jpg";
import venture9 from "../assets/images/ventures/Aaryans Dog Kennel.jpg";
import venture10 from "../assets/images/ventures/Aaryans Day Care.jpg";
import venture11 from "../assets/images/ventures/Aaryans Dairy Farm.jpg";

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
    { img: venture1, name: "Aaryans YO Bhajiwala" },
    { img: venture2, name: "Aaryans Commando Training Camp" },
    { img: venture3, name: "Aaryans Farm Fresh" },
    { img: venture4, name: "Aaryans Preschool" },
    { img: venture5, name: "Aaryans Sharpner" },
    { img: venture6, name: "Aaryans Riverwood Resort" },
    { img: venture7, name: "Akshara Food Court" },
    { img: venture8, name: "Aaryans Edutainment Park" },
    { img: venture9, name: "Aaryans Dog Kennel" },
    { img: venture10, name: "Aaryans Day Care" },
    { img: venture11, name: "Aaryans Dairy Farm" },
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

  const [statusMessage, setStatusMessage] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  const enquiryImages = [enquiryImage1, enquiryImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % enquiryImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setStatusMessage(
      "Your enquiry form is ready. Backend submission will be connected later."
    );
  };

  const classes = [
    "Nursery",
    "LKG",
    "UKG",
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6-10",
  ];

  return (
    <section
      id="quick-enquiry"
      className="enquiry-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), url("${enquiryBackground}")`,
      }}
    >
      <div className="enquiry-container">
        <div className="enquiry-promo">
          <img
            key={currentImage}
            src={enquiryImages[currentImage]}
            alt="Aaryans World School"
            className="enquiry-promo-image"
          />
        </div>

        <div className="enquiry-card">
          <div className="enquiry-card-heading">
            <span aria-hidden="true">➤</span>
            <h2>Quick Enquiry</h2>
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

                  {classes.map((className) => (
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
                rows={3}
                placeholder="Enter your enquiry..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="enquiry-submit-button">
              Submit Enquiry
            </button>

            {statusMessage && (
              <p className="enquiry-status" role="status">
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}


function CampusGallery() {
  const videos = [
    { id: "6hAVWc-KSLQ", title: "Campus Highlights" },
    { id: "k51LjwvQ1FE", title: "Annual Sports Day" },
    { id: "Nw5Kokj2OgQ", title: "Cultural Events" },
    { id: "gv9TH9Ai-Ic", title: "Student Life" },
    { id: "uAMjvQvZ_xM", title: "Swimming Academy" },
    { id: "CEXDaltpxKQ", title: "Campus Life" },
  ];

  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section
      className="campus-section custom-video-bg"
      style={{
        backgroundImage: `url("${campusBackground}")`,
      }}
    >
      <div className="campus-container">
        <div className="home-section-heading">
          <span className="home-eyebrow">
            <span className="campus-heading-line"></span>
            LIFE AT CAMPUS
          </span>

          <h2>Experience Aaryans in Action</h2>

          <p>Watch our students, events, and campus life unfold.</p>
        </div>

        <div className="campus-video-grid">
          {videos.map((video) => (
            <button
              type="button"
              className="campus-video-card"
              key={video.id}
              onClick={() => setActiveVideo(video)}
              aria-label={`Play ${video.title}`}
            >
              <div className="campus-video-image">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  loading="lazy"
                />

                <span className="campus-play-button" aria-hidden="true">
                  ▶
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div
          className="campus-video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="campus-video-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="campus-video-modal-close"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              &times;
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
              title={activeVideo.title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}




function PremiumVentures() {
    return (
        <section
            className="ventures-section"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.20)), url("${venturesBackground}")`,
            }}
        >
            <div className="ventures-container">
                <div className="ventures-heading">
                    <span className="ventures-subtitle">
                        <span className="ventures-heading-line"></span>
                        BEYOND ACADEMICS
                    </span>

                    <h2>Our Premium Ventures</h2>

                    <div className="ventures-title-underline"></div>

                    <p>
                        Specialized divisions designed to nurture talent and
                        leadership in every field.
                    </p>
                </div>

                <div className="ventures-grid">
                    {ventures.map((venture, index) => (
                        <div
                            className="venture-item"
                            key={venture.name}
                            style={{ animationDelay: `${index * 30}ms` }}
                        >
                            <div className="venture-mini-card">
                                <div className="venture-logo-wrapper">
                                    <img
                                        src={venture.img}
                                        alt={venture.name}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
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
    <div className="home-page">
      <HeroSlider />
      <QuickNavigation />
      <WelcomeSection />
      <QuickEnquiry />
      <CampusGallery />
      <PremiumVentures />
      <SchoolStatistics />
      <FloatingActions />
    </div>
  );
}

export default Home;


