import { bind } from "astal";
import AstalWp from "gi://AstalWp";

const wp = AstalWp.get_default()!;
const { defaultMicrophone, defaultSpeaker } = wp.audio;

export function VolumeInput() {
  return (
    <box
      className="status-item privacy-status-item"
      visible={bind(defaultMicrophone, "state").as(
        (state) => state === AstalWp.NodeState.RUNNING,
      )}
    >
      <icon icon={bind(defaultMicrophone, "volumeIcon")} />
    </box>
  );
}

export function VolumeOutput() {
  return (
    <box
      className="status-item"
      visible={bind(defaultSpeaker, "device").as(Boolean)}
    >
      <icon icon={bind(defaultSpeaker, "volumeIcon")} />
    </box>
  );
}
