import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Stage } from "@react-three/drei";
import { Book } from "./Book";
export const Experience = () => {
  return (
    <>
      <Float
        rotation-x={-Math.PI / 8}
        floatIntensity={0.3}
        speed={1.5}
        rotationIntensity={1}
      >
        <Book />
      </Float>
      <OrbitControls />
      <Environment intensity={0.2} preset="warehouse"></Environment>
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
