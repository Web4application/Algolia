import { useWindows } from "./core/window-manager/WindowProvider";
import Window from "./core/window-manager/Window";

function Desktop() {
  const { windows } = useWindows();

  return (
    <>
      {windows.map((win) => (
        <Window key={win.id} data={win} />
      ))}
    </>
  );
}
