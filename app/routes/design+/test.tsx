import CenterFull from "~/components/buildingBlocks/centerFull";
import NewestHorizontalParallax from "./various-new/newestHorizontalParallax";
import FlexFull from "~/components/buildingBlocks/flexFull";
import VStackFull from "~/components/buildingBlocks/vStackFull";
import AnimationExample from "../gsap+/components/animationExample";
import ComponentExample from "../css+/components/componentExample";
import { Reanimate } from "../svg+/components/reanimate";
import {
  ExampleEight,
  ExampleEleven,
  ExampleFifteen,
  ExampleFive,
  ExampleFour,
  ExampleFourteen,
  ExampleNine,
  ExampleOne,
  ExampleSeven,
  ExampleSix,
  ExampleSixteen,
  ExampleTen,
  ExampleThirteen,
  ExampleThree,
  ExampleTwelve,
  ExampleTwo,
} from "./components/framerMotionExamples";
import VStack from "~/components/buildingBlocks/vStack";
import Heading from "~/components/buildingBlocks/headingText";
import { FramerReanimate } from "./components/framerReanimate";
import Wrap from "~/components/buildingBlocks/wrap";
import { InteractiveKeyFrames } from "./components/interactiveKeyframes";
import Text from "~/components/buildingBlocks/text";
import {
  BulletListItem,
  HeadingText,
  NestedBulletListItem,
} from "./components/infoComponents";

