import { useState, useEffect } from "react";
import { ScreenHeading } from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export const Resume = (props) => {
  
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
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
  
  const resumeBullets = [
    { label: "Educación", logoSrc: "education.svg" },
    { label: "Experiencia Laboral", logoSrc: "work-history.svg" },
    { label: "Tecnologías", logoSrc: "programming-skills.svg" },
    { label: "Proyectos 'LEONCITO'", logoSrc: "projects.svg" },
  ];
  
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "Vue JS", ratingPercentage: 90 },
    { skill: "React", ratingPercentage: 85 },
    { skill: "Angular", ratingPercentage: 65 },
    { skill: "Typescript", ratingPercentage: 50 },
    { skill: "Git", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 70 },
    { skill: "Bootstrap", ratingPercentage: 90 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 85 },
  ];

  const projectsDetails = [
    {
      title: "ERP Asescont",
      duration: { fromDate: "2020", toDate: "Present" },
      description: "vue-router, vuex, vee-validate, vue-select, vuejs-datepicker, sweetalert2, axios, entre otros.",
      subHeading: "Vue.js, Bootsrap.",
    },
    {
      title: "Fintech",
      duration: { fromDate: "2021", toDate: "2022" },
      description: "vue-router, vuex, vee-validate, vue-select, vuejs-datepicker, sweetalert2, axios, entre otros.",
      subHeading: "Vue.js, Bootsrap.",
    },
    {
      title: "Cotizador",
      duration: { fromDate: "2021", toDate: "Present" },
      description: "typescript, angular-router, rxjs, xlsx, sweetalert2, axios, entre otros.",
      subHeading: "Angular, Bootsrap.",
    },
  ];

  const resumeDetails = [

    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Universidad Nacional Pedro Ruiz Gallo"}
        subHeading={"Bachiller en Ingeniería de Sistemas"}
        fromDate={"2014"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"LANGUAGE CENTRE"}
        subHeading={"Basic English Course"}
        fromDate={"2019"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"CETI"}
        subHeading={"Especialista en el desarrollo Frontend con Angular y React"}
        fromDate={"2022"}
        toDate={"2022"}
      />
    </div>,
    
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"RETAIL LEONCITO EIRL."}
          subHeading={"Desarrollador Front End"}
          fromDate={"2020"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Actualmente trabajo como Desarrollador Front End en la empresa Leoncito desde enero del 2020, 
            las funciones que vengo realizando son:
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Dar mantenimiento a requerimientos existentes de sus sistemas (ERP, Cotizador y Facturador)
          </span>
          <br />
          <span className="resume-description-text">
            - Crear desde cero nuevos sistemas e implementar sus requerimientos (Fintech cliente y backoffice)
          </span>
          <br />
          <span className="resume-description-text">
            - Crear nuevos componentes y funciones que se puedan reutilizar en los proyectos. (todos los sistemas)
          </span>
          <br />
          <span className="resume-description-text">
            - Hacer respetar los estandares y generarlos en el Frontend, en el caso de ingresar nuevos programadores, explicarles. (todos los sistemas)
          </span>
          <br />
          <span className="resume-description-text">
            - Subir cambios, integrar ramas y compilar los proyectos. (todos los sistemas)
          </span>
          <br />
        </div>
      </div>
    </div>,
    
    <div className="resume-screen-container programming-skills-container" key="programming-skills" >
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
    
    <div className="resume-screen-container" key="projects">
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
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
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
        <ScreenHeading title={"Curriculum Vitae"} subHeading={"Mis detalles biográficos formales"} />
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
