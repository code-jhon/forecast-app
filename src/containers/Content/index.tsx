import React, { useContext } from 'react';
import '../../styles/Content.scss';
import Brand from '../../components/Brand';
import { WeatherContext } from '../../services/Context/WeatherContext';

const Content: React.FC = () => {
  const weatherContext = useContext(WeatherContext);
  const location = weatherContext?.location || 'London';

  return (
    <div className="content">
      <div className="content__inner-component">
        <Brand country={location} />
      </div>
    </div>
  );
};

export default Content;