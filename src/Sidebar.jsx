import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="filter">Filter</div>
      <div className="sidebarelements">
        <button className="sidebarbutton">What</button>
      </div>
      <div className="sidebarelements">
        <button className="sidebarbutton">Where</button>
      </div>
      <div className="sidebarelements">
        <button className="sidebarbutton">When</button>
      </div>
      <div className="sidebarelements">
        <button className="sidebarbutton">Graph</button>
      </div>
    </div>
  );
};

export default Sidebar;
