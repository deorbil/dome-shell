import { bind } from "astal";
import AstalWp from "gi://AstalWp";

const wp = AstalWp.get_default()!;
const speaker = wp.audio.defaultSpeaker;

export function Audio() {
  return (
    <button visible={bind(speaker, "device").as(Boolean)}>
      <icon icon={bind(speaker, "volumeIcon")} />
    </button>
  );
}
