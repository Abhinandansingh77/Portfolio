import { useRef } from "react";
import keyboardImg from "../Assets/Keyboard.webp";
import { usePointerFollow } from "./usePointerFollow.js";

// How far the keyboard leans toward the pointer: degrees of tilt, pixels of
// drift, and how quickly it catches up (share of the gap closed per frame).
const KB_TILT_X = 7;
const KB_TILT_Y = 9;
const KB_TWIST = 1.5;
const KB_DRIFT_X = 14;
const KB_DRIFT_Y = 10;
const KB_FOLLOW = 0.07;

function tiltKeyboard(node, x, y) {
  node.style.transform =
    `translate3d(${x * KB_DRIFT_X}px, ${y * KB_DRIFT_Y}px, 0) ` +
    `rotateX(${-y * KB_TILT_X}deg) rotateY(${x * KB_TILT_Y}deg) rotateZ(${x * KB_TWIST}deg)`;
}

// The hero keyboard. It sits between the two headline lines, over the
// second, and leans a little toward the mouse, as if tipped on a desk: a 3D
// tilt plus a few pixels of drift, eased so fast moves settle smoothly.
export function HeroKeyboard() {
  const tiltRef = useRef(null);
  usePointerFollow(tiltRef, tiltKeyboard, KB_FOLLOW);

  return (
    <span className="hx-kb" aria-hidden="true">
      <span ref={tiltRef} className="hx-kb-tilt">
        <img className="hx-kb-img" src={keyboardImg} alt="" fetchpriority="high" decoding="async" />
      </span>
    </span>
  );
}
