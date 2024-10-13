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
const RADIUS = 20; // Use a numeric value for easier calculations

const calculatePosition = (index: number) => {
  const angleRad = ((index * ANGLE_INCREMENT - 90) * Math.PI) / 180; // Subtract 90 degrees to start from the top
  const x = RADIUS * Math.cos(angleRad);
  const y = RADIUS * Math.sin(angleRad);
  return { x, y };
};

const Navigation: React.FC<NavigationButtonProps> = () => {
  return (
    <div className='w-full fixed h-screen flex items-center justify-center'>
      <div className='relative w-[40vw] h-[40vw]'> {/* Set a fixed size for the container */}
        {NavigationList.map((btn, index) => {
          const { x, y } = calculatePosition(index);
          return (
            <button 
              key={index} 
              className='absolute transform -translate-x-1/2 -translate-y-1/2' // Center the button on its position
              style={{
                left: `${50 + x * 2.5}%`, // Adjust the multiplier to control the spread
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