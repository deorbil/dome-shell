import { bind } from "astal";
import AstalTray from "gi://AstalTray";

const tray = AstalTray.get_default();

export function Tray() {
  return (
    <box className="tray">
      {bind(tray, "items").as((items) =>
        items.map((item) => (
          <button>
            <icon gicon={bind(item, "gicon")} />
          </button>
        )),
      )}
    </box>
  );
}
