import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useCubeTexture, useTexture } from "@react-three/drei";
import { useControls } from "leva";

// import doorColorImg from "../assets/textures/door/color.jpg";
// import doorAlphaImg from "../assets/textures/door/alpha.jpg";
// import doorAmbientOcclusionImg from "../assets/textures/door/ambientOcclusion.jpg";
// import doorHeightImg from "../assets/textures/door/height.jpg";
// import doorMetalnessImg from "../assets/textures/door/metalness.jpg";
// import doorNormalImg from "../assets/textures/door/normal.jpg";
// import doorRoughnessImg from "../assets/textures/door/roughness.jpg";
// import matcapImg from "../assets/textures/matcaps/8.png";
// import gradientImg from "../assets/textures/gradients/3.jpg";
// import envMapPx from "../assets/textures/environmentMaps/0/px.jpg";
// import envMapNx from "../assets/textures/environmentMaps/0/nx.jpg";
// import envMapPy from "../assets/textures/environmentMaps/0/py.jpg";
// import envMapNy from "../assets/textures/environmentMaps/0/ny.jpg";
// import envMapPz from "../assets/textures/environmentMaps/0/pz.jpg";
// import envMapNz from "../assets/textures/environmentMaps/0/nz.jpg";

const Material = () => {
  const { clock } = useThree();
  const sphere = useRef();
  const plane = useRef();
  const torus = useRef();

  useFrame(() => {
    sphere.current.rotation.y = 0.1 * clock.elapsedTime;
    plane.current.rotation.y = 0.1 * clock.elapsedTime;
    torus.current.rotation.y = 0.1 * clock.elapsedTime;

    sphere.current.rotation.x = 0.15 * clock.elapsedTime;
    plane.current.rotation.x = 0.15 * clock.elapsedTime;
    torus.current.rotation.x = 0.15 * clock.elapsedTime;
  });

  const { metalness, roughness, aoMapIntensity, displacementScale } =
    useControls({
      metalness: { value: 0.7, min: 0, max: 1, step: 0.01 },
      roughness: { value: 0.2, min: 0, max: 1, step: 0.01 },
      aoMapIntensity: { value: 1, min: 0, max: 10, step: 0.01 },
      displacementScale: { value: 0.05, min: 0, max: 1, step: 0.01 },
    });

  // const [
  //   doorColorTexture,
  //   doorAlphaTexture,
  //   doorAmbientOcclusionTexture,
  //   doorHeightTexture,
  //   doorMetalnessTexture,
  //   doorRoughnessTexture,
  //   doorNormalTexture,
  //   matcapTexture,
  //   gradientTexture,
  // ] = useTexture([
  //   doorColorImg,
  //   doorAlphaImg,
  //   doorAmbientOcclusionImg,
  //   doorHeightImg,
  //   doorMetalnessImg,
  //   doorRoughnessImg,
  //   doorNormalImg,
  //   matcapImg,
  //   gradientImg,
  // ]);

  const [doorColorTexture] = useTexture(["textures/door/color.jpg"]);

  const envMap = useCubeTexture(
    ["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"],
    { path: "textures/environmentMaps/1/" }
  );

  //   const material = new THREE.MeshBasicMaterial();
  //   material.map = doorColorTexture;
  //   material.color = new THREE.Color("red");
  //   material.wireframe = true;
  //   material.transparent = true;
  //   material.opacity = 0.5;
  //   material.alphaMap = doorAlphaTexture;
  //   material.side = THREE.DoubleSide;

  //   const material = new THREE.MeshNormalMaterial();
  //   material.flatShading = true;

  //   const material = new THREE.MeshMatcapMaterial();
  //   material.matcap = matcapTexture;

  // const material = new THREE.MeshDepthMaterial();

  // const material = new THREE.MeshLambertMaterial();

  // const material = new THREE.MeshPhongMaterial();
  // material.shininess = 1000;
  // material.specular = new THREE.Color(0x1188ff);

  // const material = new THREE.MeshToonMaterial();
  // material.gradientMap = gradientTexture;
  // gradientTexture.minFilter = THREE.NearestFilter;
  // gradientTexture.magFilter = THREE.NearestFilter;
  // gradientTexture.generateMipmaps = false;

  useEffect(() => {
    if (sphere && plane && torus) {
      sphere.current.geometry.setAttribute(
        "uv2",
        new THREE.BufferAttribute(
          sphere.current.geometry.attributes.uv.array,
          2
        )
      );
      plane.current.geometry.setAttribute(
        "uv2",
        new THREE.BufferAttribute(plane.current.geometry.attributes.uv.array, 2)
      );
      torus.current.geometry.setAttribute(
        "uv2",
        new THREE.BufferAttribute(torus.current.geometry.attributes.uv.array, 2)
      );
    }
  }, [sphere, plane, torus]);

  const material = new THREE.MeshStandardMaterial();
  material.metalness = metalness;
  material.roughness = roughness;
  material.envMap = envMap;
  // material.map = doorColorTexture;
  // material.aoMap = doorAmbientOcclusionTexture;
  // material.aoMapIntensity = aoMapIntensity;
  // material.displacementMap = doorHeightTexture;
  // material.displacementScale = displacementScale;
  // material.metalnessMap = doorMetalnessTexture;
  // material.roughnessMap = doorRoughnessTexture;
  // material.normalMap = doorNormalTexture;
  // material.normalScale.set(0.5, 0.5);
  // material.alphaMap = doorAlphaTexture;
  // material.transparent = true;

  return (
    <>
      <mesh material={material} position-x={-1.5} ref={sphere}>
        <sphereGeometry args={[0.5, 64, 64]} />
      </mesh>
      <mesh material={material} ref={plane}>
        <planeGeometry args={[1, 1, 100, 100]} />
      </mesh>
      <mesh material={material} position-x={1.5} ref={torus}>
        <torusGeometry args={[0.3, 0.2, 64, 128]} />
      </mesh>
    </>
  );
};

export default Material;
