import { Profile } from "./Profile/Profile";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import "./Home.css";

export const Home = (props) => {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
