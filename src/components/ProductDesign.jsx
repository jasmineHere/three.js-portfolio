import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import React from "react";
import Chair from "./Chair";
import Mac from "./Mac";

const ProductDesign = () => {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.5}> 
        <Mac />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ProductDesign;
