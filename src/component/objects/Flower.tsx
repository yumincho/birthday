import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

const Flower = (props: JSX.IntrinsicElements["group"]) => {
  const groupRef = useRef(null!);
  const { nodes, materials } = useGLTF("/flower.glb");

  const colorMap = [
    0x7b8a41, 0xe8e6da, 0xe2ca50, 0x7b8a41, 0x142704, 0xe2ca50, 0xe8e6da,
  ];

  console.log(nodes);
  return (
    <group ref={groupRef} castShadow {...props}>
      {colorMap.map((color, i) => (
        <mesh
          key={i}
          scale={0.1}
          rotation={[0.2, 0, -0.2]}
          castShadow
          receiveShadow
          geometry={(nodes[`Circle003_${i + 1}`] as Mesh).geometry}
          material={materials["Circle.003"]}
        >
          <meshPhysicalMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
};

export default Flower;
