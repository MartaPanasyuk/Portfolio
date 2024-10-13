"use client"
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { Suspense, ReactNode } from "react";

interface RenderModelProps {
  children: ReactNode;
  className?: string;
}

/**
 * Component for rendering 3D models within a Canvas
 */
const RenderModel: React.FC<RenderModelProps> = ({ children, className }) => {
  return (
    <Canvas className={clsx('w-screen h-screen -z-10 relative', className)}>
      <Suspense fallback={null}>
        {children}
      </Suspense>
      <Environment preset="forest" />
    </Canvas>
  );
};

export default RenderModel;