import { GLib, Variable } from "astal";

const dateTime = Variable(GLib.DateTime.new_now_local()).poll(1000, () =>
  GLib.DateTime.new_now_local(),
);

export function Clock() {
  return (
    <button className="clock">
      {dateTime((dateTime) => (
        <box spacing={8}>
          <label>{dateTime.format("%b %d")}</label>
          <label>{dateTime.format("%I:%M %p")}</label>
        </box>
      ))}
    </button>
  );
}
