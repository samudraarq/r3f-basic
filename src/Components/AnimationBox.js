import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/three";

const AnimationBox = () => {
  //   const [active, setActive] = useState(false);
  //   const { clock, camera } = useThree();
  const mesh = useRef();

  //   const { scale } = useSpring({ scale: active ? 1.5 : 1 });
  const { x } = useSpring({
    from: { x: 0 },
    to: [{ x: 2 }, { x: 0 }],
    delay: 1000,
    config: { duration: 1000 },
  });

  //   useFrame(() => {
  //     camera.position.y = Math.sin(clock.elapsedTime);
  //     camera.position.x = Math.cos(clock.elapsedTime);
  //     camera.lookAt(mesh.current.position);
  //   });

  return (
    <animated.mesh position-x={x} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={0xff0000} />
    </animated.mesh>
  );
};

export default AnimationBox;
