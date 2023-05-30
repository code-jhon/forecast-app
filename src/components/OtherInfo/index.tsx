import React from 'react';
import { OtherInfoProps } from '../../utils/interfaces';
import '../../styles/OtherInfo.scss';

const OtherInfo: React.FC<OtherInfoProps> = ({ probability }) => {
  return (
    <div className="other-info">
      <span className="other-info__value">{probability}%</span>
      <span className="other-info__label">Drop Probability</span>
      <div className="other-info__details">
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

export default OtherInfo;
