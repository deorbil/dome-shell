import { bind, Variable } from "astal";
import { Astal, Gdk, Gtk } from "astal/gtk3";
import AstalTray from "gi://AstalTray";

const tray = AstalTray.get_default();

function TrayItem({ item }: { item: AstalTray.TrayItem }) {
  let menu: Gtk.Menu;

  const menuModel = Variable.derive(
    [bind(item, "menuModel"), bind(item, "actionGroup")],
    (menuModel, actionGroup) => {
      menu?.destroy();
      menu = Gtk.Menu.new_from_model(menuModel);
      menu.insert_action_group("dbusmenu", actionGroup);
      menu.widthRequest = 220;
      return menu;
    },
  );

  function activate() {
    item.activate(0, 0);
  }

  function show(self: Gtk.Widget) {
    menu?.popup_at_widget(self, Gdk.Gravity.SOUTH, Gdk.Gravity.NORTH, null);
  }

  return (
    <button
      setup={(self) => {
        self.hook(
          menuModel,
          (function update() {
            self.hook(menuModel.get(), "hide", () => {
              self.set_state(Gtk.StateType.NORMAL);
            });
            return update;
          })(),
        );
      }}
      onClickRelease={(self, e) => {
        if (e.button === Astal.MouseButton.PRIMARY) {
          activate();
        } else if (e.button === Astal.MouseButton.SECONDARY) {
          show(self);
        }
      }}
      onDestroy={() => {
        menu?.destroy();
        menuModel.drop();
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
