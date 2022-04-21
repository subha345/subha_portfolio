import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/subhadatta.samal">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://myaccount.google.com/personal-info">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://www.instagram.com/sds_subu/?hl=en">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.youtube.com/channel/UCk8tRQvw85r_AjhuFlbu_oA">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="https://twitter.com/SamalSubhadatta">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Subhadatta Samal</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Web Developer 🌐",
                    1000,
                    "React JS Developer 🌐",
                    1000,
                    "NodeJS Developer 💻",
                    1000,
                    "Cross Platform Mobile App 📱",
                    1000,
                    "React Native 📱",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
            Extensive 6+ years of work experience in web development with ReactJS.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="Subhadatta Samal-Resume.pdf" download="Subhadatta Samal-Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
