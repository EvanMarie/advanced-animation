import CenterFull from "~/components/buildingBlocks/centerFull";
import Text from "~/components/buildingBlocks/text";
import MovingImage from "./various-new/movingImage";
import FlexFull from "~/components/buildingBlocks/flexFull";

export default function Test() {
  return (
    <FlexFull>
      <MovingImage />
      <Text>This</Text>
    </FlexFull>
  );
}

// ---------------------------------------------------- //
//  3D CUBE
// import { Canvas } from "@react-three/fiber";
// import { motion } from "framer-motion";
// import { OrbitControls } from "@react-three/drei";

// export const Experience = () => {
//   return (
//     <>
//       <OrbitControls />
//       <mesh>
//         <boxGeometry />
//         <meshNormalMaterial />
//       </mesh>
//     </>
//   );
// };

// export default function Test() {
//   return (
//     <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
//       <color attach="background" args={["#222"]} />
//       <Experience />
//     </Canvas>
//   );
// }

// ---------------------------------------------------- //
// HOVER CARD
// import CenterFull from "~/components/buildingBlocks/centerFull";
// import AnimatedCarousel from "./various-new/animatedCarousel";
// import VStackFull from "~/components/buildingBlocks/vStackFull";
// import Heading from "~/components/buildingBlocks/headingText";
// import FlexFull from "~/components/buildingBlocks/flexFull";
// import { useState } from "react";
// import HStackFull from "~/components/buildingBlocks/hStackFull";
// import Slider from "~/components/buildingBlocks/slider";
// import CounterInput from "~/components/buildingBlocks/counterInput";
// import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
// import HStack from "~/components/buildingBlocks/hStack";
// import Checkbox from "~/components/buildingBlocks/checkBox";
// import Wrap from "~/components/buildingBlocks/wrap";
// import Flex from "~/components/buildingBlocks/flex";
// import Text from "~/components/buildingBlocks/text";

// const HoverDiv3D = () => {
//   return (
//     <motion.div
//       className="w-[20vh] h-[20vh] bg-col-400 overflow-hidden"
//       animate={{
//         x: 0,
//         y: 0,
//         //   border:"2px solid #000",
//         boxShadow: "-0rem 0rem 0 #252525",
//         rotate: "0deg",
//       }}
//       whileHover={{
//         x: 5,
//         y: -5,

//         boxShadow: "-0.5rem 0.5rem 0 #fff ",
//         rotate: "0.7deg",
//       }}
//     >
//       <h1>Hey Hover Me</h1>
//       <motion.p
//         animate={{
//           overflow: "hidden",
//           textOverflow: "ellipsis",
//           display: "-webkit-box",
//           WebkitLineClamp: 2,
//           WebkitBoxOrient: "vertical",
//           wordBreak: "break-word",
//         }}
//       >
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ad
//         distinctio voluptatem necessitatibus, non, obcaecati voluptate amet
//         suscipit alias nesciunt nostrum deserunt cum, totam corrupti in
//         cupiditate debitis quas? Excepturi!
//       </motion.p>
//     </motion.div>
//   );
// };

// export default HoverDiv3D;

// const StarButton = () => {
//   const whileHover = {
//     rotateX: 30,
//     rotateY: 30,
//     scale: 1.2,
//     transition: { duration: 0.5 },
//   };

//   const whileTap = {
//     scale: 0.8,
//     rotateX: 0,
//     rotateY: 0,
//     transition: { duration: 0.2 },
//   };

//   return (
//     <CenterFull>
//       <motion.div
//         className="relative w-[5vh] h-[5vh] bg-yellow-400"
//         style={{
//           clipPath:
//             "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
//         }}
//         whileHover={whileHover}
//         whileTap={whileTap}
//       >
//         this
//       </motion.div>
//     </CenterFull>
//   );
// };

// export default StarButton;
