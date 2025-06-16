import { VolumeInput, VolumeOutput } from "./volume";
import { Battery } from "./battery";
import { Bluetooth } from "./bluetooth";
import { Network } from "./network";

export function Status() {
  return (
    <button className="status">
      <box>
        <VolumeInput />
        <Network />
        <Bluetooth />
        <VolumeOutput />
        <Battery />
      </box>
    </button>
  );
}
