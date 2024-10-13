"use client"
import React from 'react';
import { NavigationList } from './navigationData';

interface NavigationButtonProps {
  label: string;
  link: string;
  icon: string;
  newTab: boolean;
}

const ANGLE_INCREMENT = 360 / NavigationList.length;
const RADIUS = 20;

const calculatePosition = (index: number) => {
  const angleRad = ((index * ANGLE_INCREMENT - 90) * Math.PI) / 180; 
  const x = RADIUS * Math.cos(angleRad);
  const y = RADIUS * Math.sin(angleRad);
  return { x, y };
};

const Navigation: React.FC<NavigationButtonProps> = () => {
  return (
    <div className='w-full fixed h-screen flex items-center justify-center'>
      <div className='relative w-[40vw] h-[40vw]'>
        {NavigationList.map((btn, index) => {
          const { x, y } = calculatePosition(index);
          return (
            <button 
              key={index} 
              className='absolute transform -translate-x-1/2 -translate-y-1/2' 
              style={{
                left: `${50 + x * 2.5}%`,
                top: `${50 + y * 2.5}%`
              }}
            >
              {btn.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;