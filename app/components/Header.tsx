import React, { useContext } from "react";
import { AppContext } from "../context/AppContext"; // Adjust the path accordingly

const Header: React.FunctionComponent = ({}) => {
  const { showContactModal, setShowContactModal } = useContext(AppContext);

  const handleLinkScroll = (e) => {
    e.preventDefault();
    const section = document.getElementById(e.target.dataset.href);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-5 z-10">
      <button
        onClick={() => setShowContactModal((prev: boolean) => !prev)}
        className="text-[32px] font-[700]">
        RV
      </button>
      <div className="flex gap-4">
        <a
          data-href="homeSection"
          onClick={handleLinkScroll}
          className="cursor-pointer text-[18px] font-[500]">
          Home
        </a>
        <a
          data-href="aboutSection"
          onClick={handleLinkScroll}
          className="cursor-pointer text-[18px] font-[500]">
          About
        </a>
        <a
          data-href="projectSection"
          onClick={handleLinkScroll}
          className="cursor-pointer text-[18px] font-[500]">
          Projects
        </a>
        <button
          onClick={() => setShowContactModal(true)}
          className="cursor-pointer text-[18px] font-[500]">
          Contact
        </button>
        <div className="flex gap-2 text-[18px] font-[700]">
          <button className="cursor-pointer">FR</button>
          <span>|</span>
          <button className="cursor-pointer">EN</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
