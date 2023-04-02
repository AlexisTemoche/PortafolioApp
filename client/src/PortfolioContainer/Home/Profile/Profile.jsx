import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        
        <div className="profile-details">

          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/AlexisTemoche" target="_blank" rel="noreferrer" >
                <i className="fa fa-github-square" />
              </a>
              <a href="https://www.facebook.com/alexis.temoche.735" target="_blank" rel="noreferrer" >
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.instagram.com/alexis.temoche.735/" target="_blank" rel="noreferrer" >
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hola, soy <span className="highlighted-text">Alexis Temoche</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Javascript",
                    1000,
                    "Vue.js ",
                    1000,
                    "React",
                    1000,
                    "Node.js",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Bachiller en ingeniería de sistemas con habilidad como desarrollador web
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()} > Contactar </button>
            <a href="curriculum.pdf" download="Alexis Temoche.pdf">
              <button className="btn highlighted-btn">Obtener Curriculum</button>
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
