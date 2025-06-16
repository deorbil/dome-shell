import { bind } from "astal";
import AstalBattery from "gi://AstalBattery";

const battery = AstalBattery.get_default();

export function Battery() {
  return (
    <box className="status-item" visible={bind(battery, "isPresent")}>
      <icon icon={bind(battery, "batteryIconName")} />
    </box>
  );
}
