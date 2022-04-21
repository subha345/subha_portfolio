import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Education", logoSrc: "education.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Redux", ratingPercentage: 85 },
    { skill: "TypeScript", ratingPercentage: 70 },
    { skill: "HTML5", ratingPercentage: 80 },
    { skill: "CSS3", ratingPercentage: 80 },
    { skill: "Docker", ratingPercentage: 65 },
    { skill: "React Native", ratingPercentage: 60 },
    { skill: "Express JS", ratingPercentage: 60 },
    { skill: "Node JS", ratingPercentage: 60 },
    { skill: "PM2", ratingPercentage: 80 },
    { skill: "NSSM", ratingPercentage: 80 },
    { skill: "CI/CD", ratingPercentage: 70 },
    { skill: "SonarQube", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Protocol Digitalization",
      duration: { fromDate: "NOV 2020", toDate: "TILL DATE" },
      description:
        "Protocol Digitalization is an initiative with a goal of creating a digitized library for publicly available protocols.",
      // subHeading: "Technologies Used:  ReactJS, Redux, Redux Saga, Express Js, Node Js.",
    },
    {
      title: "AutoInspekt Web & iOS App",
      duration: { fromDate: "JAN 2020", toDate: "NOV 2020" },
      description:
        "A comprehensive, independent, unbiased inspection service to help you determine the quality of a vehicle.",
      // subHeading: "Technologies Used:  ReactJS, Redux, Express Js, Node Js.",
    },
    {
      title: "Mahindra First Choice-Website",
      duration: { fromDate: "AUG 2018", toDate: "NOV 2020" },
      description:
        "Mahindra First Choice is a customer facing application for those who are interested in buying or selling pre-owned cars.",
      // subHeading:
      //   "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.",
    },
    {
      title: "Outlet Management System",
      duration: { fromDate: "JAN 2020", toDate: "NOV 2020" },
      description:
        "OMS is a dealer facing web application where the dealer manages all kinds of information regarding stocks, leads, offers and customer complaints.",
      // subHeading:
      //   "Technologies Used: ReactJS, Redux, Redux Thunk, HTML5, CSS3",
    },
  ];

  const resumeDetails = [
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Hexaware Technologies, Bangalore"}
          subHeading={"Sr Software Engineer"}
          fromDate={"NOV 2020"}
          toDate={"Present"}
        />
        <ResumeHeading
          heading={"Mahindra First Choice Wheels, Bangalore"}
          subHeading={"Associate Sr Software Engineer"}
          fromDate={"JUL 2018"}
          toDate={"NOV 2020"}
        />

        <ResumeHeading
          heading={"Health5c Wellness Solution, Bangalore"}
          subHeading={"Software Engineer"}
          fromDate={"MAR 2017"}
          toDate={"JUN 2018"}
        />
        <ResumeHeading
          heading={"Altair Engineering India Pvt. Ltd."}
          subHeading={"Project Trainee"}
          fromDate={"MAR 2016"}
          toDate={"MAR 2017"}
        />
      </div>
    </div>,
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Indira Gandhi Institute Of Technology, Sarang"}
        subHeading={"Master of Computer Applications"}
        fromDate={"2013"}
        toDate={"2016"}
      />

      <ResumeHeading
        heading={"Institute of Mathematics & Applications, Bhubaneswar"}
        subHeading={"B.Sc in Mathematics & Computing"}
        fromDate={"2009"}
        toDate={"2013"}
      />
      <ResumeHeading
        heading={"Maharishi College Of Natural Law, Bhubaneswar"}
        subHeading={"+2 Science"}
        fromDate={"2007"}
        toDate={"2009"}
      />
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container key-projects" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Photo Editing & Video Editing"
        description="Edit photos to make them more appealing, and arrange them in a suitable layout"
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with. The best way for stress reliever."
      />
      <ResumeHeading
        heading="Playing Cricket"
        description="Cricket encourages teamwork. I think cricket is much better than sitting hours in front of the computer screen or playing video games."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
