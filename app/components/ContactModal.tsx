"use client";

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext"; // Adjust the path accordingly

const ContactModal: React.FunctionComponent = ({}) => {
  const { showContactModal, setShowContactModal } = useContext(AppContext);

  return (
    <div
      onClick={() => setShowContactModal(false)}
      className={`absolute top-0 left-0 flex flex-center h-full w-screen bg-black text-[128px] transition-all duration-500 ${
        showContactModal === false ? "translate-y-[100%]" : "translate-y-0"
      }`}>
      CONTACT ME
    </div>
  );
};

export default ContactModal;
