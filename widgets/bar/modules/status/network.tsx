import { bind, Variable } from "astal";
import AstalNetwork from "gi://AstalNetwork";

const network = AstalNetwork.get_default();
const { wifi, wired } = network;

export function Network() {
  const visible = Variable.derive(
    [bind(network, "primary"), bind(wifi, "activeConnection").as(Boolean)],
    (primary, activeConnection) =>
      primary === AstalNetwork.Primary.WIFI
        ? activeConnection
        : primary === AstalNetwork.Primary.WIRED
          ? true
          : false,
  );

  const iconName = Variable.derive(
    [bind(network, "primary"), bind(wifi, "iconName"), bind(wired, "iconName")],
    (primary, wifiIconName, wiredIconName) =>
      primary === AstalNetwork.Primary.WIFI
        ? wifiIconName
        : primary === AstalNetwork.Primary.WIRED
          ? wiredIconName
          : undefined,
  );

  return (
    <button
      visible={visible()}
      onDestroy={() => {
        visible.drop();
        iconName.drop();
      }}
    >
      <icon icon={iconName()} />
    </button>
  );
}
