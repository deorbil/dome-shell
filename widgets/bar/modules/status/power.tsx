import { bind, Variable } from "astal";
import AstalBattery from "gi://AstalBattery";

const battery = AstalBattery.get_default();

export function Power() {
  const iconName = Variable.derive(
    [bind(battery, "isPresent"), bind(battery, "batteryIconName")],
    (isPresent, batteryIconName) =>
      isPresent ? batteryIconName : "system-shutdown-symbolic",
  );
  return (
    <box className="status-item">
      <icon icon={iconName()} />
    </box>
  );
}
