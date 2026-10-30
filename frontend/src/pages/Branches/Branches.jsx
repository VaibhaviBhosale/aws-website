import { useState } from "react";
import {
  FaMapMarkedAlt,
  FaImages,
  FaFilePdf,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

import branchesData from "../../data/branchesData";
import backgroundImage from "../../assets/images/background/Background 2 (1).jpg";
import "./Branches.css";

function Branches() {
  const states = Object.keys(branchesData);
  const [activeState, setActiveState] = useState(states[0]);

  const getImagePath = (image) => `/images/branches/${image}`;

  const getBrochurePath = (brochure) =>
    `/brouchers/${encodeURIComponent(brochure)}`;

  return (
    <div className="branches-page">
      {/* State Navigation */}
      <div className="state-nav-wrapper">
        <div className="container">
          <div className="state-nav">
            {states.map((state) => (
              <button
                key={state}
                type="button"
                className={`state-tab ${activeState === state ? "active" : ""}`}
                onClick={() => setActiveState(state)}
              >
                {state}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Branches */}
      <section
        className="branches-section"
        style={{ "--branches-bg-image": `url("${backgroundImage}")` }}
      >
        <div className="container">
          <div className="branches-heading">
            <h3>Branches in {activeState}</h3>
            <div className="heading-divider"></div>
          </div>

          <div className="branches-grid">
            {branchesData[activeState].map((branch) => (
              <article className="branch-card" key={branch.pageLink}>
                <div className="branch-img-wrapper">
                  <img
                    src={getImagePath(branch.image)}
                    alt={`Aaryans World School - ${branch.name}`}
                    loading="lazy"
                  />

                  <span className="card-badge">{branch.type}</span>
                </div>

                <div className="branch-body">
                  <h4 className="branch-title">{branch.name}</h4>

                  <ul className="contact-list">
                    <li>
                      <FaMapMarkerAlt />
                      <span>{branch.address}</span>
                    </li>

                    <li>
                      <FaPhone />
                      <a href={`tel:${branch.phone.replace(/\s/g, "")}`}>
                        {branch.phone}
                      </a>
                    </li>

                    <li>
                      <FaEnvelope />
                      <a href={`mailto:${branch.email}`}>{branch.email}</a>
                    </li>
                  </ul>

                  <div className="action-icons">
                    <a
                      href={branch.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-btn map-icon"
                      title="View on Google Maps"
                      aria-label={`View ${branch.name} on Google Maps`}
                    >
                      <FaMapMarkedAlt />
                    </a>

                    <button
                      type="button"
                      className="icon-btn gallery-icon"
                      title="View Gallery"
                      aria-label={`View ${branch.name} gallery`}
                      onClick={() =>
                        alert(
                          `Gallery for ${branch.name} will be connected in the next step.`
                        )
                      }
                    >
                      <FaImages />
                    </button>

                    {branch.brochure ? (
                      <a
                        href={getBrochurePath(branch.brochure)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-btn brochure-icon"
                        title="View Brochure"
                        aria-label={`View ${branch.name} brochure`}
                      >
                        <FaFilePdf />
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="icon-btn disabled-icon"
                        title="Brochure Not Available"
                        aria-label="Brochure not available"
                        disabled
                      >
                        <FaFilePdf />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Branches;