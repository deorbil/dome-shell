import { App, Astal, Gtk } from "astal/gtk3";
import { Clock, Status, Tray, Workspaces } from "./modules";
import { Monitor } from "lib/monitor";

export function Bar({ monitor }: { monitor: Monitor }) {
  const { TOP, LEFT, RIGHT } = Astal.WindowAnchor;
  return (
    <window
      name={`bar-${monitor.name}`}
      namespace="bar"
      gdkmonitor={monitor.gdkmonitor}
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
          <Tray />
          <Status />
        </box>
      </centerbox>
    </window>
  );
}
