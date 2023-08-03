import React from 'react';
import '../../styles/Brand.scss';

// interface for props
interface BrandProps {
  country: string;
}

const Brand: React.FC<BrandProps> = ({ country }) => {
  return (
    <div className="brand">
      <span className="brand__word">{ country } Forecast</span>
    </div>
  );
};

export default Brand;
