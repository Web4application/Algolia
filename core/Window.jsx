import React, { useState } from "react";
import { useWindows } from "./WindowProvider";

export default function Window({ data }) {
  const { focusWindow, closeWindow, updatePosition } = useWindows();
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = () => {
    focusWindow(data.id);
    setDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    updatePosition(data.id, e.clientX - 100, e.clientY - 20);
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        position: "absolute",
        top: data.y,
        left: data.x,
        width: data.width,
        height: data.height,
        background: "#111",
        color: "#fff",
        zIndex: data.zIndex,
        border: data.isFocused ? "2px solid #4ade80" : "1px solid #555",
      }}
    >
      {/* Title Bar */}
      <div
        onMouseDown={handleMouseDown}
        style={{
          background: "#222",
          padding: "5px",
          cursor: "move",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>{data.title}</span>
        <button onClick={() => closeWindow(data.id)}>X</button>
      </div>

      {/* Content */}
      <div style={{ padding: "10px" }}>
        {data.content}
        <div
  onMouseDown={handleResizeMouseDown}
  style={{
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "10px",
    height: "10px",
    cursor: "nwse-resize",
    background: "#4ade80",
  }}
/>
      </div>
    </div>
  );
}
const [resizing, setResizing] = useState(false);

const handleResizeMouseDown = () => {
  setResizing(true);
};

const handleMouseMove = (e) => {
  if (dragging) {
    updatePosition(data.id, e.clientX - 100, e.clientY - 20);
  }

  if (resizing) {
    updateSize(data.id, e.clientX - data.x, e.clientY - data.y);
  }
};

const handleMouseUp = () => {
  setDragging(false);
  setResizing(false);
};
