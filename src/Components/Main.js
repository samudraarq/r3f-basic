// import AnimationBox from "./AnimationBox";
// import GroupBox from "./GroupBox";
// import RedBox from "./RedBox";
// import Camera from "./Camera";
// import Geometries from "./Geometries";
// import DebugUI from "./DebugUI";
// import Textures from "./Textures";
import { Suspense } from "react";
import Material from "./Material";

const Main = () => {
  return (
    <>
      {/* <RedBox /> */}
      {/* <GroupBox /> */}
      {/* <AnimationBox /> */}
      {/* <Camera /> */}
      {/* <Geometries /> */}
      {/* <DebugUI /> */}
      {/* <Textures /> */}
      <Suspense fallback={null}>
        <Material />
      </Suspense>
    </>
  );
};

export default Main;
