import { bind } from "astal";
import AstalBluetooth from "gi://AstalBluetooth";

const bluetooth = AstalBluetooth.get_default();

export function Bluetooth() {
  return (
    <button visible={bind(bluetooth, "isConnected")}>
      <icon icon="bluetooth-active-symbolic" />
    </button>
  );
}
