import { Audio } from "./audio";
import { Battery } from "./battery";
import { Bluetooth } from "./bluetooth";
import { Network } from "./network";

export function Status() {
  return (
    <button className="status">
      <box>
        <Network />
        <Bluetooth />
        <Audio />
        <Battery />
      </box>
    </button>
  );
}
