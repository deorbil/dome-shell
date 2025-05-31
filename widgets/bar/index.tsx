import { App, Astal, Gdk } from "astal/gtk3";

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
      <centerbox className="bar"></centerbox>
    </window>
  );
}
