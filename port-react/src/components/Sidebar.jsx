import InformationContainer from "./InformationContainer";

import Avatar from "../img/mateus.png";

import "../styles/components/Sidebar.sass";
import SocialNetworkContainer from "./SocialNetworkContainer";

const Sidebar = () => {
  return (
  <aside id="sidebar">
    <img src={Avatar} alt="Mateus nascimento" />
    <h2> Desenvolvedor Jr</h2>
    <SocialNetworkContainer/>
    <InformationContainer />
    <a href="./01.pdf" className="btn">Download curriculo</a>
  </aside>
  );
};
export default Sidebar;