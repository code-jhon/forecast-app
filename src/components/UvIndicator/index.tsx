import React from 'react';
import { UvIndicatorProps } from '../../utils/interfaces';
import '../../styles/UvIndicator.scss';

const UvIndicator: React.FC<UvIndicatorProps> = ({ probability }) => {
  return (
    <div className="other-info">
      <div className="other-info__item--uv">
        <div className="other-info__label">UV Index</div>
        <span className="other-info__value">{probability}</span>
      </div>
      <div className="other-info__item">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="25" viewBox="0 0 100 25">
          <circle cx="12" cy="12.5" r="6" fill="#2ECC71" stroke="white" strokeWidth="0.5" />
          <circle cx="28" cy="12.5" r="6" fill="#F39C12" stroke="white" strokeWidth="0.5" />
          <circle cx="44" cy="12.5" r="6" fill="#E67E22" stroke="white" strokeWidth="0.5" />
          <circle cx="60" cy="12.5" r="6" fill="#E74C3C" stroke="white" strokeWidth="0.5" />
          <circle cx="76" cy="12.5" r="6" fill="#9B59B6" stroke="white" strokeWidth="0.5" />
          <circle cx="88" cy="12.5" r="5" fill="#8E44AD" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="other-info__item--ranges">
        <div className="other-info__details">
          <p style={{ color: '#2ECC71' }}>Low (0-2)</p>
          <p style={{ color: '#F39C12' }}>Moderate (3-5)</p>
          <p style={{ color: '#E67E22' }}>High (6-7)</p>
        </div>
        <div className="other-info__details">
          <p style={{ color: '#E74C3C' }}>Very High (8-10)</p>
          <p style={{ color: '#9B59B6' }}>Extreme (11+)</p>
        </div>
      </div>
    </div>
  );
};

export default UvIndicator;
