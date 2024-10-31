'use client';
import React from 'react';

import NavigationButton from './NavigationButton';
import { NavigationList } from './navigationData';

const ANGLE_INCREMENT = 360 / NavigationList.length;
const RADIUS = 250;

const calculatePosition = (index: number) => {
  const angleRad = ((index * ANGLE_INCREMENT - 90) * Math.PI) / 180;
  const x = RADIUS * Math.cos(angleRad);
  const y = RADIUS * Math.sin(angleRad);
  return { x, y };
};

/**
 * Component for rendering navigation buttons
 */

const Navigation: React.FC = () => {
  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <div className="w-max flex items-center justify-normal relative hover:pause animate-spin-slow group">
        {NavigationList.map((btn, index) => {
          const { x, y } = calculatePosition(index);
          return (
            <NavigationButton
              key={index}
              x={x}
              y={y}
              label={btn.label}
              link={btn.link}
              icon={btn.icon}
              newTab={btn.newTab}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;
