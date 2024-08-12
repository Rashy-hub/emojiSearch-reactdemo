import React from 'react';

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <header className="bg-rose-300  text-black py-4 shadow-md fixed top-0 left-0 w-full backdrop-blur-md bg-opacity-50 z-50">
      <div className="container mx-auto flex justify-center items-center">
        <h1
          className="text-2xl font-bold text-center cur cursor-pointer flex items-center"
          onClick={scrollToTop}>
          <img className="inline w-10" src="/icons8-troll-face-doodle-96.ico" alt="" />
          Emoji Search <img className="inline w-10" src="/icons8-troll-face-doodle-96.ico" alt="" />
        </h1>
      </div>
    </header>
  );
};

export default Header;
