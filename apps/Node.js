import { useState, useEffect } from "react";
import { useWindows } from "../core/window-manager/WindowProvider";

export default function CommandBar() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { createWindow } = useWindows();

  useEffect(() => {
    const handler = (e) => {
      if (e.metaKey && e.key === "k") {
        setOpen(prev => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const runCommand = () => {
    if (input.includes("open notes")) {
      createWindow({ title: "Notes", content: <div>Notes</div> });
    }

    if (input.includes("open browser")) {
      createWindow({
        title: "Browser",
        content: <iframe src="https://google.com" />
      });
    }

    setInput("");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
      background: "#111",
      padding: "20px",
      borderRadius: "10px"
    }}>
      <input
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && runCommand()}
        placeholder="Type a command..."
        style={{ width: "300px", padding: "10px" }}
      />
    </div>
  );
}
