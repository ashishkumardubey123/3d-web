import React from "react";
import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

function App() {
  return (
    <div className="w-full h-screen bg-slate-900 font-['Helvetica_Now_Display'] " >
      <div className="navbar line flex pt-10 pb-3  gap-10 absolute top-0 left-1/2 -translate-x-1/2 ">
      {["iPhone", "iPad","IOS",  "Services" ,"mac", "Product","iPhone", "iPad","IOS",  "Services" ,"mac", "Product" ].map(e=><a href="" className="text-white font-[400] text-md capitalize">{e}</a>)}
      </div>


      <div className="absolute flex flex-col items-center text-white top-32 left-1/2 -translate-x-1/2 "> 

       <h3 className=" masked text-7xl  tracking-tighter font-[700]">Macbook Pro. </h3>

       <h5>oh so pro !</h5>

       <p className="text-center w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore dolorem possimus modi.</p>

      </div>
      <Canvas camera={{ fov: 13, position: [0, -8, 220] }}>
        {/* <OrbitControls/> */}
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/studio_small_09_1k.hdr",
          ]}
        />

        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
