import { Canvas } from "@react-three/fiber";
import { SoftShadows } from "@react-three/drei";
import LightController from "@/component/objects/LightController";
import Cake from "@/component/objects/Cake";
import Floor from "@/component/objects/Floor";

const FLOOR_POSITION = [0, 0, 0] as const;

const Canvas3D = () => {
  return (
    <Canvas shadows camera={{ position: [15, 15, -10], fov: 7 }} dpr={[1, 2]}>
      <SoftShadows size={1} />
      <LightController />
      <Cake position={FLOOR_POSITION} />
      <Floor position={FLOOR_POSITION} />
    </Canvas>
  );
};

export default Canvas3D;
