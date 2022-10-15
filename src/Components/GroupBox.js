const GroupBox = () => {
  return (
    <group position-y={1} scale-y={2} rotation-y={1}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={0xff0000} />
      </mesh>
      <mesh position-x={-2}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={0x00ff00} />
      </mesh>
      <mesh position-x={2}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={0x0000ff} />
      </mesh>
    </group>
  );
};

export default GroupBox;
