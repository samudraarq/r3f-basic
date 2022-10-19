import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <div id="canvas-container">
      <Canvas
        camera={{
          position: [0, 0, 3],
          near: 0.1,
          far: 100,
        }}
      >
        <ambientLight intensity={0.5} color="#ffffff" />
        <pointLight color="#ffffff" intensity={0.5} position={[2, 3, 4]} />
        {/* <directionalLight color="red" position={[0, 0, 5]} /> */}
        {/* <axesHelper /> */}
        <OrbitControls />
        <Main />
      </Canvas>
    </div>
  );
}

export default App;
