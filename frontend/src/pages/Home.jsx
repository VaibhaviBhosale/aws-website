import { useEffect, useState, useRef } from "react";
import api from "../services/api";
import "../styles/Home.css";
import heroVideo from "../assets/videos/slider.MP4";
import schoolLogo from "../assets/images/logo_aws.png";
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
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [branches, setBranches] = useState([]);
  const enquiryImages = [enquiryImage1, enquiryImage2];

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const response = await api.get("/branches");
        setBranches(response.data.data);
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };

    fetchBranches();
  }, []);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const dobInput = form.elements.namedItem("dob");
    const dobValue = dobInput.value;

    if (!dobValue) {
      alert("Please select Date of Birth.");
      dobInput.focus();
      return;
    }

    const selectedDob = new Date(dobValue + "T00:00:00");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const minimumDob = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate()
    );

    if (selectedDob > today) {
      alert("Date of Birth cannot be in the future.");
      dobInput.focus();
      return;
    }

    if (selectedDob < minimumDob) {
      alert("Student's age cannot be more than 18 years.");
      dobInput.focus();
      return;
    }

    const payload = {
      student_name: formData.get("studentName"),
      branch_id: formData.get("branch_id"),
      dob: formData.get("dob"),
      gender: formData.get("gender"),
      class_applying_for: formData.get("className"),
      admission_year: formData.get("admissionYear"),

      father_name: formData.get("fatherName"),
      father_qualification: formData.get("fatherQualification"),
      father_mobile: formData.get("fatherMobile"),
      father_whatsapp: formData.get("fatherWhatsapp"),
      father_email: formData.get("fatherEmail"),

      mother_qualification: formData.get("motherQualification"),
      mother_mobile: formData.get("motherMobile"),
      mother_email: formData.get("motherEmail"),
      mother_whatsapp: formData.get("motherWhatsapp"),

      address: formData.get("address"),
      pin: formData.get("pin"),

      previous_school: formData.get("previousSchool"),
      previous_standard: formData.get("previousStandard"),
      leaving_reason: formData.get("leavingReason"),
    };

    try {
      setStatusMessage("Submitting enquiry...");

      const response = await api.post("/enquiries", payload);

      setShowSuccessPopup(true);
      form.reset();

    } catch (error) {
      console.error("Enquiry submission error:", error);

      if (error.response?.status === 422) {
        const errors = error.response.data.errors;
        const firstError = Object.values(errors)[0][0];

        setStatusMessage(firstError);
      } else {
        setStatusMessage(
          "Unable to submit enquiry. Please try again."
        );
      }
    }
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
              <label htmlFor="studentName">Student Full Name *</label>
              <input
                id="studentName"
                name="studentName"
                type="text"
                placeholder="Enter Student Full Name"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="dob">Date of Birth *</label>
                <input id="dob" name="dob" type="date" required />
              </div>
              <div className="form-field">
                <label htmlFor="gender">Gender *</label>
                <select id="gender" name="gender" defaultValue="" required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="className">Standard *</label>
                <select id="className" name="className" defaultValue="" required>
                  <option value="">Select Standard</option>
                  {classes.map((className) => (
                    <option key={className} value={className}>{className}</option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="admissionYear">Admission for Year *</label>
                <input id="admissionYear" name="admissionYear" placeholder="2026-27" />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="branch_id">Select Branch *</label>

              <select
                id="branch_id"
                name="branch_id"
                defaultValue=""
                required
              >
                <option value="">Select Branch</option>

                {branches.map((branch) => (
                  <option key={branch.id} value={branch.id}>
                    {branch.name} - {branch.city}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="fatherName">Father's Name *</label>
              <input id="fatherName" name="fatherName" placeholder="Enter Father's Name" required />
            </div>

            <div className="form-field">
              <label htmlFor="address">Address *</label>
              <textarea id="address" name="address" rows={2} placeholder="Enter Address" required />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="pin">PIN Code</label>
                <input id="pin" name="pin" inputMode="numeric" maxLength={6} pattern="[0-9]{6}" placeholder="6-digit PIN" />
              </div>
              <div className="form-field">
                <label htmlFor="fatherQualification">Father's Qualification</label>
                <input id="fatherQualification" name="fatherQualification" placeholder="Qualification" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="fatherMobile">Father's Mobile *</label>
                <input id="fatherMobile" name="fatherMobile" type="tel" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} placeholder="Mobile Number" required />
              </div>
              <div className="form-field">
                <label htmlFor="fatherWhatsapp">Father's WhatsApp</label>
                <input id="fatherWhatsapp" name="fatherWhatsapp" type="tel" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} placeholder="WhatsApp Number" />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="fatherEmail">Father's Email</label>
              <input id="fatherEmail" name="fatherEmail" type="email" placeholder="name@example.com" />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="motherQualification">Mother's Qualification</label>
                <input id="motherQualification" name="motherQualification" placeholder="Qualification" />
              </div>
              <div className="form-field">
                <label htmlFor="motherMobile">Mother's Mobile</label>
                <input id="motherMobile" name="motherMobile" type="tel" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} placeholder="Mobile Number" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="motherEmail">Mother's Email</label>
                <input id="motherEmail" name="motherEmail" type="email" placeholder="name@example.com" />
              </div>
              <div className="form-field">
                <label htmlFor="motherWhatsapp">Mother's WhatsApp</label>
                <input id="motherWhatsapp" name="motherWhatsapp" type="tel" inputMode="numeric" pattern="[0-9]{10}" maxLength={10} placeholder="WhatsApp Number" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="previousSchool">Previous School</label>
                <input id="previousSchool" name="previousSchool" placeholder="Previous School Name" />
              </div>
              <div className="form-field">
                <label htmlFor="previousStandard">Previous Standard</label>
                <input id="previousStandard" name="previousStandard" placeholder="Previous Standard" />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="leavingReason">Reason for Leaving Previous School</label>
              <textarea id="leavingReason" name="leavingReason" rows={2} placeholder="Enter Reason" />
            </div>

            <button type="submit" className="enquiry-submit-button">Submit Enquiry</button>

            {statusMessage && (
              <p className="enquiry-status" role="status">{statusMessage}</p>
            )}
          </form>
          {showSuccessPopup && (
            <div className="success-popup-overlay">
              <div className="success-popup">
                <div className="success-popup-icon">✓</div>

                <h2>Enquiry Submitted!</h2>

                <p>
                  Thank you for your interest in Aaryans World School.
                  Our admission team will contact you shortly.
                </p>

                <button
                  type="button"
                  onClick={() => setShowSuccessPopup(false)}
                >
                  Continue
                </button>
              </div>
            </div>
          )}
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
function AnimatedCounter({ target, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    let animationFrame;
    let observer;

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setCount(Math.floor(easedProgress * target));

          if (progress < 1) {
            animationFrame = requestAnimationFrame(animate);
          }
        };

        animationFrame = requestAnimationFrame(animate);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [target]);

  return (
    <strong ref={counterRef}>
      {count.toLocaleString("en-IN")}{suffix}
    </strong>
  );
}

function SchoolStatistics() {
  return (
    <section className="statistics-section">
      <div className="statistics-container">
        {statistics.map((item) => (
          <div className="statistic-item" key={item.label}>
            {item.label === "Students" ? (
              <AnimatedCounter target={12000} />
            ) : item.label === "Happy Parents" ? (
              <AnimatedCounter target={40000} />
            ) : (
              <strong>{item.number}</strong>
            )}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
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
    </div>
  );
}

export default Home;


