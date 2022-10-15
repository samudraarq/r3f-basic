import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

const RedBox = () => {
  const mesh = useRef();
  const { camera } = useThree();

  useEffect(() => {
    if (camera && mesh) {
      camera.lookAt(mesh.current.position);
    }
  }, [camera, mesh]);

  //   useEffect(() => {
  //       if (mesh) {
  //         mesh.current.rotation.reorder("YXZ");
  //         mesh.current.rotation.x = Math.PI * 0.25;
  //         mesh.current.rotation.y = Math.PI * 0.25;
  //     }
  //   }, []);

  return (
    <mesh
      position={[0.7, -0.6, 1]}
      scale={[2, 0.5, 0.5]}
      rotation={[Math.PI * 0.25, Math.PI * 0.25, 0]}
      ref={mesh}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={0xff0000} />
    </mesh>
  );
};

export default RedBox;
