import { useState } from "react";

let idCounter = 0;

export default function useWindowManager() {
  const [windows, setWindows] = useState([]);

  const createWindow = (config) => {
    const id = idCounter++;
    setWindows((prev) => [
      ...prev,
      {
        id,
        title: config.title || "App",
        x: 100,
        y: 100,
        width: 400,
        height: 300,
        zIndex: prev.length + 1,
        isFocused: true,
        content: config.content,
      },
    ]);
  };

  const focusWindow = (id) => {
    setWindows((prev) =>
      prev.map((w) => ({
        ...w,
        isFocused: w.id === id,
        zIndex: w.id === id ? Math.max(...prev.map(p => p.zIndex)) + 1 : w.zIndex,
      }))
    );
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const updatePosition = (id, x, y) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, x, y } : w))
    );
  };

  return {
    windows,
    createWindow,
    focusWindow,
    closeWindow,
    updatePosition,
  };
}
const updateSize = (id, width, height) => {
  setWindows((prev) =>
    prev.map((w) =>
      w.id === id ? { ...w, width, height } : w
    )
  );
};
