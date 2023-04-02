import { useEffect } from "react";
import { ScreenHeading } from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import portafolio from "../../../src/images/Projects/portafolio.png";
import foxbelMusic from "../../../src/images/Projects/foxbel-music.png";
import gif from "../../../src/images/Projects/gif.png";

export const Projects = (props) => {

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div>
      <ScreenHeading title={"Proyectos"} subHeading={"Proyectos personales y repositorios"} />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-12 mb-md-0 mb-2">
              <div className="testi-item">
                <div className="testi-comment">
                  <p> PortafolioApp se desarollo con Create React App y React versión 18.</p>          
                </div>
                <div className="d-flex mb-2 mx-2 justify-content-around">
                  <a href="https://github.com/AlexisTemoche" target="_blank" rel="noreferrer" className="btn btn-link">Ir a la página</a>
                  <a href="https://github.com/AlexisTemoche" target="_blank" rel="noreferrer" className="btn btn-link">Ir al repositorio</a>
                </div>
                <div className="client-info">
                  <img src={portafolio} alt="no internet connection"></img>
                  <h5>Portafolio</h5>
                  <p>Mi portafolio</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mb-md-0 mb-2">
              <div className="testi-item">
                <div className="testi-comment">
                  <p> FoxbelMusicApp se desarollo con Quasar CLI y vue versión 3.</p>
                </div>
                <div className="d-flex mb-2 mx-2 justify-content-around">
                  <a href="https://alexistemoche.github.io/foxbel-music/" target="_blank" rel="noreferrer" className="btn btn-link">Ir a la página</a>
                  <a href="https://github.com/AlexisTemoche/foxbel-music" target="_blank" rel="noreferrer" className="btn btn-link">Ir al repositorio</a>
                </div>
                <div className="client-info">
                  <img src={foxbelMusic} alt="no internet connection"></img>
                  <h5>Foxbel Music</h5>
                  <p>Reproductor de Música</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12 mb-md-0 mb-2">
              <div className="testi-item">
                <div className="testi-comment">
                  <p> GitExpertApp se desarollo con Vite y React versión 18.</p>
                </div>
                <div className="d-flex mb-2 mx-2 justify-content-around">
                  <a href="https://alexistemoche.github.io/react-gif-app/" target="_blank" rel="noreferrer" className="btn btn-link">Ir a la página</a>
                  <a href="https://github.com/AlexisTemoche/react-gif-app" target="_blank" rel="noreferrer" className="btn btn-link">Ir al repositorio</a>
                </div>
                <div className="client-info">
                  <img src={gif} alt="no internet connection"></img>
                  <h5>Gif Search Engine</h5>
                  <p>Buscador de Gifs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
