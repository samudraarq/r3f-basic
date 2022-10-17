import { button, useControls } from "leva";
import React from "react";

const DebugUI = () => {
  const [{ positionY, visible, wireframe, boxColor }, set] = useControls(
    "cube",
    () => ({
      positionY: { value: 0, min: -3, max: 3, step: 0.01 },
      visible: true,
      wireframe: false,
      boxColor: { value: "#ff0000", label: "color" },
      reset: button(() => {
        set({
          positionY: 0,
          visible: true,
          wireframe: false,
          boxColor: "#ff0000",
        });
      }),
    })
  );
  return (
    <mesh position-y={positionY} visible={visible}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={boxColor} wireframe={wireframe} />
    </mesh>
  );
};

export default DebugUI;
