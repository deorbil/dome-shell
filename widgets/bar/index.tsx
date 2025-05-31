import { App, Astal, Gdk, Gtk } from "astal/gtk3";
import {
  Audio,
  Battery,
  Bluetooth,
  Clock,
  Network,
  Workspaces,
} from "./modules";

export function Bar(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor;
  return (
    <window
      name="bar"
      namespace="bar"
      gdkmonitor={gdkmonitor}
      anchor={TOP | LEFT | RIGHT}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      application={App}
    >
      <centerbox className="bar">
        <box>
          <Workspaces />
        </box>
        <box halign={Gtk.Align.CENTER}>
          <Clock />
        </box>
        <box halign={Gtk.Align.END}>
          <button className="status">
            <box>
              <Network />
              <Bluetooth />
              <Audio />
              <Battery />
            </box>
          </button>
        </box>
      </centerbox>
    </window>
  );
}
