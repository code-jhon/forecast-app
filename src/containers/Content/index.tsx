import React, { useContext } from 'react';
import '../../styles/Content.scss';
import Brand from '../../components/Brand';
import { WeatherContext } from '../../services/Context/WeatherContext';

const Content: React.FC = () => {
  const { location } = useContext(WeatherContext);
  return (
  <div className="content">
    <div className="content__inner-component">
      <Brand country={location}/>
    </div>
  </div>
  );
};

export default Content;