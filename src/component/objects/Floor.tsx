const Floor = (props: JSX.IntrinsicElements["mesh"]) => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow {...props}>
    <planeGeometry attach="geometry" args={[100, 100]} />
    <shadowMaterial attach="material" opacity={0.3} />
  </mesh>
);

export default Floor;
