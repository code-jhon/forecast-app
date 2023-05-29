import React from 'react';
import '../../styles/Dashboard.scss';
import SideBar from '../SideBar';
import Content from '../Content';

const Dashboard: React.FC = () => {
  return (
    <div className="main-container wallpaper__cloudly">
      <div className="main-container__inner-container main-container__inner-container--first">
        <SideBar />
      </div>
      <div className="main-container__inner-container main-container__inner-container--second">
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
