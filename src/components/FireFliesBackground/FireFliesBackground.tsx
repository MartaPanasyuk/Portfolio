'use client';
import React, { useEffect, useState } from 'react';

const createFireFly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

export interface FireFlies {
  id: number;
  top: string;
  left: string;
  animationDuration: string;
}

const FireFliesBackground = () => {
  const [fireFlies, setFireFlies] = useState([] as FireFlies[]);

  useEffect(() => {
    const addNewFireFlies = () => {
      const newFireFlly = createFireFly();
      setFireFlies((currentFireFlies) => [...currentFireFlies.slice(-14), newFireFlly]);
    };

    const interval = setInterval(addNewFireFlies, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed h-full w-full top-0 left-0 z-0 overflow-hidden">
      {fireFlies.map((firefly) => {
        return (
          <div
            key={firefly.id}
            className="absolute rounded-full w-[10px] h-[10px] bg-firefly-radial"
            style={{
              top: firefly.top,
              left: firefly.left,
              animation: `move ${firefly.animationDuration} infinite alternate`,
            }}></div>
        );
      })}
    </div>
  );
};

export default FireFliesBackground;
