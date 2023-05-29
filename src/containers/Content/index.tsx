import React from 'react';
import '../../styles/Content.scss';
import Brand from '../../components/Brand';

const Content: React.FC = () => {
  return (
  <div className="content">
    <div className="content__inner-component">
      <Brand />
    </div>
  </div>
  );
};

export default Content;