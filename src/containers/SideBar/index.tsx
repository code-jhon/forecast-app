import React from 'react';
import Search from '../../components/Search';
import '../../styles/SideBar.scss';
import Temperature from '../../components/Temperature';

const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__inner-component">
        <Search />
      </div>
      <div className="sidebar__inner-component">
        <Temperature
          temperature={2}
          humidity={2}
          windSpeed={2}
         />
      </div>
      <div className="sidebar__inner-component">
        {/* Content for the third inner component */}
      </div>
    </div>
  );
};

export default SideBar;
