import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

const Cake = (props: JSX.IntrinsicElements["mesh"]) => {
  const gltf = useGLTF("/cake.glb");
  const ref = useRef<Mesh>(null!);

  useFrame(() => {
    ref.current.rotation.y += 0.001;
  });

  return (
    <primitive
      ref={ref}
      castShadow
      receiveShadow
      object={gltf.scene}
      scale={3}
      {...props}
    />
  );
};

export default Cake;
