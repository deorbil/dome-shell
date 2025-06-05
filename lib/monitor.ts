import { App, Gdk, Gtk } from "astal/gtk3";

const display = Gdk.Display.get_default()!;
const screen = display.get_default_screen();

export interface Monitor {
  id: number;
  name: string;
  gdkmonitor: Gdk.Monitor;
}

export namespace Monitor {
  export function get(gdkmonitor: Gdk.Monitor): Monitor {
    const id = App.get_monitors().indexOf(gdkmonitor);
    const name = screen.get_monitor_plug_name(id)!;
    return { id, name, gdkmonitor };
  }

  export function map(fn: (gdkmonitor: Monitor) => Gtk.Widget) {
    const map = new Map<Gdk.Monitor, Gtk.Widget>();

    App.get_monitors().forEach((gdkmonitor) => {
      const monitor = get(gdkmonitor);
      map.set(gdkmonitor, fn(monitor));
    });

    App.connect("monitor-added", (_, gdkmonitor) => {
      const monitor = get(gdkmonitor);
      map.set(gdkmonitor, fn(monitor));
    });

    App.connect("monitor-removed", (_, gdkmonitor) => {
      map.get(gdkmonitor)?.destroy();
      map.delete(gdkmonitor);
    });
  }
}
