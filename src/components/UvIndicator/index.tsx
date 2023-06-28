import React from 'react';
import { UvIndicatorProps } from '../../utils/interfaces';
import '../../styles/UvIndicator.scss';

const UvIndicator: React.FC<UvIndicatorProps> = ({ probability }) => {
  return (
    <div className="other-info">
      <div className="other-info__item">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
          <circle cx="20" cy="50" r="15" fill="red" stroke="white" strokeWidth="1" />
          <circle cx="35" cy="50" r="15" fill="orange" stroke="white" strokeWidth="1" />
          <circle cx="50" cy="50" r="15" fill="#D6B752" stroke="white" strokeWidth="1" />
          <circle cx="65" cy="50" r="15" fill="#E7C86C" stroke="white" strokeWidth="1" />
          <circle cx="80" cy="50" r="15" fill="#F8DD82" stroke="white" strokeWidth="1" />
        </svg>
      </div>
      <div className="other-info__item--uv">
        <span className="other-info__value">{probability}%</span>
      </div>
      <div className="other-info__item--ranges">
        <div className="other-info__details-first">
          <p>Safe</p>
          <ul>
            <li>0.00%-0.9%</li>
            <li>0.9%-11%</li>
          </ul>
        </div>
        <div className="other-info__details-second">
        <p>Dangerous</p>
          <ul>
            <li>12%-38%</li>
            <li>39%-90%</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UvIndicator;
