import { bind } from "astal";
import { Gtk } from "astal/gtk3";
import AstalHyprland from "gi://AstalHyprland";
import { clamp, lerp } from "lib/math";
import { Tween } from "lib/tween";

const hyprland = AstalHyprland.get_default();

const focusedWorkspace = Tween.derive(
  1000 / 60,
  10,
  bind(hyprland, "focusedWorkspace"),
  (workspace) => workspace.id,
);

export function Workspace({ id }: { id: number }) {
  const expansion = bind(focusedWorkspace).as((focusedWorkspace) => {
    const distance = Math.abs(id - focusedWorkspace);
    const expansion = clamp(1 - distance, 0, 1);
    return expansion;
  });
  return (
    <box className="workspace" valign={Gtk.Align.CENTER}>
      <box
        setup={(self) => {
          self.hook(
            expansion,
            (function update() {
              self.widthRequest = Math.round(
                lerp(1, 2.75, expansion.get()) * 8,
              );
              return update;
            })(),
          );
        }}
      >
        <button
          setup={(self) => {
            self.hook(
              expansion,
              (function update() {
                self.opacity = lerp(0.5, 1, expansion.get());
                self.widthRequest = Math.round(
                  lerp(0.75, 1, expansion.get()) *
                    lerp(1, 2.75, expansion.get()) *
                    8,
                );
                self.heightRequest = lerp(0.75, 1, expansion.get()) * 8;
                return update;
              })(),
            );
          }}
          valign={Gtk.Align.CENTER}
          halign={Gtk.Align.CENTER}
        ></button>
      </box>
    </box>
  );
}

export function Workspaces() {
  return (
    <button className="workspaces">
      <box>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => (
          <Workspace id={id} />
        ))}
      </box>
    </button>
  );
}
