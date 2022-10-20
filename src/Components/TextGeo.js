import { Center, Text3D, useTexture } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
// import poppins from "../assets/fonts/Poppins-Regular.ttf";
import poppinsJson from "../assets/fonts/Poppins_Regular.json";
import matcapImg from "../assets/textures/matcaps/8.png";

const TextGeo = () => {
  const matcapTexture = useTexture(matcapImg);
  const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);
  const matcapMaterial = new THREE.MeshMatcapMaterial({
    matcap: matcapTexture,
  });

  return (
    <>
      {/* <Text font={poppins} color="black" anchorX="center" anchorY="middle">
        hello world!
      </Text> */}
      <Center>
        <Text3D
          font={poppinsJson}
          size={0.5}
          height={0.2}
          curveSegments={5}
          bevelEnabled={true}
          bevelThickness={0.03}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={4}
          material={matcapMaterial}
        >
          Hello THREE.js
        </Text3D>
      </Center>
      {[...Array(100).keys()].map((i) => {
        const scale = Math.random();
        return (
          <mesh
            key={i}
            geometry={donutGeometry}
            material={matcapMaterial}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
            ]}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, null]}
            scale={scale}
          />
        );
      })}
    </>
  );
};

export default TextGeo;
