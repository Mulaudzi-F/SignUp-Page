import React from "react";

/**
 * Props:
 * - disabled: boolean
 * - onClick: () => ()
 */
export default function StartButton(props) {
  return (
    <button
      className="start-button text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      disabled={props.disabled}
      onClick={props.onClick}
    >
      Join CatchUp Room
    </button>
  );
}
