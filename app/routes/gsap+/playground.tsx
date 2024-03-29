import CenterFull from "~/components/buildingBlocks/centerFull";
import CenterHorizontalFull from "~/components/buildingBlocks/centerHorizontalFull";
import TransitionFullScreen from "~/components/buildingBlocks/transitionFullScreen";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import PathDrawingComponent from "./components/gsapOne";
import GSAPOne from "./components/gsapOne";
import GSAPTwo from "./components/gsapTwo";

export default function GSAPPlayground() {
  return (
    <TransitionFullScreen className="overflow-y-auto">
      <VStackFull className="h-fit">
        <CenterFull className="h-screen">
          <GSAPTwo />
        </CenterFull>
        {/* <CenterFull className="h-screen">This</CenterFull> */}
      </VStackFull>
    </TransitionFullScreen>
  );
}
