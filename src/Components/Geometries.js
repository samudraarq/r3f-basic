import React, { useRef } from "react";

const Geometries = () => {
  const mesh = useRef();

  const count = 50;
  const positionsArray = new Float32Array(count * 3 * 3);
  for (let i = 0; i < count * 3 * 3; i++) {
    positionsArray[i] = (Math.random() - 0.5) * 4;
  }

  console.log(mesh);

  return (
    <mesh ref={mesh}>
      {/* <boxGeometry args={[1, 1, 1, 2, 2, 2]} /> */}
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positionsArray}
          itemSize={3}
          count={count}
        />
      </bufferGeometry>
      <meshBasicMaterial color={0xff0000} wireframe />
    </mesh>
  );
};

export default Geometries;
