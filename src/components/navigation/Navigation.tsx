"use client"
import React from 'react';
import { NavigationList } from './navigationData';
import NavigationButton from './NavigationButton';

const ANGLE_INCREMENT = 360 / NavigationList.length;
const RADIUS = 20;

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
    <div className='w-full fixed h-screen flex items-center justify-center'>
      <div className='relative w-[80vw] h-[80vw] max-w-[500px] max-h-[500px]'>
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