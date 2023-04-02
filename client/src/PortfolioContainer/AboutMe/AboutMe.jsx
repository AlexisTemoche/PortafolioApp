import { useEffect } from "react";
import { ScreenHeading } from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export const AboutMe = (props) => {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "Como desarrollador front-end, he adquirido una amplia experiencia en el desarrollo web. Poseo conocimientos de las tecnologías front-end más populares como HTML, CSS, JavaScript, Vue, React y Angular, lo que me permite adaptarme rápidamente a cualquier proyecto y desarrollar soluciones personalizadas.",
    highlights: {
      bullets: [
        "Sistema ERP",
        "Fintech (Cliente)",
        "Fintech (BackOffice)",
        "Cotizador",
        "Facturador",
      ],
      heading: "Algunos proyectos en los que participe:",
    },
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container fade-in" id={props.id || ""} >
      <div className="about-me-parent">
        <ScreenHeading title={"Acerca de mi"} subHeading={"¿Por qué elegirme?"} />
        <div className="about-me-card">

          <div className="about-me-profile" /> 

          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()} >
                Contactar
              </button>
              <a href="curriculum.pdf" download="Alexis Temoche.pdf">
                <button className="btn highlighted-btn">Obtener Curriculum</button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
