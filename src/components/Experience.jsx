import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Stage } from "@react-three/drei";
import { Book } from "./Book";
export const Experience = () => {
  return (
    <>
      {/* <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={1}
        speed={2}
        rotationIntensity={2}
      > */}
      <Stage>

        <Book />
      </Stage>
      {/* </Float> */}
      <OrbitControls />
      {/* <Environment preset="sunset"></Environment> */}
      <directionalLight
        position={[2, 10, 10]}
        intensity={0.1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      />
      <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
