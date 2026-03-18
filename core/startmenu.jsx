import { useWindows } from "../core/window-manager/WindowProvider";

export default function StartMenu() {
  const { createWindow } = useWindows();

  return (
    <div style={{
      position: "fixed",
      bottom: "40px",
      left: "10px",
      background: "#222",
      padding: "10px",
      borderRadius: "10px"
    }}>
      <button onClick={() =>
        createWindow({
          title: "Notes",
          content: <div>Notes App</div>
        })
      }>
        Notes
      </button>

      <button onClick={() =>
        createWindow({
          title: "Browser",
          content: <iframe src="https://google.com" />
        })
      }>
        Browser
      </button>
    </div>
  );
}
