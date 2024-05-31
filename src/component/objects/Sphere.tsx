import { useRef, useState } from "react";
import { Mesh } from "three";

const Sphere = (props: JSX.IntrinsicElements["mesh"]) => {
  const ref = useRef<Mesh>(null!);
  const [hovered, setHover] = useState(false);

  return (
    <mesh
      castShadow
      ref={ref}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      {...props}
    >
      <sphereGeometry args={[1, 32, 16]} />
      <meshPhysicalMaterial color={hovered ? 0xcccccc : 0xf5f5f5} />
    </mesh>
  );
};

export default Sphere;
