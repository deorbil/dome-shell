import { bind } from "astal";
import AstalWp from "gi://AstalWp";

const wp = AstalWp.get_default()!;
const { defaultSpeaker } = wp.audio;

export function VolumeOutput() {
  return (
    <button visible={bind(defaultSpeaker, "device").as(Boolean)}>
      <icon icon={bind(defaultSpeaker, "volumeIcon")} />
    </button>
  );
}