export default function Test() {
  return (
    <FlexFull className="h-screen overflow-y-auto overflow-x-hidden">
      <VStackFull>
        <Wrap className="w-full h-fit justify-evenly p-[1.5vh] gap-[1.5vh] ">
          {/* animation  */}
          <FramerReanimate
            title="animation"
            code={`<motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="w-[15vh] h-[15vh] bg-col-200 shadowBroadTight rounded-[2vh]"
            />`}
          >
            <ExampleOne />
          </FramerReanimate>
          {/* variants  */}
          <FramerReanimate
            title="variants"
            code={`const container = {
            hidden: { opacity: 1, scale: 0 },
            visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
            },
          };
        
          const item = {
            hidden: { y: 20, opacity: 0 },
            visible: {
        y: 0,
        opacity: 1,
            },
          };
        
          return (
            <motion.ul
        className="w-97% h-97% grid list-none grid-cols-2 grid-rows-2 gap-[2vh] p-[2vh] border-200-md insetShadowXl"
        variants={container}
        initial="hidden"
        animate="visible"
            >
        {[0, 1, 2, 3].map((index) => (
          <motion.li
            key={index}
            className=" bg-col-300 rounded-full shadowBroadTight"
            variants={item}
          />
        ))}
            </motion.ul>`}
            infoTitle="variants"
            info={
              <VStackFull align="items-start">
                <BulletListItem>
                  Variants in Framer Motion are predefined sets of style
                  properties and animations that can be applied to motion
                  components. They provide a way to organize and reuse animation
                  definitions, making it easier to manage complex animations and
                  transitions.
                </BulletListItem>
                <HeadingText heading="Variants in this example" />
                <BulletListItem>
                  In this component, two variants are defined: container and
                  item.
                </BulletListItem>
                <BulletListItem highlighted="container Variant: ">
                  This variant is applied to the motion.ul element. It defines
                  two states:
                </BulletListItem>
                <NestedBulletListItem highlighted=" hidden: ">
                  Sets the opacity to 1 and scale to 0, effectively making the
                  container invisible initially (though fully opaque).
                </NestedBulletListItem>
                <NestedBulletListItem highlighted="visible: ">
                  Changes the scale to 1, making the container fully visible. It
                  also includes transition properties like delayChildren, which
                  delays the animation of child components, and staggerChildren,
                  which staggers the animations of child components in sequence.
                </NestedBulletListItem>
                <BulletListItem highlighted="item Variant:">
                  Applied to each motion.li element, representing individual
                  items within the container. It also has two states:
                </BulletListItem>
                <NestedBulletListItem highlighted="hidden: ">
                  Positions the item 20 pixels down (y: 20) and sets its opacity
                  to 0, making it invisible at the start.
                </NestedBulletListItem>
                <NestedBulletListItem highlighted="visible: ">
                  Moves the item to its original position (y: 0) and fades it in
                  to full opacity (opacity: 1).
                </NestedBulletListItem>
                <HeadingText heading="How Variants Work in Framer Motion" />
                <BulletListItem highlighted="State Management: ">
                  Variants represent different states of a component (like
                  hidden and visible) and the style or animation properties
                  associated with those states.{" "}
                </BulletListItem>
                <BulletListItem highlighted="Animation Control: ">
                  When the animate prop of a motion component is set to a
                  variant name (e.g., visible), Framer Motion automatically
                  applies the defined properties and transitions to the
                  component.{" "}
                </BulletListItem>
                <BulletListItem highlighted=" Hierarchy and Inheritance: ">
                  Variants allow for hierarchical animation control. In this
                  example, the container variant controls the overall container
                  animation and its relation to the child components (item
                  variants), allowing for coordinated animations like staggered
                  effects.{" "}
                </BulletListItem>
                <BulletListItem highlighted=" Reusability: ">
                  Variants can be reused across different components or
                  instances, promoting consistency and reducing redundancy in
                  animation code.
                </BulletListItem>
                <HeadingText heading="Benefits of Using Variants" />
                <BulletListItem highlighted="Simplification: ">
                  They simplify the animation code by abstracting the animation
                  definitions away from the component, making the component code
                  cleaner and more readable.
                </BulletListItem>
                <BulletListItem highlighted="Consistency: ">
                  By defining animations in one place and reusing them across
                  components, variants help ensure consistent animations
                  throughout the application.
                </BulletListItem>
                <BulletListItem
                  highlighted="Complex Animation
                  Sequences: "
                >
                  Variants, especially when combined with transition properties
                  like staggerChildren, make it easier to create complex
                  animation sequences and orchestrate the timing between parent
                  and child components.
                </BulletListItem>
                <HeadingText heading="Summary" />
                <BulletListItem>
                  In this example, variants are effectively used to manage the
                  animations of the list container and its items, demonstrating
                  how variants can be used to create complex, coordinated
                  animations in a concise and manageable way.
                </BulletListItem>
              </VStackFull>
            }
          >
            {" "}
            <ExampleTwo />
          </FramerReanimate>
          {/* gestures  */}
          <FramerReanimate
            title="gestures"
            showReanimate={false}
            code={`<motion.div
        className="bg-100-radial3op50 h-[23vh] w-[23vh] rounded-[2vh] shadowBroadTight"
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
            />`}
            infoTitle="gestures"
            info={
              <VStackFull align="items-start">
                <BulletListItem>
                  In Framer Motion, gestures are interactions that can trigger
                  animations or actions on UI elements, such as hovering,
                  tapping, panning, and more. These interactions allow for more
                  engaging and dynamic user experiences.
                </BulletListItem>
                <HeadingText heading="Gestures in this component" />
                <BulletListItem>
                  In this example, two gesture-related props are used:
                  whileHover and whileTap. Here's how they function:
                </BulletListItem>
                <BulletListItem highlighted="whileHover: ">
                  This prop defines the animation that should occur when the
                  user hovers over the element. In this case, the element scales
                  up to 1.2 times its original size and rotates 90 degrees.{" "}
                </BulletListItem>
                <BulletListItem highlighted="whileTap: ">
                  This prop specifies the animation that should occur when the
                  element is tapped or clicked. The element scales down to 0.8
                  times its original size, rotates -90 degrees, and its border
                  radius changes to "100%", making it fully rounded (circle).
                </BulletListItem>
                <HeadingText heading="How Gestures Work in Framer Motion" />
                <BulletListItem highlighted="Direct Interaction: ">
                  Gestures allow users to interact directly with elements in the
                  UI, triggering animations or actions in response to those
                  interactions.
                </BulletListItem>
                <BulletListItem highlighted="Dynamic Response: ">
                  The component responds dynamically to user interactions. For
                  instance, when the user hovers over or taps the element, the
                  specified animations are triggered immediately.
                </BulletListItem>
                <BulletListItem highlighted="Styling Changes: ">
                  In addition to triggering animations, gestures can be used to
                  apply immediate styling changes, such as color changes,
                  opacity, or other CSS properties.
                </BulletListItem>
                <HeadingText heading="Implementation in this example" />
                <BulletListItem>
                  The motion.div element is enhanced with gesture capabilities
                  using whileHover and whileTap props, allowing it to react to
                  hover and tap events with specific animations.
                </BulletListItem>
                <BulletListItem>
                  The animations are declaratively defined in the props, making
                  the component concise and easy to understand.
                </BulletListItem>
                <BulletListItem>
                  Framer Motion under the hood handles the complexity of adding
                  event listeners and managing the lifecycle of these
                  interactions.
                </BulletListItem>
                <HeadingText heading="General aspects of gestures" />
                <BulletListItem highlighted="Ease of Use: ">
                  Framer Motion's API for gestures is designed to be intuitive,
                  allowing developers to easily add interactive animations to
                  their components.
                </BulletListItem>

                <BulletListItem highlighted="Integration with React: ">
                  Gesture animations in Framer Motion integrate seamlessly with
                  React, maintaining the component's reactivity and
                  statefulness.
                </BulletListItem>
                <BulletListItem highlighted="Performance: ">
                  Framer Motion optimizes gesture animations for performance,
                  ensuring smooth and responsive interactions even with complex
                  animations.
                </BulletListItem>
                <HeadingText heading="Summary" />
                <BulletListItem>
                  This component demonstrates the use of hover and tap gestures
                  to create interactive animations in Framer Motion. These
                  gestures enhance the user experience by providing immediate
                  visual feedback in response to user interactions, making the
                  UI more dynamic and engaging.
                </BulletListItem>
              </VStackFull>
            }
          >
            <ExampleThree />
          </FramerReanimate>
          {/* drag  */}
          <FramerReanimate
            title="drag"
            showReanimate={false}
            code={`const constraintsRef = useRef(null);
            <motion.div
        ref={constraintsRef}
        className="w-95% h-95% flex justify-center items-center overflow-hidden bg-col-990 insetShadowXl rounded-[2vh] border-990-md"
            >
        <motion.div
          className="w-[8vh] h-[8vh] bg-100-linear2op75 border-300-sm shadowBroadTight rounded-[2vh]"
          drag
          dragConstraints={constraintsRef}
        />
            </motion.div>`}
            infoTitle="drag"
            info={
              <VStackFull align="items-start">
                <BulletListItem>
                  In Framer Motion, the drag functionality allows elements to be
                  moved around within the viewport or within specified
                  constraints, providing an interactive and dynamic user
                  experience. This functionality can be easily added to motion
                  components to make them draggable.
                </BulletListItem>
                <HeadingText
                  heading="Drag as used in this component
                "
                />
                <BulletListItem>
                  In this example, the drag prop is used to make a motion.div
                  draggable. Here’s how it works:
                </BulletListItem>
                <BulletListItem highlighted="Draggable Element: ">
                  The inner motion.div is made draggable by adding the drag
                  prop. This allows the user to click and drag this element
                  across the screen.
                </BulletListItem>
                <BulletListItem highlighted="Constraints: ">
                  The dragConstraints prop limits the draggable area to the
                  boundaries of another element. In this case, the outer
                  motion.div acts as the boundary. The ref= constraintsRef is
                  used to reference this outer motion.div, and
                  dragConstraints=constraintsRef applies these constraints to
                  the inner motion.div.
                </BulletListItem>
                <HeadingText
                  heading="How Drag Works in Framer Motion
                "
                />
                <BulletListItem highlighted="Enabling Drag: ">
                  By setting the drag prop on a motion component, it becomes
                  interactive and can be moved by user input.
                </BulletListItem>
                <BulletListItem highlighted="Constraint Boundaries: ">
                  The dragConstraints prop defines the area within which the
                  element can be dragged. This prevents the element from being
                  moved outside a specified area, which can be particularly
                  useful for creating bounded draggable interfaces.
                </BulletListItem>
                <BulletListItem highlighted="Reference to Constraints: ">
                  useRef(null) is used to create a reference (constraintsRef) to
                  the outer motion.div. This reference is then used in
                  dragConstraints to establish the draggable area for the inner
                  motion.div.
                </BulletListItem>
                <HeadingText heading="Additional Drag-related Features in Framer Motion" />
                <BulletListItem highlighted="Axis-specific Drag: ">
                  You can restrict dragging to a single axis (horizontal or
                  vertical) by setting the drag prop to "x" or "y".
                </BulletListItem>
                <BulletListItem highlighted="Drag Elasticity and Inertia: ">
                  Customize the drag experience by adjusting properties like
                  dragElastic (how much the element can stretch past its
                  constraints) and dragMomentum (whether the element should
                  continue moving after being released based on the user's drag
                  speed).
                </BulletListItem>
                <BulletListItem highlighted="Event Handlers: ">
                  Framer Motion provides event handlers like onDragStart,
                  onDragEnd, and onDrag that allow you to execute custom
                  functions during the drag lifecycle, providing additional
                  control over the drag behavior.
                </BulletListItem>

                <HeadingText heading="Summary" />
                <BulletListItem>
                  In this component, the drag functionality creates a tactile
                  interaction where the user can move the element within a
                  defined area, demonstrating how Framer Motion's drag
                  capabilities can be used to enhance the interactivity and user
                  engagement of web elements.
                </BulletListItem>
              </VStackFull>
            }
          >
            <ExampleFour />
          </FramerReanimate>
          {/* path  */}
          <FramerReanimate
            title="path"
            code={`const icon = {
            hidden: {
        opacity: 0,
        pathLength: 0,
        fill: "rgba(0, 100, 100, 0)",
            },
            visible: {
        opacity: 1,
        pathLength: 1,
        fill: "rgba(0, 255, 255, 1)",
            },
          };
        
          return (
            <div className="w-95% h-95% flex justify-center items-center overflow-hidden bg-col-990 border-900-md insetShadowXl rounded-[2vh]">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-50% overflow-visible stroke-cyan-700 stroke-[0.2vh]"
        >
          <motion.path
            d="
              M70,16
              c0,20,-10,30,-20,30
              c10,0,20,10,20,30
              c0,-20,10,-30,20,-30
              c-10,0,-20,-10,-20,-30
              z
              M30,0
              c0,20,-10,30,-20,30
              c10,0,20,10,20,30
              c0,-20,10,-30,20,-30
              c-10,0,-20,-10,-20,-30
              z
              M43,42
              c0,20,-10,30,-20,30
              c10,0,20,10,20,30
              c0,-20,10,-30,20,-30
              c-10,0,-20,-10,-20,-30
              z
        "
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: {
                duration: 2,
                ease: [1, 0, 0.8, 1],
              },
            }}
          />
        </motion.svg>
            </div>
          );`}
            infoTitle="motion.path"
            info={
              <VStackFull align="items-start">
                <BulletListItem>
                  motion.path in Framer Motion is a special component used to
                  animate SVG paths. It allows for the control and animation of
                  path properties like pathLength, stroke, fill, and opacity,
                  among others. This capability makes it incredibly useful for
                  creating complex and visually engaging animations directly
                  within SVG elements.
                </BulletListItem>
                <HeadingText heading="motion.path in this component" />
                <BulletListItem>
                  In this example, motion.path is used to animate an SVG path
                  element. The animation is defined through variants (icon) and
                  involves changes in opacity, path length, and fill color.
                </BulletListItem>
                <BulletListItem highlighted="Opacity: ">
                  The animation transitions the opacity of the path from 0 to 1,
                  making the path gradually appear as the animation progresses.
                </BulletListItem>
                <BulletListItem highlighted="Path Length: ">
                  The pathLength property is animated from 0 to 1. This makes it
                  seem like the path is being drawn progressively. At 0, none of
                  the path is visible, and at 1, the entire path is drawn.{" "}
                </BulletListItem>
                <BulletListItem highlighted="Fill: ">
                  The color of the path fills gradually changes from transparent
                  (rgba(0, 100, 100, 0)) to a solid cyan color (rgba(0, 255,
                  255, 1)), creating a filling effect as the path gets drawn.
                </BulletListItem>
                <HeadingText heading="How motion.path Works " />
                <BulletListItem highlighted="SVG Path Animation: ">
                  motion.path extends the capabilities of SVG path elements,
                  allowing them to be animated using Framer Motion's powerful
                  animation and transition features.{" "}
                </BulletListItem>
                <BulletListItem highlighted="Control and Flexibility: ">
                  By using motion.path, you get fine-grained control over how
                  the path's properties change over time, either in response to
                  user interactions or as part of predefined animations.
                </BulletListItem>
                <HeadingText heading="Transition and Animation Control " />
                <BulletListItem>
                  The transition property in motion.path controls how the
                  animation between variant states occurs. In this component,
                  separate transition configurations are provided for the
                  default properties and the fill color, allowing for different
                  easing and duration settings for different aspects of the
                  animation.{" "}
                </BulletListItem>
                <BulletListItem highlighted="easeInOut">
                  easing is used for most properties, providing a smooth start
                  and end to the animation, while the fill color has a custom
                  easing array to fine-tune its animation effect.
                </BulletListItem>
                <HeadingText heading="Importion aspects of motion.path " />
                <BulletListItem highlighted="Enhanced SVG Animations: ">
                  motion.path uses Framer Motion's animation engine to enhance
                  the capabilities of SVG path animations, going beyond simple
                  CSS animations.{" "}
                </BulletListItem>
                <BulletListItem highlighted="Interactivity and Responsiveness: ">
                  Animations can be tied to user interactions, such as hover or
                  click events, making SVGs more interactive and dynamic.{" "}
                </BulletListItem>
                <BulletListItem highlighted="Performance: ">
                  Framer Motion optimizes the performance of animations,
                  ensuring that they run smoothly even when complex paths are
                  animated.
                </BulletListItem>
                <HeadingText heading="Summary" />
                <BulletListItem>
                  motion.path in Framer Motion provides a flexible way to
                  animate SVG paths, offering detailed control over the
                  animation of path properties and enabling the creation of
                  intricate and dynamic visual effects in web applications. In
                  this component, it is used to craft a detailed path drawing
                  animation that enhances the visual appeal and interactivity of
                  the SVG graphic.
                </BulletListItem>
              </VStackFull>
            }
          >
            {" "}
            <ExampleFive />
          </FramerReanimate>
          {/* keyframes  */}
          <FramerReanimate
            title="keyframes"
            code={`<motion.div
        className="w-[15vh] h-[15vh] bg-500-radial5op50 rounded-[2vh] shadowBroadTight border-970-md"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: 1,
          repeatDelay: 1,
        }}
            />`}
            infoTitle="keyframes"
            info={
              <VStackFull align="items-start">
                <BulletListItem highlighted="">
                  Keyframes in Framer Motion are used to define a sequence of
                  values that an animation should go through over time, allowing
                  for complex and multi-step animations. They are akin to
                  keyframes in traditional animation and CSS animations,
                  specifying the target values at various points during the
                  animation.
                </BulletListItem>
                <HeadingText heading="Usage of Keyframes in this component" />
                <BulletListItem>
                  In this component, keyframes are used to animate multiple
                  properties of a motion.div element over time:
                </BulletListItem>
                <BulletListItem highlighted="Background Color: ">
                  The background property transitions through a sequence of
                  colors, creating a gradient effect that changes over time.{" "}
                </BulletListItem>
                <BulletListItem highlighted="Scale: ">
                  The scale property is animated through a series of values,
                  making the element grow and shrink in a rhythmic pattern.{" "}
                </BulletListItem>
                <BulletListItem highlighted="Rotation: ">
                  The rotate property makes the element turn clockwise and
                  counterclockwise through a set of angles.{" "}
                </BulletListItem>
                <BulletListItem highlighted="Border Radius: ">
                  The borderRadius property changes, making the corners of the
                  element transition from sharp to rounded and back.
                </BulletListItem>
                <HeadingText heading="How Keyframes Work in Framer Motion " />
                <BulletListItem
                  highlighted="Defining the Animation
                  Sequence: "
                >
                  Keyframes are defined as arrays of values that the animated
                  property will transition through during the animation.{" "}
                </BulletListItem>
                <BulletListItem highlighted="Control Over Timing: ">
                  The times array in the transition prop can be used to control
                  the timing of each keyframe, defining what proportion of the
                  animation duration each keyframe should occur at.{" "}
                </BulletListItem>
                <BulletListItem highlighted="Repeating Animations: ">
                  The repeat and repeatDelay properties in the transition object
                  allow the animation to loop a specified number of times, with
                  a delay between repetitions.
                </BulletListItem>
                <HeadingText heading="Additional aspects of keyframes" />
                <BulletListItem highlighted="Ease and Duration: ">
                  The ease and duration properties in the transition object
                  define the pacing and total runtime of the animation,
                  respectively. The ease function applies to the transitions
                  between each keyframe, not just the start and end of the
                  entire animation.{" "}
                </BulletListItem>
                <BulletListItem highlighted="Versatility: ">
                  Keyframes can be used to animate almost any property or
                  attribute in Framer Motion, including colors, sizes,
                  positions, and SVG paths.{" "}
                </BulletListItem>
                <BulletListItem highlighted="Dynamic Animations: ">
                  Unlike static CSS animations, keyframes in Framer Motion can
                  be dynamically updated based on component state or props,
                  making them highly adaptable to user interactions and other
                  runtime conditions.
                </BulletListItem>
                <HeadingText heading="Summary" />
                <BulletListItem highlighted="">
                  Keyframes in Framer Motion offer a powerful way to create
                  detailed and complex animations by defining specific values at
                  multiple points during the animation sequence. In this
                  example, they are used to create a dynamic and engaging
                  animation that cycles through changes in color, size,
                  rotation, and border radius, demonstrating the flexibility and
                  control that keyframes provide in designing interactive and
                  visually compelling animations.
                </BulletListItem>
              </VStackFull>
            }
          >
            {" "}
            <ExampleSix />
          </FramerReanimate>
          {/* motion values  */}
          <FramerReanimate
            title="motion values"
            showReanimate={false}
            code={`const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ffeede 0%, #025373 100%)",
    "linear-gradient(180deg, #F27D72 0%, #45233e 100%)",
    "linear-gradient(180deg, #9C6892 0%, #F2B680 100%)",
  ]);
  const color = useTransform(x, xInput, [
    "rgb(69, 35, 62)",
    "rgb(2, 83, 115)",
    "rgb(156, 104, 146)",
  ]);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);

  return (
    <motion.div className="w-full h-full relative" style={{ background }}>
      <motion.div
        className="bg-100-linear2op25 w-[10vh] h-[10vh] absolute top-1/3 left-1/3 flex justify-center items-center rounded-[2vh] shadowBroadTight border-970-md"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        <svg className="w-80% h-80%" viewBox="0 0 50 50">
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{ translateX: 5, translateY: 5 }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M14,26 L 22,33 L 35,16"
            strokeDasharray="0 1"
            style={{ pathLength: tickPath }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M17,17 L33,33"
            strokeDasharray="0 1"
            style={{ pathLength: crossPathA }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M33,17 L17,33"
            strokeDasharray="0 1"
            style={{ pathLength: crossPathB }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );`}
            infoTitle="motion values"
            info={
              <VStackFull align="items-start">
                <BulletListItem>
                  Motion values in Framer Motion are used to create reactive
                  animations and effects that can respond to state changes, user
                  input, or other dynamic conditions in your application. They
                  provide a way to interpolate values over time or in response
                  to user interactions, such as dragging, scrolling, or
                  hovering.
                </BulletListItem>
                <HeadingText heading="Usage of Motion Values this component" />
                <BulletListItem>
                  Here, motion values are extensively used to create dynamic,
                  data-driven animations:
                </BulletListItem>
                <BulletListItem highlighted="useMotionValue(0): ">
                  This initializes a motion value for x starting at 0. This
                  value can be updated dynamically, and it can drive animations
                  or transformations in the component.
                </BulletListItem>
                <BulletListItem highlighted="useTransform: ">
                  This function creates a new motion value that is the result of
                  transforming another motion value through a function or range
                  of values. For example, here:
                </BulletListItem>
                <NestedBulletListItem highlighted=" background, color, tickPath, crossPathA, and crossPathB ">
                  are derived from the x motion value.
                </NestedBulletListItem>
                <NestedBulletListItem>
                  These derived motion values are used to dynamically update the
                  background gradient, stroke color, and the path lengths of SVG
                  elements based on the x position of the draggable element.
                </NestedBulletListItem>
                <BulletListItem highlighted=" Drag Interaction: ">
                  The drag="x" prop on the inner motion.div allows the element
                  to be dragged along the x-axis. The x motion value is updated
                  based on this interaction, which in turn updates the derived
                  motion values and consequently the visual appearance of the
                  component.
                </BulletListItem>
                <HeadingText heading="How Motion Values Work" />
                <BulletListItem highlighted="Reactivity: ">
                  Motion values are reactive. When their value changes, anything
                  bound to them updates automatically. This makes it easy to
                  create animations that respond to user input or other dynamic
                  conditions.
                </BulletListItem>
                <BulletListItem highlighted="Performance: ">
                  Motion values are optimized for performance. They allow Framer
                  Motion to update animations at the optimal frame rate without
                  causing unnecessary re-renders of the entire React component
                  tree.
                </BulletListItem>
                <BulletListItem highlighted="Integration with Animations: ">
                  Motion values can be integrated with the animation utilities
                  in Framer Motion, enabling smooth transitions between states
                  or along motion paths.
                </BulletListItem>
                <HeadingText heading="General Aspects of Motion Values" />
                <BulletListItem highlighted="Continuous Updates: ">
                  Unlike React state, updating a motion value doesn’t trigger a
                  re-render of the component. Instead, it directly updates the
                  value in the DOM, leading to smoother animations and
                  interactions.
                </BulletListItem>
                <BulletListItem highlighted="Use with animate: ">
                  Motion values can be used as targets for the animate prop of
                  motion components, allowing for complex animations and
                  transitions based on the changing values.
                </BulletListItem>
                <BulletListItem highlighted="Use in Gestures: ">
                  They are particularly useful in gesture-based animations (like
                  dragging, pinching, or scrolling) where the values change
                  rapidly and continuously.
                </BulletListItem>
              </VStackFull>
            }
          >
            {" "}
            <ExampleSeven />
          </FramerReanimate>
          {/* layout 1  */}
          <FramerReanimate
            title="layout 1"
            showReanimate={false}
            code={`
    <Flex className={\`\${isOn ? "bg-col-200" : "bg-col-500"} px-[5vh] py-[7vh] insetShadowXl transition-500 border-900-md\`}>
      <div
        className={\`w-[13vh] h-[7vh] bg-500-radial6op75 flex \${
          isOn === true ? "justify-start" : "justify-end"
        } rounded-[5vh] p-[1vh] cursor-pointer shadowBroadTight border-970-md\`}
        data-isOn={isOn}
        onClick={toggleSwitch}
      >
        <motion.div
          className="h-[5vh] bg-100-radial5op50 w-[5vh] rounded-full shadowBroadTight border-970-md"
          layout
          transition={spring}
        />
      </div>
    </Flex>
  `}
            infoTitle="layout"
            info={
              <VStackFull align="items-start">
                <HeadingText heading="General Use of layout" />
                <BulletListItem highlighted="Automatic Animation: ">
                  When you apply the layout prop to a component, Framer Motion
                  tracks changes to its layout and automatically creates
                  animations for any changes detected between renders. This
                  means that if the component's dimensions, position, or
                  visibility change, Framer Motion will calculate the necessary
                  animation to transition from the old state to the new state
                  smoothly.
                </BulletListItem>
                <BulletListItem highlighted="Shared Layout Animation: ">
                  By using the layout prop on multiple components with the same
                  layoutId, you can animate layout changes between these
                  components, even if they move between different parts of the
                  DOM.
                </BulletListItem>
                <HeadingText heading="In the Context of This Example" />
                <BulletListItem>
                  In this component, the layout prop is used on the motion.div
                  that represents the toggle button inside the switch. Here’s
                  how it functions: When the isOn state changes (the switch is
                  toggled), the position of the button (motion.div) changes
                  within its parent div.
                </BulletListItem>
                <BulletListItem>
                  The layout prop on the motion.div tells Framer Motion to
                  animate this position change. So, instead of the button just
                  jumping from one side to the other, it moves smoothly,
                  creating a more natural switch effect.
                </BulletListItem>
                <BulletListItem>
                  The transition prop defines how this animation behaves. In
                  this case, a spring animation is used, which gives a bouncy
                  and natural feel to the movement of the toggle button.
                </BulletListItem>
                <HeadingText heading="General Aspects of layout" />
                <BulletListItem highlighted="Performance: ">
                  While the layout animation is powerful, it's important to use
                  it judiciously as it can be performance-intensive, especially
                  with complex components or large lists.
                </BulletListItem>
                <BulletListItem highlighted="Nested Animations: ">
                  If you have nested elements with layout, their animations will
                  be coordinated. This can lead to complex and delightful
                  animations but can also introduce complexity in managing these
                  animations.
                </BulletListItem>
                <BulletListItem highlighted="Optimization: ">
                  Sometimes, you might need to optimize animations by disabling
                  layout animations on certain components (using layout={false})
                  or tweaking the transition settings to achieve the desired
                  performance.
                </BulletListItem>
                <BulletListItem highlighted="Orchestration: ">
                  You can orchestrate complex animations by combining the layout
                  prop with other animation features in Framer Motion, such as
                  variants and the AnimatePresence component, to control the
                  sequence and timing of animations.
                </BulletListItem>
              </VStackFull>
            }
          >
            {" "}
            <ExampleEight />
          </FramerReanimate>
          {/* layout 2  */}
          <FramerReanimate
            title="layout 2"
            showReanimate={false}
            code={`
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <motion.div
        layout
        data-isOpen={isOpen}
        initial={{ borderRadius: 50 }}
        className={\`bg-col-200 w-[10vh] h-[10vh] flex justify-center items-center shadowBroadTight border-900-md \${
          isOpen === true ? "w-80% h-80%" : "w-50% h-50%"
        }\`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div
          layout
          className="w-[4vh] h-[4vh] bg-col-800 rounded-full shadowBroadTight border-900-md"
        />
      </motion.div>
    );
  `}
          >
            {" "}
            <ExampleNine />
          </FramerReanimate>
          {/* layoutId 1  */}
          <FramerReanimate
            title="layoutId 1"
            code={`interface Item {
      id: number;
      icon: string;
      label: string;
    }
    
    const allItems: Item[] = [
      { id: 0, icon: "💜", label: "Heart" },
      { id: 1, icon: "🦄", label: "Uni" },
      { id: 2, icon: "🔥", label: "Fire" },
      { id: 3, icon: "👽", label: "Alien" },
    ];
    
    const [selectedTab, setSelectedTab] = useState<Item>(allItems[0]);
    
    return (
      <VStackFull className="w-full h-full overflow-hidden">
        <main className="flex-1 flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: -50, x: -50, opacity: 0 }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              exit={{ y: 50, x: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-[20vh]"
            >
              {selectedTab ? selectedTab.icon : "😋"}
            </motion.div>
          </AnimatePresence>
        </main>
        <nav className="w-full">
          <ul className={\`flex justify-around bg-col-980\`}>
            {allItems.map((item) => (
              <li
                key={item.id}
                className={\`cursor-pointer w-25% py-[0.5vh] relative flex justify-center items-center font-semibold \${
                  selectedTab.id === item.id ? "text-col-900" : "text-col-100"
                }\`}
                onClick={() => setSelectedTab(item)}
              >
                {/* Animated background */}
                {selectedTab.id === item.id && (
                  <motion.div
                    layoutId="active-background"
                    className="absolute inset-0 bg-col-200"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                {/* Tab content */}
                <div className="z-10">
                  {item.icon} {item.label}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </VStackFull>
    );
  `}
          >
            {" "}
            <ExampleTen />
          </FramerReanimate>
          {/* layoutId 2  */}
          <FramerReanimate
            title="layoutId 2"
            code={`interface Item {
  id: number;
  text: string;
}

export function ItemComponent({
  item,
  isSelected,
  onClick,
}: {
  item: Item;
  isSelected: boolean;
  onClick: () => void;
}) {
  const containerVariants = {
    visible: {
      borderRadius: "2vh",
      transition: {
        type: "spring",
        stiffness: 700,
        damping: 30,
      },
    },
  };

  const detailVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      layout
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      onClick={onClick}
      className={\`p-[1vh] cursor-pointer w-full flex flex-col shadowBroadTight border-900-md \${
        isSelected ? "bg-col-300 h-45%" : "bg-col-200 h-23%"
      }\`}
    >
      <Text
        className={\`\${
          isSelected ? "font-bold text-[2.3vh]" : "font-semibold text-[2vh]"
        }\`}
      >
        {item.text}
      </Text>
      {isSelected && (
        <CenterFull className="h-full">
          <motion.div
            layoutId={\`expandable-\${item.id}\`}
            variants={detailVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden bg-col-960 text-col-100 p-[1vh] w-full textShadow shadow-shadowBroadTight border-900-md rounded-[2vh] h-fit"
          >
            Detailed view of {item.text}
          </motion.div>
        </CenterFull>
      )}
    </motion.div>
  );
}

export function ExampleEleven() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const items: Item[] = [
    { id: 1, text: "Item 1" },
    { id: 2, text: "Item 2" },
    { id: 3, text: "Item 3" },
  ];

  return (
    <VStackFull className="h-full p-[1vh]">
      {items.map((item) => (
        <ItemComponent
          key={item.id}
          item={item}
          isSelected={selectedId === item.id}
          onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
        />
      ))}
    </VStackFull>
  );
}`}
            infoTitle="LayoutId"
            info={
              <VStackFull className="w-full h-fit" align="items-start">
                <HeadingText heading="Purpose of layoutId" />
                <BulletListItem highlighted="Animate Layout Changes:">
                  layoutId is used by Framer Motion to identify and animate
                  layout changes of components across different renders. When
                  two or more components in a React tree have the same layoutId,
                  Framer Motion understands that these components are linked and
                  should animate between them as their layout changes.
                </BulletListItem>{" "}
                <BulletListItem highlighted="Shared Element Transition: ">
                  This is especially useful for shared element transitions where
                  an element moves from one part of the application to another
                  and you want to animate this transition smoothly.
                </BulletListItem>{" "}
                <HeadingText heading="How layoutId is Used in Your Component" />
                <BulletListItem>
                  In the ItemComponent, layoutId is applied to a motion.div
                  inside the component. This motion.div becomes the target for
                  layout animations when the component's state changes (e.g.,
                  when an item is selected).
                </BulletListItem>{" "}
                <BulletListItem>
                  When an item is selected (isSelected is true), the motion.div
                  with the specific layoutId (expandable-{"itemId"}) appears. If
                  the item is deselected, the component with that layoutId will
                  disappear or change its layout.
                </BulletListItem>
                <BulletListItem>
                  Framer Motion automatically calculates the animation needed to
                  transition the motion.div from its initial layout to its final
                  layout (and vice versa) when the item is selected or
                  deselected.
                </BulletListItem>
                <HeadingText heading="Detailed Flow" />
                <BulletListItem highlighted="Initial Render: ">
                  When ItemComponent is first rendered, the motion.div with
                  layoutId (expandable-{"itemId"}) is either rendered in its
                  collapsed state or not rendered at all, depending on whether
                  the item is selected.
                </BulletListItem>
                <BulletListItem highlighted="Selection Change: ">
                  When a user clicks on an item, the onClick handler updates the
                  state in the parent component, which then passes down new
                  props to ItemComponent, triggering a re-render.
                </BulletListItem>
                <BulletListItem highlighted="Animation Trigger: ">
                  Upon re-render, if the state has changed (an item is selected
                  or deselected), Framer Motion finds the elements with matching
                  layoutIds and animates the transition between their initial
                  and final states. In this case, it animates the expansion or
                  collapse of the detailed view inside ItemComponent.
                </BulletListItem>
                <BulletListItem highlighted="Unique layoutId: ">
                  By using (expandable-{"itemId"}) as the layoutId, each item
                  gets a unique identifier, ensuring that Framer Motion
                  correctly associates the layout changes with the specific item
                  that has been selected or deselected.
                </BulletListItem>
                <BulletListItem>
                  By utilizing layoutId in this way, Framer Motion enables the
                  creation of complex animations based on changes in the
                  component layout without manually managing the animation
                  details. The library takes care of interpolating the styles
                  and layout properties needed to transition between the
                  different states smoothly.
                </BulletListItem>
              </VStackFull>
            }
          >
            {" "}
            <ExampleEleven />
          </FramerReanimate>
          <FramerReanimate title="twelve" code={``}>
            {" "}
            <ExampleTwelve />
          </FramerReanimate>
          <FramerReanimate title="thirteen" code={``}>
            {" "}
            <ExampleThirteen />
          </FramerReanimate>
          <FramerReanimate title="fourteen" code={``}>
            {" "}
            <ExampleFourteen />
          </FramerReanimate>
          <FramerReanimate title="fifteen" code={``}>
            {" "}
            <ExampleFifteen />
          </FramerReanimate>
          <FramerReanimate title="sixteen" code={``}>
            {" "}
            <ExampleSixteen />
          </FramerReanimate>
        </Wrap>
        <InteractiveKeyFrames />
      </VStackFull>
    </FlexFull>
  );
}
