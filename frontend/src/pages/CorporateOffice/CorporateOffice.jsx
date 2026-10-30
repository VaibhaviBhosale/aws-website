import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaRegClock,
} from "react-icons/fa";

import "./CorporateOffice.css";

function CorporateOffice() {
  return (
    <main className="corporate-office-page">
      <section className="corporate-office-section">
        <div className="corporate-office-container">
          <div className="corporate-office-grid">
            {/* Contact Information */}
            <div className="corporate-contact-column">
              <div className="corporate-contact-card">
                <h3 className="corporate-contact-heading">Get in Touch</h3>

                <div className="corporate-contact-item">
                  <div className="corporate-contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="corporate-contact-details">
                    <div className="corporate-contact-label">Address</div>
                    <div className="corporate-contact-value">
                      ASCON, Above Asha Hotel,
                      <br />
                      New Pune – Satara Bypass Highway,
                      <br />
                      Near Navle Bridge, Narhe,
                      <br />
                      Pune – 411041.
                    </div>
                  </div>
                </div>

                <div className="corporate-contact-item">
                  <div className="corporate-contact-icon">
                    <FaPhone />
                  </div>
                  <div className="corporate-contact-details">
                    <div className="corporate-contact-label">Phone</div>
                    <div className="corporate-contact-value">
                      <a href="tel:02024699109">020-24699109</a>
                      <br />
                      <a href="tel:+919699774488">+91 96997 74488</a>
                    </div>
                  </div>
                </div>

                <div className="corporate-contact-item">
                  <div className="corporate-contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="corporate-contact-details">
                    <div className="corporate-contact-label">Email</div>
                    <div className="corporate-contact-value">
                      <a href="mailto:aaryansworldschool@gmail.com">
                        aaryansworldschool@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="corporate-contact-divider"></div>

                <h5 className="corporate-hours-heading">
                  <FaRegClock />
                  Working Hours
                </h5>

                <div className="corporate-hours-table">
                  <div className="corporate-hours-row">
                    <span>Monday - Friday</span>
                    <strong>9:00 AM - 5:30 PM</strong>
                  </div>

                  <div className="corporate-hours-row">
                    <span>Saturday</span>
                    <strong>9:00 AM - 5:30 PM</strong>
                  </div>

                  <div className="corporate-hours-row">
                    <span>Sunday</span>
                    <strong className="corporate-closed-badge">Closed</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="corporate-map-column">
              <div className="corporate-map-wrapper">
                <iframe
  src="https://maps.google.com/maps?q=18.4547096,73.8278176&z=15&output=embed"
  title="Aaryans World School Corporate Office, ASCON, Narhe, Pune"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CorporateOffice;