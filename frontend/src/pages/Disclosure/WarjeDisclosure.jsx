import React from "react";
import "./WarjeDisclosure.css";

const documentSections = [
  {
    title: "B. Documents & Information",
    documents: [
      { label: "Affiliation Letter", file: "affiliation.pdf" },
      { label: "Trust Certificate", file: "trust26.pdf" },
      { label: "NOC", file: "noc.pdf" },
      { label: "Recognition", file: "recognition26.pdf" },
      { label: "Building Safety", file: "bsc.pdf" },
      { label: "Fire Safety", file: "fsc.pdf" },
      { label: "Water & Sanitation", file: "water26.pdf" },
      { label: "Self Attestation", file: "self.pdf" },
      { label: "Land Certificate", file: "land_wj.pdf" },
      { label: "Total Builtup Area", file: "wj_builtup.pdf" },
    ],
  },
  {
    title: "C. Results & Academics",
    documents: [
      { label: "Fee Structure (2024-25)", file: "Fees Structure 24-25.jpeg" },
      { label: "Fee Structure (2025-26)", file: "Fees Structure 25-26.jpeg" },
      { label: "Fee Structure (2026-27)", file: "Fees Structure 26-27.jpeg" },
      { label: "Managing Committee", file: "committee.pdf" },
      { label: "List of EPTA Committee", file: "epta.pdf" },
      { label: "Academic Calendar", file: "calendar.pdf" },
      { label: "CBSE Results", file: "results.pdf" },
    ],
  },
  {
    title: "E. Infrastructure Details",
    documents: [
      { label: "Appendix IX of SARAS", file: "appendix.pdf" },
    ],
  },
  {
    title: "Other Required Information",
    documents: [
      { label: "Book List", file: "booklist.pdf" },
      { label: "Sample TC", file: "sample_tc.pdf" },
    ],
  },
];

function DocumentSection({ title, documents }) {
  return (
    <section className="disclosure-card">
      <h2 className="disclosure-title">{title}</h2>

      <div className="disclosure-documents">
        {documents.map((document) => (
          <a
            key={document.file}
            className="disclosure-doc-box"
            href={`/docs/${encodeURIComponent(document.file)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="disclosure-pdf-icon" aria-hidden="true">
              📄
            </span>
            <span>{document.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function WarjeDisclosure() {
  return (
    <main className="warje-disclosure-page">
      <div className="warje-disclosure-container">
        <header className="warje-disclosure-header">
          <h1>Mandatory Disclosure</h1>
          <p>CBSE Mandatory Information - Aaryans World School, Warje</p>
        </header>

        <section className="disclosure-card">
          <h2 className="disclosure-title">A. General Information</h2>

          <div className="disclosure-table-wrapper">
            <table className="disclosure-table">
              <tbody>
                <tr>
                  <th>School Name</th>
                  <td>Aaryans World School, Warje</td>
                </tr>
                <tr>
                  <th>Principal</th>
                  <td>Ms. Pramodini Gulhane, M.Sc. B.Ed</td>
                </tr>
                <tr>
                  <th>Affiliation No.</th>
                  <td>1131233</td>
                </tr>
                <tr>
                  <th>Contact</th>
                  <td>9130054488 &amp; 9527744488</td>
                </tr>
                <tr>
                  <th>School Code</th>
                  <td>31220</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    Aaryans World School, nr. Jijai Garden, Shri Chintamani
                    Nagar, Tapodham, Warje, Pune, Maharashtra 411058
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {documentSections.slice(0, 2).map((section) => (
          <DocumentSection key={section.title} {...section} />
        ))}

        <section className="disclosure-card">
          <h2 className="disclosure-title">D. Staff Details</h2>

          <div className="disclosure-table-wrapper">
            <table className="disclosure-table">
              <tbody>
                <tr>
                  <th>Principal</th>
                  <td>Ms. Pramodini Gulhane, M.Sc. B.Ed</td>
                </tr>
                <tr>
                  <th>Total Teachers</th>
                  <td>90</td>
                </tr>
                <tr>
                  <th>NTT</th>
                  <td>0</td>
                </tr>
                <tr>
                  <th>PRT</th>
                  <td>40</td>
                </tr>
                <tr>
                  <th>TGT</th>
                  <td>39</td>
                </tr>
                <tr>
                  <th>PGT</th>
                  <td>0</td>
                </tr>
                <tr>
                  <th>PRT Ratio</th>
                  <td>1 : 1.42</td>
                </tr>
                <tr>
                  <th>TGT Ratio</th>
                  <td>1 : 1.5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="disclosure-card">
          <h2 className="disclosure-title">E. Infrastructure Details</h2>

          <div className="disclosure-table-wrapper">
            <table className="disclosure-table">
              <tbody>
                <tr>
                  <th>Campus Area</th>
                  <td>5486 sq.m</td>
                </tr>
                <tr>
                  <th>No. of Classrooms</th>
                  <td>57 (420–450 sq.ft.)</td>
                </tr>
                <tr>
                  <th>Internet Facility</th>
                  <td>Yes</td>
                </tr>
                <tr>
                  <th>CWSN Toilets (Girls)</th>
                  <td>2</td>
                </tr>
                <tr>
                  <th>CWSN Toilets (Boys)</th>
                  <td>2</td>
                </tr>
                <tr>
                  <th>Infrastructure Video</th>
                  <td>
                    <a
                      href="https://youtu.be/4aKSKuOQ9KM"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Infrastructure Video
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {documentSections.slice(2).map((section) => (
          <DocumentSection key={section.title} {...section} />
        ))}
      </div>
    </main>
  );
}