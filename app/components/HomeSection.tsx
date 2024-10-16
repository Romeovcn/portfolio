import React, { useReducer, useRef, useState } from "react";

const HomeSection: React.FunctionComponent = ({}) => {
  const [showFullLogo, setShowFullLogo] = React.useState(false);
  const logo = useRef(null);

  const handleMouseEnter = () => {
    console.log(logo);
    // logo.current.textContent = "ROV";
    setShowFullLogo(true);
  };

  const handleMouseLeave = () => {
    console.log(logo);
    // logo.current.textContent = "ROV";
    setShowFullLogo(true);
  };

  return (
    <div id="homeSection" className="flex flex-center flex-col w-full h-[1080px] overflow-hidden">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex flex-col items-center">
        <span ref={logo} className="uppercase text-[128px] font-[800]">
          Roméo Vincent
        </span>
        <span ref={logo} className="uppercase text-[128px] font-[800]">
          42 School
        </span>
        <span ref={logo} className="uppercase text-[128px] font-[800]">
          Fullstack Dev
        </span>
        <span ref={logo} className="uppercase text-[128px] font-[800]">
          C C++ Python Dev
        </span>
        {/* {showFullLogo && (
          <>
            <span className="text-[128px] font-[800]">O</span>
            <span className="text-[128px] font-[800]">M</span>
            <span className="text-[128px] font-[800]">E</span>
            <span className="text-[128px] font-[800]">O</span>
          </>
        )}
        <span className="text-[128px] font-[800]"> </span>
        <span className="text-[128px] font-[800]">V</span>
        {showFullLogo && (
          <>
            <span className="text-[128px] font-[800]">I</span>
            <span className="text-[128px] font-[800]">N</span>
            <span className="text-[128px] font-[800]">C</span>
            <span className="text-[128px] font-[800]">E</span>
            <span className="text-[128px] font-[800]">N</span>
            <span className="text-[128px] font-[800]">T</span>
          </>
        )} */}
      </div>
      {/* <div className="flex w-full">
        <div className="banner">
          Welcome, Bienvenue, 欢迎, Bienvenido, أهلاً وسهلاً, Willkommen, Benvenuto, Добро,
        </div>
        <div className="banner">
          Welcome, Bienvenue, 欢迎, Bienvenido, أهلاً وسهلاً, Willkommen, Benvenuto, Добро,
        </div>
      </div>

      <div className="flex w-full">
        <div className="banner">
          пожаловать, Bem-vindo, स्वागत है, いらっしゃいませ, 환영합니다, Καλώς ορίσατε,
        </div>
        <div className="banner">
          пожаловать, Bem-vindo, स्वागत है, いらっしゃいませ, 환영합니다, Καλώς ορίσατε,
        </div>
      </div>

      <div className="flex w-full">
        <div className="banner">
          ยินดีต้อนรับ, Hoş geldiniz, Selamat datang, Karibu, Bula, स्वागत,
        </div>
        <div className="banner">
          ยินดีต้อนรับ, Hoş geldiniz, Selamat datang, Karibu, Bula, स्वागत,
        </div>
      </div> */}
    </div>
  );
};

export default HomeSection;
