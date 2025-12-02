"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Html } from "@react-three/drei";
import { Suspense } from "react";

interface Model3DProps {
  modelPath: string;
}

function Model({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1} />;
}

function Loader() {
  return (
    <Html center>
      <div style={{ color: "#333", fontSize: "14px" }}>Loading model 3D...</div>
    </Html>
  );
}

export default function Model3D({ modelPath }: Model3DProps) {
  return (
    <div
      className="project-model"
      style={{ width: "100%", height: "600px", marginBottom: "var(--mb-2)" }}
    >
      <h2
        className="project-model__title"
        style={{ marginBottom: "var(--mb-1)" }}
      >
        3D Model Viewer
      </h2>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f0f0f0",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Canvas
          camera={{ position: [0, 1.5, -6], fov: 40 }} // Negative Z to look from opposite side
          gl={{ antialias: true }}
        >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[5, 10, 5]} intensity={1.2} />
            <Model modelPath={modelPath} />
            <OrbitControls
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              minDistance={3}
              maxDistance={12}
              target={[0, 1, 0]} // look at the middle of the bottle
            />
            <Environment preset="studio" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
