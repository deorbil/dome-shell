import { bind } from "astal";
import AstalNetwork from "gi://AstalNetwork";

const network = AstalNetwork.get_default();
const wifi = network.wifi;

export function Network() {
  return (
    <button visible={bind(wifi, "activeConnection").as(Boolean)}>
      <icon icon={bind(wifi, "iconName")} />
    </button>
  );
}
