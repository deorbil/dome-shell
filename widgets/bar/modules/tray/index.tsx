import { bind } from "astal";
import { Astal, Gdk, Gtk } from "astal/gtk3";
import AstalTray from "gi://AstalTray";

const tray = AstalTray.get_default();

function TrayItem({ item }: { item: AstalTray.TrayItem }) {
  function activate() {
    item.activate(0, 0);
  }

  function show(self: Gtk.Widget, menu: Gtk.Menu | null) {
    menu?.popup_at_widget(self, Gdk.Gravity.SOUTH, Gdk.Gravity.NORTH, null);
  }

  return (
    <menubutton
      usePopover={false}
      menuModel={bind(item, "menuModel")}
      actionGroup={bind(item, "actionGroup").as((actionGroup) => [
        "dbusmenu",
        actionGroup,
      ])}
      onButtonReleaseEvent={(self, event) => {
        const [_, button] = event.get_button();
        if (button === Astal.MouseButton.PRIMARY) {
          activate();
        } else if (button === Astal.MouseButton.SECONDARY) {
          show(self, self.get_popup());
        }
        return true;
      }}
    >
      <icon gicon={bind(item, "gicon")} />
    </menubutton>
  );
}

export function Tray() {
  return (
    <box className="tray">
      {bind(tray, "items").as((items) =>
        items.map((item) => <TrayItem item={item} />),
      )}
    </box>
  );
}
