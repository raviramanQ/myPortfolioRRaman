import React from 'react';
import { FaDownload, FaUser, FaHeart } from 'react-icons/fa';
import './Biodata.css';

const Biodata = () => {
  const handleDownloadPDF = () => {
    // Open Google Drive download link in new tab
    const googleDriveUrl = 'https://drive.google.com/uc?export=download&id=1fIXKMJi9Pteeu4E5lp4dA_vZQZ2iaMov';
    window.open(googleDriveUrl, '_blank');
  };

  return (
    <section id="biodata" className="biodata">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <FaHeart className="section-icon" />
            Bio Data
          </h2>
          <p className="section-subtitle">Personal & Family Information</p>
        </div>

        <div className="biodata-content">
          <div className="biodata-card">
            <div className="biodata-header">
              <div className="profile-section">
                <div className="profile-image">
                  <img src="/profile-photo.jpg" alt="Ravi Raman" />
                </div>
                <div className="basic-info">
                  <h3>Ravi Raman</h3>
                  <p className="designation">Software Developer</p>
                  <button className="download-btn" onClick={handleDownloadPDF}>
                    <FaDownload /> Download PDF
                  </button>
                </div>
              </div>
            </div>

            <div className="biodata-body">
              <div className="info-section">
                <h4><FaUser /> Personal Details</h4>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="label">Name:</span>
                    <span className="value">Ravi Raman</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Date of Birth:</span>
                    <span className="value">03-11-1996</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Place of Birth:</span>
                    <span className="value">Saharsa Bihar</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Education:</span>
                    <span className="value">B-Tech [Computer Science Engineering]</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Job/Occupation:</span>
                    <span className="value">Software Engineer at Vansam Media Tech</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Height:</span>
                    <span className="value">5.9</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Weight:</span>
                    <span className="value">70</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Color Complexion:</span>
                    <span className="value">Fair</span>
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h4>Paternal Details</h4>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="label">Father's Name:</span>
                    <span className="value">Chandra Shekhar Choudhary</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Father's Occupation:</span>
                    <span className="value">Teacher</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Mother's Name:</span>
                    <span className="value">Baby Choudhary</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Paternal Uncle:</span>
                    <span className="value">S.S Choudhary (Indian AirForce (Warrant Officer))</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Sibling:</span>
                    <span className="value">Ayushi Choudhary (Sister) Senior Automation Engineer</span>
                  </div>
                </div>
              </div>

              <div className="info-section">
                <h4>Maternal Details</h4>
                <div className="info-grid">
                   <div className="info-item">
                    <span className="label">Grand Father:</span>
                    <span className="value">Ugra Narayan Choudhary</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Occupation:</span>
                    <span className="value">Retd. Agriculture Officer</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Maternal Grand Father:</span>
                    <span className="value">L.N. Thakur</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Occupation:</span>
                    <span className="value">Retd. Army (BRO - GREF)</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Maternal Uncle:</span>
                    <span className="value">R.K Thakur & Gangadhar Thakur</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Occupation:</span>
                    <span className="value">(Serving in INDIAN ARMY (BRO - GREF))</span>
                  </div>
                 
                </div>
              </div>

              <div className="info-section">
                <h4>Village</h4>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="label">Home Town:</span>
                    <span className="value">Behta (raja sonbarsa Saharsa) Bihar</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Mool:</span>
                    <span className="value">"Budhware Mahishi" (बधवार महिषी)</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Gotra:</span>
                    <span className="value">Vatsya</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biodata;
