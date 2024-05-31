const LightController = () => (
  <>
    <directionalLight
      castShadow
      position={[0, 8, 6]}
      intensity={2}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-100}
      shadow-camera-right={100}
      shadow-camera-top={100}
      shadow-camera-bottom={-100}
    />
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
  </>
);

export default LightController;
