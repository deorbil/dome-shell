import { Bluetooth } from "./bluetooth";
import { Network } from "./network";
import { Power } from "./power";
import { VolumeInput, VolumeOutput } from "./volume";

export function Status() {
  return (
    <button className="status">
      <box spacing={12}>
        <VolumeInput />
        <Network />
        <Bluetooth />
        <VolumeOutput />
        <Power />
      </box>
    </button>
  );
}
