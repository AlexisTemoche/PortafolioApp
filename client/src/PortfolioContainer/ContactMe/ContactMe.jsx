import { useState, useEffect } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import { ScreenHeading } from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import imgBack from "../../../src/images/ContactMe/mailz.jpeg";
import load1 from "../../../src/images/ContactMe/load2.gif";
import { Footer } from "../Footer/Footer";
import "./ContactMe.css";

export const ContactMe = (props) => {

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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Mantengámonos en contacto"} title={"Contáctame"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Ponerse en contacto 📧", 1000]} />
          </h2>
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
        <div className="back-form">
          <div className="img-back">
            <h4>¡Envía tu correo electrónico aquí!</h4>
            <img src={imgBack} alt="not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Nombres:</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Correo:</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Mensaje:</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                Enviar 
                <i className="fa fa-paper-plane ml-2" />
                { bool ? ( <b className="load"> <img src={load1} alt="not responding" /> </b> ) : ( "" ) }
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
