import { useFrame } from "@react-three/fiber";
import React from "react";
import { useRef } from "react";

const Camera = () => {
  // const { clock } = useThree();
  const mesh = useRef();

  useFrame(() => {
    // mesh.current.rotation.y = clock.elapsedTime;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={0xff0000} />
    </mesh>
  );
};

export default Camera;
