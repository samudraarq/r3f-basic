// import { useTexture } from "@react-three/drei";
import React from "react";
// import colorImg from "../assets/textures/door/Door_Wood_001_basecolor.jpg";
// import alphaImg from "../assets/textures/door/Door_Wood_001_opacity.jpg";
// import heightImg from "../assets/textures/door/Door_Wood_001_height.png";
// import { RepeatWrapping } from "three";

const Textures = () => {
  //   const { active, progress, errors, item, loaded, total } = useProgress();
  //   console.log("active", active);
  //   console.log("progress", progress);
  //   console.log("errors", errors);
  //   console.log("item", item);
  //   console.log("loaded", loaded);
  //   console.log("total", total);

  // const [colorTexture] = useTexture(
  //   [colorImg, alphaImg, heightImg]
  // ([colorTexture]) => {
  //   colorTexture.repeat.x = 2;
  //   colorTexture.repeat.y = 3;
  //   colorTexture.wrapS = RepeatWrapping;
  //   colorTexture.wrapT = RepeatWrapping;
  //   colorTexture.rotation = Math.PI * 0.25;
  //   colorTexture.center.x = 0.5;
  //   colorTexture.center.y = 0.5;
  // }
  // );

  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      {/* <meshBasicMaterial map={colorTexture} /> */}
    </mesh>
  );
};

export default Textures;
