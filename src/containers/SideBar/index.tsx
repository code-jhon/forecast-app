import React from 'react';
import Search from '../../components/Search';
import '../../styles/SideBar.scss';

const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__inner-component">
        <Search />
      </div>
      <div className="sidebar__inner-component">
        {/* Content for the second inner component */}
      </div>
      <div className="sidebar__inner-component">
        {/* Content for the third inner component */}
      </div>
    </div>
  );
};

export default SideBar;
