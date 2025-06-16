import { bind } from "astal";
import AstalBluetooth from "gi://AstalBluetooth";

const bluetooth = AstalBluetooth.get_default();

export function Bluetooth() {
  return (
    <box className="status-item" visible={bind(bluetooth, "isConnected")}>
      <icon icon="bluetooth-active-symbolic" />
    </box>
  );
}
