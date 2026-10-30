import React from "react";
import "./BhilarewadiDisclosure.css";

const documentSections = [
  {
    title: "B. Documents & Information",
    documents: [
      { label: "Affiliation Letter", file: "bw_affiliation.pdf", available: true },
      { label: "Trust Certificate", file: "bw_trust_certificate.pdf", available: true },
      { label: "NOC", file: "bw_noc.pdf", available: true },
      { label: "Recognition", file: "bw_recognition.pdf", available: true },
      { label: "Building Safety", file: "bw_building2.pdf", available: false },
      { label: "Fire Safety", file: "bw_fire2.pdf", available: false },
      { label: "Water & Sanitation", file: "bw_water3.pdf", available: false },
      { label: "Self Attestation", file: "self.pdf", available: false },
      { label: "Land Certificate", file: "bw_land2.pdf", available: false },
      { label: "Total Builtup Area", file: "bw_builtup2.pdf", available: false },
    ],
  },
  {
    title: "C. Results & Academics",
    documents: [
      { label: "Fee Structure (2024-25)", file: "bw_fee 24-25.pdf" },
      { label: "Fee Structure (2025-26)", file: "bw_fee 25-26.pdf" },
      { label: "Fee Structure (2026-27)", file: "bw_fee 26-27.pdf" },
      { label: "Managing Committee", file: "bw_committee.pdf" },
      { label: "List of EPTA Committee", file: "bw_epta2.pdf" },
      { label: "Academic Calendar - Primary", file: "bw_primary.pdf" },
      { label: "Academic Calendar - Secondary", file: "bw_secondary.pdf" },
      { label: "CBSE Results", file: "bw_result.pdf" },
    ],
  },
  {
    title: "Other Required Information",
    documents: [
      { label: "Book List", file: "booklist.pdf" },
      { label: "Sample TC", file: "bw_sample_tc.pdf" },
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
            onClick={
              document.available === false
                ? (event) => {
                    event.preventDefault();
                    window.alert(
                      "This document is currently unavailable due to a technical issue. Please try again later."
                    );
                  }
                : undefined
            }
          >
            <span className="disclosure-pdf-icon" aria-hidden="true">
              📄
            </span>

            <span>{document.label}</span>

            <span className="disclosure-view-label">
              {document.available === false ? "Unavailable" : "View Document"}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function BhilarewadiDisclosure() {
  return (
    <main className="bhilarewadi-disclosure-page">
      <div className="bhilarewadi-disclosure-container">
        <header className="bhilarewadi-disclosure-header">
          <h1>Mandatory Disclosure</h1>
          <p>
            CBSE Mandatory Information - Aaryans School Bhilarewadi, Haveli
            Pune Maharashtra
          </p>
        </header>

        {/* A. General Information */}
        <section className="disclosure-card">
          <h2 className="disclosure-title">A. General Information</h2>

          <div className="disclosure-table-wrapper">
            <table className="disclosure-table">
              <tbody>
                <tr>
                  <th>School Name</th>
                  <td>Aaryans World School, Bhilarewadi</td>
                </tr>
                <tr>
                  <th>Principal</th>
                  <td>Mrs. Krupa Iyer, M.A, B.Ed</td>
                </tr>
                <tr>
                  <th>Affiliation No.</th>
                  <td>1130218</td>
                </tr>
                <tr>
                  <th>Contact</th>
                  <td>9699774488 &amp; 9130944488</td>
                </tr>
                <tr>
                  <th>School Code</th>
                  <td>30175</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>
                    Aaryans School, S. No. 12/15 Bhilarewadi Taluka Haveli,
                    Pune - 411046
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* B. Documents & Information */}
        <DocumentSection {...documentSections[0]} />

        {/* C. Results & Academics */}
        <DocumentSection {...documentSections[1]} />

        {/* D. Staff Details */}
        <section className="disclosure-card">
          <h2 className="disclosure-title">D. Staff Details</h2>

          <div className="disclosure-table-wrapper">
            <table className="disclosure-table">
              <tbody>
                <tr>
                  <th>Principal</th>
                  <td>Mrs. Krupa Iyer, M.A, B.Ed</td>
                </tr>
                <tr>
                  <th>Total Teachers</th>
                  <td>0</td>
                </tr>
                <tr>
                  <th>NTT</th>
                  <td>6</td>
                </tr>
                <tr>
                  <th>PRT</th>
                  <td>85</td>
                </tr>
                <tr>
                  <th>TGT</th>
                  <td>72</td>
                </tr>
                <tr>
                  <th>PGT</th>
                  <td>0</td>
                </tr>
                <tr>
                  <th>PRT Ratio</th>
                  <td>0 : 0</td>
                </tr>
                <tr>
                  <th>TGT Ratio</th>
                  <td>0 : 0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* E. Infrastructure Details */}
        <section className="disclosure-card">
          <h2 className="disclosure-title">E. Infrastructure Details</h2>

          <div className="disclosure-table-wrapper">
            <table className="disclosure-table">
              <tbody>
                <tr>
                  <th>Campus Area</th>
                  <td>8500 Sq.m</td>
                </tr>
                <tr>
                  <th>No. of Classrooms</th>
                  <td>110 (15142.87 sq. m)</td>
                </tr>
                <tr>
                  <th>Internet Facility</th>
                  <td>Yes</td>
                </tr>
                <tr>
                  <th>CWSN Toilets (Girls)</th>
                  <td>4</td>
                </tr>
                <tr>
                  <th>CWSN Toilets (Boys)</th>
                  <td>4</td>
                </tr>
                <tr>
                  <th>Infrastructure Video</th>
                  <td>
                    <a
                      href="https://youtu.be/5D0ZKoKxTWU"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Infrastructure Video
                    </a>
                  </td>
                </tr>
                <tr>
                  <th>Appendix IX of SARAS</th>
                  <td>
                    <a
                      href="/docs/bw_appendix.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Document
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Other Required Information */}
        <DocumentSection {...documentSections[2]} />
      </div>
    </main>
  );
}