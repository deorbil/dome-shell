import { bind, Variable } from "astal";
import { Astal, Gdk, Gtk } from "astal/gtk3";
import AstalTray from "gi://AstalTray";

const tray = AstalTray.get_default();

function TrayItem({ item }: { item: AstalTray.TrayItem }) {
  const menu = Variable.derive(
    [bind(item, "menuModel"), bind(item, "actionGroup")],
    (menuModel, actionGroup) => {
      const menu = Gtk.Menu.new_from_model(menuModel);
      menu.insert_action_group("dbusmenu", actionGroup);
      return {
        activate() {
          item.activate(0, 0);
        },
        show(widget: Gtk.Widget) {
          menu.popup_at_widget(
            widget,
            Gdk.Gravity.SOUTH,
            Gdk.Gravity.NORTH,
            null,
          );
        },
      };
    },
  );

  return (
    <button
      onClickRelease={(self, e) => {
        if (e.button === Astal.MouseButton.PRIMARY) {
          menu.get().activate();
        } else if (e.button === Astal.MouseButton.SECONDARY) {
          self.set_state(Gtk.StateType.NORMAL);
          menu.get().show(self);
        }
      }}
    >
      <icon gicon={bind(item, "gicon")} />
    </button>
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
