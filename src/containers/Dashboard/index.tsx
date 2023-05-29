import React from 'react';
import '../../styles/Dashboard.scss';
import SideBar from '../SideBar';

const Dashboard: React.FC = () => {
  return (
    <div className="main-container">
      <div className="main-container__inner-container main-container__inner-container--first">
        <SideBar />
      </div>
      <div className="main-container__inner-container main-container__inner-container--second">
        {/* Content for the second inner container */}
      </div>
    </div>
  );
};

export default Dashboard;
