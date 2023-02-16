import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex gap-7 p-5 bg-app rounded-b-xl w-full">
      <h1>Gradus</h1>
      <input className="flex-auto" />
      <button>Recent locations</button>
    </div>
  );
};

export default Header;
