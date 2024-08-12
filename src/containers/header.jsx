import React from 'react';

const Header = () => {
  return (
    <header className="bg-rose-300  text-black py-4 shadow-md">
      <div className="container mx-auto flex justify-center items-center">
        <h1 className="text-2xl font-bold text-center">
          <img className="inline w-10" src="/icons8-troll-face-doodle-96.ico" alt="" />
          Emoji Search <img className="inline w-10" src="/icons8-troll-face-doodle-96.ico" alt="" />
        </h1>
      </div>
    </header>
  );
};

export default Header;
