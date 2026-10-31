import {
  MapPin,
  Phone,
  Mail,
  Building2,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";
import schoolLogo from "../../assets/images/logo_aws.png";
import { useState } from "react";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Pre Primary", href: "/academics/pre-primary" },
  { label: "Primary", href: "/academics/primary" },
  { label: "Secondary", href: "/academics/secondary" },
  { label: "Sports", href: "/sports" },
  { label: "Admission", href: "/admission" },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Disclosure",
    children: [
      { label: "Warje", href: "/mandatory-disclosure/warje" },
      { label: "Bhilarewadi", href: "/mandatory-disclosure/bhilarewadi" },
    ],
  },
];

function Footer() {
  const [disclosureOpen, setDisclosureOpen] = useState(false);
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* School branding */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={schoolLogo} alt="Aaryans World School" />
            </Link>
            <p className="footer-description">
              Nurturing minds, building character, and shaping the leaders
              of tomorrow.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                𝕏
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                ▶
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-column">
            <h3 className="footer-heading">Quick Links</h3>

            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        type="button"
                        className="footer-link-parent"
                        onClick={() => setDisclosureOpen((open) => !open)}
                        aria-expanded={disclosureOpen}
                      >
                        <ChevronRight
                          size={19}
                          className={disclosureOpen ? "disclosure-chevron-open" : ""}
                        />
                        <span>{link.label}</span>
                      </button>

                      {disclosureOpen && (
                        <ul className="footer-sub-links">
                          {link.children.map((child) => (
                            <li key={child.label}>
                              <Link to={child.href}>
                                <ChevronRight size={16} />
                                <span>{child.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link to={link.href}>
                      <ChevronRight size={19} />
                      <span>{link.label}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Main branch */}
          <div className="footer-column">
            <h3 className="footer-heading">
              Bhilarewadi Main Branch
            </h3>

            <div className="footer-contact">
              <span className="contact-icon">
                <MapPin size={18} />
              </span>

              <p>
                Aaryans Valley, Pune - Satara Road, Next to R. K.
                Transport, Bhilarewadi, Before Old Katraj Ghat,
                Pune - 411046
              </p>
            </div>

            <a className="footer-contact" href="tel:+919699774488">
              <span className="contact-icon">
                <Phone size={18} />
              </span>
              <span>+91 96997 74488</span>
            </a>

            <a
              className="footer-contact"
              href="mailto:aaryansworldschool@gmail.com"
            >
              <span className="contact-icon">
                <Mail size={18} />
              </span>
              <span>aaryansworldschool@gmail.com</span>
            </a>
          </div>

          {/* Corporate office */}
          <div className="footer-column">
            <h3 className="footer-heading">Corporate Office</h3>

            <div className="footer-contact">
              <span className="contact-icon">
                <Building2 size={18} />
              </span>

              <p>
                Above Asha Hotel, Next to Amit Bloomfield,
                Near Navle Bridge, Narhe, Pune - 411046
              </p>
            </div>

            <div className="footer-map">
              <iframe
                title="Aaryans World School Corporate Office - ASCON"
                src="https://maps.google.com/maps?q=18.4547096,73.8278176&z=14&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Aaryans World School.
            All Rights Reserved.
          </p>

          <p className="footer-developer">
            Developed by{" "}
            <a
              href="https://www.aayojanai.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aayojan AI
            </a>
          </p>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="float-buttons">
        {/* School App */}
        <a
          href="https://forms.edunexttechnologies.com/erp-api/aaryans-world-school/index.php"
          className="playstore-float"
          target="_blank"
          rel="noopener noreferrer"
          title="Open School App"
          aria-label="Open School App"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/9699774488"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.52 2 2.02 6.48 2.02 12c0 1.77.47 3.43 1.3 4.88L2 22l5.27-1.38A10 10 0 1 0 12.04 2zm0 18.2c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.13.82.84-3.05-.2-.32A8.17 8.17 0 1 1 12.04 20.2zm4.48-6.12c-.25-.13-1.48-.73-1.7-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.52.12-.11.25-.3.38-.44.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.5-.41-.43-.57-.44h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.02 2.6c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.52.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

