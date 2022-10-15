import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Main from "./Components/Main";

function App() {
  return (
    <div id="canvas-container">
      <Canvas
        camera={{
          position: [0, 0, 2],
          near: 0.1,
          far: 100,
        }}
      >
        {/* <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} /> */}
        {/* <axesHelper /> */}
        <OrbitControls maxPolarAngle={Math.PI / 2} />
        <Main />
      </Canvas>
    </div>
  );
}

export default App;
