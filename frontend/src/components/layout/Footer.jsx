import {
  MapPin,
  Phone,
  Mail,
  Building2,
  ChevronRight,
} from "lucide-react";

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
            <a href="/" className="footer-logo">
              <img src={schoolLogo} alt="Aaryans World School" />
            </a>

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
                              <a href={child.href}>
                                <ChevronRight size={16} />
                                <span>{child.label}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <a href={link.href}>
                      <ChevronRight size={19} />
                      <span>{link.label}</span>
                    </a>
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
    </footer>
  );
}

export default Footer;

