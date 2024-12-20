import React, { useRef } from 'react';

import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

/**
 * Wizard model that displays in the home screen
 */

export default function WizardModel(props) {
  const { nodes } = useGLTF('/models/wizard-model.glb');

  const modelRef = useRef();

  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.15;
  });
  return (
    <group {...props} position={[0, 0, 0]} ref={modelRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

useGLTF.preload('/models/wizard-model.glb');
