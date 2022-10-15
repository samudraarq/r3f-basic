import { Canvas } from "@react-three/fiber";
import "./App.css";
import Main from "./Components/Main";

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 0, 3] }}>
        {/* <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} /> */}
        {/* <axesHelper /> */}
        <Main />
      </Canvas>
    </div>
  );
}

export default App;
