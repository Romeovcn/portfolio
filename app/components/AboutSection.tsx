import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const AboutSection: React.FunctionComponent = ({}) => {
  const { showContactModal, setShowContactModal } = useContext(AppContext);

  return (
    <div
      id="aboutSection"
      className="flex flex-center w-full h-[1080px] text-[64px] px-[50px] overflow-hidden">
      Développeur depuis maintenant 3 ans, je suis passionné par l'apprentissage de nouvelles
      technologies et par la résolution de problèmes.
      {/* <br /> */}
      {/* J'ai au cours de mes études travaillé principalement sur des langages relativement bas niveaux
      tel que le C ce qui me permet aujourd'hui de comprendre les mécanismes internes des langages
      de plus haut niveau et donc de savoir m'adapter rapidement à n'importe quel language. Si mon
      profile vous intéresse, je serais ravi de discuter avec vous. */}
    </div>
  );
};

export default AboutSection;
